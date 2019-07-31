import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        position:0,
        viewIndex : 0,
        list : [],
        cartList:[],
        checkedList:[],
       
    },
    getters:{
        getTotalPrice(state,getters){
            let  allPrice=0
            state.checkedList.forEach(id=>{
                 state.cartList.forEach(item=>{
                     if(item.productId==id){
                         allPrice+=item.price * item.count
                     }
                 })
            })
         return allPrice
        },
    },
    mutations:{
       
        setPosition(state,position){
            state.position = position
        },
        setViewIndex(state,index){
            state.viewIndex=index
        },
        setlist(state,list){
            state.list=list
        },
        //购物车
        //加入购物车的商品
        addCart(state,goods={},id=null){
            //goods是一个对象
            for(var i=0;i<state.cartList.length;i++){
                if(state.cartList[i]['productId'] ==goods['productId']){
                    state.cartList[i]['count']+=1;
                    return 
                }
            }
            state.cartList.push(goods)
            localStorage.setItem("cartList",JSON.stringify(state.cartList))
        },
        addToCart(state,id){
            for(var i=0;i<state.cartList.length;i++){
                if(state.cartList[i]['productId'] ==id){
                    state.cartList[i]['count']+=1;
                    return 
                }
            }
        },
        reduceToCart(state,id){
            for(var i=0;i<state.cartList.length;i++){
                if(state.cartList[i]['productId'] ==id){
                    state.cartList[i]['count']-=1
                    return
                }
            }
        },
        checkedGoods(state,checkList){
            state.checkedList=checkList
        },
        //进入购物车之前先将localStorage里的cartList拿出来放到store里面,localStorage里面的数据在登录时就要从数据库里取出来
        getCartList(state){
            state.cartList=JSON.parse(localStorage.getItem("cartList"))
        },
          
    },
    actions:{
        addCart (context) {
            context.commit('addCart')
        },
        // checkedGoods(context){
        //     context.commit('checkedGoods')
        // },
    }
})
export default store