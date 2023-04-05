//   发布订阅 观察者模式   被观察者
// https://zhuanlan.zhihu.com/p/75454363
// Watcher对象和Observer对象之间的纽带，每一个Observer都有一个Dep实例,用来存储订阅者Watcher
class Dep{
    constructor(){
        this.subs=[]//存放所有的watcher
    }
    // 订阅
    addSub(watcher){
        console.log('监听了ssss');
        //添加watcher
      this.subs.push(watcher)

    }
    // 发布
    notify(){
       this.subs.forEach(watcher=>{
           watcher.update()
       })
    }
}
// 订阅者,将模板和Observer对象结果在一起生成Watcher实例，Watcher是订阅者中的订阅者
class Watcher{
    constructor(vm,expr,cb){
        this.vm=vm
        this.expr=expr
        this.cb=cb
        // 默认先存放一个老值
        this.oldValue=this.get()
    }
    get(){
        Dep.target=this;//先把自己放在this上,this是一个watcher对象
        let value=CompileUtil.getVal(this.vm,this.expr)//取值
        console.log('watcher的get方法');
        Dep.target=null//不取消任何值都是重新
        return value
    }
    update(){
        // 更新操作,数据变化后，会调用观察者的update方法
        let newVal=CompileUtil.getVal(this.vm,this.expr)
        console.log('watcher的update方法');
        if(newVal!==this.oldValue){
            this.cb(newVal)
        }
    }
}
// vm.$watch(vm,'school',(newVal)=>{

// })
// vue中的数据对象在初始化过程中转化为Observer对象
class Observer{//实现数据劫持
constructor(data){
    console.log('data',data);
    this.observe(data)
}
observe(data){
    if(data&&  typeof data === 'object'){
// 如果是对象
for (let key in data){
    this.defineReactive(data,key,data[key])
}
    }
}
defineReactive(obj,key,value){
    // 如果value是对象再调用
    this.observe(value)
    let dep=new Dep()//给每一个属性 都加上一个具有发布订阅的功能
     Object.defineProperty(obj,key,{
         get(){
             console.log('fffff',Dep.target);
            // 创建watcher时，会取到对应的内容，并且把watcher放到了全局上
             Dep.target&&dep.subs.push(Dep.target)
             return value
         },
         set:(newVal)=>{
               if(newVal!==value){
                // 如果新值是对象
                   this.observe(newVal)
                   value=newVal
                   dep.notify()
               }               
         }
     })
}
  }
  // 基类 调度
  // 编译类
class Compiler{
constructor(el,vm){
    // 判断el属性是不是一个元素，如果不是元素就通过原生的js获取
    this.el=this.isElementNode(el)?el:document.querySelector(el)
     console.log('el',this.el);
    //  把当前节点中的元素  获取到 放入到内存中，此时页面就没有dom元素了，存到内存中去了
    this.vm=vm;
    let fragment=this.node2fragment(this.el)
    // 把节点中的内容进行替换
    // 编译模板，用数据编译
    this.compile(fragment)
    // 把内容塞到页面
    this.el.appendChild(fragment)
}
// 用来编译内存中的节点
compile(node){
     let childNodes=node.childNodes;
    //  childNodes是一个伪数组
     [...childNodes].forEach(child => {
        if(this.isElementNode(child)){
        // 如果当前是元素节点  元素
        this.compileElement(child)
        // 如果是元素的话,需要把自己的传进行 再去遍历子节点
        this.compile(child)
        }else{
        // 如果不是元素节点  文本
        this.compileText(child)
      
        }
     });
}
// 编译元素里面的内容方法
compileElement(node){
    let attaributes=node.attributes;
    [...attaributes].forEach(attr=>{//text="text",v-model="school.name"
        let {name,value:expr}=attr
        // 判断是不是指令
        if(this.isDirective(name)){
             let [,directive]=name.split('-')
            //  需要调用不同的指令来处理
             CompileUtil[directive](node,expr,this.vm)
        }
    })           
}
  // 判断是不是指令
isDirective(name){
  return name.startsWith('v-')
}
// 编译文本里面的内容方法
compileText(node){//判断当前文本节点中是否包含{{}}
        let content=node.textContent
        if(/\{\{(.+?)\}\}/.test(content)){
            console.log('content',content); 
            CompileUtil['text'](node,content,this.vm)
        }
}
// 把节点移动到内存中,重置和回流
node2fragment(node){
    // 创建一个文档碎片
  let fragment=document.createDocumentFragment();
  let firstChild=null;
  while(firstChild=node.firstChild){
    fragment.appendChild(firstChild)
  }
  return fragment
}
    //判断是不是元素节点
isElementNode(node){
     return node.nodeType===1
    }
}
// 公共的编译方法
CompileUtil={
    getVal(vm,expr){//vm.$data
        console.log('我是expr',expr);
    return expr.split('.').reduce((data,current)=>{
        console.log(' data[current]', data[current]);
            return data[current]      
        },vm.$data)
       
    },
    setVal(vm,expr,value){//vm.$data 
     expr.split('.').reduce((data,current,index,arr)=>{
            if(index===arr.length-1){
              return  data[current] = value
            }
            return data[current]      
        },vm.$data)
    },
    // 解析v-model指令
    model(node,expr,vm){//node是节点，expr是表达式，vm是当前实例
    let fn=this.updater['modelUpdater']
    // 给输入框赋予value属性
    new Watcher(vm,expr,(newVal)=>{//给输入框加一个观察者，如果稍后数据更新了会触发此方法，会拿新值
        fn(node,newVal)
    })
    node.addEventListener('input',(e)=>{
        let value = e.target.value;//获取用户输入的内容
        this.setVal(vm,expr,value)
    })
     let value=this.getVal(vm,expr)
     fn(node,value)
    },
    html(){
      
    },
    // 遍历表达式 将内容重新替换成一个完整的内容
   getContent(vm,expr){
   return  expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
         return this.getVal(vm,args[1])
    })
   },
    text(node,expr,vm){//expr=>{{a}} {{b}}
        let fn=this.updater['textUpdater']
        let content=expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            new Watcher(vm,args[1],(newVal)=>{//给输入框加一个观察者，如果稍后数据更新了会触发此方法，会拿新值
                fn(node,this.getContent(vm,expr)) //返回了一个全的字符串
            })
            return this.getVal(vm,args[1])
        })
        fn(node,content)
    },
    updater:{
        // 把数据插入到节点中
        modelUpdater(node,value){
           node.value=value
        },
        htmlUpdater(){

        },
        textUpdater(node,value){
          node.textContent=value
        },
    }
}
// 1
class Vue{
constructor(options){
    this.$el=options.el
    this.$data=options.data
    let computed=options.computed
    // 如果根元素存在，编译模板，调用编译类
    if(this.$el){
        // 把数据  全部转化为Object.defineProperty来定义
        new Observer(this.$data)
        // 把数据获取操作vm上的取值操作，都代理到vm.$data
        this.proxyVm(this.$data)
        console.log('this.$data');
        for (let key in computed) {
           Object.defineProperty(this.$data,key,{
               get(){
                   return computed[key].call(this)
               }
           })
        }
        new Compiler(this.$el,this)
    }
}

proxyVm(data){
    for(let key in data){
        Object.defineProperty(this,key,{
            get(){
                return data[key]//进行了转换操作
            }
        })
    }
}
}
