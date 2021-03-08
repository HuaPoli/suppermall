<template>
    <div id="detailParam" v-if="params.length > 0">
        <div v-for="(item,index) in params" :key="index">
            <img :src="item.url" alt="" @load="imageLoad">
        </div>
    </div>
</template>
<script>
export default {
    name: 'DetailParam',
    props: {
        params: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        imageLoad() {
            this.$bus.$emit('imageLoad')
        }
    }
}
</script>
<style scoped>
    #detailParam div {
        padding: 0 10px ;
        
    }
    div img{
        width: 100%;
        vertical-align: middle;
        
    }
</style>