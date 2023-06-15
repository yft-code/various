// let vnode1=h('div',{},'你好野')
// let vnode2=h('ul',{},[
//     h('li',{},'a'),
//     h('li',{},'a'),
//     h('li',{},'a'),
//     h('li',{},'a'),
//     h('li',{},'a'),
//     h('li',{},'a'),
// ])
// h函数
function h(sel,data,params){
    // 
    // 意味着没有子元素
      if(typeof params=='string'){
        // params为text
        return vnode(sel,data,undefined,params,undefined)
      }else if(Array.isArray(params)){
           let children=[]
           for(let item of params){
            children.push(item)
           }
        return vnode(sel,data,children,undefined,undefined)
      }
  
}
// 
function vnode(sel,data,children,text,ele){
     return{
        sel,data,children,text,ele
     }
} 