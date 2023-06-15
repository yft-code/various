<template>
  <div class="flex container-nav">
    <ul class="nav flex">
        <li class="nav-subs" v-for="item,index in nav" :key="index">
            <div>{{ item.title }}</div>
            <div class="children">
              <ul v-for="j,i in item.subs" :key="i">
                <li>{{ j.title }}</li>
              </ul>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
data(){
    return {
        nav:[
            {
                title:'11111',
                subs:[{
                        title:'1111-11111'
                    }
                ]
            },
            {
                title:'222222',
                subs:[
                    {
                        title:'1111-2222'
                    }
                ]
            }
        ]
    }
}
}
</script>

<style lang="scss" scoped>
.container-nav{
    position: relative;
    padding: 0 46px;
    .nav{
     .children{
        left:0;
        width: 100%;
        position: absolute;
        background: #000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s;
     }
     .nav-subs:hover .children{
        opacity: 1;
        visibility: visible;
        }
    }
}
</style>