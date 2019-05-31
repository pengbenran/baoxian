<template>
	<!--我的会员 -->
	<div class="eMember">
		<div class="hear">
			<div class="hear-left">
				<div class="img">
					<img :src="use.img" />
				</div>
				<div class="cant">
					<div class="name">{{use.name}}</div>
					<div class="jf">积分 : {{use.jf}}</div>
				</div>
			</div>
			<div class="hear-right">
				<div @click="jumpJf" class="shop">
					<span class="icon">&#xeb94;</span>
					<span>积分商城</span>
				</div>
				<div @click="jumpCz" class="cz">
					<span class="icon">&#xeb92;</span>
					<span>积分充值</span>
				</div>
			</div>
		</div>
		<!--福利图片-->
		<div class="fl"><img src="/static/images/fl.png" /></div>
		<!--list-->
		<div class="list">
			<div class="tit">
				<span>我的活动</span>
				<span @click="more">更多  > </span>
			</div>
			<div class="totic">
				<div @click="jumpdetail" class="list-li" v-for="(item,index) in list">
					<div class="left"><img :src="item.img" /></div>
					<div class="right">
						<div class="zt">{{item.zt}}</div>
						<div class="name">{{item.name}}</div>
						<div class="day">{{item.day}} 开始</div>
					</div>
				</div>
			</div>
		</div>
		<!--banner广告图-->
		<div class="advertising">
			<img src="/static/images/flBanner.jpg" />
		</div>
		<!--积分兑换-->
		<div class="hd">
			<div class="tit">
				<span> <img src="/static/images/xing.png"/></span>
				<span>精彩活动</span>
			</div>
			<hd :hdList='hdList'></hd>
		</div>

		<mTabbar v-model="select"></mTabbar>
	</div>
</template>

<script>
	import mTabbar from '@/components/tabbar/Tabar.vue'
	import hd from '@/components/hd/index.vue'
	export default {
		name: 'eMember',
		components: {
			mTabbar,
			hd
		},
		methods: {
			more(){
				this.$router.push({
					path: '/eMemberHd'
				})
			},
			//点击积分商城
			jumpJf() {
				this.$router.push({
					path: '/eMemberJf'
				})
			},
			//点击跳转
			jumpCz() {
				this.$router.push({
					path: '/eMemberCz'
				})
			},
			//点击跳转
			jumpdetail() { 
				this.$router.push({
					path: '/hudongbaDetail'
				})
			},
		},
		data() {
			return {
				select: 'tab4',
				use: {
					img: 'static/images/flBanner.jpg',
					name: '我的名称',
					jf: '32'
				},
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
				list: [{
						img: '/static/images/flBanner.jpg',
						zt: '待参与',
						name: '这是产品标题文字到达一个数值',
						day: '05-20 10:00'
					},
					{
						img: '/static/images/flBanner.jpg',
						zt: '已参加',
						name: '这是产品标题文字到达一个数值',
						day: '05-20 10:00'
					}
				]
			}
		}
	}
</script>
<style scoped lang="less">
	.eMember {
		padding-bottom: 50px;
	}
	
	.hear {
		background: linear-gradient(to right, #52b1f1, #1393e9);
		width: 100%;
		height: 115px;
		padding: 0 18px 0 26px;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		display: flex;
		.hear-left {
			align-items: center;
			display: flex;
			.img {
				width: 55px;
				height: 55px;
				border-radius: 50%;
				overflow: hidden;
				border: 2px solid #FFFFFF;
			}
			.cant {
				margin-left: 8px;
				.name {
					font-size: 16px;
					color: #FFFFFF;
				}
				.jf {
					color: #1a95ea;
					font-size: 12px;
					text-align: center;
					width: 68px;
					height: 16px;
					background: #FFFFFF;
					border-radius: 8px;
					margin-top: 7px;
				}
			}
		}
		.hear-right {
			.cz {
				margin-top: 10px;
			}
			.shop,
			.cz {
				width: 67px;
				height: 19px;
				border-radius: 9.5px;
				background: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;
				span {
					display: block;
					color: #2da0ec;
					&:nth-child(1) {
						font-size: 12px;
					}
					&:nth-child(2) {
						margin-left: 3px;
						font-size: 10px;
					}
				}
			}
		}
	}
	
	.fl {
		margin: 20px auto;
		width: 295px;
		height: 80px;
		overflow: hidden;
	}
	
	.list {
		padding: 0 12px;
		box-sizing: border-box;
		width: 100%;
		.tit {
			display: flex;
			justify-content: space-between;
			align-items: center;
			span {
				display: block;
				&:nth-child(1) {
					color: #333333;
					font-size: 16px;
					border-left: 3px solid #333333;
					box-sizing: border-box;
					line-height: 1;
					padding-left: 6px;
				}
				&:nth-child(2) {
					font-size: 12px;
					color: #858484;
				}
			}
		}
		.totic {
			margin: 20px 0 30px 0;
			.list-li {
				justify-content: space-between;
				width: 100%;
				margin-top: 12px;
				display: flex;
				&:nth-child(1) {
					margin-top: 0;
				}
				.left {
					width: 114px;
					height: 67px;
				}
				.right {
					width: 1px;
					flex-grow: 1;
					padding-left: 10px;
					box-sizing: border-box;
					line-height: 1;
					.zt {
						color: #e8b269;
						font-size: 14px;
						padding-top: 4px;
					}
					.name {
						font-size: 14px;
						color: #1f1f1f;
						padding-top: 12px;
						padding-bottom: 10px;
					}
					.day {
						font-size: 11px;
						color: #c1c1c1;
					}
				}
			}
		}
	}
	
	.advertising {
		width: 100%;
		height: 150px;
		overflow: hidden;
	}
	
	.hd {
		padding: 20px 12px;
		.tit {
			display: flex;
			align-items: center;
			width: 100%;
			justify-content: center;
			padding-bottom: 20px;
			span {
				display: block;
				&:nth-child(1) {
					width: 25px;
					height: 25px;
				}
				&:nth-child(2) {
					color: #333333;
					font-size: 14px;
					margin-left: 10px;
				}
			}
		}
	}
</style>