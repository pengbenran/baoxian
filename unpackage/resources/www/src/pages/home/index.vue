<template>
	<!--首页-->
 <div class="home">
    <div class="banner" v-for="(item,index) in banner" @click="jumpfl">
    	<img  :src="item.img"/> 
    </div>
    <mTabbar v-model="select"></mTabbar>
  </div>
</template>

<script>
import mTabbar from '@/components/tabbar/Tabar.vue'
export default {
  name: 'eFuli',
  components:{mTabbar}, 
  methods: {
  		//点击跳转
		jumpfl(){ 
			this.$router.push({path:'/homeFl'}) 
		},
  },
  data () {
    return {
      select:'tab1',
      banner:[
        {img:"/static/images/index-banner.jpg"},
        {img:"/static/images/index-banner.jpg"},
        {img:"/static/images/index-banner.jpg"}
      ]
    }
  }
}
</script>
<style scoped lang="less">
  .home{
  	padding-bottom: 50px;
  	.banner{
  		width: 100%;  
  		height: 185px;
  		img{
  			display: block;
  		}
  	}
  }
</style>
