<template>
    <div class="purchase">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <span>客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span>店铺</span>
            </div>
            <div>
                <i  class="icon select"></i>
                <span>收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="addCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>

</template>
<script>
export default {
  name: 'PurchaseBar',
  props: {
      product: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  methods: {
      addCart() {
          console.log(this.product);
      }
  }
    
}
</script>
<style scoped>
    .purchase {
        display: flex;
        position: relative;
        width: 100%;
        height: 49px;
        background-color: #fff;
        text-align: center;
        font-size: 12px;
    }
    .bar-item {
        display: flex;
    }
    .bar-left {
        flex: 60%;
    }
    .icon {
        display: block;
        margin: 2px auto;
        width: 22px;
        height: 22px;
        background: url('~assets/img/detail/detail_bottom.png') no-repeat;
        background-size: 22px 152px;
    }
    .service {
       background-position: 1px -52px;
    }
    .shop {
       background-position: 1px -99px;
    }
    .select {
       background-position: 1px 1px;
    }
    .bar-left span {
       display: inline-block;
    }
    .bar-right {
        flex: 40%;
       
    }
    .bar-left div {
        flex: 1;
    }
    .bar-right div {
        flex: 1;
        line-height: 44px;
       
    }
    .cart {
        height: 100%;
        background-color: #FFE417;
    }
    .buy {
        height: 100%;
        background-color: #FF5B8E;
        color: #fff;
    }
</style>