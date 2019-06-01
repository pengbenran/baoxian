<template>
	<!--活动详情-->
	<div class="home">
		<mt-swipe :auto="4000" style="width: 100%;height: 220px;">
			<mt-swipe-item v-for="item in items" :key="item.id">
				<img :src="item.url" class="img" />
			</mt-swipe-item>
		</mt-swipe>
		<div class="title">
			<div class="title-top">
				<div class="name">医疗保险一般指基本医疗保险经济损失而建立</div>
				<div class="nums">
					<div class="num1">
						<span class="icon">&#xe609;</span>
						<span>21294</span>
					</div>
					<div class="num2">
						<span class="icon">&#xe60b;</span>
						<span>223</span>
					</div>
					<div class="num3">
						<span class="icon">&#xe61f;</span>
						<span>130</span>
					</div>
					<div class="bao">
						<span class="icon">&#xe603;</span>
						<span>交易保障</span>
					</div> 
				</div>
			</div>
			<div class="title-bottom">
				<div class="bottom1">
					<span class="icon">&#xe605;</span>
					<span>03-20  10:30至05-28   00：00</span>
				</div>
				<div class="bottom2">
					<span class="icon">&#xe60a;</span>
					<span>线上活动</span>
				</div>
				
				<div class="bottom3" v-if="$route.query.btntit=='立即兑换'">
					<span class="icon">&#xe607;</span>
					<span>3465积分</span>
				</div>
				
				<div class="bottom3" v-else>
					<span class="icon">&#xe600;</span>
					<span>已报名39人</span>
				</div>
				
				
				
			</div>
		</div>
		<div class="xian"></div>

		<!--详情-->
		<div class="detail">
			<div class="tit">
				图文详情
			</div>
			<div class="cant">

			</div>
		</div>
		<!--底部-->
		<div class="footer">
			<div class="footer-li">
				<span class="icon">&#xe65e;</span>
				<span>客服</span>
			</div>

			<div class="footer-li">
				<span class="icon">&#xe601;</span>
				<span>首页</span>
			</div>

			<div class="footer-li">
				<span class="icon">&#xe655;</span>
				<span>分享</span>
			</div>

			<div class="btn" @click="btn">{{$route.query.btntit}}</div>
		</div>

		<!--弹窗-->
		<div class="popup" v-if="ispopup" @click="popup">
			<div class="pop" v-if="ispop" @click.stop> 
			<div class="cha icon" @click="popup">&#xe61a;</div>
				<div class="tit">
					<span class="icon"></span>
					<span>温馨提示：次内容客户提供</span>
				</div>
				<div class="box">
					[限时免费] 项目名称此处后台编辑
				</div>
				<div class="muntex">
					<div class="txt">选择数量</div>
					<div class="num">
						<div class="left">
							<span class="icon">&#xe604;</span>
							<span>1</span>
							<span class="icon">&#xe606;</span>
						</div>
						<div class="right">
							剩余369张（每人限购1张）
						</div>
					</div>
					<div class="btn">
						<div class="left">
							<span>合计</span>
							<span>￥35积分</span>
						</div>
						<div class="right" @click="popBtn">下一步</div>
					</div>
				</div>
			</div>
			<div class="pop1" v-if="ispop1" @click.stop>
				<div class="cha icon" @click="popup">&#xe61a;</div>
				<div class="tit">报名人信息</div>
				<div class="name">
					<span>姓名</span>
					<span><input type="text" placeholder="请输入您的姓名" /></span>
				</div>
				<div class="phone">
					<span>手机</span>
					<span><input type="number" placeholder="请输入您的手机号" /></span>
				</div>
				<div class="btn">
					<div class="left">
						<span>合计</span>
						<span>￥35积分</span>
					</div>
					<div class="right" @click="jump">下一步</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			popup(){
				let that = this
				that.ispopup = false
			},
			btn(){
				let that = this
				that.ispopup = true
			},
			popBtn() {
				let that = this
				that.ispop = false
				that.ispop1 = true
				console.log(111)
			},
			//点击跳转
			jump() {
				this.$router.push({
					path: '/hudongbaOrder'
				})
			},
		},
		data() {
			return {
				ispopup:false, 
				ispop: true,
				ispop1: false,
				items: [{
						url: "/static/images/flBanner.jpg"
					},
					{
						url: "/static/images/flBanner.jpg"
					},
					{
						url: "/static/images/flBanner.jpg"
					}
				],
			}
		}
	}
</script>
<style scoped lang="less">
input{outline: none;border: 0;background:transparent;}
	/*弹窗*/	
	.popup {
		background: rgba(0, 0, 0, .6);
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		.pop,
		.pop1 {
			width: 100%;
			height: 274px;
			background: #edefee;
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 11;
			padding: 0 12px;
			box-sizing: border-box;
			.cha{
				position: absolute;
				right: 12px;
				top: 12px;
			}
		}
		.pop {
			.tit {
				color: #999999;
				font-size: 13px;
				padding-top: 33px;
				padding-bottom: 14px;
			}
			.box {
				width: 100%;
				height: 40px;
				line-height: 40px;
				padding: 0 18px;
				box-sizing: border-box;
				color: #333333;
				font-size: 13px;
				border: 1px solid #0099ef;
				border-radius: 5px;
			}
			.muntex {
				margin-top: 33px;
				.txt {
					color: #333333;
					font-size: 12px;
				}
				.num {
					width: 100%;
					display: flex;
					align-items: center;
					padding: 8px 0 13px 0;
					.left {
						height: 28px;
						display: flex;
						align-items: center;
						span {
							display: block;
							width: 31px;
							border: 1px solid #d2d2d2;
							height: 100%;
							text-align: center;
							line-height: 28px;
							&:nth-child(1) {
								color: #d2d2d2;
								font-size: 14px;
								font-weight: bold;
							}
							&:nth-child(2) {
								width: 37px;
								color: #333333;
								font-size: 14px;
							}
							&:nth-child(3) {
								color: #d2d2d2;
								font-size: 14px;
								font-weight: bold;
							}
						}
					}
					.right {
						color: #9fa3aa;
						font-size: 13px;
						margin-left: 17px;
					}
				}
				.btn {
					width: 100%;
					height: 45px;
					border: 1px solid #dedede;
					display: flex;
					align-items: center;
					position: absolute;
					left: 0;
					bottom: 0;
					padding-left: 12px;
					box-sizing: border-box;
					.left {
						width: 218px;
						color: #333333;
						font-size: 13px;
						height: 100%;
						line-height: 45px;
						&:nth-child(2) {
							margin-left: 6px;
						}
					}
					.right {
						width: 1px;
						flex-grow: 1;
						background: #0099ef;
						text-align: center;
						height: 100%;
						line-height: 45px;
						color: #ffffff;
						font-size: 18px;
					}
				}
			}
		}
		.pop1 {
			.tit {
				color: #999999;
				font-size: 13px;
				padding-top: 33px;
				padding-bottom: 14px;
			}
			.name{
				border-bottom: 1px solid #a8a8a8;
			}
			.phone,.name{
				display: flex;
				align-items: center;
				width: 100%;
				height: 48px;			
				span{
					display: block;
					&:nth-child(1){
						width: 24%;
						color: #3f3f3f;
						font-size: 15px;
					}
				}
			}
			.btn {
				width: 100%;
				height: 45px;
				border: 1px solid #dedede;
				display: flex;
				align-items: center;
				position: absolute;
				left: 0;
				bottom: 0;
				padding-left: 12px;
				box-sizing: border-box;
				.left {
					width: 218px;
					color: #333333;
					font-size: 13px;
					height: 100%;
					line-height: 45px;
					&:nth-child(2) {
						margin-left: 6px;
					}
				}
				.right {
					width: 1px;
					flex-grow: 1;
					background: #0099ef;
					text-align: center;
					height: 100%;
					line-height: 45px;
					color: #ffffff;
					font-size: 18px;
				}
			}
		}
	}
	/*底部*/
	
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 48px;
		border: 1px solid #dedede;
		position: fixed;
		left: 0;
		bottom: 0;
		.footer-li {
			height: 100%;
			width: 17%;
			line-height: 1;
			span {
				display: block;
				text-align: center;
				margin: 0 auto;
				&:nth-child(1) {
					font-size: 22px;
					color: #666666;
					padding-top: 6px;
				}
				&:nth-child(2) {
					font-size: 13px;
					color: #666666;
					padding-top: 2px;
				}
			}
		}
		.btn {
			width: 48%;
			height: 100%;
			text-align: center;
			background: #0598e8;
			color: #ffffff;
			font-size: 16px;
			line-height: 48px;
		}
	}
	
	.home {
		.title {
			z-index: 9;
			padding: 0 12px 12px 12px;
			background: #FFFFFF;
			box-sizing: border-box;
			width: 100%;
			position: relative;
			.title-top {
				width: 94%;
				height: 104px;
				border-radius: 8px;
				border: 1px solid #f4f4f4;
				padding: 12px;
				position: absolute;
				left: 50%;
				margin-left:-47%;
				top: -35px;
				background: #FFFFFF;
				box-sizing: border-box;
				.name {
					color: #000000;
					font-size: 19px;
					line-height: 22px;
				}
				.nums {
					display: flex;
					align-items: center;
					margin-top: 11px;
					.num1,
					.num2,
					.num3 {
						display: flex;
						align-items: center;
						span {
							display: block;
							&:nth-child(1) {
								color: #aeb3c5;
								font-size: 18px;
							}
							&:nth-child(2) {
								color: #aeb3c5;
								font-size: 12px;
								margin-left: 2px;
							}
						}
					}
					.num3 {
						span {
							&:nth-child(1) {
								;
								font-size: 14px;
							}
						}
					}
					.num2,
					.num3 {
						margin-left: 12px;
					}
					.bao {
						display: flex;
						align-items: center;
						margin-left: 38px;
						span {
							display: block;
							color: #fe7815;
							font-size: 14px;
						}
					}
				}
			}
			.title-bottom {
				/*padding-top: 70px;*/
				box-sizing: border-box;
				padding: 70px 12px 0 12px;
				.bottom1,.bottom2,.bottom3 {
					display: flex;
					align-items: center;
					margin-top: 20px;
					span {
						display: block;
						&:nth-child(1) {
							color: #9aa0b7;
							font-size: 20px;
						}
						&:nth-child(2) {
							font-size: 14px;
							color: #333333;
							margin-left: 12px;
						}
					}
				}
			}
		}
		.xian {
			width: 100%;
			height: 8px;
			background: #edefee;
		}
		.detail {
			padding: 12px;
			.tit {
				color: #9aa0b7;
				font-size: 14px;
				margin-bottom: 12px;
				border-left: 5px solid #9aa0b7;
				padding-left: 5px;
			}
		}
	}
</style>