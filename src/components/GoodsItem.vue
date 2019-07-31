<template>
  <router-link :to="{path:'/detail',query:{productId:item.productId,partyId:item.partyId,prodType:'classify'}}" tag="div" class="wrapper">
    <div v-if="item.imageUrl" class="imgcon">
      <img :src="item.imageUrl" />
    </div>
    <div v-else class="imgcon">
      <img src="http://www.yaodouwang.com/static/img/default.df4afc2.jpg" />
    </div>
    <div class="text">
      <div class="detail_right">
        <div>
          <p class="detit">{{item.productName}}</p>
          <p class="small" style="margin-bottom: 6px;">{{item.productSize}}</p>
          <p class="small" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"
          >{{item.producer}}</p>
        </div>
        <p class="money" >
          <span class="th-mber">会员可见</span>
        </p>
        <!---->
        <p class="small city"  >
          <span class="cityname" >
            <img class="imgset" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcNJREFUSA3tlLtKA1EQhnMnha1iYalVIAtJCisbLQQ7EbFRRIISRLE1hVooWKqNWIiFVZ7ATmyUFEkwwqYI+gYqFkKSDZv1O0vOIbtK1KyFRQaGmfln5p9z2/X5+vLNCfjd+WKxmLMsa96N/zT2+/25ZDK5IOtD0pEW8iq+LuPf2na/anPsQNf14Xq9PqmyPTrRaPQqFou9inbHDiDfYAXZHnlVW61W2yY4FEBAohAH0CUZe7Hcw4rsVwO43CnAEZnwYlnoWKlUmhAcagD+sgD+ShiSFlxqANuadpODvfWKMWDGMYAg7yJ7ZsBJJ0ZMn7UnbCeOf/TFYmw+tYNQKLRK4Q1qolUaZlut1j7+OVpHXyBfT6VSx/ibqHiGNerOEonEAXaO+Ak18a/D4fAa/meBxH665XJ5qFAoZEQFWLBtAzyGbEds46KOSx1s19j9whfi+NAoZHA4YprmKCSn5MexW5FI5JJVDTQajR2wNP4F2C65d8MwFomPwPPYTDAYfGw2mwY7bYI5B7AKjWO5FwkvwiCN/9GD4FB34IWwW29/QLfTsXOOI+IFiG/As3TyOAbE4/EKL+DO44RbTdMqHjn+UfsHWlGsMpP17jcAAAAASUVORK5CYII="
              />
            <span>{{item.groupName}}</span>
            <img class="imgset" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABLElEQVQ4T6WTvUrEQBSFzyQRscxT6Hski912qbSUSZUib5CnyM/kTxAbG1ufwU7wh13FFZUoCJaBmJArC1kIs7tu1Olm7pmPmXPPZZAW5/ySiL7ath2nafop1+U9kw9s274gon0AV3Vdj/I8//gJsgRwXXenLMvzDnILwBRCvK2DLAHmQsdxtquqOgMwBnCvaZrh+/7LKshKwFzIOd8CcArAAjBr29ZIkmS20YO+wLIsVdf1YwCHAF6JyIjjeNrXrH3BQuR5nlIURQTgCMA7EZlxHN8s6hsBnZDZtn1CRAeMsUkURXt/BgCYCiF2BwPkLyiKMgrD8HoQQDZRVVUzCILJIBOlNj41TWNkWfY4qI39IBHRA2PMEEI8DwpSP8pEdNddHh7lfw/Tb8f5G2StphGmvJUGAAAAAElFTkSuQmCC"
              />
          </span>
        </p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props:['item'],
  mounted(){
      
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl';
.wrapper {
  width: 100%;
  height: 1.3rem;
  background-color: #fff;
  display flex
  flex-flow row nowrap
  .imgcon {
    img {
      width: 114px;
      height: 114px;
    }
  }
  .text {
    height: 100%;
    width: 60%;
    border_1px(0 0 1px 0);
    margin-left: 20px;
  }
}
.detit
  font-size: 14px;
  margin-top:4px;
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis; 
  font-weight: 400;
.small 
  font-size 12px
  color: #999;
.city
  color: rgb(102, 102, 102);
  line-height:.22rem;
  height:.22rem;
.cityname
  padding: 0px 2px; 
  margin-top:4px;
  background: rgb(245, 245, 245);
  line-height:.22rem; 
  display: flex; 
  flex:row nowrap;
  width 1.05rem;
  height .22rem
  border: 1px solid rgb(245, 245, 245); 
  border-radius: 0.2rem;
  span
    line-height:.22rem;
    font-size 12px
  .imgset
    margin-right: 6px;
    width: 12px; 
    height: 12px;
    margin-top 4px;
.money
  margin-top: 4px;
  display: inline-block;
  .th-mber
    background: #ffe8e6;
    border-radius: 2.5rem;
    color: #e8473a;
    padding:2px 6px;
</style>
