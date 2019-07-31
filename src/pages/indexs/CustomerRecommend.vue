<template>
    <div class="newcuston">
      <div class="blocktitle">
        <div
          class="newcustomdbg"
          style="background-image: url(http://www.yaodouwang.com/static/img/newcusbg.88281d9.png);"
        >
          <div class="title" style="color: rgb(233, 71, 58);">
            <div  class="title-text">
              <img   src="http://www.yaodouwang.com/static/img/newcustom.731e7af.png" />
            </div>
            <div class="more" style="color: rgb(233, 71, 58);">
              <span >更多</span>
              <span >
                <img src="data:image/png;base64,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"
                  style="margin-top: -4px;"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="itemWrap">
        <goods-item
        v-for="item in data" 
        :key="item.id"
        :msg = item
        class="threePro"
        >
        </goods-item>
      </div>
    </div>
</template>
<script>
import GoodsItem from './GoodsItem'
import http from '../../utils/http'

export default {
  data(){
    return {
      data:[]
    }
  },
  async mounted(){
       let res=await http.get({
                url: '/apis/product/hotGoodsRecommend',
                params: {
                    pageIndex:1,
                    pageSize:6,
                    day:30
                }
        })
        this.data=res.data.records
    },
   components:{
     GoodsItem
   }
}
</script>

<style lang="stylus">
.newcuston
  margin-top 10px
  .itemWrap
    width 100%
    padding 0 5%
    .threePro
      display block
      width 33.33%
      float left
      margin-top -10px 
      .wrapimg
        height 120px
        img
          text-align center

.blocktitle 
    background: #fff;
    border-radius: 8px           
    .newcustomdbg
        height: 100%;
        width :100%;
        margin-bottom: 20px;
        background-size: 100% 260px;
        background-repeat: no-repeat;
        .title
            display: flex;
            padding: 19px 150px 11px;
            -ms-flex-pack: center;
            justify-content: center;
            position: relative;
            height: 82px;
            -ms-flex-align: center;
            div
                span
                    img
                        width:14px;
                        height: 14px;
                        line-height: 22px;
                        vertical-align: middle;
            .title-left
                width: 93px;
                .line-left
                    width: 40px;
                    height: 2px;
                    background: #e8473a;
                    border-radius: 2px;
                    opacity: .3;
                    display: inline-block;
.title-text
  img
    height 20px
.more
  position: absolute;
  font-size: 14px;
  width: 84px;
  height: 37px;
  top: 20px;
  right :10px;
  span
    display inline-block
    width 30px
</style>
              