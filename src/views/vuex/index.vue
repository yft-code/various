<template>
    <div>

      <!-- <el-button @click="createApp">开始启动</el-button>
      <el-button @click="getHistory">获取历史记录</el-button>
      <el-button @click="uploadDown">下载</el-button>
      <span>下载句柄:</span>
      <input type="text" id="downloadHandle" value="">
      <div @click="getUploadMeg">获取下载信息</div>
      <div class="info"></div>
       <div id="video" style="height:0;width:0" class="video">
      </div> -->
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
 getUploadMeg(){
// 获取下载信息
  const args = {
    'downloadHandle': $('#downloadHandle').val()
  }
  $('.info').empty();
  this.application.sendAction(this.appInfo.curWinId, 'GET_DOWNLOAD_INFO', args).then((res) => {
    if (res.errorCode !== 0) {
      // showAlert(res.errorMsg);
    }
    let status = res.body.status === 0 ? '暂停' : '下载'; // 0暂停 1下载
    // if ($('#playMode').val() === '0') { // 普通播放模式
    //   $('.info').append(`
    //     <div>下载状态：${status}；</div>
    //     <div>下载速度：${res.body.speed}KB/S；</div>
    //     <div>下载大小：${res.body.downloadSize}KB；</div>
    //     <div>剩余下载时间：${res.body.timeLeft}s；</div>
    //     <div>当前下载进度：${res.body.progress}%；</div>
    //     <div>已下载时间：${res.body.recordTime}s；</div>`)
    // } else {
    //   $('.info').append(`<div>当前下载进度：${res.body.progress}%；</div>`)
    // }
      $('.info').append(`
        <div>下载状态：${status}；</div>
        <div>下载速度：${res.body.speed}KB/S；</div>
        <div>下载大小：${res.body.downloadSize}KB；</div>
        <div>剩余下载时间：${res.body.timeLeft}s；</div>
        <div>当前下载进度：${res.body.progress}%；</div>
        <div>已下载时间：${res.body.recordTime}s；</div>`)
    console.log('res.body',JSON.stringify(res.body));
  });
},
      getHistory(){
        console.log('获取历史记录零零零零');
         this.showVideo('REPLAY_PURE');
      },
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
        $('.startApp').hide();
        $('.videoPanel').show();
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
        setTimeout(()=>{
          this.getHistory()
        })
        clearTimeout(timer);
      }, 1500) // 1.5秒
    } else {
      alert(res.errorMsg);
    }
  })
},

showVideo(type) {
  // if (this.appInfo.videoList.length > 15) {
  //   return alert('最多打开16个窗口')
  // }
  this.windowType = type;
  // const rect = this.application.getLocationInfo('video');
  const windowInfo = {
    'pluginType': type,
    'rect': {
      'left': -1000,
      'top': -1000,
      'width': 0,
      'height': 0
    },
    'title': document.title
  }
  console.log(' windowInfo', windowInfo);
  this.application.createWindow(windowInfo).then((res) => {
    if (res.errorCode === 0) {
      // const windowStyle = {
      //   'loadingGifUrl': "",
      //   'loadingText': "",
      //   'videoLoadingText': ""
      // }
      // this.application.setWindowStyle(windowStyle).then(res => {
      //   if (res.errorCode !== 0) {
      //     alert(res.errorMsg);
      //   }
      // });
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
      // $('.videoList section').removeClass('activeWindow');
      // if (type === 'LIVE_VIDEO_PURE') {
      //   $('.videoList').append(`<section class="activeWindow"><span>实况</span><i data-name=${this.appInfo.curWinId} class="close">X</i></section>`);
      //   $('.threeTab').text('语音功能');
      //   $('.downLoadTab').hide();
      //   $('.channelIdParam').hide();
      //   $('.voiceOptionParam').show();
      //   if ($('#playType').val() === '2') {  // P2P类型
      //     $('.channelIdParam').show();
      //   }
      // } else if (type === 'REPLAY_PURE') {
      //   $('.videoList').append(`<section class="activeWindow"><span>录像回放</span><i data-name=${this.appInfo.curWinId} class="close">X</i></section>`);
      //   $('.threeTab').text('录像控制');
      //   $('.downLoadTab').show();
      //   $('.voiceOptionParam').hide();
      //   if ($('#playType').val() === '2') { // P2P类型
      //     $('.channelIdParam').show();
      //   } else {
      //     $('.channelIdParam').hide();
      //   }
      // }
      // $('.videoItem').hide();
      // $('.videoContent').show();
      const rect = this.application.getLocationInfo('video');
      // const windowInfo = {
      //   'windowId': this.appInfo.curWinId,
      //   'left': rect.left,
      //   'top': rect.top,
      //   'width': rect.width,
      //   'height': rect.height,
      //   'title': document.title
      // }
      // this.application.setWindowRect(windowInfo);
      // 绑定窗口信息
      // this.application.bindWindow('video', this.appInfo.curWinId);
      // this.application.showWindow(this.appInfo.curWinId).then((res) => {
      //   if (res.errorCode === 0) {
      //     this.application.setWindowTop(this.appInfo.curWinId, true); // 窗口置顶
      //   } else {
      //     alert(res.errorMsg);
      //   }
      // });
    } else {
      alert(res.errorMsg);
    }
  });
},
// 实现下载
  uploadDown(){
        // 启动下载
  const args = {
    'url': 'rtsp://117.174.152.90:33554/00054381710408220101?DstCode=01&ServiceType=3&ClientType=0&StreamID=1&SrcTP=2&DstTP=2&SrcPP=1&DstPP=1&MediaTransMode=0&BroadcastType=0&SV=1&TimeSpan=20220927T000000Z-20220927T010000Z&Token=CTkPlzfzWSlB+66JoyxooKezRFw6JiyRPqQvi+YsR0k=&ExNat=1&',
    'playType': '0',
    'namePrefix': '1111',
    'speed': '',
    'timeSpan':{'BeginTime':'20220927000000',
           'EndTime':'20220927010000'},
  }
  console.log('xxxxxxargs',args);
  // if ($('#playMode').val() === '0') { // 普通播放模式
  //   args['timeSpan'] = {
  //     'BeginTime': $('#loadBeginTime').val(),
  //     'EndTime': $('#loadEndTime').val()
  //   };
  // } else {
  //   args['extend'] = $('#cloudExtend').val()
  // }
  this.application.sendAction(this.appInfo.curWinId, 'START_DOWNLOAD', args).then((res) => {
    if (res.errorCode !== 0) {
      // showAlert(res.errorMsg);
    }
    console.log('下载句柄：' + res.body.downloadHandle);
  });
      },
    }
 }
</script>

<style scoped>
      #box{
				width:100%;
				height:100px;
				display:flex;
				margin:10px;
			}
			#left,#right{
				flex:1;
				height:100px;
				margin:10px;
				background-color:#999;
			}
			#center{
        width: 90%;
				height:100px;
				margin:10px;/*左右margin不会叠加*/
				background-color:#f00;
			}
</style>