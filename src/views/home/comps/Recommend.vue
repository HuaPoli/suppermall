<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in list">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Recommend",
		props: {
			list: {
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommend {
		display: flex;
		width: 100%;
		padding: 10px 0 20px;
		border-bottom: 8px solid #eee;
	}
	.recommend-item {
		flex: 1;
		text-align: center;
		color: #666666;
		
	}
	
	.recommend-item img {
		width: 70px;
		height: 70px;
		margin-bottom: 2px;
	}
	
</style>
