<template>
  <div>
    图片懒加载：（原理）：https://blog.csdn.net/weixin_42349568/article/details/111568963
    原生实现方法：
    1实现判断图片是否在屏幕上
    1，DOMobj.getBoundingClientRect().top   //获取该元素到屏幕顶部的距离
    2，window.innerHeight    //屏幕的高度
  通过观察者 IntersectionObserver来监听,在此注册了一个指令
    <div class="lazy-load" v-for="(item,index) in imgArr" :key="index">
        <img v-lazy :src="item.src">
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imgArr:[
                {
                src:require('@/assets/img/dom.jpg')
               },
               {
                src:require('@/assets/img/login.jpg')
               },
        ]
        }
    }
}
</script>

<style>
.lazy-load{
    
			display: block;
				width: 90%;
				margin: 0 auto;
                margin-top:1000px;
			}
</style>