<template>
	<!--精彩活动-->
	<div class="hd-list">
		<div class="hd-list-li" v-for="(item,index) in hdList" @click="jumpdetail(item.goodsId)">
			<div class="img"><img :src="item.thumbnail" /></div>
			<div class="name">{{item.name}}</div>
			<div class="jf">
				<span class="jfleft">{{item.price}} 积分</span>
				<span class="jfright">{{btntit}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['hdList'],
		methods: {
			//点击跳转
			jumpdetail(goodid) {
				this.$router.push({
					path: '/hudongbaDetail',
					query: {
						btntit: this.btntit,
						id:goodid
					}
				})
			},
		},
		data() {
			return {
				btntit: '立即兑换'
			}
		}
	}
</script>
<style scoped lang="less">
	/*精彩活动*/
	
	.hd-list {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.hd-list-li {
			width: 48%;
			height: 194px;
			line-height: 1;
			margin-bottom: 10px;
			border: 1px solid #EDEFEE;
			.img {
				width: 100%;
				height: 133px;
			}
			.name {
				font-size: 14px;
				color: #666666;
				padding: 10px 10px;
				box-sizing: border-box;
			}
			.jf {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 12px;
				box-sizing: border-box;
				span {
					display: block;
					&:nth-child(1) {
						font-size: 12px;
						color: #e01212;
					}
					&:nth-child(2) {
						width: 59px;
						height: 18px;
						line-height: 20px;
						text-align: center;
						color: #e8b269;
						font-size: 9px;
						border: 1px solid #E8B269;
						border-radius: 4.5px;
						background: #fdf5f0;
					}
				}
			}
		}
	}
</style>