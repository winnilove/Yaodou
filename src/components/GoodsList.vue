<template>
    <div class="itemwrap" :categoryId=this.id>
        <div class="cla" v-if="list.length == 0">
            <img src="http://www.yaodouwang.com/static/img/blank.947f86f.png" alt="">
        </div>
             <GoodsItem
                v-for="item in list" 
                :key="item.id" 
                :item = item
                >
            </GoodsItem>
    </div>
</template>
<script>
import http from '../utils/http'
import GoodsItem from './GoodsItem'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'


export default {
    props:['id'],//父组件Classify传过来的每一个导航标题的id
   data() {
        return {
            list: [],
            categoryId:this.id,
        }
    },
    created(){
        this.viewIndex = 0
        this.isFinished=true
        this.categoryId=JSON.stringify(this.$route.query.id)
    },
   watch:{
        async id(id){//箭头函数  不然会发生this改变
            this.categoryId=JSON.stringify(id)
            let res = await this.loadData(this.viewIndex,this.categoryId)
            this.list = res.data.product
        }

    },
    methods:{
        async loadData(viewIndex,categoryId){
            Indicator.open()
            let result = await http.post({
                url: '/apis/product/search',
                data:{
                    categoryId,
                    viewIndex,
                    viewSize: 20
                }
            })
            Indicator.close()
            return result
        },
        
    },
   
    async mounted(){
        let that = this
        //设置刚跳进列表页时导航标题高亮
        // that.$route.params.id 
        let slist = that.$store.state.list
        //store里面没有数据就加载第一批，有的话就加载store里面的
        if(slist.length!==0){
            that.list = slist
        }else{
            let res = await this.loadData(that.viewIndex,that.categoryId)
            that.list = res.data.product
        }
       
        // beforeRouteLeave:(to, from, next)=>{
        //     //判断是不是进入详情页
        //     if(to.name !=='detail'){
        //         that.$store.commit('setPostion',0)
        //         that.$store.commit('setViewIndex',0)
        //         that.$store.commit('setlist', that.list)

        //     }
        //     next()
        // }
        //有待考究
        // console.log(that.$store.state.viewIndex)
        // let vi=that.$store.state.viewIndex
        // for(var i = 0;i<=vi;i++){
        //     let res = await this.loadData(vi,that.categoryId)
        //     that.list = [...that.list,...res.data.product]
        //     console.log(that.list)
        // }
        //better-scroll
        that.$nextTick(() => {
            let bScroll = new BScroll(".wrapItem", {
                click: true,
                scrollY: true,
                scrollX:false,
                probeType:2,
                scrollbar: true,
                mouseWheel: true,
            });
            // console.log(that.$store.state.position)
            // bScroll.scrollTo(0, that.$store.state.position)
            //方法一、每一次翻页store记录viewIndex,然后根据详情页的路由to,from,也就是说如果是从详情页回来，那么就加载到viewIndex那一页
            //再跳转到那个位置，这样做的缺点在于加载很慢的话到那个位置就慢
            //方法二、当前组件通过commit去让store的action加载数据，然后存到store的state里面从详情页回来的时候直接从store的state
            //里面取，这样就不用异步请求，就能马上到达那个位置
            //这里为了方便用方法一
            bScroll.on('scrollEnd',async function(){
                if(this.maxScrollY - this.y >= 0){
                    that.viewIndex++
                    let res = await that.loadData(that.viewIndex,that.categoryId)
                    that.list = [...that.list,...res.data.product]
                    this.refresh()
                }
                that.$store.commit('setPosition',this.y)
                that.$store.commit('setViewIndex',that.viewIndex)
                that.$store.commit('setlist',that.list)
            })
            bScroll.scrollTo(0,that.$store.state.position)
        });
    },
    components:{
       GoodsItem
    }
}
</script>

<style lang="stylus" scoped>
.itemwrap
    width 100%
    flex 1
    overflow hidden
  .cla
    img
        width 50%
        position absolute
        left 0
        bottom 0
        top 0
        right 0
        margin 240px auto
</style>
