<template>
	<div class="nav-bar">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
		
	}
</script>

<style scoped="scoped">
	.nav-bar{
		position: relative;
		display: flex;
		line-height: 44px;
		box-shadow: 0px 1px 1px rgba(100,100,0.2);
		text-align: center;
		z-index: 9;
		background-color: #fff;
	}
	.left,.right {
		width: 60px;
	}
	.center {
		flex: 1;
	}
</style>
