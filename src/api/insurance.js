import * as API from './index'


export default {
    //会员储值节分列表GET 
    GetaccountSettingList:params=>{
		return API.GET('/api/insurance/accountSettingList',params)
    },
    
    //获取e会员轮播图
    GetThreeBanner:params =>{
		return API.GET('/api/insurance/getThreeBanner',params)
    },

    //查看订单详情
    GetorderIntRo:params => {
		return API.GET('/api/insurance/orderIntRo',params)       
    },

    //查看所有的订单
    GetorderList:params => {
		return API.GET('/api/insurance/orderList',params)              
    },

    //充值POST
    PosttopUp:params => {
		return API.GET('/api/insurance/topUp',params)              
    },

    //充值调用支付接口POST 
    Prepay:params => {
      return API.GET('/api/insurance/prepay',params)
    },

    //充值积分接口POST 
    RechargePoint:params => {
      return API.GET('/api/insurance/rechargePoint',params)
    },

    //核销员登录GET 
    LoginHexiao:params => {
      return API.GET('/api/insurance/judgeWriteOff',params)
    },

    //核销订单GET 
    OrderHexiao:params => {
      return API.GET('/api/insurance/orderWriteOff',params)
    }

}