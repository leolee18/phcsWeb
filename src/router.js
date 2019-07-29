import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',  //history   hash
  base: process.env.BASE_URL,
  routes: [
		{
		  path: '/index/:id?',
		  name: 'index',
		  component: () => import('@/views/Index.vue')
		},
		{
		  path: '/topic',
		  name: 'topic',
		  component: () => import('@/views/Topic.vue')
		},
		{
		  path: '/result',
		  name: 'result',
		  component: () => import('@/views/Result.vue')
		},
		{
		  path: '/mresult',
		  name: 'mresult',
		  component: () => import('@/views/MResult.vue')
		},
		{
		  path: '/comp',
		  name: 'Composite',
		  component: () => import('@/views/Composite.vue')
		},
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue')
    }
  ]
})
