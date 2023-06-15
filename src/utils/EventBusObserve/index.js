class observe{
    constructor(){
        // 用来存储所有事件以及回调的对应关系
       this.items={}
       console.log('$constructor',this.items);
    }
    // 监听/订阅
    $on(eventName,cb){
        //   if(!this.items[eventName]){
        //     this.items[eventName]=[]
        //   }
        //   this.items[eventName].push(cb)
        // 上面的代码等同于下面的代码
        // 把回调函数存放到一个数组里面
        (this.items[eventName]||=[]).push(cb)
        console.log('$on',this.items);
    }
    // 派发
    $emit(eventName,...args){
         if(!this.items[eventName]) return
         this.items[eventName].forEach(cb => {
            //相当于调用了回调函数
            cb(...args)
            
         });
         console.log('$emit');
    }
    // 解绑
    $off(eventName){
        this.items[eventName]=[]
    }

}

export default observe