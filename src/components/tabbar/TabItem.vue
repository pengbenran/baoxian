<template>
  <div class="m-tabbar-item" 
  :class="{'is-active':isActive}" 
  @click="$parent.$emit('input',id)">
  <span class="m-tabbar-item-icon" v-show="!isActive">
    <slot name="icon-normal"></slot>
</span>
<span class="m-tabbar-item-icon" v-show="isActive">
    <slot name="icon-active"></slot>
</span>
<span class="m-tabbar-item-text">
    <slot></slot>
</span>
</div>
</template>
<script>
    export default{
        props: ['id'],
        computed: {
           isActive(){
           if(this.$parent.value===this.id&&this.$parent.value==="tab1"){
                this.$router.push({path:'/home'}); 
                return true;
           } 
            else if(this.$parent.value===this.id&&this.$parent.value==="tab3"){
                this.$router.push({path:'Hudongba'}); 
                return true;
             }
            else if(this.$parent.value===this.id&&this.$parent.value==="tab4"){
                this.$router.push({path:'eMember'}); 
                return true;
             }
            }
        }
    }
</script>
<style lang="less">
    .m-tabbar-item{
        flex: 1;
        text-align: center;
        .m-tabbar-item-icon{
            display: block;
            padding-top: 4px; 
            img{
                width: 26px;
                height: 26px;
                margin: 0 auto;
            }
        }
        .m-tabbar-item-text{
            display: block;
            font-size: 10px;
            color:#333333;
            padding-top: 3px;
        }
        &.is-active{
            .m-tabbar-item{
                background:#ddd;
            }
            .m-tabbar-item-text{
                color: #468ff7;
            }
        }
    }
     .m-tabbar-item:nth-child(2){
     	    .m-tabbar-item-icon{
     	    	img{
		     	   width: 69px;
		     	   height: 22px; 
		     	   margin-top: 14px;
            }
     	    }
     }
</style>