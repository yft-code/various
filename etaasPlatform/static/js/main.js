
let appInfo = {
  appId: null,
  curWinId: null,
  videoList: []
};
let application;
let windowType;
let timer; // 错误提示定时器

let versionInfo; // 版本信息

function transVersion(version) {
  return Number(version.split('.').join(''));
}

// 创建应用
$('.createApp').on('click', () => {
  // 初始化创建应用
  Base.createApplication().then((res) => {
    if (res.errorCode === 0) {
      application = res.application;
      appInfo.appId = res.body.appId;
      sessionStorage.setItem("appId", appInfo.appId);
      versionInfo = Base.versionObj();
      let timer = setTimeout(() => {
        $('.startApp').hide();
        $('.videoPanel').show();
        application.checkUpgrade().then(res => {
          if (res.errorCode !== 0) {
            alert(res.errorMsg);
          }
          const pluginVersion = res.body.pluginVersion.substring(12, 17);
          // 插件版本低于js版本 iClient ME V1.1.0_102 Build20211208
          if (transVersion(pluginVersion) < transVersion(versionInfo.currentVersion)) {
            // 强制升级-当前插件版本低于必须升级的插件版本
            if (transVersion(pluginVersion) <= transVersion(versionInfo.mustVersion)) {
              alert('当前插件版本过旧，请关闭浏览器升级插件，以免影响正常使用');
            }
            // 推荐升级-当前插件版本低于推荐升级的插件版本
            if (transVersion(pluginVersion) <= transVersion(versionInfo.recommandVersion) && transVersion(pluginVersion) > transVersion(versionInfo.mustVersion)) {
              alert('当前插件版本较低，推荐关闭浏览器升级到最新版本');
            }
            // 可选升级
            if (transVersion(pluginVersion) > transVersion(versionInfo.recommandVersion)) {
              alert('当前插件有新版本，可关闭浏览器升级到最新版本');
            }
          }
        })
        clearTimeout(timer);
      }, 1500) // 1.5秒
    } else {
      alert(res.errorMsg);
    }
  });
});

// 退出应用
$('.quit').on('click', () => {
  application.exitApplication().then((res) => {
    if (res.errorCode === 0) {
      appInfo = {};
      sessionStorage.setItem('appId', '');
      window.location.reload();
    }
  });
})

// 浏览器获得焦点，设置插件层级
window.onfocus = (e) => {
  console.log('浏览器获取焦点', e);
  if (appInfo.curWinId) {
    application.setWindowTop(appInfo.curWinId, true);
  }
}

// 浏览器失去焦点，设置插件层级
window.onblur = (e) => {
  console.log('浏览器失去焦点', e);
  if (appInfo.curWinId) {
    application.setWindowTop(appInfo.curWinId, false);
  }
  document.location.onfocus = (e) => {
    console.log('地址栏获取焦点', e);

  }
}



// 浏览器切换至别的页签时，显示/隐藏插件
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && appInfo.curWinId) {
    application.hideWindow(appInfo.curWinId);
  }
  if (document.visibilityState === 'visible' && appInfo.curWinId) {
    application.showWindow(appInfo.curWinId);
  }
})

// 关闭窗口时，关闭所有插件窗口后关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = (e) => {
  application.hideWindow(appInfo.curWinId);
}

// 刷新
window.onload = () => {
  if (window.sessionStorage.appId && window.sessionStorage.appId != '') {
    $('.startApp').hide();
    application = Base.getApplication(window.sessionStorage.appId);
    setTimeout(() => {
      if (window.sessionStorage.videoList && window.sessionStorage.videoList != '') {
        const videoList = JSON.parse(window.sessionStorage.videoList);
        videoList.forEach(item => {
          application.closeWindow(item.windowId);
        })
      }
      $('.videoPanel').show();
    }, 100) // 毫秒
  } else {
    $('.startApp').show();
    $('.videoPanel').hide();
  }
};

// 视频播放
$('#videoPlay').on('click', () => {
  $('.startApp').hide();
  $('.videoPanel').show();
})

// 点击实况/录像回放
$('.videoBox').on('click', (e) => {
  if (e.target.dataset.item === "LIVE_VIDEO_PURE") {
    showVideo('LIVE_VIDEO_PURE');
  }
  if (e.target.dataset.item === "REPLAY_PURE") {
    showVideo('REPLAY_PURE');
  }
});

// 确认-播放视频
$('.confirm').on('click', () => {
  const args = {
    'url': $('#rtsp').val(),
    'paneIdx': Number($('#index').val()),
    'playType': Number($('#playType').val())
  }
  if (windowType === "LIVE_VIDEO_PURE") {
    args['associatedVoice'] = $('#voiceOption').val() != 0 // 0不开启 1开启
  }
  if ($('#playType').val() === '2') { // P2P类型
    args['channelId'] = Number($('#channelId').val());
  }
  application.sendAction(appInfo.curWinId, 'START_VIDEO_PLAY', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// 关闭视频
$('.stopVideo').on('click', () => {
  const args = {
    'paneIdx': Number($('#index').val())
  }
  application.sendAction(appInfo.curWinId, 'STOP_VIDEO', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// 获取窗口序号
$('.currentPane').on('click', () => {
  const args = {};
  application.sendAction(appInfo.curWinId, 'GET_PANE_IDX', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
    showAlert(res.body.paneIdx);
  });
});

//类型切换
$('#playType').change(function () {
  if ($('#playType').val() === '2') { // P2P类型
    if (windowType === 'REPLAY_PURE') {
      $('.channelIdParam').show();
    } else {
      $('.channelIdParam').show();
    }
  } else {
    $('.channelIdParam').hide();
  }
  appInfo.videoList.forEach(item => {
    if (item.windowId === appInfo.curWinId) {
      item.playType = $(this).val();
    }
  });
})

// 窗口布局修改
$('#layout').change(function () {
  const args = {
    'layout': Number($(this).val())
  }
  application.sendAction(appInfo.curWinId, 'SWITCH_LAYOUT', args).then((res) => {
    if (res.errorCode === 0) {
      appInfo.videoList.forEach(item => {
        if (item.windowId === appInfo.curWinId) {
          item.layout = $(this).val();
        }
      });
    } else {
      showAlert(res.errorMsg);
    }
  });
})

// 视频比例切换
$('#ratioMode').change(function () {
  const args = {
    'aspectRatioMode': $(this).val(),
    'paneIdx': Number($('#index').val())
  }
  application.sendAction(appInfo.curWinId, 'SET_ASPECT_RATIO_MODE', args).then((res) => {
    if (res.errorCode === 0) {
      appInfo.videoList.forEach(item => {
        if (item.windowId === appInfo.curWinId) {
          item.ratioMode = $(this).val();
        }
      });
    } else {
      showAlert(res.errorMsg);
    }
  });
})

// 检测框样式
$('.styleConfirm').on('click', () => {
  const args = {
    'borderColor': $('#lineStyle').val(),
    'borderThickness': Number($('#lineThickness').val())
  }
  application.sendAction(appInfo.curWinId, 'SET_TLV_STYLE', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 叠加框线
$('#addLine').on('click', (e) => {
  const args = $('#txtContent').val();
  application.sendAction(appInfo.curWinId, 'ADD_OVERLAY', JSON.parse(args)).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// 清空
$('#clearLine').on('click', (e) => {
  const item = $('#txtContent').val();
  if (item.indexOf("paneIdx") > 0) {
    const args = {
      'paneIdx': Number(JSON.parse(item)['paneIdx'])
    }
    application.sendAction(appInfo.curWinId, 'CLEAR_OVERLAY', args).then((res) => {
      if (res.errorCode !== 0) {
        showAlert(res.errorMsg);
      }
    });
  }

});

// 回放倍率
$('.setSpeed').on('click', () => {
  const args = {
    'speed': Number($('#speed').val()),
    'paneIdx': Number($('#windowIndex').val())
  }
  application.sendAction(appInfo.curWinId, 'SET_REPLAY_SPEED', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

/**
 * 
 * @param {当前时间} curTime 
 * @param {增加或减去时间，单位：毫秒} time 
 * @param {true为加，false为减} isAdd 
 */
function getTimeParam(curTime, time, isAdd) {
  let timeStr = curTime.substring(0, 4) + '-' + curTime.substring(4, 6) + '-' + curTime.substring(6, 11) + ':' + curTime.substring(11, 13) + ':' + curTime.substring(13, 15);
  let timeStamp = new Date(timeStr).getTime();
  if (isAdd) {
    timeStamp += time * 1000;
  } else {
    timeStamp -= time * 1000;
  }
  var time = new Date(timeStamp);
  var y = time.getFullYear().toString();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + addZero(m) + addZero(d) + 'T' + addZero(h) + addZero(mm) + addZero(s) + 'Z';
}
function addZero(m) { return m < 10 ? '0' + m : m.toString() }

// 播放时间向前
$('.forwardConfirm').on('click', () => {
  const param = {
    'paneIdx': Number($('#windowIndex').val())
  }
  // 获取当前时间
  application.sendAction(appInfo.curWinId, 'GET_PLAY_TIME', param).then((res) => {
    if (res.errorCode === 0) {
      const args = {
        'playTime': getTimeParam(res.body.playTime, Number($('#forward').val()), false),
        'paneIdx': Number($('#windowIndex').val())
      }
      application.sendAction(appInfo.curWinId, 'SET_PLAY_TIME', args).then((res) => {
        if (res.errorCode !== 0) {
          showAlert(res.errorMsg);
        }
      });
    } else {
      showAlert(res.errorMsg);
    }
  });
});

// 播放时间向后
$('.backwordConfirm').on('click', () => {
  const param = {
    'paneIdx': Number($('#windowIndex').val())
  }
  // 获取当前时间
  application.sendAction(appInfo.curWinId, 'GET_PLAY_TIME', param).then((res) => {
    if (res.errorCode === 0) {
      const args = {
        'playTime': getTimeParam(res.body.playTime, Number($('#backword').val()), true),
        'paneIdx': Number($('#windowIndex').val())
      }
      application.sendAction(appInfo.curWinId, 'SET_PLAY_TIME', args).then((res) => {
        if (res.errorCode !== 0) {
          showAlert(res.errorMsg);
        }
      });
    } else {
      showAlert(res.errorMsg);
    }
  });
});

// 播放方向
$('.directionConfirm').on('click', () => {
  const args = {
    'direction': Number($('#direction').val()),
    'paneIdx': Number($('#windowIndex').val())
  }
  application.sendAction(appInfo.curWinId, 'SET_PLAY_DIRECTION', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// 播放方向切换时
$('.direction').change(function () {
  const val = Number($('#direction').val());
  if (val === 0) { // 负向
    $('.sec32').hide();
    $('.sec16').hide();
    $('.sec8').hide();
  } else {
    $('.sec32').show();
    $('.sec16').show();
    $('.sec8').show();
  }
});

// 暂停播放
$('.pausePlay').on('click', () => {
  const args = {
    'paneIdx': Number($('#windowIndex').val())
  }
  application.sendAction(appInfo.curWinId, 'PAUSE_PLAY', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// 恢复播放
$('.resumePlay').on('click', () => {
  const args = {
    'paneIdx': Number($('#windowIndex').val())
  }
  application.sendAction(appInfo.curWinId, 'RESUME_PLAY', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// 前一帧
$('.preFrame').on('click', () => {
  const args = {
    'paneIdx': Number($('#windowIndex').val())
  }
  application.sendAction(appInfo.curWinId, 'FRAME_STEP_BACKWARD', args).then((res) => {
    if (res.errorCode === 0) {
      $("#direction").val(0);
      $("#speed").val(1);
      $('.sec32').hide();
      $('.sec16').hide();
      $('.sec8').hide();
    } else {
      showAlert(res.errorMsg);
    }
  });
});

// 后一帧
$('.nextFrame').on('click', () => {
  const args = {
    'paneIdx': Number($('#windowIndex').val())
  }
  application.sendAction(appInfo.curWinId, 'FRAME_STEP_FORWARD', args).then((res) => {
    if (res.errorCode === 0) {
      $("#direction").val(1);
      $("#speed").val(1);
      $('.sec32').show();
      $('.sec16').show();
      $('.sec8').show();
    } else {
      showAlert(res.errorMsg);
    }
  });
});

// 播放方向切换，回放倍率重置为1倍
$('#direction').change(function () {
  $("#speed").val(1);
});

function showVideo(type) {
  if (appInfo.videoList.length > 15) {
    return alert('最多打开16个窗口')
  }
  windowType = type;
  console.log('applicationssss',application);
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
      $('.tab>li').removeClass('active');
      $('.playTab').addClass('active');
      $('.tabContent>div').removeClass('showContent');
      $('.playWraper').addClass('showContent');
      appInfo.videoList.push({
        type: type,
        windowId: res.body.windowId,
        layout: "11", // 默认1x1布局
        broadCast: '', // 语音广播
        fileBroadCast: '',// 文件广播
        tabIndex: 0, // tab页签索引
        ratioMode: 'FULL',// 视频比例
        playType: '0' // 类型
      });
      $('#layout').val("11"); // 默认1x1布局
      $("#speed").val(1); // 回放倍率默认1
      $('#ratioMode').val("FULL"); // 视频比例默认铺满
      $('#playType').val("0"); // 类型默认MP
      appInfo.curWinId = res.body.windowId;
      sessionStorage.setItem('curWinId', appInfo.curWinId);
      sessionStorage.setItem('videoList', JSON.stringify(appInfo.videoList));
      $('.videoList section').removeClass('activeWindow');
      if (type === 'LIVE_VIDEO_PURE') {
        $('.videoList').append(`<section class="activeWindow"><span>实况</span><i data-name=${appInfo.curWinId} class="close">X</i></section>`);
        $('.threeTab').text('语音功能');
        $('.downLoadTab').hide();
        $('.channelIdParam').hide();
        $('.voiceOptionParam').show();
        if ($('#playType').val() === '2') {  // P2P类型
          $('.channelIdParam').show();
        }
      } else if (type === 'REPLAY_PURE') {
        $('.videoList').append(`<section class="activeWindow"><span>录像回放</span><i data-name=${appInfo.curWinId} class="close">X</i></section>`);
        $('.threeTab').text('录像控制');
        $('.downLoadTab').show();
        $('.voiceOptionParam').hide();
        if ($('#playType').val() === '2') { // P2P类型
          $('.channelIdParam').show();
        } else {
          $('.channelIdParam').hide();
        }
      }
      $('.videoItem').hide();
      $('.videoContent').show();
      const rect = application.getLocationInfo('video');
      const windowInfo = {
        'windowId': appInfo.curWinId,
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
}

// 切换窗口
$('.videoList').delegate('section', 'click', function (e) {
  $(this).addClass('activeWindow');
  $(this).siblings('section').removeClass('activeWindow');
  let windowName = $(this).find('i').attr('data-name');
  $('.videoItem').hide();
  $('.videoContent').hide();
  $('.tab>li').removeClass('active');
  $('.tabContent>div').removeClass('showContent');
  $(`#${windowName}`).show();
  // 如果之前是打开插件的，先隐藏之前插件
  if (appInfo.curWinId) {
    application.hideWindow(appInfo.curWinId);
  }
  if (checkVideo(windowName).length > 0) {
    appInfo.curWinId = checkVideo(windowName)[0].windowId;
    sessionStorage.setItem('curWinId', appInfo.curWinId);
    $('.videoItem').hide();
    $('.videoContent').show();
    if (checkVideo(windowName)[0].type === 'REPLAY_PURE') {
      windowType = 'REPLAY_PURE';
      $('.threeTab').text('录像控制');
      $('.downLoadTab').show();
      $('.voiceOptionParam').hide();
    } else {
      windowType = 'LIVE_VIDEO_PURE';
      $('.threeTab').text('语音功能');
      $('.downLoadTab').hide();
      $('.voiceOptionParam').show();
    }
    appInfo.videoList.forEach(item => {
      if (item.windowId === appInfo.curWinId) {
        $('#layout').val(item.layout);
        $('#ratioMode').val(item.ratioMode);
        $('#playType').val(item.playType);
        if ($('#playType').val() === '2') { // P2P类型
          if (windowType === 'REPLAY_PURE') {
            $('.channelIdParam').show();
          } else {
            $('.channelIdParam').show();
          }
        } else {
          $('.channelIdParam').hide();
        }
        if (item.tabIndex === 0) { // 视频播放
          $('.playTab').addClass('active');
          $('.playWraper').addClass('showContent');
        } else if (item.tabIndex === 1) { // 叠加框线
          $('.lineTab').addClass('active');
          $('.addLine').addClass('showContent');
        } else if (item.tabIndex === 2) { // 第三个tab页签
          $('.threeTab').addClass('active');
          if (windowType === "LIVE_VIDEO_PURE") {
            $('.voiceWraper').addClass('showContent'); // 语音功能
          } else {
            $('.speedWraper').addClass('showContent'); // 录像控制
          }
        } else if (item.tabIndex === 3) { // 录像下载
          $('.downLoadTab').addClass('active');
          $('.downLoadWraper').addClass('showContent');
        } else {
          $('.customTab').addClass('active');
          $('.customWraper').addClass('showContent');
        }
      }
    });
    const rect = application.getLocationInfo('video');
    const windowInfo = {
      'windowId': appInfo.curWinId,
      'left': rect.left,
      'top': rect.top,
      'width': rect.width,
      'height': rect.height,
      'title': document.title
    }
    application.setWindowRect(windowInfo);
    application.showWindow(appInfo.curWinId);
  } else {
    appInfo.curWinId = null;
  }
});

// 检查插件是否打开
function checkVideo(windowName) {
  return appInfo.videoList.filter(value => value.windowId === windowName);
};

// 关闭插件
$('.videoList').delegate('i', 'click', function (e) {
  e.stopPropagation();
  // 关闭当前插件窗口
  application.closeWindow($(this).attr('data-name')).then((res) => {
    if (res.errorCode === 0) {
      $('.videoList section').removeClass('activeWindow');
      $('.videoList section:first-child').addClass('activeWindow');
      $(`#${e.target.dataset.name}`).prev().show();
      $(`#${e.target.dataset.name}`).remove();
      $(this).parent().remove();
      for (let i = 0; i < appInfo.videoList.length; i++) {
        if (appInfo.videoList[i].windowId === $(this).attr('data-name')) {
          appInfo.videoList.splice(i, 1);
        }
      }
      sessionStorage.setItem('videoList', JSON.stringify(appInfo.videoList));
      if ($(this).attr('data-name') !== appInfo.curWinId) {
        application.hideWindow(appInfo.curWinId);
      }
      $('.videoItem').show();
      $('.videoContent').hide();
    } else {
      showAlert(res.errorMsg);
    }
  });
});


// 开启语音对讲
$('.startTalk').on('click', () => {
  const args = {
    'url': $('#talkUrl').val(),
    'paneIdx': Number($('#windowIndex').val()),
    'associatedVoice': $('#associatedVoice').val() != 0
  }
  application.sendAction(appInfo.curWinId, 'START_TALK', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// 关闭语音对讲
$('.stopTalk').on('click', () => {
  const args = {}
  application.sendAction(appInfo.curWinId, 'STOP_TALK', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// 开启语音广播
$('.startBroadCast').on('click', () => {
  const broadCastUrl = $('#broadCastUrl').val();
  let channelsArr = [];
  // 如果有，说明有多个url
  if (broadCastUrl.indexOf(',') !== -1) {
    channelsArr = broadCastUrl.split(',');
  } else {
    channelsArr.push(broadCastUrl)
  }
  const args = {
    'channels': channelsArr
  }
  application.sendAction(appInfo.curWinId, 'START_BROADCAST', args).then((res) => {
    if (res.errorCode === 0) {
      let index = appInfo.videoList.findIndex(item => {
        return item.windowId === appInfo.curWinId;
      });
      appInfo.videoList[index].broadCast = res.body.talkHandle;
    } else {
      showAlert(res.errorMsg);
    }
  });
});

// 关闭语音广播
$('.stopBroadCast').on('click', () => {
  let index = appInfo.videoList.findIndex(item => {
    return item.windowId === appInfo.curWinId;
  });
  const args = {
    'talkHandle': appInfo.videoList[index].broadCast
  }
  application.sendAction(appInfo.curWinId, 'STOP_BROADCAST', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// 开启文件广播
$('.startFile').on('click', () => {
  const fileUrl = $('#fileUrl').val();
  let channelsArr = [];
  // 如果有，说明有多个url
  if (fileUrl.indexOf(',') !== -1) {
    channelsArr = fileUrl.split(',');
  } else {
    channelsArr.push(fileUrl)
  }
  const args = {
    'channels': channelsArr,
    'fileIndex': Number($('#fileIndex').val()),
    'cycle': Number($('#cicle').val()),
  }
  application.sendAction(appInfo.curWinId, 'START_FILE_BROADCAST', args).then((res) => {
    if (res.errorCode === 0) {
      let index = appInfo.videoList.findIndex(item => {
        return item.windowId === appInfo.curWinId;
      });
      appInfo.videoList[index].fileBroadCast = res.body.talkHandle;
    } else {
      showAlert(res.errorMsg);
    }
  });
});

// 关闭文件广播
$('.stopFile').on('click', () => {
  let index = appInfo.videoList.findIndex(item => {
    return item.windowId === appInfo.curWinId;
  });
  const args = {
    'talkHandle': appInfo.videoList[index].fileBroadCast
  }
  application.sendAction(appInfo.curWinId, 'STOP_BROADCAST', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
});

// tab切换
$('.tab>li').click(function () {
  $(this).addClass('active');
  $(this).siblings('li').removeClass('active');
  $('.tabContent>div').removeClass('showContent');
  let index = $(this).index();
  appInfo.videoList.forEach(item => {
    if (item.windowId === appInfo.curWinId) {
      $('#layout').val(item.layout);
      $('#ratioMode').val(item.ratioMode);
      $('#playType').val(item.playType);
      item['tabIndex'] = index;
    }
  });
  if (index === 0) { // 视频播放
    $('.playWraper').addClass('showContent');
  } else if (index === 1) { // 叠加框线
    $('.addLine').addClass('showContent');
  } else if (index === 2) { // 第三个tab页签
    if (windowType === "LIVE_VIDEO_PURE") {
      $('.voiceWraper').addClass('showContent'); // 语音功能
    } else {
      $('.speedWraper').addClass('showContent'); // 录像控制
    }
  } else if (index === 3) { // 录像下载
    $('.downLoadWraper').addClass('showContent');
  } else {
    $('.customWraper').addClass('showContent');
  }
})

// 弹框提示
function showAlert(errorMsg) {
  $('.alertTip').show();
  $('.errorMessage').text(errorMsg);
  timer = setTimeout(() => {
    $('.alertTip').hide();
    clearTimeout(timer);
  }, 5000); // 5s关闭
}

// 关闭提示框
$('.closeBtn').click(function () {
  $('.alertTip').hide();
  clearTimeout(timer);
})

// 录像下载类型切换
$('#playMode').change(function () {
  if ($('#playMode').val() === '0') { // 普通播放模式
    $('.timeSpanParam').show();
    $('.cloudExtendWraper').hide();
    $('.downLoadSpeedParam').hide();
  } else {
    $('.timeSpanParam').hide();
    $('.cloudExtendWraper').show();
    $('.downLoadSpeedParam').show();
  }
})

// 启动下载
$('.startDownLoad').on('click', () => {
  console.log('启动下载了');
  const args = {
    'url': $('#rtspUrl').val(),
    'playType': Number($('#playMode').val()),
    'namePrefix': $('#namePreFix').val(),
    'speed': Number($('#downLoadSpeed').val())
  }
  if ($('#playMode').val() === '0') { // 普通播放模式
    args['timeSpan'] = {
      'BeginTime': $('#loadBeginTime').val(),
      'EndTime': $('#loadEndTime').val()
    };
  } else {
    args['extend'] = $('#cloudExtend').val()
  }
  console.log('appOnfo.',appInfo.curWinId);
  application.sendAction(appInfo.curWinId, 'START_DOWNLOAD', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
    showAlert('下载句柄：' + res.body.downloadHandle);
  });
});

// 停止下载
$('.stopDownLoad').on('click', () => {
  const args = {
    'downloadHandle': $('#downloadHandle').val()
  }
  application.sendAction(appInfo.curWinId, 'STOP_DOWNLOAD', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 暂停下载
$('.pauseDownLoad').on('click', () => {
  const args = {
    'downloadHandle': $('#downloadHandle').val()
  }
  application.sendAction(appInfo.curWinId, 'PAUSE_DOWNLOAD', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 恢复下载
$('.resumeDownLoad').on('click', () => {
  const args = {
    'downloadHandle': $('#downloadHandle').val()
  }
  application.sendAction(appInfo.curWinId, 'RESUME_DOWNLOAD', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 打开下载目录
$('.openFolder').on('click', () => {
  const args = {
    'downloadHandle': $('#downloadHandle').val()
  }
  application.sendAction(appInfo.curWinId, 'OPEN_DOWNLOADED_FOLDER', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 设置下载速度
$('.setDownLoadSpeed').on('click', () => {
  const args = {
    'downloadHandle': $('#downloadHandle').val(),
    'speed': Number($('#setDownLoadSpeed').val())
  }
  application.sendAction(appInfo.curWinId, 'SET_DOWNLOAD_SPEED', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 获取下载信息
$('.downLoadInfo').on('click', () => {
  const args = {
    'downloadHandle': $('#downloadHandle').val()
  }
  $('.info').empty();
  application.sendAction(appInfo.curWinId, 'GET_DOWNLOAD_INFO', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
    let status = res.body.status === 0 ? '暂停' : '下载'; // 0暂停 1下载
    if ($('#playMode').val() === '0') { // 普通播放模式
      $('.info').append(`
        <div>下载状态：${status}；</div>
        <div>下载速度：${res.body.speed}KB/S；</div>
        <div>下载大小：${res.body.downloadSize}KB；</div>
        <div>剩余下载时间：${res.body.timeLeft}s；</div>
        <div>当前下载进度：${res.body.progress}%；</div>
        <div>已下载时间：${res.body.recordTime}s；</div>`)
    } else {
      $('.info').append(`<div>当前下载进度：${res.body.progress}%；</div>`)
    }
    showAlert(JSON.stringify(res.body));
  });
})

// 扣除部分窗口
$('.cutPartBtn').on('click', () => {
  let posStr = $('#cutPart').val();
  let posArr = posStr.split(',');
  application.cutPartWindow(appInfo.curWinId, Number(posArr[0]), Number(posArr[1]), Number(posArr[2]), Number(posArr[3])).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 还原扣除窗口
$('.repairPartBtn').on('click', () => {
  let posStr = $('#repairPart').val();
  let posArr = posStr.split(',');
  application.repairPartWindow(appInfo.curWinId, Number(posArr[0]), Number(posArr[1]), Number(posArr[2]), Number(posArr[3])).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 添加按钮 
$('.addTool').on('click', () => {
  const args = {
    'paneIdx': Number($('#addBtnIndex').val()),
    'tools': [{
      'toolName': $('#toolName').val(),
      'toolPicNormal': 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAAAXNSR0IArs4c6QAAAQRJREFUSA3tVDsOwjAMTRETt2BhYYCViYnrcAFmLsChWFi6tEgtUnOSGhuo5bhWAwoSCFGpqv3iv1/jnPUUlT+MrINkrKiaHF+gDMnBjADlxe80zJ3cEzfQGYw7YT6bZp383m8Qtqz9MQM4yRStc2tMv5QYy1Y3enLcHXtFBO76ZgewOdd+In1wPiup/4LMeyAO4Mh65MM9bE0akIM1AY0n7gFTyIhWKeHi0MEykqWmlYS02MtoJLdgzkKb/XUxAaaewIJdS3xIjq078CUyWddHYPRQ6EqR5NM2PeJpA3TOEVtonPRnqo4mwCD2DWllNLCX/wQjxiAU7eDrR/QZmg4O9dsOr2Y7Ym3rOniLAAAAAElFTkSuQmCC', //可用正常态图标的base64
      'toolPicHover': 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAAAXNSR0IArs4c6QAAAQ9JREFUSA3tVDsOwjAMTSomrlC6AwusTHThOHABWLkAJ2oZWFiYKDtwjZp4cOSkTiNUkABRqbLz4jzHn1gp6RsU1S6RNjpjhvmUFmdAD53JBIKsvKx92EaCjvEngx4p93ysSX+tdGjTsjoY4Oi4ADW/5aOpg9FCisbPnI2ODsWkjRoNQcEi21d9fghqNePrX9BtHbD+WutG8wHASmwD3jA8Ez7erQ7IzBmlqziFwwOSEeL0dbuSaYstMZGsa/t4CPrLSAZs63E7XmuOt+mhcjf6gkgSnWyu82GjirRPEkeKGQRLWvsy6IAMcaobggmtuQzdmttEHQQnJGdp0Z9+CS1c4lY0go9P0dvbVMzbV4EP0bFZZi2aF5QAAAAASUVORK5CYII=', //可用hover态图标的base64
      'toolTip': $('#toolTip').val(),
    }]
  }
  application.sendAction(appInfo.curWinId, 'ADD_PANE_CUSTOM_TOOL', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 删除按钮
$('.delTool').on('click', () => {
  const args = {
    'paneIdx': Number($('#addBtnIndex').val()),
    'tools': [$('#toolName').val()]
  }
  application.sendAction(appInfo.curWinId, 'DEL_PANE_CUSTOM_TOOL', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 事件订阅
$('.setCallbackBtn').on('click', () => {
  let evt = '';
  let evtArr = [];
  let checkEles = document.getElementsByName('evt');
  checkEles.forEach(item => {
    if (item.checked) {
      evtArr.push(item.defaultValue);
    }
  })
  evt = evtArr.join(',');
  application.setCallback(appInfo.curWinId, evt, () => { }).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 手动抓拍
$('.snapshotBtn').on('click', () => {
  const args = {
    'paneIdx': Number($('#snapshotIdx').val())
  }
  application.sendAction(appInfo.curWinId, 'SNAPSHOT', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 添加水印
$('.addWaterMaskBtn').on('click', () => {
  const waterInfo = $('#addWaterMask').val();
  application.setWindowWaterMask(waterInfo).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})

// 全屏
$('.fullScreenBtn').on('click', () => {
  const args = {};
  application.sendAction(appInfo.curWinId, 'PLUGIN_FULLSCREEN', args).then((res) => {
    if (res.errorCode !== 0) {
      showAlert(res.errorMsg);
    }
  });
})
