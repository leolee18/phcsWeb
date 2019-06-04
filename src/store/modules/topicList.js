import types from '../types.js'
import ser from '../../server/server';

const state={
	mTopList:[],
	mResList:[]
}

const getters={
	mTopList(state){
		return state.mTopList;
	},
	mResList(state){
		return state.mResList;
	}
}

const actions={
	topLoad({commit,state}, param){
		ser.mPost('topic.php',{action:'top'}).then((msg)=>{
			//console.log(JSON.stringify(msg.cont))
			if(msg.status == 'success'){
				commit(types.TOP_PAGE_LIST,msg.cont.list);
			}
		})
	},
	topResInit({commit,state}){
		commit(types.TOP_RES_INIT,null);
	},
	setTopRes({commit,state}, param){
		commit(types.TOP_RES_SET,param);
	}
}
const mutations={
	[types.TOP_PAGE_LIST](state,data){
		state.mTopList=data;
	},
	[types.TOP_RES_INIT](state,data){
		state.mResList=[];
	},
	[types.TOP_RES_SET](state,data){
		let mtoid = '',mfbool = true;
		if(data.mt && data.mt != '')mtoid = data.mt.slice(4);
		state.mResList.forEach(function(val,ind){
			if(val.toid === mtoid){
				mfbool = false;
				val.uda = data.rv;
			}
		})
		if(mfbool){
			state.mResList.push({toid:mtoid,uda:data.rv});
		}
		console.log(JSON.stringify(state.mResList));
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}