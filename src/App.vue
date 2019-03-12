<template>
  <div id="app">
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
/*引入组件*/
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: "",
  components:{
    FooterGuide
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5d
</style>
