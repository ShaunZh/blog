<template>
  <div>
    <div class="body">
    <router-view></router-view>
    </div>

   </div>
</template>

<script>
  import Header from 'components/header'
   export default {
     components: {
       Header
     }
   }
</script>
