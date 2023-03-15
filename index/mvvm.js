  // 基类 调度
  // 编译类
class Compiler{
constructor(el,vm){
    // 判断el属性是不是一个元素，如果不是元素就获取
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
    return expr.split('.').reduce((data,current)=>{
            return data[current]      
        },vm.$data)
       
    },
    model(node,expr,vm){//node是节点，expr是表达式，vm是当前实例
    let fn=this.updater['modelUpdater']
    // 给输入框赋予value属性
     let value=this.getVal(vm,expr)
     fn(node,value)
    },
    html(){
      
    },
    text(node,expr,vm){//expr=>{{a}} {{b}}
        let fn=this.updater['textUpdater']
        let content=expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
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
class Vue{
constructor(options){
    this.$el=options.el
    this.$data=options.data
    // 如果根元素存在，编译模板，调用编译类
    if(this.$el){
        new Compiler(this.$el,this)
    }
}
}
