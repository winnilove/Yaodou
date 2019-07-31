<template>

    <div class="item" v-if="msg">
         <router-link :to="{path:'/detail',query:{productId:msg.productId,partyId:msg.partyId,prodType:'classify'}}" tag="div" >
        <div class="wrapimg"><img :src=msg.imageUrl ></div>
        <p class="msg">{{msg.productName}}</p>
        <span>{{msg.producer}}</span>
        <p class="cus">会员可见</p>
         </router-link>
    </div>
</template>
<script>
export default {
    props:['msg']
}
</script>

<style lang="stylus" scoped>
.item
    padding 5px
    div
        text-align center
    span 
        font-size 12px
        color #999
    .msg
        width 80%
        overflow hidden
        white-space nowrap
        text-overflow: ellipsis; 
    img
        width 80%
        max-height 100%
.wrapimg
    height 180px
.cus
    padding 5px
    width 70px
    text-align center
    color: #e8473a
    margin: 13px 0 24px
    background: #fff2f1;
    border-radius: 8px;
    font-size: 13px;
</style>
