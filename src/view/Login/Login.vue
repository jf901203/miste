<template> 

<div class="login_contain">
	
 <div class="loginInner">
 	 <div class="login_header">
 	 	<h2 class="login_logo">饿了么外卖</h2>
 	 	<div class="login_header_title">
 	 		<a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
      <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>

 	 	</div>
 	 </div>
 	 <div class="login_content">
 	 	 <form>
 	 	 	  <div :class="{on:loginWay}">
 	 	 	  	 <section class="login_message">
 	 	 	  	 	 <input type="tel" maxlength="11" placeholder="手机号">
 	 	 	  	 	 <button disable="disable" class="get_verification">
 	 	 	  	 	 	获取验证码
 	 	 	  	 	 </button>
 	 	 	  	 </section>
 	 	 	  	 <section class="login_verification">
 	 	 	  	 	 <input type="tel" maxlength="8" placeholder="输入验证码">
 	 	 	  	 </section>
 	 	 	  	 <section class="login_hint">
             温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
             <a href="javascript:;">《用户协议》</a>
 	 	 	  	 </section>
 	 	 	  </div>

 	 	 	  <div :class="{on:!loginWay}">
	 	 	 	  <section>
	 	 	 	  	 <section class="login_message">
	 	 	 	  	 	 <input type="tel" maxlength="8" placeholder="密码">
	 	 	 	  	 	 <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
	 	 	 	  	 	 	 <div class="switch_circle" :class="{right: showPwd}"> </div>
	 	 	 	  	 	 	 <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
	 	 	 	  	 	 </div>
	 	 	 	  	 </section>
	 	 	 	  	 <section class="login_message">
	 	 	 	  	 	<input type="text" maxlength="11" placeholder="验证码">
	 	 	 	  	 	<img src="./image/captcha.svg" class="get_verification" alt="captcha"> 
	 	 	 	  	 </section>
	 	 	 	  </section>
 	 	 	  </div>
 	 	 	  <button class="login_submit">登入</button>
 	 	 </form>
 	 	 <a href="javascript:;" class="about_us">关于我们</a>
 	 </div>
 </div>

<span class="back" @click="$router.back()">
	<i class="iconfont icon-ios-arrow-back"></i>
</span>

</div>

</template> 


<script> 


export default {

data(){
	return{
    showPwd:false,
    loginWay:true
	}
},
  methods:{




  }
  
} 


</script>

<style lang="stylus" rel="stylesheet/stylus">

.login_contain
	width 100%
	height 100%
	background #fff
	.loginInner
		padding-top 60px
		width 80%
		margin 0 auto
		.login_header
			.login_logo
				font-size 40px
				font-weight bold
				text-align center
				color #02a774
			.login_header_title
				padding-top 40px
				text-align center
				>a
					color #333
					font-size 14px
					padding-bottom 4px
					&:first-child
						margin-right 40px
					&.on
						color #02a774
						font-weight 700
						border-bottom 2px solid #02a744	
	.login_content
		>form
			>div
				display none
				&.on
					display block	
				input
					width 100%
					height 100%
					border 1px solid #E8E8E8
					padding-left 10px
					box-sizing border-box
					border-radius 4px
		      outline 0
					font 400 14px Arial
					&:focus 
						border 1px solid #02a774
				.login_message
					position relative
					margin-top 16px
					height 48px
					font-size 14px
					background #fff	
					.switch_button
						border 1px solid blue
						font-size 12px
						border 1px solid #ddd
						border-radius 8px
						width 30px
						height 16px
						line-height 16px
						color #fff
						position absolute
						top 50%
						transform translateY(-50%)
						right 10px
						padding 0 6px
						transition background-color .3s,border-color .3s
						&.off
							background #fff
							.switch_text
								float right
								color #ddd
						.switch_circle
							position absolute
							top -1px
							left -1px	
							width 16px
							height 16px
							border 1px solid #ddd
							border-radius 50%
							background #fff
							box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
							transition transform .3s
							z-index 100
							border-shadow 1px solid #ddd
							&.right
								transform translateX(30px)
						&.on
							background #02a774
					.get_verification
						position absolute
						top 50%
						right 10px
						transform translateY(-50%)
						border 0
						color #ccc
						font-size 14px
						background transparent
				.login_verification
					position relative
					margin-top 16px
					height 48px
					font-size 14px
					background #fff
				.login_hint
					margin-top 12px
					color #999
					font-size 14px
					line-height 20px
					>a
						color #02a774	
			.login_submit
				display block
				border 0
				width 100%
				height 42px
				margin-top 30px
				border-radius 4px
				background #4cd96f
				color #fff
				text-align center
				font-size 16px
				line-height 42px
			.about_us
				font-size 14px
				display block
				text-align center
				margin-top 30px	
				color #02a774				
.back
	position absolute
	top 0px
	display block
	width 100%
	font-size 20px
	padding 10px 2px
	line-height 30px
	box-sizing border-box
	.icon-ios-arrow-back
		font-size 30px
		color #ddd






			



</style>