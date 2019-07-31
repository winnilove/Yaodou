<template>
    <div class="newcuston">
      <div class="blocktitle">
        <div
          class="newcustomdbg"
         >
          <div class="title" style="color: rgb(233, 71, 58);">
            <div  class="title-text">
              <img   src="http://www.yaodouwang.com/static/img/goodtitle.82b5b55.png" />
            </div>
          </div>
        </div>
      </div>
    <div class="goodslist">
        <goods-item v-for="item in list" :key="item.id" :msg=item />
    </div>
    <div class="getmore" @click="getMore" >
      点击加载更多
    </div>
    </div>
</template>
<script>
import GoodsItem from './GoodsItem'
import http from '../../utils/http'
import { Indicator, Toast } from 'mint-ui'



export default {
    data(){
        return {
            list :[],
            pageIndex : 1
        }
    },
    create(){
      this.pageIndex = 1
    },
    methods:{
      async getData(pageIndex){
           return await http.get({
                url: '/apis/product/hotGoodsRecommend',
                params: {
                    pageIndex,
                    pageSize:20,
                    day:30
                }
            })
       },
      async getMore(){
        Indicator.open()
        ++this.pageIndex;
        this.list=[...this.list,...(await this.getData(this.pageIndex)).data.records]
        Indicator.close()
       }
    },
    async mounted(){
        let res = await this.getData(this.pageIndex)
        this.list=res.data.records
    },
    components:{
        GoodsItem
    }
}
</script>
<style lang="stylus" scoped>
.goodslist
    width 100%
    background-color #fff
    display flex
    flex-flow row wrap
    margin-top -30px
    div
        width 50%
.getmore
  height 90px
  padding-top 10px
  width 100%
  font-size 12px
  text-align center
  color #999

</style>

