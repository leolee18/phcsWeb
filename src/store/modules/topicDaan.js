import types from '../types.js'
import ser from '../../server/server';
import storage from '../../server/storage.js';

const state={
	mUoid:'',
	mResObj:null,
	mJGImg:require('@/assets/data.png')
}

const getters={
	mUoid(state){
		return state.mUoid;
	},
	mResObj(state){
		return state.mResObj;
	},
	mJGImg(state){
		return state.mJGImg;
	}
}
const actions={
	resLoad({commit,state}, param){
		ser.mPost('topda.php',{action:'daan',uoid:state.mUoid,daan:param.daan}).then((msg)=>{
			if(msg.status == 'success'){
				commit(types.RES_PAGE_OBJ,msg.cont);
				storage.set(state.mUoid,JSON.stringify(msg.cont));
			}
		})
	},
	resCache({commit,state}){
		let mRes = storage.get(state.mUoid);
		mRes = null;
		if(mRes && mRes != ''){
			commit(types.RES_PAGE_OBJ,JSON.parse(mRes));
		}else{
			ser.mPost('topda.php',{action:'caxun',uoid:state.mUoid}).then((msg)=>{
				if(msg.status == 'success'){
					commit(types.RES_PAGE_OBJ,msg.cont);
					storage.set(state.mUoid,JSON.stringify(msg.cont));
				}
			})
		}
	},
	resImgd({commit,state}, param){
		commit(types.RES_IMG_BATE,param);
	},
	setUoid({commit,state}, param){
		commit(types.RES_SET_UOID,param);
	}
}
const mutations={
	[types.RES_PAGE_OBJ](state,data){
		state.mResObj=data;
	},
	[types.RES_IMG_BATE](state,data){
		state.mJGImg=data;
	},
	[types.RES_SET_UOID](state,data){
		state.mUoid=data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}