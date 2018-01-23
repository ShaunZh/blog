<template>
  <div class="article-preview">
    <div class="header">
      <div class="row">
        <div class="col-9">
          <h3>{{articleInfo.title}}</h3>
        </div>
        <div class="col-3">
          <div class="date">{{articleInfo.date}}</div>
          <div class="category">{{articleInfo.category}}</div>
        </div>
      </div>
    </div>
    <div class="body">
      <div v-html="articleIntro"></div>
    </div>
    <div class="foot load-more">
      <router-link :to="{path: '/post'+articleInfo.id}">More>>></router-link>
    </div>
  </div>
</template>

<script>
  import marked from 'marked';
  export default {
    props: ['articleInfo'],
    data() {
      return {
        articleIntro: ''
      }
    },
    created() {
      this.articleIntro = marked(this.articleInfo.articleIntro);
    }
  }
</script>

