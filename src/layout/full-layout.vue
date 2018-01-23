<template>
  <div class="full-layout">
    <Header></Header>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <Navbar></Navbar>
        </div>
        <div class="content col-9">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import Header from 'components/header.vue'
import Navbar from 'components/navbar.vue'
export default {
  components: { Header, Navbar},
  created() {
  }
}
</script>

<style lang="scss" scoped>
  .full-layout {
  }
  .side-nav {
  }
</style>

