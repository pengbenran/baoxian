<template>
	<!--完善信息-->
	<div class="home">
		<div class="form">
			<div class="inp1">
				<span class="span1">姓名</span>
				<span><input type="text" v-model="name"  placeholder="请输入姓名"/></span>
			</div>
			<div class="inp2">
				<span class="span1">手机号码</span>
				<span>
				<input class="phone input-style " 
				       :class="{'err-input' : phone.err}" v-model="phone.val" type="text" 
					   placeholder="请输入手机号" oninput = "value=value.replace(/[^\d]/g,'')" maxlength="11" @blur="phone.test()">
				</span>
			</div>
			<div class="inp3">
				<span class="span1">验证码</span>
				<span><input type="text" v-model="yanzhen" placeholder="请输入验证码"/></span>
				<van-button round type="primary" size="small" :disabled='!show' @click="getCode">获取验证码{{count?count:''}}</van-button>
			</div>

			<div class="more" @click="AddMenberInfo">确定</div>
		</div>
		<!--弹窗-->
		<div class="pop" v-if="ispop">
			<div class="banner">
				<p class="img"><img src="../../assets/images/index/succeed.jpg" /></p>
				<p class="tit">完善成功</p>
			</div>
			<div class="btn" @click="jump">回到首页</div>
		</div>
	</div>
</template>

<script>
	import API from "@/api/wscg";
	import { Toast } from 'vant';
	import store from '@/store/store'
	export default {
		data() {
			return {
				ispop: false,
				isreg:true,
				name:'',
			    show: true,
			    count: '',
			    timer: null,
			    Zyanzhen:'',
			    yanzhen:'',
				phone: {
                    val : '',
                    err : false,
                    pass: false,
                    test : function () {
                        // 验证手机号
                        let reg = /^1[0-9]{10}$/
                        if (this.val == '' || this.val.length <= 10 || !reg.test(this.val)) {
                            // vm.$data.hintShow = true
                            // vm.$data.hint = '请输入正确的手机号'
                            this.err = true
                            return false
                        }

                        // vm.$data.hintShow = false
                        // vm.$data.hint = ''
                        this.err = false
                        this.pass = true
                        return true
                    }
                }
			}
		},
		watch:{
            mobile(val){

               console.log(val)
			}
		},
		methods: {
			btn() {
				this.ispop = true
			},
			//点击跳转
			jump() {
				this.$router.push({
					path: '/home'
				})
			},

			 getCode(){
				if(this.phone.val){
					this.GetMobile();
					const TIME_COUNT = 60;
					if (!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
					if (this.count > 0 && this.count <= TIME_COUNT) {
						this.count--;
						} else {
						this.show = true;
						clearInterval(this.timer);
						this.timer = null;
						}
					}, 1000)
					}					
				}else{
                    Toast.fail('请输入电话号码');		
				}
			},

			//发送短信接口
			GetMobile(){
				let that = this;
				API.GetmobileCode({mobile:that.phone.val}).then(res => {
					if(res != undefined){
						that.Zyanzhen = res.code
						Toast.success('发送成功');
					}
				})
			},

			//添加用户信息
			AddMenberInfo(){
				let that = this;
				console.log(parseInt(that.Zyanzhen),parseInt(that.phone.val))
				if(parseInt(that.Zyanzhen) === parseInt(that.yanzhen)&&that.phone.val!=''&&that.name!=''){
					if(that.phone.pass){
						API.addMemberInfo({name:that.name,mobile:that.phone.val,memberId:store.state.userInfo.memberId}).then((res) => {
							console.log(res)
							if(res.code == 0){
								this.ispop = true
							}else{

							}
						}).catch((err) => {
							console.log("添加失败")
						});
					}
				}else{
                    Toast.fail('输入的信息不全！');		
				}
			},
		},

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
				.span1{width: 28%;}
				span {
					display: block;
				
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
	.err-input{color:red;}
</style>