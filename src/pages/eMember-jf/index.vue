<template>
	<!--积分商城-->
	<div class="home">
		<div class="head">
			<div class="tit">总积分</div>
			<div class="num">{{UserInfo.point}}</div>
		</div>

		<div class="cant">
			<div class="tit">
				<span>热门兑换</span>
			</div>
			<div class="list">
				<hd :hdList='Plist'></hd>
			</div>
		</div>
	</div>
</template>

<script>
	import hd from '@/components/hd/index.vue'
	import { Toast } from 'vant';
	import store from '@/store/store'
	import API_G from '@/api/good'
	export default {
		components: {
			hd
		},
		created(){
			this.UserInfo = store.state.userInfo;
		},
		mounted(){
            this.GetGoodAll();
		},
		methods: {
			jumpdetail() {
				this.$router.push({
					path: '/hudongbaDetail'
				})
			},

			//查询所有的活动
			GetGoodAll(){
				let that = this;
                API_G.GetGoodsAll().then((res) => {
                    if(res.code == 0){
						that.Plist = res.Goods;
					}else{
						Toast.fail('失败');
					}
				}).catch((err) => {
						Toast.fail('失败');		
				});
			}
		},
		data() {
			return {
				UserInfo:{},
				Plist:[],
				hdList: [{
						img: "/static/images/flBanner.jpg",
						name: '这里的标题支持支这么',
						jf: 3456
					},
					{
						img: "/static/images/flBanner.jpg",
						name: '这里的标题支持支这么',
						jf: 3456
					},
					{
						img: "/static/images/flBanner.jpg",
						name: '这里的标题支持支这么',
						jf: 3456
					},
				],
			}
		}
	}
</script>
<style scoped lang="less">
 .head{
 	width: 100%;height: 145px;
 	background: linear-gradient(to right,#5593ec,#5f9cf5);
 	text-align: center;
 	line-height: 1;
 	padding-top: 40px;
    box-sizing: border-box;
 	.tit{
 		color: #ffffff;
 		font-size: 22px;
 	}
 	.num{
 		color: #ffffff;
 		font-weight: bold;
 		font-size: 36px;
 		padding: 12px 0;
 	}
 }
 .cant{
 	padding: 0 12px;
 	box-sizing: border-box;
 	.tit{
 		display: flex;
 		align-items: center;
 		justify-content: space-between;
 		padding: 18px 0 15px 0;
 		span{
 			display: block;
 				font-size: 16px;
 				color: #333333;
 		}
 	}
 }
</style>