<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'TabBar'
	}
</script>

<style scoped="scoped">
	#tab-bar{
		height: 49px;
		width: 100%;
		display: flex;
		background-color: #f6f6f6;
		position: fixed;
		left: 0;
		bottom: 0;
		box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
	}
	
</style>
