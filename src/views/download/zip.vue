<template>
  <div>
   <div>
    <div>后端返回下载的url路径的下载方式</div>
    <el-button @click="downLoads">a标签下载:zip,doxc,excel</el-button>
    <el-button @click="downloadVideo">streamsaver插件下载:url,pdf,图片,视频,docx,zip</el-button>
   </div>
   <div>
    <div>通过file-saver插件下载,超过2G会出现下载进度条不及时出现的情况,建议大文件使用streamsaver插件下载</div>
    <el-button @click="downLoad">zip,docx,图片,全部类型都可以</el-button>
   </div>
  </div>
</template>

<script>
 import streamSaver from "streamsaver"
import axios from 'axios'
import { saveAs } from 'file-saver'
export default {
  data(){
    return{
    }
  },
   methods:{
   
    //通过后端返回的路径,可下载zip,doxc,excel
    downLoads(){
      // 使用a标签
      // 将url换成后端返回的相对应路径  zip
      // let url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-28-rn79oth.zip"
      // let url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-28-rn79oth.zip"
      // let url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-29-t8nawf8.docx"
      // 图片,pdf变成了预览
          // let url="http://58.213.164.118:18081/sfimg/yolo/face/full_95f8825b-a760-48c1-83cc-68ec7d25c28d.jpg"
          let url='http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-29-h5jf2to.pdf'
      const link = document.createElement("a");
         // 注意，在跨域的时候这个download属性无效
      link.download = "设备模板.zip";
      console.log('link.download',link.download);
      link.href =url
      link.setAttribute('file','员工信息导入模板.zip')
      document.body.appendChild(link);
      link.click();
    },

    // 使用streamsaver插件下载,网速需要好（视频,图片,pdf）
    downloadVideo() {
        // 文件名
      const name = '设备列表.zip'
        // 下载的地址   
      // const url='https://d8d913s460fub.cloudfront.net/videoserver/cat-test-video-320x240.mp4'
      //  const url='http://58.213.164.118:18081/sfimg/yolo/face/full_95f8825b-a760-48c1-83cc-68ec7d25c28d.jpg'
      //  const url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-29-h5jf2to.pdf"
      // const url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-29-t8nawf8.docx"
        let url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-28-rn79oth.zip"
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

    // 通过file-save下载
    downLoad(){
        // 下载txt文件可以
        // const blob = new Blob(['Hello, world!'])
        // // saveAs(blob, 'hello world.txt')
         // let url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-28-rn79oth.zip"
      // let url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-28-rn79oth.zip"
      // let url="http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-29-t8nawf8.docx"
      // let url='http://10.22.90.2:8081/ai-daemon-download/handle/2022-11-29-h5jf2to.pdf'
      // const url='https://d8d913s460fub.cloudfront.net/videoserver/cat-test-video-320x240.mp4'
      let url='http://58.213.164.118:18081/sfimg/yolo/face/full_95f8825b-a760-48c1-83cc-68ec7d25c28d.jpg'
        saveAs(url, "视频.jpg");
        // 下载zip文件，如果文化过大，局限性：文件过大不会及时出现下载提示框
        // saveAs(blob, 'hello world.zip')
        // 下载图片是打开了一个新窗口
    },

    // 下载zip
    // https://blog.csdn.net/u011200562/article/details/110229788?spm=1001.2101.3001.6650.9&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-9-110229788-blog-115005721.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-9-110229788-blog-115005721.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=10
    downloadFile(data) {
      let blob = new Blob([data], { type: "application/zip" });
      let url = window.URL.createObjectURL(blob);
      const link = document.createElement("a"); // 创建a标签
      link.href = url;
      link.download = "下载图片"; // 重命名文件
      link.click();
      URL.revokeObjectURL(url); // 释放内存
    }
   }
}
</script>

<style>

</style>