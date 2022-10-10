<template>
  <div> 
    <el-button @click="createApp">创建应用</el-button>
    <el-button @click="getHistory">录像回放</el-button>
    <el-button @click="uploadDown">下载视频</el-button>
  </div>
</template>
<script>
import $ from 'jquery'
import{ Base, getZoomScale,ajaxGetRequest,sendMes,closeWebSocket,reconnect,init,createWebSocket,send,application} from '../../utils/scoket/webscoket'
 export default{
  data(){
   return{
    windowType:'',
    timer:'',
    application:{},
    appInfo:{
    appId: null,
    curWinId: null,
    videoList: []
   }
  }
  },
    methods:{
      one(){
        Base,
        getZoomScale,ajaxGetRequest,sendMes,closeWebSocket,reconnect,init,createWebSocket,send
      },
      transVersion(version) {
      return Number(version.split('.').join(''));
      },
      createApp(){
     let versionInfo; // 版本信息
      Base.createApplication().then((res) => {
    if (res.errorCode === 0) {
     this.application = res.application;
      console.log('application初始化',this.application);
      this.appInfo.appId = res.body.appId;
      sessionStorage.setItem("appId", this.appInfo.appId);
      versionInfo = Base.versionObj();
      let timer = setTimeout(() => {
        // $('.startApp').hide();
        // $('.videoPanel').show();
        this.application.checkUpgrade().then(res => {
          if (res.errorCode !== 0) {
            alert(res.errorMsg);
          }
          const pluginVersion = res.body.pluginVersion.substring(12, 17);
          // 插件版本低于js版本 iClient ME V1.1.0_102 Build20211208
          if (this.transVersion(pluginVersion) <this.transVersion(versionInfo.currentVersion)) {
            // 强制升级-当前插件版本低于必须升级的插件版本
            if (this.transVersion(pluginVersion) <= this.transVersion(versionInfo.mustVersion)) {
              alert('当前插件版本过旧，请关闭浏览器升级插件，以免影响正常使用');
            }
            // 推荐升级-当前插件版本低于推荐升级的插件版本
            if (this.transVersion(pluginVersion) <= this.transVersion(versionInfo.recommandVersion) && this.transVersion(pluginVersion) > this.transVersion(versionInfo.mustVersion)) {
              alert('当前插件版本较低，推荐关闭浏览器升级到最新版本');
            }
            // 可选升级
            if (this.transVersion(pluginVersion) > this.transVersion(versionInfo.recommandVersion)) {
              alert('当前插件有新版本，可关闭浏览器升级到最新版本');
            }
          }
        })
        clearTimeout(timer);
      }, 1500) // 1.5秒
    } else {
      alert(res.errorMsg);
    }
  })
},

showVideo(type) {
  if (this.appInfo.videoList.length > 15) {
    return alert('最多打开16个窗口')
  }
  this.windowType = type;
  const rect = application.getLocationInfo('video');
  const windowInfo = {
    'pluginType': type,
    'rect': {
      'left': rect.left,
      'top': rect.top,
      'width': rect.width,
      'height': rect.height
    },
    'title': document.title
  }
  application.createWindow(windowInfo).then((res) => {
    if (res.errorCode === 0) {
      const windowStyle = {
        'loadingGifUrl': "http://image.huawei.com/tiny-lts/v1/images/f395ed1b5d01d3a57c5c56eedd44eb5f_600x600.gif@900-0-90-f.gif",
        'loadingText': "测试...加载中...",
        'videoLoadingText': "测试...视频加载中..."
      };
      application.setWindowStyle(windowStyle).then(res => {
        if (res.errorCode !== 0) {
          alert(res.errorMsg);
        }
      });
      // $('.tab>li').removeClass('active');
      // $('.playTab').addClass('active');
      // $('.tabContent>div').removeClass('showContent');
      // $('.playWraper').addClass('showContent');
      this.appInfo.videoList.push({
        type: type,
        windowId: res.body.windowId,
        layout: "11", // 默认1x1布局
        broadCast: '', // 语音广播
        fileBroadCast: '',// 文件广播
        tabIndex: 0, // tab页签索引
        ratioMode: 'FULL',// 视频比例
        playType: '0' // 类型
      });
      // $('#layout').val("11"); // 默认1x1布局
      // $("#speed").val(1); // 回放倍率默认1
      // $('#ratioMode').val("FULL"); // 视频比例默认铺满
      // $('#playType').val("0"); // 类型默认MP
      this.appInfo.curWinId = res.body.windowId;
      sessionStorage.setItem('curWinId', this.appInfo.curWinId);
      sessionStorage.setItem('videoList', JSON.stringify(this.appInfo.videoList));
      const rect = this.application.getLocationInfo('video');
      const windowInfo = {
        'windowId': this.appInfo.curWinId,
        'left': rect.left,
        'top': rect.top,
        'width': rect.width,
        'height': rect.height,
        'title': document.title
      }
      application.setWindowRect(windowInfo);
      // 绑定窗口信息
      application.bindWindow('video', appInfo.curWinId);
      application.showWindow(appInfo.curWinId).then((res) => {
        if (res.errorCode === 0) {
          application.setWindowTop(appInfo.curWinId, true); // 窗口置顶
        } else {
          alert(res.errorMsg);
        }
      });
    } else {
      alert(res.errorMsg);
    }
  });
},
// 录像回放
getHistory(){
     this.showVideo('REPLAY_PURE');
},
      // 实现下载
  uploadDown(){
        // 启动下载
  const args = {
    'url': $('#rtspUrl').val(),
    'playType': Number($('#playMode').val()),
    'namePrefix': $('#namePreFix').val(),
    'speed': Number($('#downLoadSpeed').val())
  }
  console.log('xxxxxxargs',args);
  if ($('#playMode').val() === '0') { // 普通播放模式
    args['timeSpan'] = {
      'BeginTime': $('#loadBeginTime').val(),
      'EndTime': $('#loadEndTime').val()
    };
  } else {
    args['extend'] = $('#cloudExtend').val()
  }
  console.log('application下载',this.application);
  this.application.sendAction('df339dc7f5b348a4a1155c76ac7f0ca9', 'START_DOWNLOAD', args).then((res) => {
    console.log('res======',res);
    if (res.errorCode !== 0) {
      alert(res.errorMsg);
    }
    alert('下载句柄：' + res.body.downloadHandle);
  });
      },
    }
 }
</script>

<style>
body {
  margin: 0px;
  user-select: none;
  width: 100vw;
  height: 100vh;
}

p {
  margin: 0;
}

i {
  font-style: normal;
}

.startApp {
  padding-top: 200px;
  text-align: center;
}

.createApp {
  background-color: #01b9d1;
  color: white;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 2px;
  margin: 80px auto 0px;
  cursor: pointer;
}

.videoList {
  height: 32px;
  padding: 6px;
  border-bottom: 1px solid gray;
  overflow: auto;
}

.videoList section {
  float: left;
  position: relative;
  width: 120px;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  text-align: center;
  background-color: #01b9d1;
  margin-right: 8px;
  margin-bottom: 2px;
}

.videoList .close {
  font-style: normal;
  font-size: 12px;
  color: #fff;
  position: absolute;
  right: 5px;
  top: 2px;
  line-height: 12px;
  cursor: pointer;
}

.quit {
  position: absolute;
  right: 8px;
  top: 14px;
  padding-right: 16px;
  cursor: pointer;
}

.quit:hover {
  color: #01b9d1;
}

.videoBox {
  display: inline-block;
  color: #ffffff;
  width: 164px;
  height: 164px;
  background: #01b9d1;
  text-align: center;
  line-height: 164px;
  letter-spacing: 10px;
}

.videoItem {
  padding: 8px;
}

.btn {
  display: inline-block;
  background-color: #01b9d1;
  color: white;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
}

.videoPanel {
  display: none;
  margin-left: 30px;
}

.videoContent {
  display: none;
  width: 100%;
  height: calc(100% - 47px);
}

.videoWraper {
  display: flex;
  width: 100%;
  height: 100%;
}

.videoParam {
  width: 370px;
  height: 100%;
  overflow: auto;
  position: relative;
}

.videoParam section {
  margin: 10px 0 10px 36px;
}

.videoParam section span {
  display: inline-block;
  width: 130px;
}

.videoParam section select {
  width: 177px;
  height: 21px;
}

.lineBtn {
  padding-left: 36px;
  padding-top: 16px;
}

.h30 {
  width: 75px;
  height: 30px;
  line-height: 30px;
}

.btnWidth {
  width: 114px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 16px;
}

.ml36 {
  margin-left: 36px;
}

.video {
  width: calc(100% - 370px);
  height: calc(100vh - 47px);
  overflow: auto;
}

.mb48 {
  margin-bottom: 24px;
}

.speedWraper,
.voiceWraper {
  display: none;
}

.tab {
  list-style: none;
  width: 90%;
  height: 32px;
  padding: 0;
  margin-bottom: 24px;
  margin-left: 36px;
}

li {
  width: 61px;
  height: 30px;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  float: left;
  color: #01b9d1;
  border: 1px solid #01b9d1;
  cursor: pointer;
}

.active {
  color: #fff;
  background: #01b9d1;
}

.tabContent>div {
  display: none;
}

.tabContent .showContent {
  display: block;
}

.activeWindow {
  background-color: #03a0b5 !important;
}

.alertTip {
  width: 280px;
  height: 110px;
  background-color: #fff;
  border-radius: 5px;
  padding: 16px;
  margin-left: 36px;
  border: 1px solid #999;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.35);
  position: absolute;
  bottom: 5%;
  display: none;
}

.tipTitle {
  font-size: 16px;
  font-weight: bold;
}

.errorMessage {
  width: 100%;
  height: 24px;
  margin: 12px 0;
  color: #000;
  word-wrap: break-word;
  font-size: 14PX;
}

.closeBtn {
  float: right;
}

.channelIdParam,
.downLoadSpeedParam,
.cloudExtendWraper {
  display: none;
}

.downLoadBtns {
  margin-top: 16px;
  margin-bottom: 8px;
}

.openFolder,
.downLoadInfo {
  width: 120px;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
}

.openFolder {
  margin-bottom: 40px;
}

.downLoadInfo {
  margin-bottom: 12px;
}

.startBroadCast,
.stopBroadCast,
.startFile,
.stopFile,
.startTalk,
.stopTalk,
.setCallbackBtn {
  margin-bottom: 3px;
}

.tips {
  font-size: 14px;
  color: #888;
}

.currentPane {
  width: 120px;
  height: 30px;
  line-height: 30px;
}

.cutPartBtn {
  margin-bottom: 6px;
}

.addToolBtn {
  margin-top: 24px;
}

.eventWraper {
  margin-bottom: 6px;
}

.eventTitle {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>