<template>
	<!--领取e福利-->
 <div class="home">
    <div class="banner"><img :src="banner"/></div>    
    <div class="cants" v-for="(item,index) in cant">
    	<div class="img"><img mode='widthFix' :src="item.img"/></div>
    	<div class="more">查看更多 ></div>
    </div>    
    <div class="fx"><img src="/static/images/fx.png"/></div>
    <div class="btn" @click="jump">立即预约</div>
  </div>
</template>
<script>
import API from '@/api/good'
export default { 
  data () {
    return {
			banner:'/static/images/flBanner.jpg',
			goodsId:'',
    	cant:[
    	  {img:"/static/images/flCant.jpg"},
    	  {img:"/static/images/flCant.jpg"},
    	  {img:"/static/images/flCant.jpg"},
    	]
    }
	},
	mounted(){
		this.goodsId =  this.$route.query.id;
    this.Getdetail();
	},
	methods: {
    Getdetail(){
      API.GetgetGoodsInfo({goodsId:this.goodsId}).then((res) => {
				console.log(res,"数据")
			}).catch((err) => {
				console.log("报错的数据",err)
			});
		},

  		//点击跳转
		jump(){ 
			this.$router.push({path:'/homeFlDetail'}) 
		},
	}, 

}
</script>
<style scoped lang="less">
	.fx{
		position:fixed;
		top: 44%;
		right: 0;
		width: 60px;
		height: 60px;
		z-index: 99; 		
	}
	.btn{
		width: 100%;height: 50px;
		color: #ffffff;
		font-size: 20px;
		line-height: 50px;
		text-align: center;
		background: #fe844e;
		position: fixed;left: 0;
		bottom: 0;
		z-index: 99;
	}
	.home{
		padding-bottom: 50px;
		.banner{
			width: 100%;
			height: 223px; 
		}
			.cants{
				position: relative;
				.img{width: 100%;}
				.more{
					color: #fe844e;
					font-size: 14px;  
					position: absolute;bottom: 12px;		
					z-index: 90;	
					width: 100%;
					text-align: center;
					font-weight: bold;		
				}
			}
	}
</style>
