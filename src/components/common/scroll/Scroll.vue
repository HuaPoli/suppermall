<template>
	<div class="wrapper" ref="wrapper">
		<div class="content" >
			<slot></slot>
		</div>
	</div>
</template>
	
<script>
	import BScroll from 'better-scroll'
	
	export default {
		name: 'Scroll',
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return {
				scroll: null,
			}
		},
		methods: {
			backTop(x,y,time=300){
				this.scroll.scrollTo(x,y,time)
			},
			finishPullUp(){
				this.scroll.finishPullUp()
			},
			refresh(){
				this.scroll && this.scroll.refresh()
				console.log('---')
			}
		},
		mounted(){
			
			this.scroll = new BScroll(this.$refs.wrapper,{
				// 监听滚动事件 0 和 1 不监听 
				 probeType: this.probeType,
				 click: true,
				 pullUpLoad: this.pullUpLoad
			})
			// 监听滚动
			this.scroll.on('scroll',(position)=>{
				this.$emit('scroll',position)
			})
			
			this.scroll.on('pullingUp',()=>{
				this.$emit('pullUpLoad')
				
			})
			
		},
		
		
	}
	
	
</script>

<style scoped>
</style>
