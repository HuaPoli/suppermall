<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>

		<tab-control class="tab-control" :controls="controls" ref="tabControl" 
		@changeControl="changeControl" v-show="isTabFixed" />	

		<scroll class="content" ref="scroll" 
			:probe-type="3" :pull-up-load="true"
			 @scroll="scrollPosition" @pullingUp="moreUpLoad">
			<swiper ref="swiper">
				<swiper-item v-for="item in banner" :key="item.id" >
						<img :src="item.image" @load="imageLoad" >
				</swiper-item>
			</swiper>
					
			<recommend :list="recommend"/>
			
			<reature-view />
					
			<tab-control  :controls="controls" ref="tabControlH" @changeControl="changeControl" />
					
			<goods-list :goodsList="showGoods"></goods-list>
			
			<p v-if="isBottom">已到底部....</p>
			
		</scroll>
		<back-top @click.native="toTop" v-show="showBackTop"></back-top>
		
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	import {homeMultidata, goodsMulidata} from 'network/home'
	import {Swiper, SwiperItem} from 'components/common/swiper'
	
	import Recommend from './comps/Recommend'
	import ReatureView from './comps/ReatureView'
	
	import TabControl from 'components/content/tabControl/TabControl'
	import GoodsList from 'components/content/goodsList/GoodsList'
	import Scroll from 'components/common/scroll/Scroll'

	
	import {imgListenerMixins,backToTop} from 'common/mixin'
	
	export default {
		name: 'Home',
		components: {
			NavBar,
			Swiper,
			SwiperItem,
			Recommend,
			ReatureView,
			TabControl,
			GoodsList,
			Scroll,
		},
		data(){
			return {
				banner: [],
				recommend: [],
				goods: {
					'pop': {page: 0, list: []},
					'new': {page: 0, list: []},
					'sell': {page: 0, list: []},
				},
				controls: ['新品','热门','精选'],
				goodsType: 'new',
				isBottom: false,
				isLoad: false,
			
			}
		},
		created() {
			this.getHomeMultidata()
			this.getGoodsMultidata('pop')
			this.getGoodsMultidata('new')
			this.getGoodsMultidata('sell')
			
		},
		mixins: [imgListenerMixins,backToTop],
		
		mounted(){
			console.log("mounted执行了");
		},
		destroyed() {
			console.log('home销毁')
		},
		methods: {
			// 防抖函数
			// debounce(func,delay){
			// 	let timer = null
			// 	return function(...args){
			// 		if(timer) clearTimeout(timer)
			// 		timer = setTimeout(func,()=>{
			// 			func.apply(this,args)
			// 		},delay)
			// 	}
			// },

			imageLoad(){
				if(!this.isLoad){
					this.offsetTop = this.$refs.tabControlH.$el.offsetTop
				}
				this.isLoad = true
			},
			
			getHomeMultidata(){
				homeMultidata().then(res => {
					this.banner = res.data.banner
					this.recommend = res.data.recommend
					
				})
			},
			getGoodsMultidata(type){
				
				let page = this.goods[type].page + 1
				goodsMulidata(type, page).then(res => {
					
					this.isBottom = res.data.isEnd
					
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
					this.$refs.scroll.finishPullUp();
				
					
				}).catch(err => {
					console.log(err)
				})
			},
			changeControl(index){
				switch(index){
					case 0:
						this.goodsType = 'new'
						break
					case 1:
						this.goodsType = 'pop'
						break
					case 2:
						this.goodsType = 'sell'
						break
				}
				this.$refs.tabControlH.currnetIndex = index
				this.$refs.tabControl.currnetIndex = index
			},
			
			moreUpLoad(){
				this.getGoodsMultidata(this.goodsType)
			}
			
		},
		computed:{
			showGoods(){
				return this.goods[this.goodsType].list
			}
		}
	}
</script>

<style scoped="scoped">
	#home {
		height: 100vh;
		position: relative;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: white;
	}
	.tab-control {
		position: relative;
		background-color: #F6F6F6;
		z-index: 9;
		
		
	}
	
	.content {
		
		/* height: calc(100% - 93px); */
		position: absolute;
		top: 44px;
		bottom: 49px;
		overflow: hidden;
	}
	
</style>
