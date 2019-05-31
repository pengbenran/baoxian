<template>
	<!--活动订单-->
 <div class="home">
    <div class="win">
    	<span class="icon">&#xe6d3;</span>
    	<span>报名成功</span>
    </div>
    <div class="dzp" @click="jump">查看电子票 </div>
    
    <div class="tit">
    	<span></span>
    	<span>邀请好友一起参与活动</span>
    	<span></span>
    </div>
    <div class="img">
    	<span class="icon">&#xe64f;</span>
    	<span class="icon">&#xe6a7;</span>
    	<span class="icon">&#xe702;</span>
    </div>
  </div>
</template>

<script>
export default {
	  methods: {
  		//点击跳转
		jump(){ 
			this.$router.push({path:'/hudongbaOrderDetail'}) 
		},
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="less">
	.win{
		margin-top: 52px;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
		line-height: 1;
		span{
			display: block;
			&:nth-child(1){
				margin-right: 5px;
				font-size: 30px;
				color: #0099ef;
			}
			&:nth-child(2){
				margin-left: 5px;
				font-size: 18px;
				color: #000000;
			}
		}
	}
	.dzp{
		width: 289px;
		height: 40px;
		border: 1px solid #0099ef;
		margin: 0 auto;
		border-radius: 5px;
		line-height: 40px;
		text-align: center;
		color: #0099ef;
		font-size: 16px;
		margin-top: 30px;
	}
	.tit{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 73px auto 0 auto;
		width: 218px;
		span{
			display: block;
			&:nth-child(1){
				width: 28px;
				height: 1px;
				background: #b9b9b9;
			}
			&:nth-child(2){
				font-size: 13px;
				color: #b9b9b9;
				
			}
			&:nth-child(3){
				width: 28px;
				height: 1px;
				background: #b9b9b9;
			}
		}
	}
	.img{
		display: flex;
		width: 222px;
		align-items: center;
		justify-content: space-between;
		margin: 22px auto 0 auto;
		span{
			display: block;
			font-size: 40px;
			color: #00cc00;
			&:nth-child(2){
	          font-size: 43px;
			}
			&:nth-child(3){
	          font-size: 38px;
			}
		}
	}
</style>
