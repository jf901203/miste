<template> 


<div class="root"> 
<Header title="北京">
  
  <span slot="left" class="search">
    <i class="iconfont icon-sousuo"></i>
  </span>
 <span slot="right" class="login">
   <span>登入/注册</span>
 </span>

</Header>
<div class="demo">
    <div class="nav">
      <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- 这是一页 -->
        <div class="swiper-slide">
            
          <a href="javascript:;">
          <img src="./image/nav/1.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/2.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/3.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/4.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/5.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/6.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/7.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/8.jpg" alt="">
          <span>甜品饮品</span>
        </a>
     </div>
        <!-- 这是一页 -->
      <div class="swiper-slide">
            
          <a href="javascript:;">
          <img src="./image/nav/1.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/1.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/1.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/1.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/1.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/1.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/1.jpg" alt="">
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;">
          <img src="./image/nav/1.jpg" alt="">
          <span>甜品饮品</span>
        </a>
     </div>   
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
        
    </div>
     
 </div>   

 <ShopList></ShopList> 

	</div> 

</template> 


<script> 

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Header from 'components/Header/Header'
import ShopList from 'components/ShopList/ShopList'
export default {

components:{
  Header,
  ShopList
},
mounted(){

  this.$nextTick(function(){

   new Swiper('.swiper-container',{
     
      autoplay: true,//可选选项，自动滑动
      pagination: {
      el: '.swiper-pagination',
    },
    loop: true, // 循环模式选项
   
   })
 

  })

}



} 


</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'


.demo
  margin-top 45px
  .nav
    width 100%
   
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          flex-flow wrap
          &>a
            flex-basis 25%
            display flex
            flex-direction column
            justify-content center
            align-items center
            &>img
              width 60px
              height 60px
            &>span
              font-size 12px  
              margin 10px



	
                


										






				

		

</style>