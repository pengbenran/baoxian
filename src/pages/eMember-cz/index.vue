<template>
	<!--积分充值-->
	<div class="home">
		<div class="tit">充值积分</div>
		<div class="list">
			<div class="list-li" :class="curr==index?'list-li-on':''" v-for="(item,index) in rmb" @click="on(index,item.money,item.id)">
				<div class="jf">{{item.giveMoney}}积分</div>
				<div class="rmb">{{item.money}}元</div>
			</div>
		</div>
		<div class="text">
			<span>说明</span>
			<span>一次性充值，不支持无理由退款</span>
		</div>

		<div class="footer">
			<div class="left">
				共计：{{money}} 元
			</div>
			<div class="right" @click="cz">
				充值
			</div>
		</div>
		<!--充值成功弹窗-->
		<div class="popup" v-if="isPopup">
			<div class="img icon">&#xe6d3;</div>
			<div class="tex">充值成功</div>
			<div class="jf">获得100积分</div>
			<div class="btn" @click="btn">完成</div>
		</div>
	</div>
</template>

<script>
	import API from '@/api/insurance'
	import { Toast } from 'vant'
	import store from '@/store/store'
	import util from '@/utils/index'
	export default {
		components: {},
		data() {
			return {
				isPopup: false,
				curr: 0,
				money:0,
				rmb: [],
				rmbId:''
			}
		},
		mounted(){
			this.GetRmbList();
		},
		methods: {
			btn(){
				this.isPopup=false
			},
			on(index,money,id) {
				console.log(index)
				this.curr = index
				this.money = money
				this.rmbId = id
			},
			
			GetRmbList(){
				let that = this;
                API.GetaccountSettingList().then(res => {
					if(res.code == 0){
					   that.rmb = res.data;
                       that.rmbId = res.data[that.curr].id;
					   that.money = res.data[that.curr].money;
					}else{
						Toast.fail('失败'); 
					}
				}).catch(err => {
						Toast.fail('失败'); 				
				})
			},

            //充值事件点击
			cz() {
				this.$messagebox({				     
					title: '温馨提示',
				     message: '请核对充值金额',
				     showCancelButton: true,
				     confirmButtonText: "确定",
				     cancelButtonText: "取消"					    
				}).then(action => {				     
					if(action == 'confirm') {					      					
						// this.isPopup=true  
						this.payMoney();
					} else {						      
						console.log('取消')					     
					}				   
				})
			},

			//充值事件请求
			payMoney(){
				let that = this;
				// API.PosttopUp()
				let LoadToast = Toast.loading({
					mask: true,
					message: '加载中...'
				});
				let params ={}
				// params.orderid = that.order.orderId
				params.sn = util.random_No(5);
				// params.total_fee = 0.01 * 100
				params.total_fee = that.money * 100
				params.openId=store.state.userInfo.openId
	
				API.Prepay(params).then(PayRes=>{
					 WeixinJSBridge.invoke('getBrandWCPayRequest',{
						timeStamp: PayRes.timeStamp, //时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间,
						nonceStr: PayRes.nonceStr, //随机字符串，长度为32个字符以下,
						package: PayRes.package, //统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*,
						signType: PayRes.signType, //签名算法，暂支持 MD5,
						paySign: PayRes.paySign, //签名,具体签名方案参见小程序支付接口文档,
						appId:'wxa08271def2635caf',
					},function(res){
						if(res.err_msg=="get_brand_wcpay_request:ok"){
							that.UpPayPoint(LoadToast)
						}else if(res.err_msg=="get_brand_wcpay_request:cancel"){
					    	console.log('用户取消支付');
						}  
						else{
					    	console.log("支付失败");
						}
					});
				})
			},

			//充值积分的方法
			UpPayPoint(LoadToast){
			   let that = this;
			   let data = {
				   memberId:store.state.userInfo.memberId,
				   id:that.rmbId
			   }
			   API.RechargePoint(data).then(res => {
					LoadToast.clear();
					if(res.code == 0){
						Toast.success('成功');
						this.$router.push({
							path: '/home'
						})
					}
			   }).catch(err =>{
				   Toast.fail('网络错误');
			   })
			}
			
		},

	}
</script>
<style scoped lang="less">
	/*充值成功弹窗*/
	
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #FFFFFF;
		z-index: 99;
		line-height: 1;
		text-align: center;
		.img {
			font-size: 80px;
			color: #67ca2c;
			margin-top: 82px;
		}
		.tex {
			color: #000000;
			font-size: 38px;
			margin-top: 20px;
		}
		.jf {
			color: #ff0000;
			font-size: 16px;
			margin-top: 16px;
		}
		.btn {
			width: 197px;
			height: 41px;
			border-radius: 20.5px;
			text-align: center;
			line-height: 41px;
			font-size: 18px;
			color: #FFFFFF;
			background: #67ca2c;
			margin: 0 auto;
			position: absolute;
			bottom: 200px;
			left: 50%;
			margin-left: -98.5px;
		}
	}
	
	.home {
		.tit {
			color: #111111;
			font-size: 18px;
			font-weight: bold;
			padding: 17px 0 28px 19px;
			line-height: 1;
		}
		.list {
			padding: 0 24px;
			display: flex;
			justify-content: space-between;
			flex-flow: wrap;
			align-items: center;
			.list-li {
				width: 150px;
				height: 64px;
				background: #FFFFFF;
				border: 1px solid #1e8ad2;
				display: flex;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-direction: column;
				padding: 10px 0;
				box-sizing: border-box;
				border-radius: 10px;
				margin-bottom: 19px;
				.jf {
					font-size: 18px;
					color: #111111;
				}
				.rmb {
					font-size: 14px;
					color: #f34747;
				}
			}
			.list-li-on {
				background: #1e8ad2;
				.jf {
					color: #FFFFFF;
				}
				.rmb {
					color: #FFFFFF;
				}
			}
		}
		.text {
			padding-left: 35px;
			margin-top: 20px;
			span {
				display: block;
				&:nth-child(1) {
					font-size: 14px;
					color: #111111;
				}
				&:nth-child(2) {
					font-size: 12px;
					color: #999999;
					margin-top: 10px;
				}
			}
		}
		.footer {
			display: flex;
			align-items: center;
			width: 100%;
			height: 50px;
			border-top: 1px solid #e5e5e5;
			position: fixed;
			left: 0;
			bottom: 0;
			.left {
				width: 1px;
				flex-grow: 1;
				background: #FFFFFF;
				height: 100%;
				line-height: 50px;
				padding-left: 22px;
				color: #111111;
				font-size: 19px;
			}
			.right {
				width: 126px;
				height: 52px;
				background: #48aef3;
				text-align: center;
				line-height: 50px;
				color: #FFFFFF;
				font-size: 17px;
			}
		}
	}
</style>