<template>
  <div>
    使用streamsave插件下载视频
    <el-button @click="downloadVideo">下载视频</el-button>
  </div>
</template>

<script>
// 官网demo地址   https://github.com/jimmywarting/StreamSaver.js/
// 实现视频流下载，streamSave+fetch
// 1.npm install streamsaver
// 2.在页面引入streamsaver
import streamSaver from "streamsaver";
// 3.使用
export default {
methods:{
    // 视频下载(网速要好)
    downloadVideo() {
        console.log('视频下载')
        // 下载的文件名(注意文件名的后缀)//下载图片,下载视频,
      const name = 'cat.zip'
        // 下载的地址   
    //   const url='https://d8d913s460fub.cloudfront.net/videoserver/cat-test-video-320x240.mp4'
      //  const url='http://58.213.164.118:18081/sfimg/yolo/face/full_95f8825b-a760-48c1-83cc-68ec7d25c28d.jpg'
     const url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-28-rn79oth.zip"
      fetch(url, {
        method: "GET",
        cache: "no-cache",
      }).then((res) => {
        const fileStream = streamSaver.createWriteStream(name, {
          size: res.headers.get("content-length"),
        });
        const readableStream = res.body;
        // more optimized
        if (window.WritableStream && readableStream.pipeTo) {
          return readableStream
            .pipeTo(fileStream)
            .then(() => console.log("done writing"));
        }
        window.writer = fileStream.getWriter();

        const reader = res.body.getReader();
        const pump = () =>
          reader
            .read()
            .then((res) =>
              res.done
                ? window.writer.close()
                : window.writer.write(res.value).then(pump)
            );

        // pump()
      });
    },
}
}
</script>

<style>

</style>