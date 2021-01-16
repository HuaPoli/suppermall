<template>
	<div class="goods-list">
		<div class="goods-item" v-for="goods in goodsList">
			<a :href="goods.link">
				<img :src="goods.img" alt="">
				<div class="goods-info">
					<p>{{goods.title}}</p>
					<span class="price">￥:{{goods.price}}</span>
					<span class="cfav">{{goods.cfav}}</span>
				</div>
			</a>
		</div>	
	</div>
</template>

<script>
	export default {
		name: "GoodsList",
		props: {
			goodsList: {
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.goods-list{
		display: flex;
		flex-wrap: wrap;
		padding: 0 2px;
		justify-content: space-around;
	}
	.goods-item {
		width: 46%;
		position: relative;
		padding: 2px 0;	
		height: 260px;
	}
	
	.goods-item img {
		width: 100%;
		border-radius: 10px;
	
		
	}
	.goods-info {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		color: #33333;
		text-align: center;
	}
	.goods-info p {
		/* 文本强制不换行 */
		white-space: nowrap;
		/* 文本溢出显示省略号 */
		    text-overflow: ellipsis;
		/* 溢出的部分隐藏 */
		 overflow: hidden;
	}
	.goods-info .price {
		color: var(--color-tint);	
		margin-right: 20px;
	}
	.goods-info .cfav {
		position: relative;
	}
	.goods-info .cfav::before {
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url(~assets/img/common/cfav.svg) 0 0/14px 14px;
	}
	
</style>
