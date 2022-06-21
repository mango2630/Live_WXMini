!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).TRTC=t()}(this,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function r(e,r,s){return r&&t(e.prototype,r),s&&t(e,s),e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(){var e=(new Date).getTime(),t=new Date(e),r=t.getHours(),s=t.getMinutes(),a=t.getSeconds(),i=t.getMilliseconds();return r=r<10?"0".concat(r):r,s=s<10?"0".concat(s):s,a=a<10?"0".concat(a):a,"".concat(r,":").concat(s,":").concat(a,".").concat(i)}var o="TRTC-WX",u=0,l=1,c=new(function(){function t(){e(this,t),this.logLevel=0}return r(t,[{key:"setLogLevel",value:function(e){this.logLevel=e}},{key:"log",value:function(){var e;this.logLevel===u&&(e=console).log.apply(e,[o,n()].concat(Array.prototype.slice.call(arguments)))}},{key:"warn",value:function(){var e;this.logLevel<=l&&(e=console).warn.apply(e,[o,n()].concat(Array.prototype.slice.call(arguments)))}},{key:"error",value:function(){var e;(e=console).error.apply(e,[o,n()].concat(Array.prototype.slice.call(arguments)))}}]),t}());var h=function(e){var t=/[\u4e00-\u9fa5]/;return e.sdkAppID?void 0===e.roomID&&void 0===e.strRoomID?(c.error("未设置 roomID"),!1):!e.strRoomID&&(e.roomID<1||e.roomID>4294967296)?(c.error("roomID 超出取值范围 1 ~ 4294967295"),!1):e.strRoomID&&t.test(e.strRoomID)?(c.error("strRoomID 请勿使用中文字符"),!1):e.userID?e.userID&&t.test(e.userID)?(c.error("userID 请勿使用中文字符"),!1):!!e.userSig||(c.error("未设置 userSig"),!1):(c.error("未设置 userID"),!1):(c.error("未设置 sdkAppID"),!1)},m={LOCAL_JOIN:"LOCAL_JOIN",LOCAL_LEAVE:"LOCAL_LEAVE",KICKED_OUT:"KICKED_OUT",REMOTE_USER_JOIN:"REMOTE_USER_JOIN",REMOTE_USER_LEAVE:"REMOTE_USER_LEAVE",REMOTE_VIDEO_ADD:"REMOTE_VIDEO_ADD",REMOTE_VIDEO_REMOVE:"REMOTE_VIDEO_REMOVE",REMOTE_AUDIO_ADD:"REMOTE_AUDIO_ADD",REMOTE_AUDIO_REMOVE:"REMOTE_AUDIO_REMOVE",REMOTE_STATE_UPDATE:"REMOTE_STATE_UPDATE",LOCAL_NET_STATE_UPDATE:"LOCAL_NET_STATE_UPDATE",REMOTE_NET_STATE_UPDATE:"REMOTE_NET_STATE_UPDATE",LOCAL_AUDIO_VOLUME_UPDATE:"LOCAL_AUDIO_VOLUME_UPDATE",REMOTE_AUDIO_VOLUME_UPDATE:"REMOTE_AUDIO_VOLUME_UPDATE",VIDEO_FULLSCREEN_UPDATE:"VIDEO_FULLSCREEN_UPDATE",BGM_PLAY_START:"BGM_PLAY_START",BGM_PLAY_FAIL:"BGM_PLAY_FAIL",BGM_PLAY_PROGRESS:"BGM_PLAY_PROGRESS",BGM_PLAY_COMPLETE:"BGM_PLAY_COMPLETE",ERROR:"ERROR",IM_READY:"IM_READY",IM_MESSAGE_RECEIVED:"IM_MESSAGE_RECEIVED",IM_NOT_READY:"IM_NOT_READY",IM_KICKED_OUT:"IM_KICKED_OUT",IM_ERROR:"IM_ERROR"},p={url:"",mode:"RTC",autopush:!1,enableCamera:!1,enableMic:!1,enableAgc:!1,enableAns:!1,enableEarMonitor:!1,enableAutoFocus:!0,enableZoom:!1,minBitrate:600,maxBitrate:900,videoWidth:360,videoHeight:640,beautyLevel:0,whitenessLevel:0,videoOrientation:"vertical",videoAspect:"9:16",frontCamera:"front",enableRemoteMirror:!1,localMirror:"auto",enableBackgroundMute:!1,audioQuality:"high",audioVolumeType:"voicecall",audioReverbType:0,waitingImage:"",waitingImageHash:"",beautyStyle:"smooth",filter:"",netStatus:{}},d={src:"",mode:"RTC",autoplay:!0,muteAudio:!0,muteVideo:!0,orientation:"vertical",objectFit:"fillCrop",enableBackgroundMute:!1,minCache:1,maxCache:2,soundMode:"speaker",enableRecvMessage:!1,autoPauseIfNavigate:!0,autoPauseIfOpenNative:!0,isVisible:!0,_definitionType:"main",netStatus:{}};(new Date).getTime();function v(){var e=new Date;return e.setTime((new Date).getTime()+0),e.toLocaleString()}var g=function(e){var t=[];if(e&&e.TUIScene&&t.push(e.TUIScene),e&&"test"===e.env)return"default";if(wx&&wx.TUIScene&&t.push(wx.TUIScene),wx&&"function"==typeof getApp){var r=getApp().globalData;r&&r.TUIScene&&t.push(r.TUIScene)}return wx&&wx.getStorage({key:"TUIScene",success:function(e){t.push(e.data)}}),t[0]||"default"},y=new(function(){function t(){e(this,t),this.sdkAppId="",this.userId="",this.version="",this.common={}}return r(t,[{key:"setConfig",value:function(e){this.sdkAppId="".concat(e.sdkAppId),this.userId="".concat(e.userId),this.version="".concat(e.version),this.common.TUIScene=g(e)}},{key:"log",value:function(e){wx.request({url:"https://yun.tim.qq.com/v5/AVQualityReportSvc/C2S?sdkappid=1&cmdtype=jssdk_log",method:"POST",header:{"content-type":"application/json"},data:{timestamp:v(),sdkAppId:this.sdkAppId,userId:this.userId,version:this.version,log:JSON.stringify(i(i({},e),this.common))}})}}]),t}()),f="enterRoom",E="exitRoom",A="setPusherAttributes",I="setPlayerAttributes",_="init",L="error",T="connectServer",D="startPusher",b="openCamera",O="screenCap",k="pusherResolution",R="pusherCodeRate",P="collectionFirstFrame",S="encoderStart",M="enterRoomSuccess",U="exitRoomSuccess",C="kicked_out",x="renderFirstFrame",w="miniAppHang",V="closeSuspension",B="other",G="update",N="addUser",j="remove_user",F="update_user_video",H="update_user_audio",Y="pusherStart",K="pusherStop",q="pusherPause",J="pusherResume",W=function(){function t(r,s){e(this,t),this.context=wx.createLivePusherContext(s),this.pusherAttributes={},Object.assign(this.pusherAttributes,p,r)}return r(t,[{key:"setPusherAttributes",value:function(e){return Object.assign(this.pusherAttributes,e),this.pusherAttributes}},{key:"start",value:function(e){c.log("[apiLog][pusherStart]"),y.log({name:Y,options:e}),this.context.start(e)}},{key:"stop",value:function(e){c.log("[apiLog][pusherStop]"),y.log({name:K,options:e}),this.context.stop(e)}},{key:"pause",value:function(e){c.log("[apiLog] pusherPause()"),y.log({name:q,options:e}),this.context.pause(e)}},{key:"resume",value:function(e){c.log("[apiLog][pusherResume]"),y.log({name:J,options:e}),this.context.resume(e)}},{key:"switchCamera",value:function(e){return c.log("[apiLog][switchCamera]"),this.pusherAttributes.frontCamera="front"===this.pusherAttributes.frontCamera?"back":"front",this.context.switchCamera(e),this.pusherAttributes}},{key:"sendMessage",value:function(e){c.log("[apiLog][sendMessage]",e.msg),this.context.sendMessage(e)}},{key:"snapshot",value:function(){var e=this;return c.log("[apiLog][pusherSnapshot]"),new Promise((function(t,r){e.context.snapshot({quality:"raw",complete:function(e){e.tempImagePath?(wx.saveImageToPhotosAlbum({filePath:e.tempImagePath,success:function(r){t(e)},fail:function(e){c.error("[error] pusher截图失败: ",e),r(new Error("截图失败"))}}),t(e)):(c.error("[error] snapShot 回调失败",e),r(new Error("截图失败")))}})}))}},{key:"toggleTorch",value:function(e){this.context.toggleTorch(e)}},{key:"startDumpAudio",value:function(e){this.context.startDumpAudio(e)}},{key:"stopDumpAudio",value:function(e){this.context.startDumpAudio(e)}},{key:"playBGM",value:function(e){c.log("[apiLog] playBGM() url: ",e.url),this.context.playBGM(e)}},{key:"pauseBGM",value:function(e){c.log("[apiLog] pauseBGM()"),this.context.pauseBGM(e)}},{key:"resumeBGM",value:function(e){c.log("[apiLog] resumeBGM()"),this.context.resumeBGM(e)}},{key:"stopBGM",value:function(e){c.log("[apiLog] stopBGM()"),this.context.stopBGM(e)}},{key:"setBGMVolume",value:function(e){c.log("[apiLog] setBGMVolume() volume:",e.volume),this.context.setBGMVolume(e.volume)}},{key:"setMICVolume",value:function(e){c.log("[apiLog] setMICVolume() volume:",e.volume),this.context.setMICVolume(e.volume)}},{key:"startPreview",value:function(e){c.log("[apiLog] startPreview()"),this.context.startPreview(e)}},{key:"stopPreview",value:function(e){c.log("[apiLog] stopPreview()"),this.context.stopPreview(e)}},{key:"reset",value:function(){return console.log("Pusher reset",this.context),this.pusherConfig={},this.context&&(this.stop({success:function(){console.log("Pusher context.stop()")}}),this.context=null),this.pusherAttributes}}]),t}(),Q=function t(r){e(this,t),Object.assign(this,{userID:"",streams:{}},r)},X=function(){function t(r,s){e(this,t),this.ctx=s,this.playerAttributes={},Object.assign(this.playerAttributes,d,{userID:"",streamType:"",streamID:"",id:"",hasVideo:!1,hasAudio:!1,volume:0,playerContext:void 0},r)}return r(t,[{key:"play",value:function(e){this.getPlayerContext().play(e)}},{key:"stop",value:function(e){this.getPlayerContext().stop(e)}},{key:"mute",value:function(e){this.getPlayerContext().mute(e)}},{key:"pause",value:function(e){this.getPlayerContext().pause(e)}},{key:"resume",value:function(e){this.getPlayerContext().resume(e)}},{key:"requestFullScreen",value:function(e){var t=this;return new Promise((function(r,s){t.getPlayerContext().requestFullScreen({direction:e.direction,success:function(e){r(e)},fail:function(e){s(e)}})}))}},{key:"requestExitFullScreen",value:function(){var e=this;return new Promise((function(t,r){e.getPlayerContext().exitFullScreen({success:function(e){t(e)},fail:function(e){r(e)}})}))}},{key:"snapshot",value:function(e){var t=this;return c.log("[playerSnapshot]",e),new Promise((function(e,r){t.getPlayerContext().snapshot({quality:"raw",complete:function(t){t.tempImagePath?(wx.saveImageToPhotosAlbum({filePath:t.tempImagePath,success:function(r){c.log("save photo is success",r),e(t)},fail:function(e){c.error("save photo is fail",e),r(e)}}),e(t)):(c.error("snapShot 回调失败",t),r(new Error("截图失败")))}})}))}},{key:"setPlayerAttributes",value:function(e){Object.assign(this.playerAttributes,e)}},{key:"getPlayerContext",value:function(){return this.playerContext||(this.playerContext=wx.createLivePlayerContext(this.playerAttributes.id,this.ctx)),this.playerContext}},{key:"reset",value:function(){this.playerContext&&(this.playerContext.stop(),this.playerContext=void 0),Object.assign(this.playerAttributes,d,{userID:"",streamType:"",streamID:"",hasVideo:!1,hasAudio:!1,volume:0,playerContext:void 0})}}]),t}(),Z="UserController",z=function(){function t(r,s){e(this,t),this.ctx=s,this.userMap=new Map,this.userList=[],this.streamList=[],this.emitter=r}return r(t,[{key:"userEventHandler",value:function(e){var t=e.detail.code,r=e.detail.message,s={name:B,code:t,message:r,data:""};switch(t){case 0:c.log(r,t);break;case 1001:c.log("已经连接推流服务器",t),s.name=T;break;case 1002:c.log("已经与服务器握手完毕,开始推流",t),s.name=D;break;case 1003:c.log("打开摄像头成功",t),s.name=b;break;case 1004:c.log("录屏启动成功",t),s.name=O;break;case 1005:c.log("推流动态调整分辨率",t),s.name=k;break;case 1006:c.log("推流动态调整码率",t),s.name=R;break;case 1007:c.log("首帧画面采集完成",t),s.name=P;break;case 1008:c.log("编码器启动",t),s.name=S;break;case 1018:c.log("进房成功",t),s.name=M,s.data="event enterRoom success",this.emitter.emit(m.LOCAL_JOIN);break;case 1019:c.log("退出房间",t),r.indexOf("reason[0]")>-1?(s.name=U,s.data="event exitRoom success"):(s.name=C,s.data="event abnormal exitRoom",this.emitter.emit(m.KICKED_OUT));break;case 2003:c.log("渲染首帧视频",t),s.name=x;break;case-1301:c.error("打开摄像头失败: ",t),s.name=L,s.data="event start camera failed",this.emitter.emit(m.ERROR,{code:t,message:r});break;case-1302:s.name=L,s.data="event start microphone failed",c.error("打开麦克风失败: ",t),this.emitter.emit(m.ERROR,{code:t,message:r});break;case-1303:c.error("视频编码失败: ",t),s.name=L,s.data="event video encode failed",this.emitter.emit(m.ERROR,{code:t,message:r});break;case-1304:c.error("音频编码失败: ",t),s.name=L,s.data="event audio encode failed",this.emitter.emit(m.ERROR,{code:t,message:r});break;case-1307:c.error("推流连接断开: ",t),s.name=L,s.data="event pusher stream failed",this.emitter.emit(m.ERROR,{code:t,message:r});break;case-100018:c.error("进房失败: userSig 校验失败，请检查 userSig 是否填写正确",t,r),s.name=L,s.data="event userSig is error",this.emitter.emit(m.ERROR,{code:t,message:r});break;case 5e3:c.log("小程序被挂起: ",t),s.name=w,s.data="miniApp is hang";break;case 5001:c.log("小程序悬浮窗被关闭: ",t),s.name=V;break;case 1021:c.log("网络类型发生变化，需要重新进房",t);break;case 2007:c.log("本地视频播放loading: ",t);break;case 2004:c.log("本地视频播放开始: ",t);break;case 1031:case 1032:case 1033:case 1034:this._handleUserEvent(e)}y.log(s)}},{key:"_handleUserEvent",value:function(e){var t,r=e.detail.code,s=e.detail.message;if(!e.detail.message||"string"!=typeof s)return c.warn(Z,"userEventHandler 数据格式错误"),!1;try{t=JSON.parse(e.detail.message)}catch(e){return c.warn(Z,"userEventHandler 数据格式错误",e),!1}switch(this.emitter.emit(m.LOCAL_STATE_UPDATE,e),y.log({name:G,code:r,message:s,data:t}),r){case 1031:this.addUser(t);break;case 1032:this.removeUser(t);break;case 1033:this.updateUserVideo(t);break;case 1034:this.updateUserAudio(t)}}},{key:"addUser",value:function(e){var t=this;c.log("addUser",e);var r=e.userlist;Array.isArray(r)&&r.length>0&&r.forEach((function(e){var r=e.userid,s=t.getUser(r);s||(s=new Q({userID:r}),t.userList.push({userID:r})),t.userMap.set(r,s),t.emitter.emit(m.REMOTE_USER_JOIN,{userID:r,userList:t.userList,playerList:t.getPlayerList()}),y.log({name:N,userID:r,userList:t.userList,playerList:t.getPlayerList()})}))}},{key:"removeUser",value:function(e){var t=this,r=e.userlist;Array.isArray(r)&&r.length>0&&r.forEach((function(e){var r=e.userid,s=t.getUser(r);s&&s.streams&&(t._removeUserAndStream(r),s.streams.main&&s.streams.main.reset(),s.streams.aux&&s.streams.aux.reset(),t.emitter.emit(m.REMOTE_USER_LEAVE,{userID:r,userList:t.userList,playerList:t.getPlayerList()}),y.log({name:j,userID:r,userList:t.userList,playerList:t.getPlayerList()}),s=void 0,t.userMap.delete(r))}))}},{key:"updateUserVideo",value:function(e){var t=this;c.log(Z,"updateUserVideo",e);var r=e.userlist;Array.isArray(r)&&r.length>0&&r.forEach((function(e){var r=e.userid,s=e.streamtype,a="".concat(r,"_").concat(s),i=a,n=e.hasvideo,o=e.playurl,u=t.getUser(r);if(u){var l=u.streams[s];c.log(Z,"updateUserVideo start",u,s,l),l?(l.setPlayerAttributes({hasVideo:n}),n||l.playerAttributes.hasAudio||t._removeStream(l)):(l=new X({userID:r,streamID:a,hasVideo:n,src:o,streamType:s,id:i},t.ctx),u.streams[s]=l,t._addStream(l)),"aux"===s&&(n?(l.objectFit="contain",t._addStream(l)):t._removeStream(l)),t.userList.find((function(e){if(e.userID===r)return e["has".concat(s.replace(/^\S/,(function(e){return e.toUpperCase()})),"Video")]=n,!0})),c.log(Z,"updateUserVideo end",u,s,l);var h=n?m.REMOTE_VIDEO_ADD:m.REMOTE_VIDEO_REMOVE;t.emitter.emit(h,{player:l.playerAttributes,userList:t.userList,playerList:t.getPlayerList()}),y.log({name:F,player:l.playerAttributes,userList:t.userList,playerList:t.getPlayerList()})}}))}},{key:"updateUserAudio",value:function(e){var t=this,r=e.userlist;Array.isArray(r)&&r.length>0&&r.forEach((function(e){var r=e.userid,s="main",a="".concat(r,"_").concat(s),i=a,n=e.hasaudio,o=e.playurl,u=t.getUser(r);if(u){var l=u.streams.main;l?(l.setPlayerAttributes({hasAudio:n}),n||l.playerAttributes.hasVideo||t._removeStream(l)):(l=new X({userID:r,streamID:a,hasAudio:n,src:o,streamType:s,id:i},t.ctx),u.streams.main=l,t._addStream(l)),t.userList.find((function(e){if(e.userID===r)return e["has".concat(s.replace(/^\S/,(function(e){return e.toUpperCase()})),"Audio")]=n,!0}));var c=n?m.REMOTE_AUDIO_ADD:m.REMOTE_AUDIO_REMOVE;t.emitter.emit(c,{player:l.playerAttributes,userList:t.userList,playerList:t.getPlayerList()}),y.log({name:H,player:l.playerAttributes,userList:t.userList,playerList:t.getPlayerList()})}}))}},{key:"getUser",value:function(e){return this.userMap.get(e)}},{key:"getStream",value:function(e){var t=e.userID,r=e.streamType,s=this.userMap.get(t);if(s)return s.streams[r]}},{key:"getUserList",value:function(){return this.userList}},{key:"getStreamList",value:function(){return this.streamList}},{key:"getPlayerList",value:function(){for(var e=this.getStreamList(),t=[],r=0;r<e.length;r++)t.push(e[r].playerAttributes);return t}},{key:"reset",value:function(){return this.streamList.forEach((function(e){e.reset()})),this.streamList=[],this.userList=[],this.userMap.clear(),{userList:this.userList,streamList:this.streamList}}},{key:"_removeUserAndStream",value:function(e){this.streamList=this.streamList.filter((function(t){return t.playerAttributes.userID!==e&&""!==t.playerAttributes.userID})),this.userList=this.userList.filter((function(t){return t.userID!==e}))}},{key:"_addStream",value:function(e){this.streamList.includes(e)||this.streamList.push(e)}},{key:"_removeStream",value:function(e){this.streamList=this.streamList.filter((function(t){return t.playerAttributes.userID!==e.playerAttributes.userID||t.playerAttributes.streamType!==e.playerAttributes.streamType})),this.getUser(e.playerAttributes.userID).streams[e.playerAttributes.streamType]=void 0}}]),t}(),$=function(){function t(){e(this,t)}return r(t,[{key:"on",value:function(e,t,r){"function"==typeof t?(this._stores=this._stores||{},(this._stores[e]=this._stores[e]||[]).push({cb:t,ctx:r})):console.error("listener must be a function")}},{key:"emit",value:function(e){this._stores=this._stores||{};var t,r=this._stores[e];if(r){r=r.slice(0),(t=[].slice.call(arguments,1))[0]={eventCode:e,data:t[0]};for(var s=0,a=r.length;s<a;s++)r[s].cb.apply(r[s].ctx,t)}}},{key:"off",value:function(e,t){if(this._stores=this._stores||{},arguments.length){var r=this._stores[e];if(r)if(1!==arguments.length){for(var s=0,a=r.length;s<a;s++)if(r[s].cb===t){r.splice(s,1);break}}else delete this._stores[e]}else this._stores={}}}]),t}();return function(){function t(r,s){var a=this;e(this,t),this.env="prod",this.ctx=r,this.eventEmitter=new $,this.pusherInstance=null,this.userController=new z(this.eventEmitter,this.ctx),this.EVENT=m,this.TUIScene=null==s?void 0:s.TUIScene,"test"!==(null==s?void 0:s.env)?wx.getSystemInfo({success:function(e){return a.systemInfo=e}}):(this.env="test",y.log=function(){},c.log=function(){},c.warn=function(){})}return r(t,[{key:"initLog",value:function(e){y.setConfig({sdkAppId:e.sdkAppID,userId:e.userID,version:"wechat-mini",TUIScene:this.TUIScene,env:this.env})}},{key:"on",value:function(e,t,r){c.log("[on] 事件订阅: ".concat(e)),this.eventEmitter.on(e,t,r)}},{key:"off",value:function(e,t){c.log("[off] 取消订阅: ".concat(e)),this.eventEmitter.off(e,t)}},{key:"createPusher",value:function(e){return this.pusherInstance=new W(e,this.ctx),console.log("pusherInstance",this.pusherInstance),this.pusherInstance}},{key:"getPusherInstance",value:function(){return this.pusherInstance}},{key:"enterRoom",value:function(e){c.log("[apiLog] [enterRoom]",e);var t=function(e){if(!h(e))return null;e.scene=e.scene&&"rtc"!==e.scene?e.scene:"videocall",e.enableBlackStream=e.enableBlackStream||"",e.encsmall=e.encsmall||0,e.cloudenv=e.cloudenv||"PRO",e.streamID=e.streamID||"",e.userDefineRecordID=e.userDefineRecordID||"",e.privateMapKey=e.privateMapKey||"",e.pureAudioMode=e.pureAudioMode||"",e.recvMode=e.recvMode||1;var t="";return t=e.strRoomID?"&strroomid=".concat(e.strRoomID):"&roomid=".concat(e.roomID),"room://cloud.tencent.com/rtc?sdkappid=".concat(e.sdkAppID).concat(t,"&userid=").concat(e.userID,"&usersig=").concat(e.userSig,"&appscene=").concat(e.scene,"&encsmall=").concat(e.encsmall,"&cloudenv=").concat(e.cloudenv,"&enableBlackStream=").concat(e.enableBlackStream,"&streamid=").concat(e.streamID,"&userdefinerecordid=").concat(e.userDefineRecordID,"&privatemapkey=").concat(e.privateMapKey,"&pureaudiomode=").concat(e.pureAudioMode,"&recvmode=").concat(e.recvMode,"&component=").concat(function(){var e=wx.TUIScene;switch(e=(e=e||wx.getStorageSync("TUIScene"))||getApp().globalData.TUIScene){case"sampleDemo":return 2;case"TUICalling":return 3;case"TUIRoom":return 5;case"TUIVoiceRoom":return 6;default:return 1}}())}(e);return this.initLog(i(i({},e),{},{env:this.env})),y.log({name:_}),t||(this.eventEmitter.emit(m.ERROR,{message:"进房参数错误"}),y.log({name:L,message:"进房参数错误",data:e})),this.pusherInstance.setPusherAttributes(i(i({},e),{},{url:t})),c.warn("[statusLog] [enterRoom]",this.pusherInstance.pusherAttributes),y.log({name:f,pusherConfig:this.pusherInstance.pusherAttributes}),this.getPusherAttributes()}},{key:"exitRoom",value:function(){this.userController.reset();var e=Object.assign({pusher:this.pusherInstance.reset()},{playerList:this.userController.getPlayerList()});return this.eventEmitter.emit(m.LOCAL_LEAVE),y.log({name:E,data:e}),e}},{key:"getPlayerList",value:function(){var e=this.userController.getPlayerList();return c.log("[apiLog][getStreamList]",e),e}},{key:"setPusherAttributes",value:function(e){return c.log("[apiLog] [setPusherAttributes], ",e),this.pusherInstance.setPusherAttributes(e),c.warn("[statusLog] [setPusherAttributes]",this.pusherInstance.pusherAttributes),y.log({name:A,options:e,pusherConfig:this.pusherInstance.pusherAttributes}),this.pusherInstance.pusherAttributes}},{key:"getPusherAttributes",value:function(){return c.log("[apiLog] [getPusherConfig]"),this.pusherInstance.pusherAttributes}},{key:"setPlayerAttributes",value:function(e,t){c.log("[apiLog] [setPlayerAttributes] id",e,"options: ",t);var r=this._transformStreamID(e),s=r.userID,a=r.streamType,i=this.userController.getStream({userID:s,streamType:a});return i?(i.setPlayerAttributes(t),y.log({name:I,id:e,options:t,playerList:this.getPlayerList()}),this.getPlayerList()):this.getPlayerList()}},{key:"getPlayerInstance",value:function(e){var t=this._transformStreamID(e),r=t.userID,s=t.streamType;return c.log("[api][getPlayerInstance] id:",e),this.userController.getStream({userID:r,streamType:s})}},{key:"switchStreamType",value:function(e){c.log("[apiLog] [switchStreamType] id: ",e);var t=this._transformStreamID(e),r=t.userID,s=t.streamType,a=this.userController.getStream({userID:r,streamType:s});return"main"===a._definitionType?(a.src=a.src.replace("main","small"),a._definitionType="small"):(a.src=a.src.replace("small","main"),a._definitionType="main"),this.getPlayerList()}},{key:"pusherEventHandler",value:function(e){this.userController.userEventHandler(e)}},{key:"pusherNetStatusHandler",value:function(e){var t=e.detail.info;this.pusherInstance.setPusherAttributes(t),this.eventEmitter.emit(m.LOCAL_NET_STATE_UPDATE,{pusher:this.pusherInstance.pusherAttributes})}},{key:"pusherErrorHandler",value:function(e){try{var t=e.detail.errCode,r=e.detail.errMsg;this.eventEmitter.emit(m.ERROR,{code:t,message:r}),y.log({name:L,code:t,message:r})}catch(t){c.error("pusher error data parser exception",e,t)}}},{key:"pusherBGMStartHandler",value:function(e){this.eventEmitter.emit(m.BGM_PLAY_START)}},{key:"pusherBGMProgressHandler",value:function(e){var t,r,s,a;this.eventEmitter.emit(m.BGM_PLAY_PROGRESS,{progress:null===(t=e.data)||void 0===t||null===(r=t.detail)||void 0===r?void 0:r.progress,duration:null===(s=e.data)||void 0===s||null===(a=s.detail)||void 0===a?void 0:a.duration})}},{key:"pusherBGMCompleteHandler",value:function(e){this.eventEmitter.emit(m.BGM_PLAY_COMPLETE)}},{key:"pusherAudioVolumeNotify",value:function(e){this.pusherInstance.pusherAttributes.volume=e.detail.volume,this.eventEmitter.emit(m.LOCAL_AUDIO_VOLUME_UPDATE,{pusher:this.pusherInstance.pusherAttributes})}},{key:"playerEventHandler",value:function(e){c.log("[statusLog][playerStateChange]",e),this.eventEmitter.emit(m.REMOTE_STATE_UPDATE,e)}},{key:"playerFullscreenChange",value:function(e){this.eventEmitter.emit(m.VIDEO_FULLSCREEN_UPDATE)}},{key:"playerNetStatus",value:function(e){console.log(e.currentTarget.dataset,"playerNetStatus");var t=this._transformStreamID(e.currentTarget.dataset.streamid),r=t.userID,s=t.streamType,a=this.userController.getStream({userID:r,streamType:s});!a||a.videoWidth===e.detail.info.videoWidth&&a.videoHeight===e.detail.info.videoHeight||(a.setPlayerAttributes({netStatus:e.detail.info}),this.eventEmitter.emit(m.REMOTE_NET_STATE_UPDATE,{playerList:this.userController.getPlayerList()}))}},{key:"playerAudioVolumeNotify",value:function(e){console.log(e.currentTarget.dataset,"playerAudioVolumeNotify");var t=this._transformStreamID(e.currentTarget.dataset.streamid),r=t.userID,s=t.streamType,a=this.userController.getStream({userID:r,streamType:s}),i=e.detail.volume;a.setPlayerAttributes({volume:i}),this.eventEmitter.emit(m.REMOTE_AUDIO_VOLUME_UPDATE,{playerList:this.userController.getPlayerList()})}},{key:"_transformStreamID",value:function(e){console.log(e,"====");var t=e.lastIndexOf("_");return{userID:e.slice(0,t),streamType:e.slice(t+1)}}}]),t}()}));
//# sourceMappingURL=trtc-wx.js.map
