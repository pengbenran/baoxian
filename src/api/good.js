import * as API from './index'

export default {
    //根据goodid获取商品详情 GET 
    GetgetGoodsInfo:params => {
		return API.GET('/api/insurance/getGoods',params)
    },

    //查询所有进行中活动GET 
    GetGoodsAll:params => {
		return API.GET('/api/insurance/getGoodsAll',params)        
    },

    //获取互动吧轮播图GET 
    GetGetTowBanner:params => {
		return API.GET('/api/insurance/getTwoBanner',params)             
    },

    //保存订单 POST 
    SavaOrder:params => {
      return API.POST('/api/insurance/save',params)
    },

    //改变订单状态 POST /api/insurance/passOrder
    PassOrder:params => {
      return API.GET('/api/insurance/passOrder',params)
    }
}