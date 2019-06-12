import * as API from './index'

export default {
    HomeBannerList:params=>{
		return API.GET('/api/insurance/getOneBanner',params)
	},
}