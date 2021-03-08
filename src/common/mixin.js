import {debounce} from './utils'
export const imgListenerMixins = {
    components: {

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
        console.log('混入mounted执行了');
    },
    deactivated() {
        this.$bus.$off('imageLoad',this.imgLoadListener)
    },
    destroyed() {
       	 this.$bus.$off('imageLoad',this.imgLoadListener)
    }



}