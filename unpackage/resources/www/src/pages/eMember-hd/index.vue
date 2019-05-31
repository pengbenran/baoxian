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
				<div class="list-li" v-for="(item,index) in list">
					<div class="zt">待参加</div>
					<div class="cant-top">
						<div class="left"><img :src="item.img" /></div>
						<div class="right">
							<div class="name">{{item.name}}</div>
							<div class="day">时间 : {{item.day}} 开始</div>
							<div class="add">{{item.add}}</div>
						</div>
					</div>
					<div class="cant-can">
						<div class="cant-can-li">
							<div class="gge">{{item.gge}}</div>
							<div class="jf">
								<span>¥{{item.jf}}积分</span>
								<span>x{{item.num}}</span>
							</div>
						</div>
					</div>
					<div class="cant-bottom">
						<div class="cant-bottom-li">
							<div class="hj">
								<span>共{{item.num}}张票</span>
								<span>合计 : ¥{{item.jf}}积分</span>
							</div>
							<div class="btn">
								<span>取消报名</span>
								<span @click="jumpdet">查看电子票</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--已参加-->
			<div class="list2" v-if="curr==1">
								<div class="list-li" v-for="(item,index) in list">
					<div class="zt">已参加</div>
					<div class="cant-top">
						<div class="left"><img :src="item.img" /></div>
						<div class="right">
							<div class="name">{{item.name}}</div>
							<div class="day">时间 : {{item.day}} 开始</div>
							<div class="add">{{item.add}}</div>
						</div>
					</div>
					<div class="cant-can">
						<div class="cant-can-li">
							<div class="gge">{{item.gge}}</div>
							<div class="jf">
								<span>¥{{item.jf}}积分</span>
								<span>x{{item.num}}</span>
							</div>
						</div>
					</div>
					<div class="cant-bottom">
						<div class="cant-bottom-li">
							<div class="hj">
								<span>共{{item.num}}张票</span>
								<span>合计 : ¥{{item.jf}}积分</span>
							</div>
							<div class="btn">
								<span>取消报名</span>
								<span>查看电子票</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
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
			jumpdet(){ 
				this.$router.push({path:'/hudongbaOrderDetail'}) 
			},

		},
		data() {
			return {
				curr: 0,
				list: [{
						img: "/static/images/flBanner.jpg",
						name: '这是标题显示字体到了字数限制后',
						day: '2019-05-21  10:00',
						add: '地址：参加地点需要提供',
						gge: '【显示免费】项目标题达到字数隐藏',
						jf: 35,
						num: 1,
					},
					{
						img: "/static/images/flBanner.jpg",
						name: '这是标题显示字体到了字数限制后',
						day: '2019-05-21  10:00',
						add: '地址：参加地点需要提供',
						gge: '【显示免费】项目标题达到字数隐藏',
						jf: 35,
						num: 1,
					},
					{
						img: "/static/images/flBanner.jpg",
						name: '这是标题显示字体到了字数限制后',
						day: '2019-05-21  10:00',
						add: '地址：参加地点需要提供',
						gge: '【显示免费】项目标题达到字数隐藏',
						jf: 35,
						num: 1,
					}
				],
				cate: [{
						name: "待参加"
					},
					{
						name: "已参加"
					},
				]
			}
		}
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
				border-top: 4px solid #edefee;
				&:nth-child(1) {
					border-top: 10px solid #edefee;
				}
				.zt {
					color: #00a0ea;
					font-size: 14px;
					text-align: right;
					width: 100%;
					padding-top: 7px;
					padding-bottom: 9px;
					padding-right: 12px;
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
						border-bottom: 1px solid #999999;
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