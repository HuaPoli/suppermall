<template>
	<div id="detail">
		<detail-nav-bar @sliderPosition="sliderPosition" ref="navBar" />
		<scroll class="content" :probe-type="3" :pull-up-load="true" ref="scroll"  @scroll="scrollPosition" >
			<detail-swiper :topImages="topImage"/>
			<detail-info :goodsInfo="goodsInfo"/>
			<shop-info :shop="shop"/>
			<!-- 参数 -->
			<detail-param :params="params" ref="params" />
			<!-- 评论 -->
			<comment :commentInfo="comment" ref="comment"/>
			<!-- 推荐 -->
			<div class="recommend">才您喜欢</div>
			<goods-list :goodsList="goodsList" ref="recommend" class="goods-list" />
		</scroll>
	</div>
</template>

<script>
import DetailNavBar from './comps/DetailNavBar'
import DetailSwiper from './comps/DetailSwiper'
import DetailInfo from './comps/DetailInfo'
import ShopInfo from './comps/ShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll'

import {getDetail,GoodsInfo} from 'network/detail'
import DetailParam from './comps/DetailParam.vue'

import {debounce} from 'common/utils'
import {imgListenerMixins} from 'common/mixin'
import Comment from './comps/Comment.vue'
import GoodsList from '../../components/content/goodsList/GoodsList.vue'


export default {
	name: 'Detail',
	components: {
	DetailNavBar,
	DetailSwiper,
	DetailInfo,
	ShopInfo,
	Scroll,
	DetailParam,
	Comment,
	GoodsList,
	},
	data(){
	return {
		gid: null,
		topImage: [],
		goodsInfo: {},
		shop: {},
		params: [],
		comment: [],
		goodsList:[],
		slidersY: [],
		sliderListener: null,
		currentIndex: 0
	}
	},
	mixins: [imgListenerMixins],
	created() {
	console.log(this.topImage)
	this.gid = this.$route.query.id 
	getDetail(this.gid).then(res => {
		this.topImage = res.data.topImages
		const goods = res.data.goods
		const shop = res.data.shop
		this.params = res.data.params
		this.comment = res.data.comment
		this.goodsList = res.data.goodsList
		console.log(this.comment);
		const paramArr = [
			goods.title,
			goods.price,
			goods.old_price,
			goods.discount,
			goods.sales_volume,
			goods.collection,
			shop.delivery,
			shop.promise
		]
		this.goodsInfo = new GoodsInfo(...paramArr)
		this.shop = shop
		
		this.$nextTick(()=>{
			// 这里还是不行，计算的值没把图片包含在内
			
		})


	})
	},
	mounted() {
	const refresh = debounce(this.getSliderY,500) 
	this.sliderListener = ()=>{ refresh()}
	this.$bus.$on('imageLoad', this.sliderListener)

	},
	deactivated() {
		console.log('未保持激活状态回调用吗？');
	},
	updated() {

	},
	destroyed() {

	},
	methods:{
		sliderPosition(index) {
			this.$refs.scroll.scrollTo(0,-this.slidersY[index],500)
		},
		getSliderY() {
		this.slidersY = []
		this.slidersY.push(0)
		this.slidersY.push(this.$refs.params.$el.offsetTop)
		this.slidersY.push(this.$refs.comment.$el.offsetTop)
		this.slidersY.push(this.$refs.recommend.$el.offsetTop)
		},
		scrollPosition(position) {
				for(let i =0; i < this.slidersY.length; i++){
					var temp = i + 1;
					if(temp === this.slidersY.length){
						temp = this.slidersY.length - 1
					}	
					if(this.currentIndex != i && position.y <= -this.slidersY[i]  && position.y > -this.slidersY[temp] ){
						this.currentIndex = i;
						this.$refs.navBar.currentIndex = this.currentIndex
					}else if(this.currentIndex !== temp && position.y <= -this.slidersY[temp] && temp == this.slidersY.length-1 ){
						this.currentIndex = temp
						this.$refs.navBar.currentIndex = this.currentIndex
					}
				}
		}
	}
}

	
</script>

<style scoped>
	#detail {
		position: relative;
		height: 100vh;
		z-index: 1;
		background-color: #fff;
	}
	.content {
		background-color: #fff ;
		height: calc(100% - 44px);
	}
	.recommend {
		 height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        color: var(--color-high-text);
		background-color: #f1f1f1;
		margin-top: 10px;
	}
	.goods-list {
		background-color: #f1f1f1;
	}
</style>>
