<template>
	<!--活动订单详情-->
	<div class="home" >	
		<!--ma-->
	  <div class="ma">
	  	 	<div class="ma-wrap">
	  	 		<div class="yuan"></div> <!--左右两个缺口-->
	  	 		<div class="yuan1"></div>
	  	 		
	  	 		<div class="gge">这个是规格名称字数到达一定的字数就</div>
	  	 		<div class="name">游萧民(15083845338)</div>
	  	 		<div class="cancel">核销码</div>
	  	 		<div class="code"><img src="/static/images/flBanner.jpg"/></div>
	  	 		<div class="zt">待核销</div>	  	 		
	  	 		<div class="tit">商品标题名称字数到达一定的地方就没</div>
	  	 		<div class="day">
	  	 			<span>时       间：  </span>
	  	 			<span>2019-08-02 09：00</span>
	  	 			
	  	 		</div>
	  	 		<div class="add">
	  	 			<span>地       点：</span>  
	  	 			<span>江西省南昌市青云谱区梦想小郑</span>
	  	 		</div>
	  	 	</div>
	  </div>
		<!--精彩活动-->
		<div class="hd">
			<div class="tit">
				<span> <img src="/static/images/xing.png"/></span>
				<span>精彩活动</span>
			</div>
		       <hd :hdList='hdList'></hd>
		</div>
	</div>
</template>

<script>
	import hd from '@/components/hd/index.vue'
	export default {	
		components:{hd},
		data() {
			return {
				hdList:[
				     {
						img: "/static/images/flBanner.jpg",
						name: '这里的标题支持支这么',
						jf: 3456
					},
					 {
						img: "/static/images/flBanner.jpg",
						name: '这里的标题支持支这么',
						jf: 3456
					},
					 {
						img: "/static/images/flBanner.jpg",
						name: '这里的标题支持支这么',
						jf: 3456
					},
					{
						img: "/static/images/flBanner.jpg",
						name: '这里的标题支持支这么',
						jf: 3456
					},
					{
						img: "/static/images/flBanner.jpg",
						name: '这里的标题支持支这么',
						jf: 3456
					},
					{
						img: "/static/images/flBanner.jpg",
						name: '这里的标题支持支这么',
						jf: 3456
					},
				]
			}
		}
	}
</script>
<style scoped lang="less">
.ma{
	width: 100%;
	padding: 20px 12px;
	box-sizing: border-box;
	.ma-wrap{
		padding:12px;
		box-sizing: border-box;
		background: #FFFFFF;
		line-height: 1;
		border-radius: 5px;
		width: 100%;	
		
		.gge{
			color: #333333;
			font-size: 14px;
		}	
		.name{
			color: #333333;
			font-size: 14px;
		    padding: 8px 0 23px 0;
		    
		}
		.cancel{
			text-align: center;
			color: #333333;
			font-size: 18px;
	
		}
		.code{
			width: 125px;
			height: 125px;
			margin: 8px auto;
		}
		.zt{
			color: #00A0EA;
			font-size: 12px;
			padding-bottom: 13px;
			border-bottom: 1px dashed #EDEFEE;
			text-align: center;
		}
		.tit,.day,.add{
			width: 100%;
			height: 37px;
			border-bottom: 1px solid #dedede;
			line-height: 37px;
			font-size: 13px;
			color: #333333;
		}
	}
	
}



/*精彩活动*/
.hd{
	border-top: 5px solid #f0f0f0;
	padding: 20px 12px;
	.tit{
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: center;
		padding-bottom: 20px;
		span{
			display: block;
			&:nth-child(1){
				width: 25px;
				height: 25px;
			}
			&:nth-child(2){
				color: #333333;
				font-size: 14px;
				margin-left: 10px;
			}
		}
	}

}
 
</style>