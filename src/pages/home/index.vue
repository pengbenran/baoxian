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
        {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558933909328&di=b7dc442c52a4f789768e6ead2c6ac88f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F5%2F4b%2F27ac682828.jpg"},
        {img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=16705678,355648254&fm=26&gp=0.jpg"},
        {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558934191088&di=80b6f24250a52d32f8731b5019fe3bdf&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FCwYc0p53dSNG2Elwa1AujluDWQgdfMup7l85rfOl4fnujQlCQLMu4WReACkQIFAO9aKlogEFIQMKz75KHepuibg%2F640%3Fwx_fmt%3Djpeg"}
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
  		margin-top: 12px;
  		height: 185px;
  		img{
  			display: block;
  		}
  	}
  }
</style>
