<template>
    <div class="cartlist">
        <div class="cartItem">
            <div class="imgcon">
                <img src="http://www.yaodouwang.com/static/img/default.df4afc2.jpg" />
            </div>
            <div class="msg">
                <h3>药名</h3>
                <span>规格</span>
                <p>价钱</p>
            </div>
            <div class="btn">
                <mt-button class="red" type="default" >-</mt-button>
                <p>26</p>
                <mt-button class="add" type="primary">+</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
export default {
    
}
</script>

<style lang="stylus" scoped>
.cartItem
    height 100px
    width 100%
    border-bottom 1px solid #eeeeee
    display flex
    flex-flow row nowrap
    margin-top 20px
    padding-right 14px
    div
        height 100%
.imgcon
    flex 30
    img 
        width 80%
        margin-left 10%
        max-height 90%
.msg
    flex 45
.btn 
    flex 25
    display flex
    display row nowrap
    p
        height 100px
        width 30px
        text-align center
        line-height 100px

.red,.add
    height 30px
    width 30px
    text-align center
    border-radius 50%
    margin-top 35px
</style>

