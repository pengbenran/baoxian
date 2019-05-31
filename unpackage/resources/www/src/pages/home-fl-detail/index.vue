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
				<span>获取验证码</span>
			</div>
			<div class="inp3">
				<span>验证码</span>
				<span><input type="text" placeholder="请输入验证码"/></span>
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
	input {
		border: 0;
		outline: none;
	}
	
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
						width: 95px;
					}
					&:nth-child(3) {
						border: 1px solid #fe844e;
						height: 28px;
						line-height: 28px;
						color: #fe844e;
						font-size: 12px;
						border-radius: 12px;
						width: 80px;
						text-align: center;
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