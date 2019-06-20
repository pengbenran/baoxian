<template>
	<!--首页-->
	<div class="home">
	    <div class="banner" v-for="(item,index) in banner" @click="jumpfl(item.goodsId)">
			<img :src="item.imageUrl" />
		</div>
	</div>
</template>

<script>
	import mTabbar from '@/components/tabbar/Tabar.vue'
	import API from '@/api/home'
	export default {
	
	}
</script>
<style scoped lang="less">
	.home {
		padding-bottom: 50px;
		.banner {
			width: 100%;
			margin-top: 12px;
			height: 185px;
			img {
				display: block;
			}
		}
		.pop {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, .5);
			z-index: 9;
			.cha {
				position: absolute;
				color: #FFFFFF;
				font-size: 20px;
				top: 17%;
				right: 18%;
			}
			.pop-li {
				width: 225px;
				height: 300px;
				position: absolute;
				left: 50%;
				top: 50%;
				margin-left: -112.5px;
				margin-top: -160px;
				z-index: 10;
				.tit {
					left: 0;
					top: 13%;
					position: absolute;
					width: 100%;
					text-align: center;
					span {
						color: #FFFFFF;
						width: 100%;
						text-align: center;
						font-weight: bold;
						&:nth-child(1) {
							font-size: 50px;
						}
						&:nth-child(2) {
							font-size: 50px;
						}
						&:nth-child(3) {
							font-size: 16px;
						}
					}
				}
				.img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>