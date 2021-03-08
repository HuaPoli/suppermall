<template>
	<div id="detailNavBar">
		<nav-bar>
			<div slot="left" class="left" @click="back">
				<img src="~assets/img/common/back.svg" alt="">
			</div>
			<div slot="center" class="center">
				<div v-for="(item,index) in titles" :key="index" @click="selectTitle(index)"
					class="title-item" :class="{active: index==currentIndex}">
					{{item}}
				</div>
			</div>
		</nav-bar>
		
		
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	
	export default {
		name: 'DetailNavBar',
		components: {
			NavBar
		},
		data(){
			return {
				titles: ['商品','参数','评论','推荐'],
				currentIndex: 0
			} 
		},
		methods: {
			selectTitle(index){
				this.currentIndex = index
				this.$emit('sliderPosition',index)
			},
			back(){
				this.$router.go(-1)
			}
		}
		
	}
	
	
</script>

<style scoped="scoped">
	#detailNavBar {
		position: relative;
	}
	.left img {
		margin-top: 13px;
	}
	.center {
		display: flex;
	}
	.center .title-item {
		flex: 1;
		justify-content: center;
	}
	.active {
	    color: var(--color-high-text)
	  }
</style>
