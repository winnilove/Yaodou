<template>
    <div class="index-container">
            <header>
                <Searchinput />
            </header>
            <main ref="viewBox">
                <div id="slider" v-bind:style="{ background: activeColor}">
                    <div class="slimg">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div v-for='item in items' :key="item.id" class="swiper-slide">
                                    <img :src=item.imageUrl />
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <div class="slibtm">
                    <div class="sbtml">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAA1VBMVEVHcEzpRjrpRznpQzfpSD3qSDnpRjnqRzvpRzrqSjrqRzroRjrpRjnqRzrnST3qRznqRzrpSDvqRzrpRjnpRzrrOzvoRzrrRTvqRzrpRzrqRzvqRzvqRzrpRzrpRzrpRzroRi7sRDjqRzrqRzrpRzrqRzrrRjvqRzrpRzrqRzrpRjrpRzr0QzfsSDzpSDvrRjzrSDnmRTvpSDnqRznmTTPpSDrxRznqSDrjOTnqRzrpRjrqRzrqRzrqSDrjRzntSDrpRzrpSDrpRzrwSzzvQDDpRjrpRzrTLWDJAAAARnRSTlMA9v0XLrKK4tQwvm06xRUkz4vQoNkN4hrl/j2UzbCN6Qsp+4Tl8Fva/Mrk9xdRUjNmNGe/CjkSkQmeq5Cd3RI54KvfERDdLvRGMQAAANpJREFUKM+tkscOgkAURYciKqDYESuKvffey/3/T3IUiRmBhYlncedlzixeboYQm9W2jhf15Yyw7MAFX3BYs+bAn672dLvwC0ZVcHbGDSqf+1y+KKMWeFODXMznbFOCB6WnaaA8GoYZxpMyGlS1MScujmjT7HaIB50uDYS8VAisGvT9lAZoPkoExB+VEkukgFQiprhUxOkh4lKqFE8Cybik/mkNSo/jBL82olG2jVbTq8Nmi8a+KriNUL3TtCDr30afwqKHWYCRDTJkDRTM55O0lOHZj8FnpDQhDzGGKmnVJVuOAAAAAElFTkSuQmCC" alt="" style="display: inline-block; width: 12px; height: 12px;">
                        <span class="font-px32">12.21万</span>+
                        <span class="color-666">商品</span>
                    </div>
                    <div class="sbtmr">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAABwlBMVEVHcEzpRjrnST3qSTr/AADpRzr/AADpRzrqRzrpSDrpRzrpRjr/QEDpRzrqRzrpRzruRDPrRTvpRzrjOTnrTjvpRzrmRDvqRznqQECqVQDpRzrpRzrpRzrjQjnpSDrpRzrpRjrqSDrpRzrqRzrkQzbqRzvpRjrqSDvoRjrqRzrpRzrtSDrpSDrqRjrpRjrpRjn/SSTrSDvqSDvqRzrpRznsSDrpRzroRjrpRzrpRznpRzroRzroRjbmQjrqRzr/MzPnRzvpRjq/QEDsSTnoRzrtRjvqRzrpRzvpSDrqRzrpRzrqRzrqRznqRTfqRzrpQjrqSDnqSDnpRzrpRznqRzvrSDrqRzvpRznoRi7qRzrpRzrpRzrqRjvqRzvpRzrzRjrpRzrrSjzqRzvpSTrpRzrrSTvoRjnwSzzqRzrtSTfpRjvqSDrUKirpRzroRzroRzrmQDPpQzf/SUnqRzr/OTnpRzroRzrpSDvrRjz/VSrtSTrpRjnpRzrpRzrpRzrqRzrpRjnpRznMMzPoRjrnRTvpSDnpRzrpRzr/VQDqRzrpRzrbSSToRznoRzryTUDvRzzpRzrpRjrqRzrqRzrpRzrpRzqjIMOoAAAAlXRSTlMA9hVUAf4C8O/gz/4E8vCaDxrtCQ2MHr8MA/Xp4Bu9+OSn3LMTj/NfFojZOaSR764HJ2Pi9DXry++lzk8hH9sFVqsEUNdF2KWAqPnWkyXOI7J57ueUcnp9C/GJsUmb4RbFJqFG/FuGEcoOrrkG06i0FBcH1wmw4lIzBkY6wsa6zVBeBUJKR/fmA/qiB6n4FC/j6Pzj2z02+kUAAAFKSURBVCjPlZFVe8JQDIaLtDBkuAwdMHd3d3d3d3d3d/v+71ooFFhvdi6SL3nPk+TkEETg2IctLiHBc8x9gxBA26sLy1clx6bB0q8fciIvMTfKn35/ccgEQFyqhg5KVLTMKXIUZjLoB5DbKuPV7M2YrPRsEshnNL7fnsPqZwiVBV4UwTNUpPSfyFxNGwkfWpyQi/jR/AJMAzSScEhT6iUbMizvECEooczWTrvNVaxvMUkph8QqRE8S9m0srRAc+vpgrLgF3SNurCl8LZVaxn6+XnkjA4ApdrN6MolxHhz54oamHoqdswIpjLvELpsQB55gQjHjDvfI6bA1iVBDsWJsPIQYrWQtK0chUwcRYR0Mfq3oQJsxQFqbUc911Xlg3Wf1bBcay4NqUHNynN08EIqLE8x0hg11fA7cuZ3A6cGff6VuXfeP0U/XXJtfMOtK1ym/27AAAAAASUVORK5CYII=" alt="" style="display: inline-block; width: 12px; height: 12px;">
                        <span class="font-px32">757</span>+
                        <span class="color-666">药房</span>
                    </div>
                </div>
                <div class="medtype">
                    <Category />
                </div>
                <div class="customerRecommend">
                    <customer-recommend />
                </div>
                <div class="preferentialGoods"></div>
                <div class="goodRecommend">
                    <good-recommend />
                </div>
            </main>
            <nav>
                <router-link to="/index" tag="div" class="home">
                    <img src="data:image/png;base64,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" >
                    <span>首页</span>
                </router-link>
                <router-link to="/carts" tag="div" class="carts">
                    <img src= "data:image/png;base64,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">
                    <span>购物车</span>
                </router-link>
            <router-link to="/profile" tag="div" class="profile">
                    <img src="data:image/png;base64,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">
                    <span>个人</span>
                </router-link>
            </nav>
    </div>
</template>
<script>
import http from '../utils/http'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
import Searchinput from './indexs/Searchinput'
import Category from './indexs/Category'
import GoodRecommend from './indexs/GoodRecommend'
import CustomerRecommend from './indexs/CustomerRecommend'
export default {
    data(){
        return {
            items:[],
            activeColor:"#dce6d4"
        }
    },
    methods:{
         //请求轮播图http://gateway.yaodouwang.com/product/activity?bannerType=1000
        async getData(){
           return await http.get({
                url: '/apis/product/activity',
                params: {
                    bannerType:1000
                }
            })
       }
    },
    async mounted(){
        let result = await this.getData();
        this.items=result.data;
        this.$nextTick(() => {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,//可选选项，自动滑动
                loop : true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        })
        // //设置搜索框背景颜色
        // this.box = this.$refs.viewBox
        // console.log(this.box)
        // this.box.addEventListener("scroll",()=>{
        //     console.log(0)
        //     console.log(this.$refs.viewBox.srclloTop)
        // },true)

       
    },
    components:{
        Searchinput,
        Category,
        CustomerRecommend,
        GoodRecommend
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl'
.index-container
    display flex
    flex-flow row wrap
    overflow scroll
    height 100%
header
    height 50px
    background-color red
nav
    height .45rem
    width 100%
    background-color #fff
    position fixed
    bottom 0
    display flex
    flex-flow row nowrap
    div
        flex 1
        display flex
        flex-flow column wrap
        text-align center
        padding-top 3px
        img
            height .22rem
            width .22rem
            margin 0 auto
        span
            font-size .12rem
main
    flex 1
    width 100%
    overflow-y scroll
#slider
    height 1.75rem
    width 100%
    background rgb(220, 230, 212)
    padding-top .48rem
    .slimg
        height 1.6rem
        width 96%
        margin 0 auto
        border-radius 10px
        color black
        .swiper-container
            height 100%
            width 100%
            background-color pink
            border-radius 10px
            .swiper-wrapper
                height 100% 
                width auto
                .swiper-slide
                    height 1.6rem
                    width 96%
                    img
                        height 1.6rem
                        width 100%
.slibtm
    height  .84rem
    width 100%
    background-color #fff
    padding-top .42rem 
    display flex
    flex-flow row nowrap
    border_1px(0 0 1px 0)
    div
        text-align center
        line-height .42rem   
        width 50%
        height 100%
        background-color #fff
        .font-px32
            font-size .16rem
            line-height .42rem 
            color red
        .color-666
            color #666
            font-size .12rem
            line-height .42rem 
.medtype
    height 1rem
    width 100%
    background-color #fff
.swiper-slide
    img
        height 100%
        width 100%
     

        
   
</style>

