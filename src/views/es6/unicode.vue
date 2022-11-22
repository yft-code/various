<template>
  <div>
    vue
  </div>
</template>

<script>
export default {
    created(){
        this.init()
    },
     methods:{
        init(){
            const text="吉"
            console.log('text',text.length);
        }
     }
}
</script>
<style>
</style>