import App from './app.vue'
import router from '@/router/router'

import '@/assets/css/base.css';

import Vue from 'vue'
import marked from 'marked';

// 配置marked
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

new Vue({
  template: '<App />',
  components: {App},
  router

}).$mount('#app')
