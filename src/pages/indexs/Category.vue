<template>
  <div class="wrap">
    <div class="wrapper">
      <ul>
        <router-link :to="{path:'/classify',query:{id:hsrc.id}}"  tag="li" class="item" 
        v-for="hsrc in srcs"
        :key="hsrc.id" 
        >
          <div class="icon">
            <img :src="hsrc.src" />
          </div>
          {{hsrc.tit}}
        </router-link>
      </ul>
    </div>
    
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import 'mint-ui/lib/style.css' 
import BScroll from "better-scroll";
import { Progress } from "mint-ui";
import Vue from "vue";

Vue.component(Progress.name, Progress);

export default {
  data() {
    return {
      srcs: [
        {
          id:10001,
          src:"data:image/png;base64,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",
          tit: "化药生物"
        },
        {
          id:10002,
          src: "http://www.yaodouwang.com/static/img/string2.651157f.png",
          tit: "中成药品"
        },
        {
          id:10003,
          src: "http://www.yaodouwang.com/static/img/string3.aebc76e.png",
          tit: "中药滋补"
        },
        {
          id:10004,
          src: "http://www.yaodouwang.com/static/img/string4.87d5c78.png",
          tit: "医疗器械"
        },
        {
          id:10005,
          src: "http://www.yaodouwang.com/static/img/string7.6930ad0.png",
          tit: "养生保健"
        },
        {
          id:10006,
          src: "http://www.yaodouwang.com/static/img/string2.651157f.png",
          tit: "计生用品"
        },
        {
          id:10007,
          src: "http://www.yaodouwang.com/static/img/string5.687b7e7.png",
          tit: "医疗用品"
        },
        {
          id:10008,
          src: "http://www.yaodouwang.com/static/img/string6.d708ae5.png",
          tit: "美妆百货"
        },
        
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      let bScroll = new BScroll(".wrapper", {
        click: true,
        scrollX: true,
        scrollbar: {
          fade: false,
        }
      });
    });
  },
  methods:{
    handleClick(id){
      this.$router.push({
        name:'classify',
        params:{
          id
        }
      })
    }
  }

}

</script>
<style lang="stylus" scoped>
.wrapper {
  height: 90%;
  width: 100%;
  overflow: hidden;
  ul {
    height: 100%;
    width: min-content;
    display: flex;
    flex-flow: row nowrap;
    .item {
      flex: 1;
      height: 100%;
      width: 0.75rem;
      text-align: center;
      padding: 5px auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      item-align: center;
      color: #666;
      font-size .13rem
      img {
        height: 0.4rem;
        width: 0.4rem;
      }
    }
  }
}
.wrap 
    height 100%
    width 100%
    overflow hidden
    position relative
.indicate 
    position absolute
    top 84px
    width: 100%;
    height: 4px;
    text-align center
    .mt-progress
        height 100%
        width 100%
        position absolute
        .mt-progress-content
            height 100%
            width 100%
            background-color: red !important;
            .mt-progress-progress
                background-color: #ffeded !important;
        

</style>

