<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
		
	</div>
</template>
	
<script>
	export default {
		name: 'TabBarItem',
		data(){
			return {
				// isActive: true
			}
		},
		props: {
			path:{
				type: String
			},
			activeColor: {
				type: String,
				default: 'blue'
			}
		},
		methods: {
			itemClick(){
				this.$router.replace(this.path)
			}
			
		},
		computed: {
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive ? {color: this.activeColor} : {}
			}
			
		}
	}
</script>

<style scoped="scoped">
	.tab-bar-item {
		flex: 1;
		text-align: center;
		font-size: 14px;
		height: 49px;
	}
	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 2px;
		/* margin-bottom: 2px; */
	}
	.active {
		color: #FF5777;
	}
</style>
