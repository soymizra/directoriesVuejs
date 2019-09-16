import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Categories from './views/Categories.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/explore',
      name: 'explore',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Explore.vue')
    },
    {
      path: '/categories/:uuid',
      name: 'categories',
      component: Categories
    },
    {
      path: '/post/:uuid',
      name: 'post',
      component: Post
    }
  ]
})
