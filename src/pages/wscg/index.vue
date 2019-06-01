<template>
	<!--完善信息-->
	<div class="home">
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

			<div class="more" @click="btn">确定</div>
		</div>
		<!--弹窗-->
		<div class="pop" v-if="ispop">
			<div class="banner">
				<p class="img"><img src="/static/images/succeed.jpg" /></p>
				<p class="tit">完善成功</p>
			</div>
			<div class="btn" @click="jump">回到首页</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			btn() {
				this.ispop = true
			},
			//点击跳转
			jump() {
				this.$router.push({
					path: '/'
				})
			},
		},
		data() {
			return {
				ispop: false
			}
		}
	}
</script>
<style scoped lang="less">
	input {
		outline: none;
		border: 0;
		background: transparent;
		width: 100%;
	}
	
	.home {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
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
				display: flex;
				align-items: center;
				span {
					display: block;
					&:nth-child(1) {
						width: 28%;
					}
					&:nth-child(2) {
						width: 40%;
					}
					&:nth-child(3) {
						width: 28%;
						height: 30px;
						border-radius: 15px;
						border: 1px solid #fe844e;
						color: #fe844e;
						font-size: 14px;
						text-align: center;
						line-height: 30px;
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
		.pop {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9;
			width: 100%;
			height: 100%;
			background: #FFFFFF;
			.banner {
				width: 100%;
				height: 400px;
				position: relative;
				.img {
					width: 100%;
					height: 100%;
				}
				.tit {
					display: block;
					position: absolute;
					top: 103px;
					text-align: center;
					width: 100%;
					color: #ffffff;
					font-size: 24px;
				}
			}
			.btn {
				width: 270px;
				height: 40px;
				border-radius: 20px;
				line-height: 40px;
				text-align: center;
				background: linear-gradient(to right, #ff861b, #ffb527);
				margin: 0 auto;
				color: #ffffff;
				font-size: 16px;
				margin-top: 30px;
			}
			.jump {
				width: 270px;
				height: 38px;
				border: 1px solid #ff8a1c;
				border-radius: 20px;
				line-height: 38px;
				text-align: center;
				margin: 0 auto;
				color: #ff9c20;
				font-size: 16px;
				margin-top: 18px;
			}
		}
	}
</style>