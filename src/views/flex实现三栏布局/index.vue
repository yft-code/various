<template>

    <div class="wrap">
               <div class="left">left</div>
               <div class="center" v-for="item in arr" :key="item.index">
                   <div class="show">
                       {{ item.index }}
                       <div class="hejiu">
                           <div class="children" v-for="i in item.bags" :key="i" style="background: #000; margin-left: 30px;">
                               <div>{{ i }}</div>
                           </div>
                       </div>
                   </div>
                   
               </div>
               <div class="right">right</div>
           </div>
   
   </template>
   <script>
   export default {
       data(){
           return {
               arr:[
                   {index:1,
                    bags:['dhsgd1','手机','dhsj','dshdh']
                   },
                   {index:2,
                    bags:['dhsgd2','手机2','dhsj2','dshdh2']
                   }
               ]
           }
       }
   
   }
   </script>
   
   <style lang="scss">
   *{
                   margin:0;
                   padding:0;
               }
               .wrap{
                   display:flex;
                   flex-direction:row;
                   margin-top:20px;
               }
               .center{
                   width:1226px;
                   text-align:center;
                   background:#ccc;
               }
               .left,.right{
                   /*flex-grow 属性用于设置或检索弹性盒的扩展比率。*/
                               flex-grow: 1;
                               line-height: 30px;
                               background:red;
                       }
               .hejiu{
                   width: 100%;
                   display: none;
                   transition: all 3s;
                 
                   
               }
               .show{
                   width: 40px;
                   height: 40px;
                   background: yellow;
                   position: relative;
                   transition: all 3s;
                 
                   
               }
               .show:hover{
                   color:red;
               }
               .show:hover .hejiu{
                   color: blue;
                   display: flex;
                   height: 100px;
                   width: 300px;
                   background:red;
                   position: absolute;
                   top:40px;
                   
   
               }
               .children:hover{
                   color: yellow;
                   cursor: pointer;
               }
   </style>