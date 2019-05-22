import Vue from 'vue'
import Router from 'vue-router'
import eFuli from '@/pages/home/index'
import Hudongba from '@/pages/hudongba/index'
import eMember from '@/pages/emember/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
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
    }
  ]
})
