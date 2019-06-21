<template>
	<!--我的活动-->
	<div class="home">
		<div class="cate">
			<div class="cate-li" :class="curr==index?'cate-li-on':''" v-for="(item,index) in cate" @click="catelist(index)">
				{{item.name}}
			</div>
		</div>
		<div class="total">
			<!--待参加-->
			<div class="list1" v-if="curr==0">
				<div class="list-li" v-for="(item,index) in NEW_OrderList">
					<div class="zt">待参加</div>
					<div class="cant-top">
						<div class="left"><img :src="item.orderItemsDO.image" /></div>
						<div class="right">
							<div class="name">{{item.orderItemsDO.name}}</div>
							<div class="day">时间 : {{item.shipNo}} 开始</div>
							<div class="add">地址：{{item.orderItemsDO.name}}</div>
						</div>
					</div>
					<div class="cant-can">
						<div class="cant-can-li">
							<div class="gge">支付方式：{{item.paymentName}}</div>
							<div class="jf">
								<span>¥{{item.orderAmount}}积分</span>
								<span>x{{item.orderItemsDO.num}}</span>
							</div>
						</div>
					</div>
					<div class="cant-bottom">
						<div class="cant-bottom-li">
							<div class="hj">
								<span>共{{item.orderItemsDO.num}}张票</span>
								<span>合计 : ¥{{item.orderAmount}}积分</span>
							</div>
							<div class="btn">
								<span @click="closeOrder(item.orderId)">取消报名</span>
								<span @click="jumpdet(item.orderId)">查看电子票</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--已参加-->
			<div class="list2" v-if="curr==1">
				<div class="list-li" v-for="(item,index) in OLD_OrderList">
					<div class="zt">已参加</div>
					<div class="cant-top">
						<div class="left"><img :src="item.orderItemsDO.image" /></div>
						<div class="right">
							<div class="name">{{item.orderItemsDO.name}}</div>
							<div class="day">时间 : {{item.shipNo}} 开始</div>
							<div class="add">地址：{{item.orderItemsDO.name}}</div>
						</div>
					</div>
					<div class="cant-can">
						<div class="cant-can-li">
							<div class="gge">支付方式：{{item.paymentName}}</div>
							<div class="jf">
								<span>¥{{item.orderAmount}}积分</span>
								<span>x{{item.orderItemsDO.num}}</span>
							</div>
						</div>
					</div>
					<div class="cant-bottom">
						<div class="cant-bottom-li">
							<div class="hj">
								<span>共{{item.orderItemsDO.num}}张票</span>
								<span>合计 : ¥{{item.orderAmount}}积分</span>
							</div>
							<div class="btn">
								<!-- <span>取消报名</span> -->
								<!-- <span @click="jumpdet">查看电子票</span> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import API from '@/api/order'
	import { Toast } from 'vant';
	import { Dialog } from 'vant';
	import store from '@/store/store'
	export default {
		components: {},
		data() {
			return {
				orderList:{},
				curr: 0,
				cate: [{
						name: "待参加"
					},
					{
						name: "已参加"
					},
				]
			}
		},
		created(){
            this.orderList = store.state.orderList;
		},
		computed:{
			NEW_OrderList(){
				return this.orderList.filter(f => f.status == 1)
			},
			OLD_OrderList(){
				return this.orderList.filter(f => f.status == 2)
			},
		},
		mounted(){
			
		},
		methods: {
			//点击跳转
			jump() {
				this.$router.push({
					path: '/hudongbaDetail'
				})
			},
			catelist(index) {
				this.curr = index
			},

			//点击跳转
			jumpdet(id){ 
				this.$router.push({path:'/hudongbaOrderDetail',query:{id:id}}) 
			},

			//取消订单
			closeOrder(orderId){
				Dialog.confirm({
				title: '提示',
				message: '是否确认取消'
				}).then(() => {
				// on confirm
					let that = this;
					API.cancelOrder({orderId:orderId}).then((res) => {
						if(res.code == 0){
							let index = that.NEW_OrderList.findIndex(item => item.orderId == orderId)
							that.NEW_OrderList[index].status = 3;
							Toast.success('取消成功');
						}
					}).catch((err) => {
						Toast.fail('取消失败');
					});
				}).catch(() => {
				//    Toast.fail('');
				});

			}

	
		},

	}
</script>
<style scoped lang="less">
	.cate {
		display: flex;
		justify-content: space-around;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 44px;
		background: #FFFFFF;
		line-height: 44px;
		text-align: center;
		z-index: 99;
		.cate-li {}
		.cate-li-on {
			color: #00a0ea;
			border-bottom: 1px solid #00a0ea;
		}
	}
	
	.total {
		box-sizing: border-box;
		padding: 50px 0;
		.list1,
		.list2 {
			.list-li {
				border-top: 12px solid #edefee;
				.zt {
					color: #00a0ea;
					font-size: 14px;
					width: 100%;
					padding-top: 7px;
					padding-bottom: 9px;
					padding-left: 12px;
					box-sizing: border-box;
				}
				.cant-top {
					display: flex;
					box-sizing: border-box;
					width: 100%;
					padding: 0 12px;
					.left {
						width: 90px;
						height: 53px;
					}
					.right {
						width: 1px;
						flex-grow: 1;
						margin-left: 7px;
						line-height: 1;
						.name {
							font-size: 14px;
							color: #333333;
							padding-bottom: 10px;
							padding-top: 2px;
						}
						.day {
							color: #999999;
							font-size: 11px;
						}
						.add {
							color: #999999;
							font-size: 11px;
							margin-top: 3px;
						}
					}
				}
				.cant-can {
					padding: 0 12px;
					box-sizing: border-box;
					width: 100%;
					.cant-can-li {
						display: flex;
						justify-content: space-between;
						align-items: center;
						border-bottom: 1px solid #DEDEDE;
						padding: 20px 0 14px 0;
					}
					.gge {
						color: #999999;
						font-size: 11px;
					}
					.jf {
						color: #1a1a1a;
						font-size: 12px;
						span {
							&:nth-child(1) {
								margin-right: 10px;
							}
						}
					}
				}
				.cant-bottom {
					display: flex;
					justify-content: flex-end;
					padding:  12px;
					box-sizing: border-box;
					.cant-bottom-li {
						.hj {
							color: #1a1a1a;
							font-size: 14px;
							display: flex;
							justify-content: flex-end;
							span{
								display: block;
								&:nth-child(1){
									margin-right: 4px;
								}
							}
						}
						.btn{
							display: flex;
							margin-top: 12px;
							
							span{
								display: block;
								&:nth-child(1){
									width: 71px;
									height: 24px;
									border-radius: 3px;
									border: 1px solid #999999;
									color: #333333;
									font-size: 12px;
									text-align: center;
									line-height: 24px;
									margin-right:6px ;
								}
								&:nth-child(2){
									width: 76px;
									height: 24px;
									border-radius: 3px;
									border: 1px solid #00a0ea;
									background: #00a0ea;
									color: #FFFFFF;
									font-size: 12px;
									text-align: center;
									line-height: 24px;
								}
							}
						}
					}
				}
			}
		}
				.list2{
			.list-li{
				.zt{
					color: #f79a63;
				}
			}
		}
	}
</style>