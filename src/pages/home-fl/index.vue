<template>
	<!--领取e福利-->
 <div class="home">
    <div v-html="goodInfo.intro?goodInfo.intro:'暂无详情'"></div>
    <div class="btn" @click="jump">立即预约</div>
  </div>
</template>
<script>
import API from '@/api/good'
import { Toast } from 'vant';
export default { 
  data () {
    return {
			btntit:"立即预约",
			goodInfo:{},
			goodsId:'',
    	
    }
	},
	mounted(){
		this.goodsId =  this.$route.query.id;
    this.Getdetail();
	},
	methods: {
    Getdetail(){
			let that = this;
      API.GetgetGoodsInfo({goodsId:this.goodsId}).then((res) => {
				if(res.code == 0){
           that.goodInfo = res.Goods;
				}else{
					Toast.fail('请求失败1');
				}
			}).catch((err) => {
				Toast.fail('请求失败2');
			});
		},

  		//点击跳转
		jump(){ 
			let that = this;
			this.$router.push({
					path: '/hudongbaDetail',
					query: {
						btntit:this.btntit,
						id:that.goodsId
					}
				})
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
