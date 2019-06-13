<template>
	<!--互动吧-->
	<div class="home">
		<mt-swipe :auto="2000" style="width: 100%;height: 157px;">
			<mt-swipe-item v-for="item in brandList" :key="item.id">
				<img :src="item.imageUrl" class="img" />
			</mt-swipe-item>
		</mt-swipe>
		<!---->
		<div class="lists">
			<div class="tit">
				<span><img src="/static/images/xing.png"/></span>
				<span>精彩活动</span>
			</div>
			<div class="list">
				<div class="list-li" v-for="(item,index) in list" @click="jump(item.goodsId)">
					<div class="left"><img :src="item.thumbnail" /></div>
					<div class="right">
						<div class="name">{{item.name}}</div>
						<div class="text">{{item.name}}</div>
						<div class="prn">{{item.prn}}已报名</div>
						<div class="liji">
							<span>{{item.price}}积分</span>
							<span>{{btntit}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<mTabbar v-model="select"></mTabbar>
	</div>
</template>

<script>
	import mTabbar from '@/components/tabbar/Tabar.vue'
	import API from '@/api/good'
	export default {
		name: 'hudongba',
		components: {
			mTabbar,
		},
		data() {
			return {
				btntit:"立即预约",
				select: 'tab3',
				brandList: [],
				list: []
			}
		},
		mounted(){
			this.GetBrandList();
			this.GetGoodAll();
		},
		methods: {
			//点击跳转
			jump(goodid) {
				this.$router.push({
					path: '/hudongbaDetail',
					query: {
						btntit:this.btntit,
						id:goodid
					}
				})
			},

			//获取轮播
			GetBrandList(){
				let that = this;
                API.GetGetTowBanner().then((res) => {
                    if(res.code == 0){
						this.brandList = res.getTwoBanner;
					}else{
					mui.toast('网络错误',{ duration:'long', type:'div' }) 							
					}
				}).catch((err) => {
					mui.toast('网络错误',{ duration:'long', type:'div' }) 		
				});
			},


			
			//查询所有的活动
			GetGoodAll(){
				let that = this;
                API.GetGoodsAll().then((res) => {
                    if(res.code == 0){
						that.list = res.Goods;
					}else{
					mui.toast('网络错误',{ duration:'long', type:'div' }) 							
					}
				}).catch((err) => {
					mui.toast('网络错误',{ duration:'long', type:'div' }) 		
				});
			}
		},

	}
</script>
<style scoped lang="less">
.home{
	padding-bottom: 50px;
}
	.lists {
		padding: 0 12px;
		box-sizing: border-box;
		.tit {
			display: flex;
			align-items: center;
			padding: 16px 0 12px 0;
			span {
				display: block;
				&:nth-child(1) {
					width: 25px;
					height: 25px;
				}
				&:nth-child(2) {
					font-size: 14px;
					color: #333333;
					margin-left: 7px;
				}
			}
		}
		.list {
			.list-li {
				display: flex;
				justify-content: space-between;
				margin-bottom: 18px;
				.left {
					width: 50%;
					height: 107px;
				}
				.right {
					flex-grow: 1;
					width: 1px;
					padding-left: 12px;
					box-sizing: border-box;
					.name {
						font-size: 13px;
						color: #333333;
					}
					.text {
						color: #999999;
						font-size: 12px;
						padding: 6px 0;
					}
					.prn {
						color: #999999;
						font-size: 9px;
					}
					.liji {
						display: flex;
						align-items: center;
						justify-content: space-between;
						span {
							display: block;
							&:nth-child(1) {
								color: #e8b269;
								font-size: 12px;
							}
							&:nth-child(2) {
								width: 72px;
								height: 24px;
								background: #fdf5f0;
								border: 1px solid #f4bc7e;
								line-height: 24px;
								text-align: center;
								color: #e8b269;
								font-size: 12px;
								border-radius: 12px;
							}
						}
					}
				}
			}
		}
	}
</style>