<template> 


	<div class="root"> 
     <div id="footer">
     	 <router-link to="/miste" class="item">
     	 	<span class="iconfont icon-zhuye1"></span>
     	 	<span>首页</span>
     	 </router-link>
     	  <router-link to="/search" class="item">
     	 	<span class="iconfont icon-chaxun"></span>
     	 	<span>搜索</span>
     	 </router-link>
     	 <router-link to="/order" class="item">
     	 	<span class="iconfont icon-file"></span>
     	 	<span>订单</span>
     	 </router-link>
     	
     	 <router-link to="/profile" class="item">
     	 	<span class="iconfont icon-yonghu"></span>
     	 	<span>个人</span>
     	 </router-link>
     	 
     </div>
	</div> 

</template> 


<script> 


export default {


} 

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
#footer
	top-border-1px(#e4e4e4)
	width 100%
	position fixed
	height 50px
	width 100%
	left 0
	right 0
	background #fff
	bottom 0
	display flex
	.item
		flex 1
		display flex
		justify-content center
		align-items center
		text-align center
		margin 5px
		flex-flow column
		span
			font-size 12px
			margin-top 2px
			display block
			width 100%
		.iconfont
			font-size 22px
			color #979797
	
</style>