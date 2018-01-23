<template>
  <div class="page-post">
    <div class="content" v-html="articleContent"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        articleId: '',  // 文章id
        articleContent: '', // 文章内容
      }
    },
    created() {
      this.articleId = this.$route.params.id;
      this.getArticlesList();
    },
    methods: {
      /**
       * @description 获取文章详情
       * @param
       * @return
       */
      getArticleDetails() {

      }
    }
  }
</script>
