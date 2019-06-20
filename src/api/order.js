import * as API from './index'
export default {
    //获取订单列表GET 
    GetOrderList:params =>{
        return API.GET('/api/insurance/orderList',params)
    },

    //获取订单详情GET 
    GetOrderInfo:params => {
        return API.GET('/api/insurance/orderIntRo',params)
    }
}