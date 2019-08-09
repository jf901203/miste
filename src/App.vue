<template>
  <div id="app">
    
    <router-view/>
    <FooterGuied v-show="$route.meta.login_require"/>
    
  </div>
</template>



<script>

import FooterGuied from 'components/FooterGuide/FooterGuide'
export default {
 

 components:{
  FooterGuied
 }


}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  
#app
  height 100%
  width 100%
  background #f5f5f5

</style>
