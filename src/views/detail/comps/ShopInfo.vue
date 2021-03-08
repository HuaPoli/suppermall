<template>
    <div id="shopInfo">
        <div class="shop_header" v-if="Object.keys(shop).length !==0">
            <img :src="shop.shop_pic" alt="">
            <span>{{shop.shop_name}}</span>
        </div>
        <div class="shop_content">
            <div class="volume">
                <div>
                    <div>{{shop.volume | countVolume}}</div>
                    <div>总销量</div>
                </div>
                <div>
                    <div>{{shop.goods_count}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="score">
                <table>
                    <tr>
                        <td>描述相符</td>
                        <td :class="{red: shop.desc_score > 4.8}">{{shop.desc_score}}</td>
                        <td><span :class="{better: shop.desc_score > 4.8}">{{shop.desc_score > 4.8 ? '高' : '低'}}</span></td>
                    </tr>
                    <tr>
                        <td>价格合理</td>
                        <td :class="{red: shop.price_score > 4.8}">{{shop.price_score }}</td>
                        <td><span :class="{better: shop.price_score > 4.8}">{{shop.price_score > 4.8 ? '高' : '低'}}</span></td>
                    </tr>
                    <tr>
                        <td>质量满意</td>
                        <td :class="{red: shop.quality_score > 4.8}">{{shop.quality_score }}</td>
                        <td><span :class="{better: shop.quality_score > 4.8}">{{shop.quality_score > 4.8 ? '高' : '低'}}</span></td>
                    </tr>
                    
                </table>
            </div>
        </div>
        <div class="shop_footer">
            <a :href="shop.shop_url">进店逛逛</a>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'ShopInfo',
    data(){
        return {
            isBetter: false
        }
    },
    props: {
        shop: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        countVolume(value) {
            return value >= 10000 ? (value / 10000).toFixed(2) + '万' : value  
        }
    }
}
</script>
<style scoped>
    .shop_header {
        position: relative;
        height: 70px;
        color: #666;
    }
    .shop_header img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 0 10px;
    }
    .shop_header span {
        position: absolute;
        top: 20px;
    }
    .shop_content {
        display: flex;
        align-items: center;
        color: #333;
        font-size: 14px;
    }
   
    .shop_content div {
        flex: 1;
    }
    .volume {
        display: flex;
        text-align: center;
       
       
    }
    .volume div {
        flex: 1;
        padding: 2px;
        box-sizing: content-box;
    }
    .volume::after {
        content: '';
        display: block;
        height: 45px;
        border-right: 1px solid #f1f1f1;
    }
    .score table {
        margin: 0 auto;
        height: 70px;
    }
    .score table tr td {
        padding-right: 5px;
    }
   
    tr td:nth-child(2) {
        color: #67AF50;
    }
    .score table .red {
        color: #E55A5D;
    }
    .score table span {
        color: #fff;
        background: #67AF50;
    }
   .score table .better {
        background: #E55A5D;
    }
    .shop_footer a {
        display: block;
        width: 120px;
        height: 30px;
        margin: 5px auto;
        line-height: 30px;
        border-radius: 5px;
        text-align: center;
        color: #666;
        background-color: #f1f1f1;
    }
    .shop_footer::after {
        content: '';
        display: block;
        width: 98%;
        height: 3px;
        background-color: #F2F2F2;
        margin: 10px 0;
    }
</style>