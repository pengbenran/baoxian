import Vue from 'vue'
import Router from 'vue-router'
import eFuli from '@/pages/home/index'
import Hudongba from '@/pages/hudongba/index'
import eMember from '@/pages/emember/index'
import homeFl from '@/pages/home-fl/index'
import homeFlDetail from '@/pages/home-fl-detail/index'
import homeFlSucceed from '@/pages/home-fl-succeed/index'
import hudongbaDetail from '@/pages/hudongba-detail/index'
import hudongbaOrder from '@/pages/hudongba-order/index'
import hudongbaOrderDetail from '@/pages/hudongba-order-detail/index'

import eMemberCz from '@/pages/eMember-cz/index'
import eMemberHd from '@/pages/eMember-hd/index'
import eMemberJf from '@/pages/eMember-jf/index'

Vue.use(Router)
export default new Router({
	routes: [{
			path: '/',
			name: 'eFuli',
			component: eFuli,
			meta: {
				title: 'e福利'
			},
		},
		{
			path: '/Hudongba',
			name: 'Hudongba',
			component: Hudongba,
			meta: {
				title: '互动吧'
			},
		},
		{
			path: '/eMember',
			name: 'eMember',
			component: eMember,
			meta: {
				title: 'e会员'
			},
		},
		{
			path: '/homeFl',
			name: 'homeFl',
			component: homeFl,
			meta: {
				title: '领取e福利'
			},
		},
		{
			path: '/homeFlDetail',
			name: 'homeFlDetail',
			component: homeFlDetail,
			meta: {
				title: '订单详情'
			},
		},
		{
			path: '/homeFlSucceed',
			name: 'homeFlSucceed',
			component: homeFlSucceed,
			meta: {
				title: '预约成功'
			},
		},
		{
			path: '/hudongbaDetail',
			name: 'hudongbaDetail',
			component: hudongbaDetail,
			meta: {
				title: '活动详情'
			},
		},
		{
			path: '/hudongbaOrder',
			name: 'hudongbaOrder',
			component: hudongbaOrder,
			meta: {
				title: '活动订单'
			},
		},
		{
			path: '/hudongbaOrderDetail',
			name: 'hudongbaOrderDetail',
			component: hudongbaOrderDetail,
			meta: {
				title: '活动订单详情'
			},
		},

		{
			path: '/eMemberCz',
			name: 'eMemberCz',
			component: eMemberCz,
			meta: {
				title: '积分充值'
			},
		},

		{
			path: '/eMemberHd',
			name: 'eMemberHd',
			component: eMemberHd,
			meta: {
				title: '我的活动'
			},
		},

		{
			path: '/eMemberJf',
			name: 'eMemberJf',
			component: eMemberJf,
			meta: {
				title: '积分商城'
			},
		}
	]
})