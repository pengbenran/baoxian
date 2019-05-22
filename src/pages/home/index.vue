<template>
 <div class="home" v-wechat-title="$route.meta.title">
    e福利
    <mTabbar v-model="select"></mTabbar>
  </div>
</template>

<script>
import mTabbar from '@/components/tabbar/Tabar.vue'
export default {
  name: 'eFuli',
  components:{mTabbar},
  data () {
    return {
      select:'tab1',
    }
  }
}
</script>
<style scoped>

</style>
