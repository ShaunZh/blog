<template>
  <div class="page-home">
    <div class="article-list">
      <div class="item bg-light mb-2" v-for="item in articlesList">
        <ArticleIntro :articleInfo="item"></ArticleIntro>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import axios from 'axios';
  import ArticleIntro from 'components/article-intro.vue';

  export default {
    components: {
      "ArticleIntro": ArticleIntro
    },
    data() {
      return {
        articlesList: []
      }
    },
    created() {
      axios.get('https://www.easy-mock.com/mock/5a5ea4c4ef967f55f1ce69ce/blog/article')
        .then( (response) => {
          let responseData = response.data;
          if (responseData.status === 200 && responseData.data.items !== undefined) {
            this.articlesList = responseData.data.items;
            debugger
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }
</script>

<style scoped>
  .article-list .item {
    margin-bottom: 10px;
  }
</style>
