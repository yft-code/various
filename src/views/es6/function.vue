<template>
  <div>
    函数的扩展:
    1.函数传参
    2.展开运算符
  </div>
</template>

<script>
export default {

    created(){
    console.log('reset()',this.reset(1,2,3));
       console.log(this.sum(1,3,3))
       console.log(this.fun(1,2))
       console.log('res',this.res(1,3,4,5,6,7));
    },

methods:{
    // ==============
    // 传参问题
    // 参数的默认值
    sum(a,b=1,c=1){
        return a+b+c
    },
    // arguments：（有缺陷，和严格模式有关）
    // 在严格模式下arguments跟形参是脱离的
    // 在非严格模式下，如果对函数的参数添加了默认值，会自定形成严格模式
    fun(a,b){
         console.log('argu',arguments[0],arguments[1]);
         return a+b
    },
    reset(){
      let sum=0
      for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
      }
      return sum
    },

    // ============
    // 剩余参数:专门用于收集末尾所有的参数,将其放入一个形参数组中
    // 注意：1.一个函数仅能出现一个剩余函数
    //       2.一个函数中如果存在剩余参数,只能放在最后一个位子    
    res(...args) {
          console.log('args',args);
    },

//========展开运算符======
// 对象展开运算符：
// 数组展开：
// ...要展开的数据


}
}
</script>

<style>

</style>