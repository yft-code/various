export default {
    bind(el, bindings,vnode){
        let that = vnode.context
        console.log('that',that.$route);
        const permission = that.$route.meta.buttons
        console.log('permisson',permission);
        console.log('el',el,vnode);
        console.log('ermission.includes(bindings.value)',permission.includes(bindings.value));
       let hasPermisson = permission.includes(bindings.value)
       if(!hasPermisson){
        // 此时元素还存在页面
        el.style.display='none'
        // 此时元素不存在了
        setTimeout(() => {
            el.parentNode.removeChild(el)
        },0)
      
       }
    }
}