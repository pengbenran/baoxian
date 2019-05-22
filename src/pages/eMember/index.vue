<template>
  <div class="eMember" v-wechat-title="$route.meta.title">
    e会员
    <mTabbar v-model="select"></mTabbar>
  </div>
</template>

<script>
import mTabbar from '@/components/tabbar/Tabar.vue'
export default {
  name: 'eMember',
  components:{mTabbar},
  data () {
    return {
      select:'tab4',
    }
  }
}
</script>
<style scoped>

</style>
