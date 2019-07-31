<template>
    <div class="goodsList">
        <goods-item  />
    </div>
</template>
<script>
import http from '../../utils/http'
import GoodsItem from './GoodsItem'
export default {
    
   components:{
     GoodsItem
   }
}
</script>
<style lang="stylus" scoped>
.goodsList
    width 100%
    background-color #ffffff
    height 300px
    margin-top -44px
</style>
