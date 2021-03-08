<template>
  <div id="app">
	  <keep-alive exclude="Detail">
		  <router-view/>
	  </keep-alive>
	 <main-tab-bar/>
  </div>
</template>
<script>
	import MainTabBar from 'components/content/MainTabBar'
	export default {
		name: 'APP',
		components: {
			MainTabBar
		}
	}
	
	
</script>
<style >
	@import url("assets/css/base.css");
	.tab-bar-item {
		padding-top: 2px;
		flex: 1;
		text-align: center;
		font-size: 14px;
	}
	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-bottom: 2px;
	}
	
	
</style>
