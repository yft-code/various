<template>
  <div> 
  <div class="startApp">
    <h1>Mp Plugin Web示例</h1>
    <div class="createBtn">
      <div @click="createApp" class="createApp">创建应用</div>
    </div>
  </div>
  <!-- 窗口切换 -->
  <div class="videoPanel">
    <div class="videoList">
      <section><span>视频播放</span><i data-name="videoHome"></i></section>
    </div>
    <span class="quit">退出应用</span>
    <div id="videoItemList" class="videoItemList">
      <div class="videoItem" id="videoHome">
        <span data-item="LIVE_VIDEO_PURE" class="videoBox">实况</span>
        <span data-item="REPLAY_PURE"  @click="getHistory" class="videoBox">录像回放</span>
      </div>
    </div>
  </div>
  <!-- 打开视频页面 -->
  <div class="videoContent">
    <div class="videoWraper">
      <div class="videoParam">
        <!-- tab页签 -->
        <ul class="tab">
          <li class="active playTab">视频播放</li>
          <li class="lineTab">叠加框线</li>
          <li class="threeTab"></li>
          <li class="downLoadTab">录像下载</li>
          <li class="customTab">事件定义</li>
        </ul>
        <div class="tabContent">
          <!-- 视频播放 -->
          <div class="showContent playWraper">
            <section>
              <span>请输入播放地址：</span>
              <input type="text" id="rtsp" value="">
            </section>
            <section>
              <span>播放窗口序号：</span>
              <input class="windowIndex" type="text" id="index" value="1">
            </section>
            <section>
              <span>类型:</span>
              <select id="playType" class="playType">
                <option value="0">MP</option>
                <option value="1">JVMP</option>
                <option value="2">P2P</option>
              </select>
            </section>
            <div class="voiceOptionParam">
              <section>
                <span>随路语音：</span>
                <select id="voiceOption" class="voiceOption" value="0">
                  <option value="0">不开启</option>
                  <option value="1">开启</option>
                </select>
              </section>
            </div>
            <div class="channelIdParam">
              <section>
                <span>通道ID：</span>
                <input type="text" id="channelId" value="0">
              </section>
            </div>
            <div class="confirm btn h30 ml36 mb48">确认</div>
            <div class="stopVideo btn h30 mb48">关闭视频</div>
            <div class="currentPane btn mb48">获取窗口序号</div>
            <section>
              <span>窗口布局:</span>
              <select id="layout" class="layout">
                <option value="11">1x1</option>
                <option value="41">2x2</option>
                <option value="91">3x3</option>
                <option value="161">4x4</option>
                <option value="251">5x5</option>
                <option value="361">6x6</option>
                <option value="491">7x7</option>
                <option value="641">8x8</option>
                <option value="33">1+2</option>
                <option value="31">2+1</option>
                <option value="42">1+3</option>
                <option value="43">1+3</option>
                <option value="81">1+7</option>
                <option value="92">1+8</option>
                <option value="101">1+9</option>
                <option value="122">1+11</option>
                <option value="61">1+5</option>
                <option value="102">2+8</option>
                <option value="132">4+9</option>
                <option value="151">1+14</option>
              </select>
            </section>
            <section>
              <span>视频比例:</span>
              <select id="ratioMode" class="ratioMode mb48">
                <option value="FULL">铺满</option>
                <option value="REAL">原始比例</option>
                <option value="16:9">16:9</option>
                <option value="4:3">4:3</option>
              </select>
            </section>
            <!-- 扣除/还原窗口 -->
            <div class="partWindow">
              <section>
                <span>扣除窗口位置：</span>
                <input type="text" id="cutPart" value="0,0,0,0">
              </section>
              <div class="cutPartBtn btn btnWidth ml36">扣除部分窗口</div>
              <section>
                <span>还原窗口位置：</span>
                <input type="text" id="repairPart" value="0,0,0,0">
              </section>
              <div class="repairPartBtn btn btnWidth ml36">还原扣除窗口</div>
            </div>
            <!-- 添加水印 -->
            <div class="addWaterMask">
              <section>
                <span>添加水印：</span>
                <input type="text" id="addWaterMask" value="">
              </section>
              <div class="addWaterMaskBtn btn btnWidth ml36">添加水印</div>
            </div>
            <!-- 全屏 -->
            <div class="fullScreenBtn btn btnWidth ml36">全屏</div>
          </div>
          <!-- 叠加框线 -->
          <div class="addLine">
            <textarea id="txtContent" class="ml36" rows="6" cols="42" value=""></textarea>
            <!-- 按钮 -->
            <div class="lineBtn mb48">
              <div id="addLine" class="btn h30">叠加框线</div>
              <div id="clearLine" class="btn h30">清空</div>
            </div>
          </div>
          <!-- 语音功能 -->
          <div class="voiceWraper">
            <section>
              <span>语音对讲地址：</span>
              <input type="text" id="talkUrl" value="">
            </section>
            <section>
              <span>开启随路语音：</span>
              <select id="associatedVoice" class="associatedVoice" value="1">
                <option value="1">开启</option>
                <option value="0">不开启</option>
              </select>
            </section>
            <div class="startTalk btn btnWidth ml36">开启语音对讲</div>
            <div class="stopTalk btn btnWidth">关闭语音对讲</div>
            <div class="tips ml36 mb48">注：云服务只支持P2P语音对讲</div>
            <section>
              <span>语音广播地址：</span>
              <input type="text" id="broadCastUrl" value="">
            </section>
            <div class="startBroadCast btn btnWidth ml36">开启语音广播</div>
            <div class="stopBroadCast btn btnWidth">关闭语音广播</div>
            <div class="tips ml36 mb48">注：云服务不支持语音广播功能</div>
            <section>
              <span>文件广播地址：</span>
              <input type="text" id="fileUrl" value="">
            </section>
            <section>
              <span>起始文件序号：</span>
              <input type="text" id="fileIndex" value="0">
            </section>
            <section>
              <span>是否循环：</span>
              <select id="cicle" class="cicle" value="1">
                <option value="1">循环</option>
                <option value="0">不循环</option>
              </select>
            </section>
            <div class="startFile btn btnWidth ml36">开启文件广播</div>
            <div class="stopFile btn btnWidth">关闭文件广播</div>
            <div class="tips ml36">注：云服务不支持文件广播功能</div>
          </div>
          <!-- 录像控制 -->
          <div class="speedWraper">
            <section>
              <span>窗口序号：</span>
              <input class="windowIndex" type="text" id="windowIndex" value="1">
            </section>
            <section>
              <span>回放倍率：</span>
              <select id="speed" class="speed" value="1">
                <option value="0.03125" class="sec32">1/32</option>
                <option value="0.0625" class="sec16">1/16</option>
                <option value="0.125" class="sec8">1/8</option>
                <option value="0.25">1/4</option>
                <option value="0.5">1/2</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="16">16</option>
              </select>
            </section>
            <div class="setSpeed btn h30 ml36">确认</div>
            <!-- 回放控制 -->
            <div class="videoControl mb48">
              <section>
                <span>播放时间向前：</span>
                <select id="forward" class="forward" value="15">
                  <option value="15">15秒</option>
                  <option value="5">5秒</option>
                  <option value="30">30秒</option>
                  <option value="60">60秒</option>
                </select>
              </section>
              <div class="forwardConfirm btn h30 ml36">确认</div>
              <section>
                <span>播放时间向后：</span>
                <select id="backword" class="backword" value="15">
                  <option value="15">15秒</option>
                  <option value="5">5秒</option>
                  <option value="30">30秒</option>
                  <option value="60">60秒</option>
                </select>
              </section>
              <div class="backwordConfirm btn h30 ml36">确认</div>
              <section>
                <span>播放方向：</span>
                <select id="direction" class="direction" value="1">
                  <option value="1">正向</option>
                  <option value="0">负向</option>
                </select>
              </section>
              <div class="directionConfirm btn h30 ml36 mb48">确认</div>
              <div class="controlBtns ml36">
                <div class="pausePlay btn h30">暂停播放</div>
                <div class="resumePlay btn h30">恢复播放</div>
                <div class="preFrame btn h30">前一帧</div>
                <div class="nextFrame btn h30">后一帧</div>
              </div>
            </div>
          </div>
          <!-- 录像下载 -->
          <div class="downLoadWraper">
            <section>
              <span>请输入录像地址：</span>
              <input type="text" id="rtspUrl" value="">
            </section>
            <section>
              <span>类型:</span>
              <select id="playMode" class="playMode">
                <option value="0">MP</option>
                <option value="1">JVMP</option>
                <option value="2">P2P</option>
              </select>
            </section>
            <div class="timeSpanParam">
              <section>
                <span>开始时间：</span>
                <input type="text" id="loadBeginTime" value="">
              </section>
              <section>
                <span>结束时间：</span>
                <input type="text" id="loadEndTime" value="">
              </section>
            </div>
            <section>
              <span>文件前缀：</span>
              <input type="text" id="namePreFix" value="">
            </section>
            <div class="downLoadSpeedParam">
              <section>
                <span>下载速度：</span>
                <select id="downLoadSpeed">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </section>
            </div>
            <section>
              <span>下载句柄：</span>
              <input type="text" id="downloadHandle" value="">
            </section>
            <div class="cloudExtendWraper">
              <section>
                <span>下载云服务录像：</span>
              </section>
              <textarea id="cloudExtend" class="ml36" rows="4" cols="42" value=""></textarea>
            </div>
            <div class="downLoadBtns ml36">
              <div class="startDownLoad btn h30">启动下载</div>
              <div class="stopDownLoad btn h30">停止下载</div>
              <div class="pauseDownLoad btn h30">暂停下载</div>
              <div class="resumeDownLoad btn h30">恢复下载</div>
              <div class="openFolder btn">打开下载目录</div>
            </div>
            <div class="downLoadInfoWraper">
              <div class="downLoadInfo btn ml36">获取下载信息</div>
              <div class="info ml36"></div>
            </div>
          </div>
          <!-- 自定义 -->
          <div class="customWraper">
            <!-- 事件订阅 -->
            <section>
              <span class="eventTitle">事件订阅类型:</span>
              <div class="eventWraper">
                <input type="checkbox" name="evt" id="snapshotCheck" value="EVENT_SNAPSHOT_CLICK">抓拍按钮点击事件
                <input type="checkbox" name="evt" id="playCheck" value="EVENT_PLAY_STATE">播放状态变更事件
              </div>
              <div class="eventWraper">
                <input type="checkbox" name="evt" id="talkCheck" value="EVENT_TALK_STATE">对讲状态变更事件
                <input type="checkbox" name="evt" id="castCheck" value="EVENT_BROADCAST_STATE">广播状态变更事件
              </div>
              <div class="eventWraper">
                <input type="checkbox" name="evt" id="downloadCheck" value="EVENT_DOWNLOAD_STATE">下载状态变更事件
                <input type="checkbox" name="evt" id="paneCheck" value="EVENT_STREAM_INFO">媒体信息通知事件
              </div>
              <div class="eventWraper">
                <input type="checkbox" name="evt" id="downloadCheck" value="EVENT_CUSTOM_MENU">自定义菜单点击事件
                <input type="checkbox" name="evt" id="paneCheck" value="EVENT_OPERATE_PANE">窗格操作事件
              </div>
            </section>
            <div class="setCallbackBtn btn btnWidth ml36">订阅</div>
            <!-- 手动抓图 -->
            <div class="snapshot">
              <section>
                <span>抓拍窗口序号：</span>
                <input type="text" id="snapshotIdx" value="1">
              </section>
              <div class="snapshotBtn btn btnWidth ml36">手动抓拍</div>
            </div>
            <!-- 添加工具栏按钮 -->
            <div class="addToolBtn">
              <section>
                <span>窗口序号：</span>
                <input type="text" id="addBtnIndex" value="1">
              </section>
              <section>
                <span>按钮名称：</span>
                <input type="text" id="toolName" value="">
              </section>
              <section>
                <span>按钮提示：</span>
                <input type="text" id="toolTip" value="">
              </section>
              <div class="addTool btn btnWidth ml36">添加按钮</div>
              <div class="delTool btn btnWidth">删除按钮</div>
            </div>
          </div>
        </div>
        <!-- 提示弹框 -->
        <div class="alertTip">
          <div class="tipTitle">提示信息</div>
          <div class="errorMessage"></div>
          <div class="btn h30 closeBtn">确定</div>
        </div>
      </div>
      <div id="video" class="video"></div>
    </div>
  </div>
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
      getHistory(){
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
  const rect = this.application.getLocationInfo('video');
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
  this.application.createWindow(windowInfo).then((res) => {
    if (res.errorCode === 0) {
      const windowStyle = {
        'loadingGifUrl': "http://image.huawei.com/tiny-lts/v1/images/f395ed1b5d01d3a57c5c56eedd44eb5f_600x600.gif@900-0-90-f.gif",
        'loadingText': "测试...加载中...",
        'videoLoadingText': "测试...视频加载中..."
      };
      this.application.setWindowStyle(windowStyle).then(res => {
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
      this.application.setWindowRect(windowInfo);
      // 绑定窗口信息
      this.application.bindWindow('video', this.appInfo.curWinId);
      this.application.showWindow(this.appInfo.curWinId).then((res) => {
        if (res.errorCode === 0) {
          this.application.setWindowTop(this.appInfo.curWinId, true); // 窗口置顶
        } else {
          alert(res.errorMsg);
        }
      });
    } else {
      alert(res.errorMsg);
    }
  });
},
      // 实现下载
  uploadDown(){
        // 启动下载
  const args = {
    'url': '',
    'playType': '',
    'namePrefix': '',
    'speed': '',
    'timeSpan':{},
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
  let windowId='df339dc7f5b348a4a1155c76ac7f0ca9'
  let command='START_DOWNLOAD'
  console.log('application下载',this.application);
  this.application.sendAction(windowId, command, args).then((res) => {
    console.log('res======',res);
    if (res.errorCode !== 0) {
      alert(res.errorMsg);
    }
    alert('下载句柄：' + res.body.downloadHandle);
  });
      },
    }
 }
 $('.videoBox').on('click', (e) => {
  if (e.target.dataset.item === "LIVE_VIDEO_PURE") {
    // showVideo('LIVE_VIDEO_PURE');
    console.log('3434324234');
  }
  if (e.target.dataset.item === "REPLAY_PURE") {
    // showVideo('REPLAY_PURE');
    console.log('fdjgfdsgfd');
  }
});
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