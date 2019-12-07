import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={}
const getters={}
const actions={}
const mutations={}

import loginwx from './modules/loginwx'
import wxApi from './modules/wxApi'
import topicDaan from './modules/topicDaan'
import topicList from './modules/topicList'

export default new Vuex.Store({
  state,
	getters,
  mutations,
  actions,
	modules:{
		loginwx,
		wxApi,
		topicDaan,
		topicList
	}
})
