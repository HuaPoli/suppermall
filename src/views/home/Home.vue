<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<swiper>
			<swiper-item v-for="item in banner" :key="item.link" >
				<a :href="item.link">
					<img :src="item.image" alt="">
				</a>
			</swiper-item>
		</swiper>
		<recommend :list="recommend"/>
		<reature-view />
		<tab-control class="tab-contorl" :controls="controls" @changeControl="changeControl" />
		<goods-list :goodsList="showGoods"></goods-list>
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

	
	export default {
		name: 'Home',
		
		components: {
			NavBar,
			Swiper,
			SwiperItem,
			Recommend,
			ReatureView,
			TabControl,
			GoodsList
			
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
				goodsType: 'new'
			}
		},
		created() {
			this.getHomeMultidata()
			this.getGoodsMultidata('pop')
			this.getGoodsMultidata('new')
			this.getGoodsMultidata('sell')
			
		},
		methods: {
			getHomeMultidata(){
				homeMultidata().then(res => {
					this.banner = res.data.banner.list
					this.recommend = res.data.recommend.list
				})
			},
			getGoodsMultidata(type){
				let page = this.goods[type].page + 1
				goodsMulidata(type, page).then(res => {
					for(let i = 0 ;i < 30; i++ ){
						let goods = {
							title: type+'测试夏季热快来解放立刻大师傅但是咖啡机发顺丰打开感到十分卡拉士大夫广东佛山非官方的官方电话关机'+i,
							link: '#',
							img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3196228190,1320544842&fm=26&gp=0.jpg',
							price: '192.00',
							cfav: 5 + i
						}
						this.goods[type].list.push(goods)
					}
					// this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
					
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
		padding-top: 44px;
	}
	.home-nav{
		background-color: var(--color-tint);
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.tab-contorl {
		position: sticky;
		top: 44px;
		z-index: 9;
		background-color: #FFFFFF;
	}
</style>
