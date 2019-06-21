import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    userInfo:{},
    orderList:[]
  },
  mutations:{
   storeUserInfo(state,userInfo){
   	state.userInfo=userInfo
   },

   StoreOrderList(state,orderList){
    state.orderList = orderList
   },

   jianPoint(state,point){
    state.userInfo.point = state.userInfo.point - point
   }
  }
})