<template>
	<div class="cart">
		<nav-bar class="nav">
			<div  slot="center">购物车({{countCart}})</div>
		</nav-bar>	
	</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
export default {
    components: { NavBar },
    name: 'Cart',
	computed: {
		...mapGetters(['countCart','goodsList'])
	}
}
</script>

<style scoped>
	.nav {
		width: 100%;
		background-color: var(--color-tint);
		color: white;
	}
</style>
