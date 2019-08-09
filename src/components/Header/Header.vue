<template> 

 
   
  <header class="header">
  <slot name="left">
   
  </slot>
  <div class="text">
    {{title}}
  </div>
  <slot name="right">
    
  </slot>
</header>


</template> 


<script> 


export default {
props:['title']
  
} 


</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  height 45px
  width 100%
  position fixed
  background #02A774
  top 0
  left 0
  color #fff
  display flex
  z-index 100
  .search
    flex-basis 15%
    display flex
    justify-content center
    align-items center
  .text
    width 200px
    text-align center
    line-height 45px
    flex 1
    font-size 18px
    font-weight 700
    overflow hidden
    text-overflow ellipsis
    white-space nowrap  
  .login
    flex-basis 20%
    display flex
    justify-content center
    align-items center  
    font-size 12px
    color #fff  



</style>