<template>
    <div class="bigwrap">
         <div class="tit">
            <p @click="handleClick">
                <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAAGyxPnNAAAAAXNSR0IArs4c6QAAAkxJREFUWAntmLsvBFEUxtcj8Ug8CyHRSBCVggRRSEThLyChU1KQ+Aso0ChUFCjUhCiUCiqNEImGxFKJR+GVCOLxfVmHY83O7JgjRjI3OXvPnDnnd7+5d/buzMZiabZVp7xXHczUB27+g9vJ9M99GZxlL1KrlWxJMLn/Vp6cEOz4HOWeQ9wh6drvOKSy0Fcb9pVtmky9rV5EJhWlk+SV4z3pQqiH47lCkpzjJ5lFJGfRYdM3ZCLy+Znx6f5XbwLCeb07Fhew9w4jsDookFsNQV9WIxXUbZVk/Ql6gnHVaM8w1+YGbVeVy8o3cctAkUs/MSEmQQT+se0mnQ90eIZqDnAciBIV//oMyF3gOJDbze9UkIsggWy3iS7YZwXKReFRMFSiulEBNyyA3Qo4awEcVcBBC+CSAnZaAMmQRamzApJzr8DZluBTBS61BG8rsOlULCqw2aLxykcUeIgBq9YFkNwVc1ZQcvRX1pIbKwGtz5QYwaIZ+MEM9KPmAnYAa/lB/a+W8CVoHibfbelNXhYslBcDsukgkI+gDRYDBGXUABCHycxJv4tYeVC4RX0HIDcwESb9CmJ8pPvzNgAFfFMTYdKP/bkyCOBD8oyDuEfEemChaAtQIbMmPbecplCoUyLiDkInEctQOaFx26DkCiYzKv0aYvmhUamEVME/hIlQ6fcRq1R5oXELoGQdJkKlv0SsOTQqlRDuBtMwESo9d4NelRcqlw8gTvvreKhUKjGpfrGmVI6n6/ffDU+gQwLv3UJYLSyuzucpP3KjGUg1A2+G9KjdWrVZxgAAAABJRU5ErkJggg=="
                class="topbar_button_img"
                />
            </p>
            <h3>购物车</h3>
            <p></p>
        </div>
        <mu-flex class="select-control-row checkAll">
            <mu-checkbox label="全选" v-model="checkAll"  @change="handleCheckAll()" :checked-icon="this.cartList.length < 0 ? 'indeterminate_check_box' : undefined"></mu-checkbox>
        </mu-flex>
        <!-- <div v-if="cartList==[]">购物车还没有商品，赶快去选购吧</div> -->
        <div class="goodsWrap" >
        <div class="cartItem" v-for="item in cartList" :key="item.productId">
            <div id="chbox">
                <mu-flex>
                        <mu-checkbox 
                        v-model="checkbox"
                        :key="item.productId"
                        :value="item.productId"
                        @change="checkedOne(item.productId)"
                        >
                        </mu-checkbox>
                    </mu-flex>
            </div>
                <div class="imgcon">
                    <img :src=item.imageUrl />
                    <!-- <img src="http://www.yaodouwang.com/static/img/default.df4afc2.jpg" /> -->
                </div>
                <div class="msg">
                    <h3>{{item.productName}}</h3>
                    <span>{{item.productSize}}</span>
                    <p>￥{{item.price}}</p>
                </div>
                <div class="btn">
                    <mt-button class="red" type="default" @click="reduceToCart(item.productId)" >-</mt-button>
                    <p>{{item.count}}</p>
                    <mt-button class="add" type="primary" @click="addToCart(item.productId)">+</mt-button>
                </div>
                <!-- <div class="detelate">
                     <slot name="dele"></slot>
                </div> -->

            </div>
        </div>
     <div class="total">
            <p class="tot">总计：￥ {{getTotalPrice}}</p>
            <p class="sure">结算</p>
    </div>

    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex';

import { Toast, Spinner, Indicator } from 'mint-ui'
import Vue from 'vue'
import { Button ,Checklist} from 'mint-ui';
Vue.component(Button.name, Button);
//页面加载时先从localStorage里面把数据存到state里，然后再从state里面取出来渲染页面
//然后加减，改变state里面的值，再存入localStorage
//注意页面上的库存量处理
export default {
    data(){
        return {
            checkbox: [],
            checked:true,
            cartList:[],
            checkAll:false,
            totalPrice:0,
            open:true
        }
    },
    template: ` <template v-slot:dele>
                <h1>删除</h1>
                </template>`,
    created(){
        //先让store取到localStroage里的数据
        this.$store.commit('getCartList')
        this.cartList=this.$store.state.cartList
        this.totalPrice = this.$store.state.allPrice
        this.$store.commit('checkedGoods',this.checkbox)
        //把选择了的也放入localStroage
        // this.checkbox=JSON.parse(localStorage.getItem("checkedList"))
    },
    computed:{
        
        ...mapGetters(['getTotalPrice']),

    },
    watch:{
       
    },
    mounted(){
        
        // console.log(this.getTotalPrice)
        // this.totalPrice = this.getTotalPrice
        // this.$store.getters.getTotalPrice
    },
    methods:{
        handleClick() {
        this.$router.go(-1);
        },
        handleCheckBox(){
            this.checked = true
        },
        setLocalStorage(name){
            localStorage.setItem(name,JSON.stringify(this.$store.state.cartList))
        },
        addToCart(id){
            this.$store.commit('addToCart',id)
            this.setLocalStorage("cartList")
        },
        reduceToCart(id){
            this.$store.state.cartList.forEach((item,index)=>{
                if(id==item.productId){
                    if(item.count==1){
                        alert("你确定要删除此商品么")
                        this.$store.state.cartList.splice(index,1)
                    }
                }
            })
            this.$store.commit('reduceToCart',id)
            this.setLocalStorage("cartList")
        },
        handleCheckAll(){
            //全选时把购物车的id全放入checkbox.value
            //先把选择的物品的数组置空
            this.checkbox=[]
            if(this.checkAll){
                this.cartList.forEach(item=>{
                    this.checkbox.push(item.productId)
                })
            }else{
                this.checkbox=[]
            }
            this.setLocalStorage("cartList")
            //将checklist存入store,以便在store里面计算价格
            this.$store.commit('checkedGoods',this.checkbox)
            //把选择过的商品id存入localStroage，下次刷新还在
            localStorage.setItem("checkedList",JSON.stringify(this.checkbox))

        },
        checkedOne(id){
            //change事件只有checkbox这个数组里面有商品的id，才说明这个商品被选择了
            this.checkbox.forEach(item=>{
                if(item === id){
                    this.$store.commit('checkedGoods',this.checkbox)
                    localStorage.setItem("checkedList",JSON.stringify(this.checkbox))
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.bigwrap{
    display flex
    flex-flow column wrap
    overflow scroll
    height 100%
    padding-bottom: 50px;
}
.man
    position absolute
    top 30px
    right 0
.detelate
    width 64px
    li 
        height 100px
        a
            height 100px
                div
                    height 100px
                    .mu-item-title
                        line-height 100px

.tit {
  height: 0.44rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  background-color: #fff;

  h3 {
    flex: 80;
    text-align: center;
    line-height: 0.44rem;
    font-size: 20px;
    font-weight: 500;
  }

  p {
    flex: 10;

    img {
      width: 0.3rem;
      height: 0.3rem;
      margin-top: 0.07rem;
    }
  }
}
.checkAll
    margin-left 10px
    margin-top 4px
.cartItem
    height 100px
    width 100%
    border-bottom 1px solid #eeeeee
    display flex
    flex-flow row nowrap
    margin-top 20px
    padding-right 10px
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
.total
    height 50px
    width 100%
    display flex
    line-height 50px
    position fixed
    bottom 0px
    .tot
        flex 2
        text-align center
        background #fff
    .sure
        flex 1
        height 100%
        color: #fff;
        background: #e9473a;
        border: 1px solid #b22222; 
        text-align center
.mint-button-text
    text-align center
#chbox
   padding-top: 30px;   
   padding-left 8px   
.goodsWrap
    flex 1
    overflow scroll
    height 100%
</style>