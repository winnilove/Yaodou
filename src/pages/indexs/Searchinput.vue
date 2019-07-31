<template>
    <div id="navHead">
        <div id="inp">
           <svg class="icon" width="22px" height="22px" fill="#999" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#333333" d="M469.333333 213.333333a256 256 0 1 1-256 256 256 256 0 0 1 256-256m0-42.666666a298.666667 298.666667 0 1 0 298.666667 298.666666A298.666667 298.666667 0 0 0 469.333333 170.666667z"  /><path fill="#333333" d="M789.333333 810.666667a21.333333 21.333333 0 0 1-15.146666-6.186667l-106.666667-106.666667a21.333333 21.333333 0 0 1 30.293333-30.293333l106.666667 106.666667a21.333333 21.333333 0 0 1 0 30.293333A21.333333 21.333333 0 0 1 789.333333 810.666667z"  /></svg>
            <span class="text">搜索商品名/生产企业/旗舰店铺</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            scrolled : false
        }
    },
    methods:{
        handleScroll(){
            console.log(1)
        }
    },
    mounted(){
        // window.addEventListener('touchmove',(e)=>{
        //      console.log(e.changedTouches[0].screenY)
        // })
        //  window.addEventListener('scroll', this.handleScroll)

    }
}
</script>
<style lang="stylus" scoped>
#navHead
    height .48rem
    width 100%
    position fixed
    z-index 9999
#inp
    height .33rem
    width 90%
    margin .07rem auto 
    border-radius .2rem
    border:1px solid #e6e6e6
    padding 0 0 0 5px
    background-color #fff
    .text
        position absolute
        color #999
        line-height .33rem
        font-size .14rem
    .icon
        color #999999
        line-height .33rem
        margin-top 5px
</style>
