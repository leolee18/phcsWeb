import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',  //history   hash
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
		{
		  path: '/demo',
		  name: 'demo',
		  component: () => import('@/views/demo.vue')
		}
  ]
})
