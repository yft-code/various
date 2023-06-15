<template>
    <div class="flex nav-main">
       <img
          class="logo"
          src="../../assets/img/dom.jpg" 
          alt=""
       >
       <div>
          依托管理平台
       </div>
       <ul>
          <li class="flex nav">
              <div  style="margin-left:30px" v-for="item,index in navs" :key="index">
                      <div class="navs-sub">
                          <div class="cursor-pointer nav-child-title">{{ item.title }}</div>
                          <div class="sub-children" v-for="i,k in item.nav" :key="k">
                             <div style="color:aquamarine;font-size:16px">2{{ i.title }}</div>
                             <div v-for="j,l in i.sub" :key="l">
                             3{{ j.title }}
                             </div>
                      </div>
                      </div>  
              </div>
  
          </li>
       </ul>
    </div>
  </template>
  
  <script>
  export default {
     data(){
      return {
          navs:[
              {
                  title:'产品与夫妇1',
                  path:'',
                  nav:[
                      {
                          title:'reterterte1',
                          sub:[
                              {
                                  title:'1fffffff1',
                                  path:''
                              },
                              {
                                  title:'2ffffff1',
                                  path:''
                              },
                              {
                                  title:'3ffffff1',
                                  path:''
                              }
                          ]
                      }
                  ]
              },
              {
                  title:'产品与夫妇2',
                  path:'',
                  nav:[
                      {
                          title:'reterterte2',
                          sub:[
                              {
                                  title:'jdhjfsd2',
                                  path:''
                              }
                          ]
                      }
                  ]
              },
              {
                  title:'产品与夫妇3',
                  path:'',
                  nav:[
                      {
                          title:'reterterte3',
                          sub:[
                              {
                                  title:'jdhjfsd3',
                                  path:''
                              }
                          ]
                      }
                  ]
              }, {
                  title:'产品与夫妇4',
                  path:'',
                  nav:[
                      {
                          title:'reterterte4',
                          sub:[
                              {
                                  title:'jdhjfsd4',
                                  path:''
                              }
                          ]
                      }
                  ]
              }
          ]
      }
     }
  }
  </script>
  
  <style lang="scss">
  .nav-main{
    padding: 0 64px 0 64px;
    position: relative;
    .logo{
       width: 40px;
    }
    .navs-sub{
      .sub-children{
          display: none;
          background:rebeccapurple;
          width: 100%;
          height: 100x;
          position: absolute;
          left:0;
          transition: all 0.6s;
      }
      .nav-child-title::after{
          content: "";
               
      }
      &:hover{
          color: red;
      }   
      &:hover .sub-children{
          display: block;
      }
    }
  }
  </style>
  