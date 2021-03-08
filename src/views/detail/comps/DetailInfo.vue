<template>
    <div class="detail_info" v-if="Object.keys(goodsInfo).length !== 0">
			<div class="title">{{goodsInfo.title}}</div>
			<div class="price">
				<span class="new_price">￥{{goodsInfo.price}}</span>
				<span class="old_price">￥{{goodsInfo.old_price}}</span>
				<span v-if="goodsInfo.discount" class="discount">{{goodsInfo.discount}}</span>
			</div>
			<div class="service">
				<div class="service_detail">
					<div>销量 {{goodsInfo.sales_volume}}</div>
					<div>收藏 {{goodsInfo.collection}}人</div>
					<div>{{goodsInfo.delivery}}</div>
				</div>
				<ul class="service_promise">
					<li v-for="(item,index) in goodsInfo.promise" :key="index">
                        <img src="~assets/img/common/promise.svg">
                        {{item}}
                    </li>
				</ul>
			</div>
	</div>
    
</template>
<script>
    export default {
        name: 'DetailInfo',
        props: {
            goodsInfo: {
                type: Object,
                default(){
					return {}
				}
            }
        }
    }
</script>

<style scoped>
   .detail_info .title {
        height: 30px;
        box-sizing: border-box;
        padding: 5px;
        font-size: 16px;
        color: #3B3B3B;
       
    }
   .detail_info .price {
       /* position: relative; */
        height: 30px;
        margin-top: 40px;
        letter-spacing:-1px;
    }
    .new_price{
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        color: #F75F89;
        margin: 0 5px;
    }
    .old_price {
        font-weight: bold;
        font-size: 10px;
        color: #B4B4B4;
        text-decoration:line-through;
        margin-right: 3px;
    }
    .discount {
        display: inline-block;
        position: relative;
        top: -10px;
        padding: 0 5px;
        height: 20px;
        background-color: #EA6483;
        color: #fff;
        border-radius: 10px;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        line-height: 20px;
    }
    .service .service_detail {
        display: flex;
        font-weight: bold;
        font-size: 10px;
        padding: 0 5px;

    }
  .service_detail div {
        flex: 1;
        color: #B4B4B4;
    
        text-align: center;

    }
    .service_detail div:nth-child(1){
         text-align: left;
    }
    .service_detail div:nth-child(3){
         text-align: right;
    }
    .service_promise {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-content: center;
        margin: 0;
        list-style: none;
        font-size: 12px;
        line-height: 20px;
        padding-left: 5px;
        color: #3B3B3B;
    }
    .service_promise::before {
        content: '';
        display: block;
        width: 98%;
        height: 1px;
        background-color: #F2F2F2;
        margin: 10px 0;
        
    }
    .service_promise::after {
        content: '';
        display: block;
        width: 98%;
        height: 3px;
        background-color: #F2F2F2;
        margin: 10px 0;
        
    }
    .service_promise li {
        width: 25%;
        height: 20px;
        text-align: left;
        overflow: hidden;
       
    }
    .service_promise img {
        width: 14px;
        height: auto;
        vertical-align: middle;
        margin-right: 1px;
    }
</style>