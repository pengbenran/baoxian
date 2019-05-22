<template>
  <div class="home" v-wechat-title="$route.meta.title">
    互动吧
    <mTabbar v-model="select"></mTabbar>
  </div>
</template>

<script>
  import mTabbar from '@/components/tabbar/Tabar.vue'
export default {
  name: 'hudongba',
  components:{mTabbar},
  data () {
    return {
       select:'tab3',
    }
  }
}
</script>
<style scoped>

</style>
