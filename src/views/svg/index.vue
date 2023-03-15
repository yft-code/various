<template>
  <div>
    <!-- 彩虹灯动画特效https://segmentfault.com/a/1190000010963326 -->
    <!-- demo学习:https://juejin.cn/post/7164050832181166094 -->
    <!-- svg的学习 -->
    <!-- svg的viewBox的意义：相对单位
             viewBox="x y w h"
        解析:viewBox="10 10 100 100"：原点也按照缩放比进行计算:width/x=真是的x的坐标,heght/y=真实的y轴坐标
          对于这个可以先认为是"0 0 100 100"
          算出1p相=多少p真
          viewBox和真是的svg标签里面关系为：
          宽的（相对宽度）1px=500/100=5px（真实的)
          所以cx="50"，是相当宽度，计算其真是的宽度为：50*5=250px
          高度同理
          此时相对原点(50,50)，先以（0,0）为原点画出相对的图行，然后以原点为基础遵循正数向上左移动，负数向右下移动
   <svg width="500" height="500" style="background-color: yellow;" viewBox="10 10 100 100">
        <circle id="mycircle" cx="50" cy="50" r="50"/>
     </svg> 
    https://blog.csdn.net/zp19860529/article/details/114173594
    -->
    <div  style="width:500px;height:500px;background-color: blue;"></div>
    <div  style="width:63px;height:50px;background-color: blue;"></div>
    <!-- svg的宽和高只能在这里面写 -->
    <svg width="500"
    height="500" class="points" style="background-color: yellow;" viewBox="0 0 500 500">
        <circle id="mycircle" cx="50" cy="50" r="50"/>
        <!-- 缩放属性:有默认的点位(右上点为)缩放,通过属性transform-origin和transform-box来调整默认的缩放原点 -->
        <rect transform="scale(2)" x="10" y="10" width="100" height="150" fill="#cd0000" />
        <!-- 点的顺序为 左上右上右下左下 -->
        <polygon points="0,0 10.0,0 29,5 5,5"/>
        <text x="10" y="100">hello</text>
        <!-- <circle id="mycircle" cx="50%" cy="10%" r="10%"/>
        <circle id="mycircle" cx="90%" cy="10%" r="10%"/> -->
        <!-- <circle id="mycircle" cx="100" cy="500" r="50" /> -->
    </svg>
     <!-- 添加动画 -->
     <div>
      <svg width="500px" height="500px" viewBox="0 0 100 100" 
       style="background: white;"
       >
           <!-- <rect id="rects" x="10" y="10" width="20" height="10"></rect> -->
           <!-- Stroke属性定义一条线，文本或元素轮廓颜色： -->
           <circle   stroke-dashoffset="20"  fill="transparent" cx="20%" stroke-width="2" stroke="rgba(94, 150, 221, .45)" cy="20%" r="10%" class="progress-background"/>
      </svg>
     </div>
     <!-- <svg width="200" height="150" viewBox="0,0,400,300" style="border:1px solid #cd0000;">
    <rect width="200" height="150" fill="#cd0000" />
</svg> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.points{
  display: flex;
}
/* 子适应布局 */
.svg{
    width: 500px;
    height: 500px;
    background: #000;
    
}
/* 动画 */
#rects{
  animation: move 1s;
}
@keyframes move {
  100%{
     transform: scale(1.5);
  }
}
</style>