import types from '../types.js'
import ser from '../../server/server';

const state={
	shareDefault:{
		"imgUrl": "http://51coach.com/wwlyweb/imgs/log_lo.png",
		"link": "http://51coach.com/phcs/#/",
		"title": "人生状态平衡测试",
		"desc": "人生状态平衡测试"
	},
	sharePathArr:['/','/topic','/result'],
	wxIs:window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'?true:false
}

const getters={
	shareDefault(state){
		return state.shareDefault;
	}
}

const actions={
	wxInit({commit,state,dispatch}){
		if(state.wxIs){
			wx.ready(function () {
				dispatch('wxUpdata');
			});
			wx.error(function (res) {
			  //alert(res.errMsg);
			});
		}
	},
	wxSetShare({commit,state,dispatch},param){
		if(state.wxIs){
			commit(types.WX_UP_SHARE,param);
			dispatch('wxUpdata');
		}
	},
	wxUpdata({commit,state}){
		//分享给朋友
		wx.onMenuShareAppMessage({
		  title: state.shareDefault.title,
		  link: state.shareDefault.link,
		  desc: state.shareDefault.desc,
		  imgUrl: state.shareDefault.imgUrl,
		  success: function (res) {
			
		  }
		});
		//分享到朋友圈
		wx.onMenuShareTimeline({
		  title: state.shareDefault.desc,
		  link: state.shareDefault.link,
		  imgUrl: state.shareDefault.imgUrl,
		  success: function (res) {
			
		  }
		});
		//分享到QQ
		wx.onMenuShareQQ({
		  title: state.shareDefault.title,
		  desc: state.shareDefault.desc,
		  link: state.shareDefault.link,
		  imgUrl: state.shareDefault.imgUrl,
		  success: function (res) {
			
		  }
		});
		//分享到微博
		wx.onMenuShareWeibo({
		  title: state.shareDefault.title,
		  desc: state.shareDefault.desc,
		  link: state.shareDefault.link,
		  imgUrl: state.shareDefault.imgUrl,
		  success: function (res) {
			
		  }
		});
	},
	loadWXConfig({commit,state,dispatch},param){
		ser.loadGetFun('wechat/jssdk',{url:param.url}).then((res)=>{
			if(res.hasOwnProperty("appId")){
				if(state.wxIs){
					dispatch('wxSetConf',res);
				}
			}else{
				console.log('WXConfig error');
			}
		})
	},
	wxSetConf({commit,state}, param){
		wx.config({
			debug: false,
			appId: param.appId,
			timestamp: parseInt(param.timestamp),
			nonceStr: param.nonStr,
			signature: param.signature,
			jsApiList: [
				'checkJsApi',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo',
				'chooseWXPay'
			]
		});
	}
}
const mutations={
	[types.WX_UP_SHARE](state,data){
		if(data.hasOwnProperty("imgUrl")){
			state.shareDefault.imgUrl = data.imgUrl;
		}
		if(data.hasOwnProperty("link")){
			let mPathBoo = false;
			mPathBoo = state.sharePathArr.some(function(val){
				return data.link === val;
			})
			if(mPathBoo){
				state.shareDefault.link = 'http://51coach.com/phcs/#'+data.link;
			}else{
				state.shareDefault.link = 'http://51coach.com/phcs/#/';
			}
		}
		if(data.hasOwnProperty("title")){
			state.shareDefault.title = data.title;
		}
		if(data.hasOwnProperty("desc")){
			state.shareDefault.desc = data.desc;
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}