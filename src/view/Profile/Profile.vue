<template> 

	<div class="root"> 
		<Header title="我的"></Header>
    <div class="profile">
    	<router-link to="/login" class="tel">
    		<div class="tel_avator">
    			<img src="./img/2.jpg" alt="">
    		</div>
    		<div class="tel_title">
    			<div class="login">登入/注册</div>
    			<div class="show_num"><i class="iconfont icon-ziyuan4"></i><span>暂无手机绑定</span></div>
    		</div>
    		<div class="tel_row">
    			<i class="iconfont icon-ios-arrow-forward"></i>
    		</div>
    	</router-link>
    </div>
    <div class="profile_info">
    	<div>
    		<span class="info_data_top">
    			0.00<span>元</span>
    		</span>
    		<span class="info_data_bottom">我的余额</span>
    	</div>
    	<div>
    		<span class="info_data_top">
    			0<span>元</span>
    		</span>
    		<span class="info_data_bottom">我的优惠</span>
    	</div>
    	<div>
    		<span class="info_data_top">
    			0<span>分</span>
    		</span>
    		<span class="info_data_bottom">我的积分</span>
    	</div>
    	
    </div>
    <div class="profile_my_order">
    	<ul class="profile_my_order_list">
    		<li>
    			<span class="iconfont icon-wode-dingdan">
    				
    			</span>
    			<span>
    				我的订单
    			</span>
    			<span class="profile_my_order_list_right iconfont icon-ios-arrow-forward">
    				
    			</span>
    		</li>
    		<li>
    			<span class="iconfont icon-jifen1">
    				
    			</span>
    			<span>
    				积分商城
    			</span>
    			<span class="profile_my_order_list_right iconfont icon-ios-arrow-forward">
    				
    			</span>
    		</li>
    		<li>
    			<span class="iconfont icon-ziyuan5">
    				
    			</span>
    			<span>
    				饿了么会员
    			</span>
    			<span class="profile_my_order_list_right iconfont icon-ios-arrow-forward">
    				
    			</span>
    		</li>
    	</ul>
    </div>

    <div class="profile_my_fuwu">
    	<ul>
    		<li>
    			<span>
    				<i class="iconfont icon-fuwuzhongxin"></i>
    			</span>
    			<span>
    				服务中心
    			</span>
    		</li>
    	</ul>
    </div>
	</div> 

</template> 


<script> 

import Header from 'components/Header/Header'

export default {


  components:{
  	Header
  }


} 


</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
	.profile
		width 100%
		background #02A774
		padding 20px 10px
		box-sizing border-box
		margin-top 45px
		.tel
			width 100%
			display flex
			color #fff
			position relative
			.tel_avator
				flex-basis 60px
				height 60px

				img
					width 100%
					height 100%
					border-radius 50%
					outline none
			.tel_title
				flex 1		
				margin-left 10px
				display flex
				flex-direction column
				.login
					font-size 18px
					font-weight 700
					margin-top 10px
				.show_num
					font-size 14px
					margin-top 10px

			.tel_row
				position absolute
				right 10px
				top 20px	
	.profile_info
		background #fff		
		width 100%
		display flex
		bottom-border-1px(#ccc)
		& > div
			flex 1
			display flex
			justify-content center
			align-itmes center
			flex-direction column
			text-align center
			right-border-1px(#ccc)
			padding 10px 0px
			box-sizing border-box
			&:first-child
				border none
			.info_data_top
				font-size 30px
				font-weight 700
				line-height 30px
				color #f90
				& > span
					font-size 10px
			.info_data_bottom
				color #ccc		
	.profile_my_order
		width 100%
		padding 20px 18px 0
		box-sizing border-box
		background #fff
		margin-top 10px	
		.profile_my_order_list
			width 100%
			&>li
				padding 18px 8px 18px 0	
				box-sizing border-box
				color #6E6E6E
				bottom-border-1px(#ccc)
				position relative
				&:last-child
					border none
				.profile_my_order_list_right
					position absolute
					right 0
	.profile_my_fuwu
		width 100%
		margin-top 10px
		padding 20px 18px 0
		background #fff	
		box-sizing border-box
		ul >li
			padding 0px 8px 18px 0	
			bottom-border-1px(#ccc)





			





</style>