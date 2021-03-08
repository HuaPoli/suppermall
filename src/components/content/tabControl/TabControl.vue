<template>
	<div class="tab-control">
		<div class="control-item" v-for="(control,index) in controls" :key="control+index" @click="selectItme(index)">
			<span :class="{isActive: index === currnetIndex}">{{control}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabControl",
		props: {
			controls: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currnetIndex: 0
			}
		},
		methods: {
			selectItme(index){
				this.currnetIndex = index
				this.$emit('changeControl',index)
			}
		}
	}
</script>

<style scoped>
	.tab-control {
		display: flex;
		text-align: center;
	}
	.control-item {
		flex: 1;
		height: 49px;
		line-height: 49px;
		font-size: 16px;
		color: #333333;
	}
	.control-item span.isActive {
		color: var(--color-high-text);
		padding: 3;
		border-bottom: 3px solid var(--color-tint);
	}
</style>
