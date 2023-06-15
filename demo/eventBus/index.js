class eventBus{
    constructor(){
        this.subs={}
    }
    $emit(name,...args){
        console.log('$emit');
        // element是一个函数
         this.subs[name].forEach(element => {
            console.log('32312312');
            element(...args)

        });
    }
    $bus(name,cb){
         if(!this.subs[name]){
            this.subs[name]=[]
         }
         this.subs[name].push(cb)
    }
    $off(name){
      this.subs[name]=[]
    }
}