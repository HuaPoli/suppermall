<template>
	<div>
		<swiper class="detail-swiper">
			<swiper-item v-for="item in topImages" class="swiper-item" :key="item.id">
				<img :src="item.image" />
			</swiper-item>
		</swiper>
		
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper'
	
	export default {
		name: 'DetailSwiper',
		components: {
			Swiper,
			SwiperItem
		},
		props: {
			topImages: {
				type: Array,
				default(){
					return []
				}
			}
		},
		
	}
	
	
</script>

<style scoped="scoped">
	.detail-swiper {
	    height: 260px;
	    overflow: hidden;
	  }
	
</style>
