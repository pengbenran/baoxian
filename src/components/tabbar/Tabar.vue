<template>
 <div class="m-tabbar">
      <mTabbarItem id='tab1'>
          <img src="../../assets/images/footer/efuli.png" alt="" slot="icon-normal"> 
          <img src="../../assets/images/footer/efuliselect.png" alt="" slot="icon-active"> 
          领取e福利
      </mTabbarItem>    
       <mTabbarItem id='tab3'>
         <img src="../../assets/images/footer/hudongba.png" alt="" slot="icon-normal"> 
         <img src="../../assets/images/footer/hudongbaselect.png" alt="" slot="icon-active"> 
       </mTabbarItem> 
       <mTabbarItem id='tab4'>
          <img src="../../assets/images/footer/emember.png" alt="" slot="icon-normal"> 
         <img src="../../assets/images/footer/ememberselect.png" alt="" slot="icon-active"> 
          e会员
        </mTabbarItem>
 </div>
</template>
<script>
 import mTabbarItem from './TabItem.vue';
    export default {
        props: ['value'],
        name: 'tabbar',
        components: {
          mTabbarItem,
        }
    }
</script>
<style lang="less">
.m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 60px;
    background: #fff;
    border-top: 1px solid #e4e4e4;
}
</style>