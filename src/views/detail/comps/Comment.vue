<template>
    <div id="comment" v-if="commentInfo.length > 0 ">
        <div class="header">
            <div>用户评价</div>
            <div><a href="#">更多</a></div>
        </div>
        <div class="content" v-for="item in commentInfo" :key="item.id">
            <div class="userInfo">
                <img :src="item.user_pic" alt="">
                <span>{{item.uname}}</span>
            </div>
            <div class="user_comment">
               {{item.user_comment}}
            </div>
            <div class="tparams">
                <span>{{item.create_time}}</span>
                <span>{{item.model}}</span>
                <span>尺码:{{item.size}}</span>
            </div>
            <div class="show" >
                <div v-for="(pic,index) in item.show_img" :key="pic+index">
                    <img :src="pic" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Comment',
    props: {
        commentInfo: {
            type: Array,
            default(){
                return []
            }
        }
        
    }
}
</script>

<style scoped>
    #comment {
        width: 100%;
    }
    .header {
        display: flex;
        height: 44px;
        padding: 0 10px;
        margin: 10px 0 ;
        justify-content: space-between;
        border-top: 4px solid #F6F6F6;
        border-bottom: 1px solid #f1f1f1;
        line-height: 44px;
        font-size: 14px;
        font-weight: bold;
    }
    img {
        vertical-align: middle;
    }
    .userInfo {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        font-weight: bold;
    }
    .userInfo img {
        width: 40px;
        border-radius: 50%;
        vertical-align: middle;
        margin: 0 5px;
    }
    .user_comment {
        padding: 0 5px;
        text-align: left;
        font-size: 13px;
        color: #9D9D9D;
       
    }
    .tparams {
        height: 20px;
        color: #dddddd;
        font-size: 12px;
        line-height: 20px;
        margin: 5px 5px 1px 5px;
    }
    .tparams span {
        display: inline-block;
        margin-right: 10px;
    }
    .show {
        display: flex;
        flex-wrap:wrap;
        align-content:flex-start;
        padding: 0 3px;
        margin-bottom: 5px;
    }
    .show div {
     
        flex: 1;
        box-sizing: content-box;
        padding: 2px;  
        overflow: hidden;
        border-radius: 10px;     
        
    }
    .show img {
        width: 100%;
    }
</style>