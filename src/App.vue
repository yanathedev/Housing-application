<template>
  <div class="container">
      <router-view></router-view>
  </div>
  <AppHeader />

</template>

<script>
import AppHeader from './views/AppHeader.vue'

export default {
  name: 'app',
  components: { 
    AppHeader
  }
  
}
</script>

<style lang="scss">

</style>
