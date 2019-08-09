<template> 

	<div class="root"> 
		<Header title="搜索">
			
		</Header>
  <form action="#" class="search">
	  <input type="text" name="fname" class="search_input" placeholder="请输入商家或美食名称"/>
	  <input type="submit" value="提交" class="submit" />
	</form>
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
.search
	width 100%
	padding 18px 8px
	background #fff	
	margin-top 45px
	position relative
	box-sizing border-box
	.search_input
		width 72%
		height 35px
		border-radius 2px
		background #F2F2F2
		border 1px solid #f2f2f2
		color #333
		font-size 14px
		font-weight bold
		outline none
		padding 0 4px
	.submit
		height 35px
		padding 3px
		background #02A774	
		width 18%
		color #fff
		font-weight bold
		border-radius 2px
		outline none
		font-size 16px
		position absolute
		top 19px
		right 25px
	



</style>