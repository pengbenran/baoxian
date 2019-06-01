<template>
	<!--订单详情-->
	<div class="home">
		<div class="text">
			购买产品钱，请您先进行身份验证，以得到更全面的客户服务（例如保单查询、理赔服务等）
		</div>
		<div class="xian"></div>
		<div class="form">
			<div class="inp1">
				<span>姓名</span>
				<span><input type="text" placeholder="请输入姓名"/></span>
			</div>
			<div class="inp2">
				<span>手机号码</span>
				<span><input type="number" placeholder="请输入手机号"/></span>
			</div>
			<div class="more" @click="jump">确定</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			//点击跳转
			jump() {
				this.$router.push({
					path: '/homeFlSucceed'
				})
			},
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped lang="less">
	input{outline: none;border: 0;background:transparent;}
	
	.home {
		.text {
			padding: 10px 12px 10px 12px;
			box-sizing: border-box;
			color: #666666;
			font-size: 14px;
			line-height: 20px;
		}
		.xian {
			width: 100%;
			height: 10px;
			background: #f3f3f3;
			width: 100%;
		}
		.form {
			padding: 0 12px;
			box-sizing: border-box;
			.inp1,
			.inp2,
			.inp3 {
				width: 100%;
				height: 58px;
				border-bottom: 1px solid #f4f4f4;
				line-height: 58px;
				span {
					display: inline-block;
					&:nth-child(1) {
						width: 28%;
					}
				}
			}
			.more {
				width: 100%;
				height: 46px;
				background: #fe844e;
				border-radius: 23px;
				text-align: center;
				line-height: 46px;
				color: #ffffff;
				font-size: 16px;
				margin-top: 189px;
			}
		}
	}
</style>