import Vue from 'vue'
import VueRouter from 'vue-router'

import Classify from '../pages/cate/Classify'
import Carts from '../pages/carts/Carts'
import Index from '../pages/Index'
import Profile from '../pages/profile/Login'
import Detail from '../pages/detail/Detail'
import { Toast, Spinner, Indicator } from 'mint-ui'



Vue.use(VueRouter)

let routes = [
    {
        path :'/',
        redirect :'/index'
    },
    {
        path : '/index',
        name : 'index',
        component:Index,
        props:true
    },
    {
        //?问号的意思是该参数不是必传项
        path : '/classify/:id?',
        name : 'classify',
        component:Classify,
        // props: [id],//把id传给Classify组件
    },
    {
        path : '/carts',
        name : 'carts',
        component:Carts,
        beforeEnter: (to, from, next) => {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            // console.log(localStorage.getItem("token"))
            if(!localStorage.getItem("token")){
                Toast({
                        message: '您还未登录，请先登录',
                        position: 'center',
                        duration: 500,
                })
                setTimeout(()=>{
                    next({ path: '/profile' })
                },500)
            }
            next()
        }
    },
    {
        path : '/profile',
        name : 'profile',
        component:Profile,
    },
    {
        path : '/detail',
        name : 'detail',
        component:Detail,
    }

]
export default new VueRouter({
    routes
})