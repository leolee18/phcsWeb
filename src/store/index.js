import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={}
const getters={}
const actions={}
const mutations={}

import topicDaan from './modules/topicDaan'
import topicList from './modules/topicList'

export default new Vuex.Store({
  state,
	getters,
  mutations,
  actions,
	modules:{
		topicDaan,
		topicList
	}
})
