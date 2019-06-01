<template>
	<!--预约成功-->
 <div class="home">
    <div class="banner">
    	<p class="img"><img src="/static/images/succeed.jpg"/></p>
    	<p class="tit">预约成功</p>
    </div> 
    <div class="text">立即分享  领取积分</div>
    <div class="btn">立即分享</div>
    <div class="jump" @click="jump">回到首页</div>
 </div> 
</template>

<script>
export default {
	 methods: { 
  		//点击跳转
		jump(){ 
			this.$router.push({path:'/'}) 
		},
  }, 
  data () {
    return {
    	
    }
  }
}
</script>
<style scoped lang="less">
	.home{
		background: #FFFFFF;
		height: 100%;
		width: 100%;
		position: absolute;
		.banner{ 
			width: 100%;
			height: 400px;
			position: relative;
			.img{width: 100%;height: 100%;}
			.tit{
				display: block;
				position: absolute;
				top: 103px;
				text-align: center;
				width: 100%;
				color: #ffffff;
				font-size: 24px;
			}
		}
		.text{
			 text-align: center;
		     color: #212121;
		     font-size: 18px;
		}
		.btn{
			width: 270px;
			height: 40px;
			border-radius: 20px;
			line-height: 40px;
			text-align: center;
			background: linear-gradient(to right,#ff861b,#ffb527);
			margin: 0 auto;
			color: #ffffff;
			font-size: 16px;
			margin-top: 14px;
		}
		.jump{
			width: 270px;
			height: 38px;
			border: 1px solid #ff8a1c;
			border-radius: 20px;
			line-height: 38px;
			text-align: center;
			margin: 0 auto;
			color: #ff9c20;
			font-size: 16px;
			margin-top: 12px;
		}
	}
</style>
