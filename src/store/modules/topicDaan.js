import types from '../types.js'
import ser from '../../server/server';

const state={
	mResObj:null
}

const getters={
	mResObj(state){
		return state.mResObj;
	}
}

const actions={
	resLoad({commit,state}, param){
		ser.mPost('topda.php',{action:'daan',uoid:param.uoid,daan:param.daan}).then((msg)=>{
			//console.log(JSON.stringify(msg.cont))
			if(msg.status == 'success'){
				commit(types.RES_PAGE_OBJ,msg.cont);
			}
		})
	}
}
const mutations={
	[types.RES_PAGE_OBJ](state,data){
		state.mResObj=data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}