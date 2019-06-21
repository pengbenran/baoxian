<template>
    <div>
	<div class="pop" v-if="ispop">
			<div class="banner">
				<p class="img"><img src="../../assets/images/index/succeed.jpg" /></p>
				<p class="tit">{{taskBool?'核销成功':'核销中'}}</p>
			</div>
			<div class="btn" @click="jump" v-if="!taskBool">重试</div>
		</div>

        <van-dialog v-model="show" title="核销员登录" :show-confirm-button="false" :show-cancel-button="false" >
         <div class="LoginModel">
            <van-cell-group>
            <van-field v-model="username" required clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('后台提供账号密码')" />

            <van-field v-model="password" type="password"
                label="密码"
                placeholder="请输入密码"
                required />
            </van-cell-group>
         </div>
         <div class="btnLogin">
           <van-button type="danger" size="small" @click="close">取消</van-button>
           <!-- <div class="width"></div> -->
           <van-button type="primary" size="small" @click="login">登录</van-button>
         </div>
        </van-dialog>
    </div>
</template>
<script>
import { Toast } from 'vant';
import API from '@/api/insurance'
export default {
    data () {
        return {
           ispop:true,
           taskBool:false,
           show:true,
           orderId:'',
           username:'',
           password:''
        }
    },
    created(){
       let orderId=location.href.split('orderId=')[1]
       console.log("打印一下订单号：",orderId)
       this.orderId = orderId
    },
    mounted(){

    },
    methods:{
        done(bool){

        },
        jump(){
           that.HeOrder();
        },
        login(){
           let that = this;
           if(this.username == '' || this.password ==''){
              Toast.fail('账户密码不能为空');
           }else{
                let LoadToast = Toast.loading({
                    mask: true,
                    message: '登录中...'
                });
             API.LoginHexiao({username:that.username,password:that.password}).then((res) => {
                if(res.code == 0){
                    that.show = false
                    Toast.success('登录成功');
                    LoadToast.clear();
                    that.HeOrder();
                }else{
                Toast.fail('登录失败');                   
                }
             }).catch((err) => {
                Toast.fail('登录失败');
             });
           }
        },

        //核销的接口请求
        HeOrder(){
            let that = this;
            let LoadToast = Toast.loading({
                mask: true,
                message: '核销中...'
            });
            API.OrderHexiao({orderId:that.orderId}).then(res => {
                if(res.code == 0){
                    Toast.success('核销成功');
                    that.taskBool = true
                    LoadToast.clear();
                }else{
                    Toast.success('核销失败');
                    that.taskBool = false     
                }
            }).catch(err => {
                that.taskBool = false  
            })
        },

        close(){
        	Toast.success('请输入账号密码核销');
        },

    }
}
</script>

<style scoped lang="less">
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
        .LoginModel{
            padding: .5rem .1rem 1rem;
        }
        .btnLogin{text-align: center;margin-bottom: .6rem;
            button{margin: 0 1rem;}
        }
</style>
