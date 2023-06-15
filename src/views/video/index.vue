<template>
  <div>
 <video ref="videos" width="320" height="240" controls>
  <source src="../../assets/movie.mp4" type="video/mp4">
  您的浏览器不支持 HTML5 video 标签。
</video>
 <el-button @click="getVideo">获取视频下载</el-button>
  </div>
</template>

<script>
export default {
   data(){
    return{
        math:'wwwwww'
    }
   },
   methods:{
    getVideo(){
      let video=this.$refs.videos
      console.log('video',video);
    }
   }
}
</script>

<style>

</style>