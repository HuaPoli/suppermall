<template>
	<div>
		<tab-bar>
				  <tab-bar-item path="/home" active-color='deeppink'>
				  	<img slot="item-icon" src="~assets/img/tabbar/home.svg">
				  	<img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg">
				  	<div slot="item-text">首页</div>		  
				  </tab-bar-item>
				  <tab-bar-item path="/category" active-color='red'>
				  	<img slot="item-icon" src="~assets/img/tabbar/category.svg">
					<img slot="item-icon-active" src="~assets/img/tabbar/cart-active.svg">
				  	<div slot="item-text">分类</div>		  
				  </tab-bar-item>
				  <tab-bar-item path="/cart" active-color='red'>
				  	<img slot="item-icon" src="~assets/img/tabbar/cart.svg">
					<img slot="item-icon-active" src="~assets/img/tabbar/category-active.svg">
				  	<div slot="item-text">购物车</div>		  
				  </tab-bar-item>
				 <tab-bar-item path="/profile" active-color='red'>
				  	<img slot="item-icon" src="~assets/img/tabbar/wode.svg">
					<img slot="item-icon-active" src="~assets/img/tabbar/wode-active.svg">
				  	<div slot="item-text">我的</div>		  
				  </tab-bar-item>
		</tab-bar>
	</div>
	
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar'
	import TabBarItem from 'components/common/tabbar/TabBarItem'
	
	export default {
		name: 'MainTabBar',
		components: {
			TabBar,
			TabBarItem
		}
	}
	
	
</script>

<style>
</style>
