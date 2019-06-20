import * as API from './index'

export default { 
    //完善信息GET  mobile name
    addMemberInfo:params =>{
        return API.GET('/api/insurance/addMemberInfo',params)
    },

    //获取会员完善信息
    GetMenberInfo:params => {
        return API.GET('/api/insurance/getMemberInfo',params)
    }
}