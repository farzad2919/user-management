import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../views/Users.vue'),
    },
    {
      path: '/showUser:id',
      name: 'showUser',
      component: () => import('../views/showUser.vue'),
    },
    
    {
      path: '/post',
      name: 'Post',
      component: () => import('../views/Posts.vue')
    },
    {
      path: '/showPost:id',
      name: 'showPost',
      component: () => import('../views/showPost.vue')
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: () => import('../views/CreatePost.vue')
    },
    {
      path: '/editPost',
      name: 'editPost',
      component: () => import('../views/CreatePost.vue')
    },
  ]
})

export default router
