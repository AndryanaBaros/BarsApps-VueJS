<template>
  <div id="app" class="body">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: $font;
  }

</style>
