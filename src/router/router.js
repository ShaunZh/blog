import VueRouter from 'vue-router'
import Vue from 'vue'

import FullLayout from 'layout/full-layout.vue'

import Home from 'pages/home/home.vue'
import Post from 'pages/post/post.vue'
import About from 'pages/about/about.vue'
import Category from 'pages/category/category.vue'
import Contact from 'pages/contact/contact.vue'
import Works from 'pages/works/works.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/full-layout',
      name: 'full-layout',
      component: FullLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
        },
        {
          path: '/post:id',
          name: 'post',
          component: Post,
        },
        {
          path: '/category',
          name: 'category',
          component: Category,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
        },
        {
          path: '/works',
          name: 'works',
          component: Works,
        },
      ]
    }

  ]
});

export default router

