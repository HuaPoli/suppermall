import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop'
export const imgListenerMixins = {
    components: {
        BackTop,
    },
    data() {
        return {
            imgLoadListener: null,
        }
    },
    created(){

    },
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh,100) 
        this.imgLoadListener = ()=>{ refresh() }
        this.$bus.$on('imageLoad', this.imgLoadListener)
    },
    deactivated() {
        this.$bus.$off('imageLoad',this.imgLoadListener)
    },
    destroyed() {
       	 this.$bus.$off('imageLoad',this.imgLoadListener)
    }

}

export const backToTop = {
    components: {

    },
    data() {
        return {
            showBackTop: false,
            offsetTop: 0,
            isTabFixed: false,
        }
    },
    methods: {
        toTop(){
            this.$refs.scroll.scrollTo(0,0,500)
        },
        scrollPosition(position){
            this.isTabFixed = -position.y > this.offsetTop
            this.showBackTop = Math.abs(position.y) > 900
        },
    },
    created(){
        
    },
    mounted(){
       
    },
    deactivated() {
     
    },
    destroyed() {
       	 
    }

    
    
}