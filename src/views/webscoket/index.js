let ws = null;
export function initWebSocket(userInfo, token) {
  let storageUserInfo = {}
  if (localStorage.getItem("userInfo")&&JSON.parse(localStorage.getItem("userInfo")) && JSON.parse(localStorage.getItem("userInfo"))['aiHorizon']) {
    storageUserInfo = JSON.parse(localStorage.getItem("userInfo"))['aiHorizon']
  }
  const userInfoNew = userInfo || storageUserInfo;
  const storageToken = JSON.parse(localStorage.getItem('token'))['aiHorizon'];
  // 创建websocket
  const id = userInfoNew && userInfoNew.id;
  // const url = `ws://172.20.200.10:8847/api/ai/ws/${id}`;
  const url = `ws://10.22.90.23:8847/api/ai/ws/${id}`;
  // 徐州
  // const url = `ws://10.43.64.222:8847/api/ai/ws/${id}`;
  //  const url = `ws://58.213.164.118:18081/gateway/api/ai/ws/${id}`;
  ws = new WebSocket(url);
  // 连接成功发送用户信息给后端
  ws.onopen = function () {
    // console.log("websoket连接成功");
  };
  // 收到消息保存到vuex
  ws.onmessage = function (event) {
    localStorage.setItem("noticeNum", event.data);
    // console.log("接收socket后端数据", event);
  };
  ws.onerror = function () {
    initWebSocket()
  };
  // // 断开连接后进行重连
  ws.onclose = function (event) {
    // console.log("socket自动断开连接", event);
    if (token || storageToken) {
      setTimeout(() => {
        // 断开后重新连接
        initWebSocket()
      }, 1000);
    }
  };
}
export function websocketclose() {
  if (ws) {
    ws.close();
    ws.onclose = function (event) {
      // console.log("socket手动退出断开连接", event);
    };
  }
}
