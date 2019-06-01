<template>
	<!--首页-->
	<div class="home">
		<div class="banner" v-for="(item,index) in banner" @click="jumpfl">
			<img :src="item.img" />
		</div>

		<!--弹窗-->
		<div class="pop" @click="hidd" v-if="ishidd">
			<div @click="jumpws" class="pop-li" @click.stop>
				<div class="tit">
					<span>+</span>
					<span>50</span>
					<span>积分</span>
				</div>
				<div class="img"><img src="/static/images/index-pop.png" /> </div>
			</div>
			<div class="cha icon">&#xe61a;</div>
		</div>
		<mTabbar v-model="select"></mTabbar>
	</div>
</template>

<script>
	import mTabbar from '@/components/tabbar/Tabar.vue'
	export default {
		name: 'eFuli',
		components: {
			mTabbar
		},
		methods: {
			//点击跳转
			jumpfl() {
				this.$router.push({
					path: '/homeFl'
				})
			},
			//点击跳转
			jumpws() {
				this.$router.push({
					path: '/wscg'
				})
			},
			hidd() {
				this.ishidd = false
			}
		},
		data() {
			return {
				select: 'tab1',
				ishidd: true,
				banner: [{
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558933909328&di=b7dc442c52a4f789768e6ead2c6ac88f&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F5%2F4b%2F27ac682828.jpg"
					},
					{
						img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=16705678,355648254&fm=26&gp=0.jpg"
					},
					{
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558934191088&di=80b6f24250a52d32f8731b5019fe3bdf&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FCwYc0p53dSNG2Elwa1AujluDWQgdfMup7l85rfOl4fnujQlCQLMu4WReACkQIFAO9aKlogEFIQMKz75KHepuibg%2F640%3Fwx_fmt%3Djpeg"
					}
				]
			}
		}
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