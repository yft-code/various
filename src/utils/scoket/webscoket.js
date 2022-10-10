import $ from 'jquery'
const serverIpPort = 'http://127.0.0.1:58088'
let lockReconnect = false //避免重复连接
let wsUrl = "ws://127.0.0.1:58089"
let websocket = null
let tt = null
let num = 0
// let versionInfo={}
let disconnectWebSocket = false
let messageList = {}
let Base = {
    // 版本信息
    versionObj: function () {
        return {
            currentVersion: '1.3.0', // 当前js版本,需手动更新
            mustVersion: '1.0.0', // 必须升级插件
            recommandVersion: '1.1.0' // 推荐升级插件
        }
    },
    // 初始化创建应用
    createApplication: function () {
        return new Promise((resolve) => {
            ajaxGetRequest(serverIpPort, (res) => {
                console.log('resssss',res);
                return resolve(res)
            })
        }).then((res) => {
            if (res.errorCode === 0) {
                createWebSocket()
                res['application'] = application(res.body.appId)
            }
            return res
        })
    },

    // 退出应用，关闭所有窗口，清理资源
    exitApplication: function (appId) {
        let params = {
            name: '/v1/exit-application',
            url: serverIpPort + '/v1/exit-application',
            data: {
                'appId': appId
            }
        }
        return new Promise((resolve) => {
            sendMes(params, function (res) {
                return resolve(res)
            })
        }).then((res) => {
            return res
        })
    },

    // 刷新获取应用
    getApplication: function (appId) {
        createWebSocket()
        return application(appId)
    },

}

function application(appId) {
    // 打开插件窗口，指定窗口类型
    return {
        appId,
        createWindow: function (windowInfo) {
            windowInfo['appId'] = this.appId
            let params = {
                name: '/v1/create-window',
                url: serverIpPort + '/v1/create-window',
                data: windowInfo
            }
            return send(params)
        },

        // 展示窗口
        showWindow: function (windowId) {
            const param = {
                windowId,
                appId: this.appId
            }
            let params = {
                name: '/v1/show-window',
                url: serverIpPort + '/v1/show-window',
                data: param
            }
            return new Promise((resolve) => {
                sendMes(params, function (res) {
                    return resolve(res)
                })
            }).then((res) => {
                if (res.errorCode === 0) {
                    this.windowIdList.forEach(item => {
                        if (item['windowId'] === windowId) {
                            item['showWindow'] = true
                        }
                    })
                }
                return res
            })
        },

        // 隐藏窗口
        hideWindow: function (windowId) {
            let params = {
                name: '/v1/hide-window',
                url: serverIpPort + '/v1/hide-window',
                data: {
                    windowId,
                    appId: this.appId
                }
            }
            return new Promise((resolve) => {
                sendMes(params, function (res) {
                    return resolve(res)
                })
            }).then((res) => {
                if (res.errorCode === 0) {
                    this.windowIdList.forEach(item => {
                        if (item['windowId'] === windowId) {
                            item['showWindow'] = false
                        }
                    })
                }
                return res
            })
        },

        // 关闭窗口
        closeWindow: function (windowId) {
            let params = {
                name: '/v1/close-window',
                url: serverIpPort + '/v1/close-window',
                data: {
                    windowId,
                    appId: this.appId
                }
            }
            return new Promise((resolve) => {
                sendMes(params, function (res) {
                    return resolve(res)
                })
            }).then((res) => {
                if (res.errorCode === 0) {
                    this.windowIdList = this.windowIdList.filter(item => {
                        return item.windowId != windowId
                    })
                }
                return res
            })
        },

        // 设置窗口位置和大小
        setWindowRect: function (windowInfo) {
            windowInfo['appId'] = this.appId
            let params = {
                name: '/v1/set-window-rect',
                url: serverIpPort + '/v1/set-window-rect',
                data: windowInfo
            }
            return send(params)
        },

        // 退出应用，关闭所有窗口，清理资源
        exitApplication: function () {
            let params = {
                name: '/v1/exit-application',
                url: serverIpPort + '/v1/exit-application',
                data: {
                    'appId': appId
                }
            }
            return send(params)
        },

        // 设置窗口层级
        setWindowTop: function (windowId, isTop) {
            let params = {
                name: '/v1/set-window-top',
                url: serverIpPort + '/v1/set-window-top',
                data: {
                    windowId,
                    isTop,
                    appId: this.appId
                }
            }
            return send(params)
        },

        windowIdList: [],
        // 绑定位置信息
        bindWindow: function (id, windowId) {
            const num = this.windowIdList.filter(item => item.windowId === windowId).length
            if (num === 0) {
                this.windowIdList.push({
                    windowId,
                    locationInfo: this.getLocationInfo(id),
                    id,
                    showWindow: false
                })
            }
            this.updataWindow()
        },
        updataWindow: function () {
            let flag = true
            // 定时更新面板大小位置信息
            let setIntervalFun = setInterval(() => {
                if (this.windowIdList.length === 0) {
                    clearInterval(setIntervalFun)
                }
                this.windowIdList.forEach(item => {
                    // 规避：F11全屏后,高度变化1px,触发setWindowRect，导致点击全屏按钮不生效
                    const hSpace = item['locationInfo'].height - this.getLocationInfo(item['id']).height
                    $(window).on('resize', () => {
                        flag = false
                    })
                    if (flag && JSON.stringify(item['locationInfo']) !== JSON.stringify(this.getLocationInfo(item['id'])) && item['showWindow'] && hSpace !== 1) {
                        const rest = this.getLocationInfo(item['id'])
                        const windowInfo = {
                            'windowId': item['windowId'],
                            'left': rest.left,
                            'top': rest.top,
                            'width': rest.width,
                            'height': rest.height,
                            'title': document.title
                        }
                        this.setWindowRect(windowInfo)
                        item['locationInfo'] = this.getLocationInfo(item['id'])
                    }
                    flag = true
                })
            }, 80) // 80毫秒
        },
        // 获取位置信息
        getLocationInfo: function (id) {
            const elt = document.getElementById(id)
            var ua = navigator.userAgent
            if (/firefox/i.test(ua)) {
                const item = screen.availHeight === outerHeight ? 0 : outerHeight === innerHeight ? 0 : outerHeight > innerHeight ? -8 : 8
                return {
                    left: Math.floor(screenX + elt.getBoundingClientRect().left * getZoomScale()),
                    top: Math.floor(screenY + (outerHeight - innerHeight * getZoomScale()) + elt.getBoundingClientRect().top * getZoomScale() + item),
                    width: Math.floor(elt.getBoundingClientRect().width * getZoomScale()),
                    height: Math.floor(elt.getBoundingClientRect().height * getZoomScale()),
                    screenLeft: Math.floor(window.screenLeft)
                }
            } else {
                return {
                    left: Math.floor(elt.getBoundingClientRect().left * getZoomScale()),
                    top: Math.floor(elt.getBoundingClientRect().top * getZoomScale()),
                    width: Math.floor(elt.getBoundingClientRect().width * getZoomScale()),
                    height: Math.floor(elt.getBoundingClientRect().height * getZoomScale()),
                    screenLeft: Math.floor(window.screenLeft)
                }
            }
        },
        // 发送动作指令给窗口
        sendAction: function (windowId, command, args) {
            let params = {
                name: '/v1/send-action-to-window',
                url: serverIpPort + '/v1/send-action-to-window',
                data: {
                    windowId,
                    command,
                    args
                }
            }
            return send(params)
        },
        // 获取插件升级信息
        checkUpgrade: function () {
            let params = {
                name: '/v1/check-upgrade',
                url: serverIpPort + '/v1/check-upgrade'
            }
            return send(params)
        },
        // 扣除部分插件窗口
        cutPartWindow: function (windowId, left, top, width, height) {
            let params = {
                name: '/v1/cut-part-window',
                url: serverIpPort + '/v1/cut-part-window',
                data: {
                    windowId,
                    left,
                    top,
                    width,
                    height
                }
            }
            return send(params)
        },
        // 还原扣除插件窗口
        repairPartWindow: function (windowId, left, top, width, height) {
            let params = {
                name: '/v1/repair-part-window',
                url: serverIpPort + '/v1/repair-part-window',
                data: {
                    windowId,
                    left,
                    top,
                    width,
                    height
                }
            }
            return send(params)
        },
        // 事件通知
        setCallback: function (windowId, evt, callbackFunc) {
            let params = {
                name: '/v1/set-callback',
                url: serverIpPort + '/v1/set-callback',
                data: {
                    windowId,
                    evt,
                    callbackFunc
                }
            }
            return send(params)
        },
        // 添加水印
        setWindowWaterMask: function (waterInfo) {
            let params = {
                name: '/v1/set-window-watermask',
                url: serverIpPort + '/v1/set-window-watermask',
                data: {
                    waterInfo
                }
            }
            return send(params)
        },
        //设置窗口样式
        setWindowStyle: function (windowStyle) {
            let params = {
                name: '/v1/set-window-style',
                url: serverIpPort + '/v1/create-window',
                data: windowStyle
            }
            return send(params)
        }
    }
}

function send(params) {
    return new Promise((resolve) => {
        sendMes(params, function (res) {
            return resolve(res)
        })
    }).then((res) => {
        return res
    })
}

function createWebSocket() {
    try {
        //判断当前浏览器是否支持WebSocket
        if ('WebSocket' in window) {
            websocket = new WebSocket(wsUrl)
            init()
        } else {
            alert('当前浏览器 Not support websocket')
        }
    } catch (e) {
        console.log('catch')
    }
}

function init() {
    //连接发生错误的回调方法
    websocket.onerror = function () {
        console.log('socket连接失败')
        lockReconnect = false
        reconnect(wsUrl)
    }
    //连接成功建立的回调方法
    websocket.onopen = function () {
        console.log('socket连接已打开')
        num = 0
        lockReconnect = true
    }
    //接收到消息的回调方法
    websocket.onmessage = function (event) {
        //拿到任何消息都说明当前连接是正常的
        console.log('返回值1111:', JSON.parse(event.data))
        const message = JSON.parse(event.data)
        const eventName = message.name
        if (eventName === 'EVENT_SNAPSHOT_CLICK') {
            console.log('抓拍事件返回：', message.body)
        } else if (eventName === 'EVENT_CUSTOM_MENU') {
            console.log('点击按钮名称：', message.body.menuName)
        } else if (eventName === 'EVENT_OPERATE_PANE') {
            console.log('窗格操作事件返回：', message.body)
        } else if (eventName === 'EVENT_STREAM_INFO') {
            console.log('媒体信息通知事件返回：', message.body)
        } else if (eventName === 'EVENT_PLAY_STATE') {
            console.log('播放状态变更事件返回：', message.body)
        } else {
            messageList[eventName](message)
        }
    }
    //连接关闭的回调方法
    websocket.onclose = function () {
        console.log('socket连接已关闭')
        lockReconnect = false
        reconnect(wsUrl)
    }
}

function reconnect(url) {
    if (lockReconnect || disconnectWebSocket) {
        return
    }
    //没连接上会一直重连，设置延迟避免请求过多
    tt && clearTimeout(tt)
    tt = setTimeout(function () {
        if (num > 2) {
            clearTimeout(tt)
            lockReconnect = true
            alert('WebSocket重连失败')
        } else {
            createWebSocket(url)
            lockReconnect = false
            num++
        }
    }, 500)
}

// 关闭链接
function closeWebSocket() {
    disconnectWebSocket = true
    websocket.close()
}

//发送消息
function sendMes(obj, callback) {
    const name = obj.name
    console.log('发送消息', obj)
    messageList[name] = callback
    // 连接成功建立，可以进行通信
    if (websocket.readyState === 1) {
        websocket.send(JSON.stringify(obj))
    }
}

function ajaxGetRequest(url, successCallback) {
    const ajaxOptions = {
        method: 'GET',
        url: url,
        success: (result) => {
            if (successCallback) {
                successCallback(result)
            }
        },
        error: (err) => {
            err = JSON.stringify(err)
            if (err.indexOf('error') > -1) {
                window.alert('未安装MP_Web_Plugin插件，请先安装插件！')
            }
        }
    }
    $.ajax(ajaxOptions)
}

// 获取浏览器缩放比例
function getZoomScale() {
    var ratio = 0
    var screen = window.screen
    var ua = navigator.userAgent.toLowerCase()
    if (window.devicePixelRatio !== undefined) {
        undefined
        ratio = window.devicePixelRatio
    } else if (~ua.indexOf('msie')) {
        undefined
        if (screen.deviceXDPI && screen.logicalXDPI) {
            undefined
            ratio = screen.deviceXDPI / screen.logicalXDPI
        }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        undefined
        ratio = window.outerWidth / window.innerWidth
    }
    return ratio
}
export {
    Base,
    getZoomScale,
    ajaxGetRequest,
    sendMes,
    closeWebSocket,
    reconnect,
    init,
    createWebSocket,
    send,
    application,

}