<template>
  <div class="detail-container">
    <div class="tit">
      <p @click="handleClick">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAAGyxPnNAAAAAXNSR0IArs4c6QAAAkxJREFUWAntmLsvBFEUxtcj8Ug8CyHRSBCVggRRSEThLyChU1KQ+Aso0ChUFCjUhCiUCiqNEImGxFKJR+GVCOLxfVmHY83O7JgjRjI3OXvPnDnnd7+5d/buzMZiabZVp7xXHczUB27+g9vJ9M99GZxlL1KrlWxJMLn/Vp6cEOz4HOWeQ9wh6drvOKSy0Fcb9pVtmky9rV5EJhWlk+SV4z3pQqiH47lCkpzjJ5lFJGfRYdM3ZCLy+Znx6f5XbwLCeb07Fhew9w4jsDookFsNQV9WIxXUbZVk/Ql6gnHVaM8w1+YGbVeVy8o3cctAkUs/MSEmQQT+se0mnQ90eIZqDnAciBIV//oMyF3gOJDbze9UkIsggWy3iS7YZwXKReFRMFSiulEBNyyA3Qo4awEcVcBBC+CSAnZaAMmQRamzApJzr8DZluBTBS61BG8rsOlULCqw2aLxykcUeIgBq9YFkNwVc1ZQcvRX1pIbKwGtz5QYwaIZ+MEM9KPmAnYAa/lB/a+W8CVoHibfbelNXhYslBcDsukgkI+gDRYDBGXUABCHycxJv4tYeVC4RX0HIDcwESb9CmJ8pPvzNgAFfFMTYdKP/bkyCOBD8oyDuEfEemChaAtQIbMmPbecplCoUyLiDkInEctQOaFx26DkCiYzKv0aYvmhUamEVME/hIlQ6fcRq1R5oXELoGQdJkKlv0SsOTQqlRDuBtMwESo9d4NelRcqlw8gTvvreKhUKjGpfrGmVI6n6/ffDU+gQwLv3UJYLSyuzucpP3KjGUg1A2+G9KjdWrVZxgAAAABJRU5ErkJggg=="
          class="topbar_button_img"
        />
      </p>
      <h3>商品详情</h3>
      <p></p>
    </div>
    <div class="proMsg">
      <div class="proimg" v-if="product.imageUrl">
        <img :src="product.imageUrl" />
      </div>
      <div v-else class="proimg">
        <img src="http://www.yaodouwang.com/static/img/default.df4afc2.jpg" />
      </div>

      <div class="protit">
        <h3>{{product.productName}}</h3>
        <h4>价格：￥{{product.partyId | toNum}}</h4>
        <span>{{product.productSize}}</span>
        <p>生产厂家：{{product.producer}}</p>
        <span>库存：{{product.quantityOnHandTotal}}</span>
      </div>
    </div>
    <footer  class="footer-option">
      <div class="haspa">
        <ul >
          <li>
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABaCAYAAAA8XZE/AAAJiklEQVR4Xu2ca5AcVRXHz+mZzT5Y2BB2SaAChZJVVCzQElJIQfr27GuM0agZCVpFCMi7hBLEB7F0PhhfPKRCITFQScUPgIxKJMbJPnpuJ2UpaqwCoSpKCAmQMo9dSIJJdmd35x7r4mxqttMzc3tm72Y3uf217/mfc3595vb0fSGYSysB1KpuxMEA1lwEBrABrJmAZnlTwQawZgKa5U0FG8CaCWiWNxVsAGsmoFm+qgpmjH3YsqyPEFEzEVmaY51UeUQUiDgghNjOOf93pc5DAyYijMViNxLRd4joQ5U6nk52iPgaIv7Ydd31iEhhYg8FOB6PnzU4OPgsAMTDODmF2qbr6+uXptPp91RzUgacTCajW7Zs2UxEMVXxU7EdIroLFizoSiaToyr5KQO2bfseAHhURfRUb4OI93DOV6nkqQQ4mUxanuftAYDzAkSHAGAXACg9UZWgpkibKAB8AADqAuLZa9v23GQyKcrFqgTYcZwrhRB/9Ysh4vqampq7enp6jpZzNB3vd3R0nDEyMvI4ES3zxx+JRK50Xffv5fJSAhyLxZbmcrlnCsUQ8Whzc/OsVCo1XM7JdL6fSCRmDAwMvEtEZxTmEYlErnddV77wS15KgBljtxLRL31KOzzPOy3+ptm2/RoAtPoK7DbO+RoDuBwBhfsGsAKkapoYwNXQU7A1gBUgVdPEAK6GnoKtAawAqZom0xZwV1fXRdls9gEiuggRvbq6uofT6XS2GhjxeLx2aGjoPiKyEXF3bW3tjzZv3ry7Gs1pCTgej7cMDQ29SkTnjiWPiM9xzq+rBgZj7NdE9OUCzQN1dXWXptPp/kp1pyVgx3FuF0I8EfAJ2uy67juVwIjFYufkcrkBv61lWXdkMpnVlWhKG+2AHce5XgjxtC/AfZ7nBQ3+KOXBGFtFRF/3N45Go9f09fX9SUnE1ygWi12Ty+W2+m0R8THO+d2VaOYB7wWAOYX2lmV9JZPJjBs+CNJX+lR2HOdaIcQWnwDV19fPDDP4XGhv23YaALoCqu2mTCazrhIYjuMsF0KsDbBNe573mUo085MMhwDGr+OzLGtBJpM54WGe8HBVnMbj8bmDg4NvB1TGMs75r1Q0CtssXrx45uHDh/cRUW2A7R88z1sUVjNfaRsB4LMBcWabmprmbNiwQYIKdTHGbiCi9X6j+vr6C9LptBzCLXkpVbBUYIy9RESX+dR2tLS0XBp2RM227QcB4JtFIiNEvIpzfsLwaKlMGGPziegv/korsHnI87z7ywEpvC9H0vr7+18NGOh5mXN+uYqWMmDbtlcAwA8DqmMd5/wmFWeyjeM4i4joeSKKFLNBxDcsy/q067r7VXRjsdhsIcSfieiDJTRziPiFTCYjq1zpYoytJaLlAY2/53neShURZcALFy48+9ixYzuI6JwA4WdbWlpuSaVSR8pU2a0AIF9uQV2D33RHJBJZ4rruP8toXkZEKX+VBdkgovyPfXe5YcZEItHY39//JAAsDSiodxoaGlo3bdp0cEIB57uJO4no8SLB7yein1uW9ZtMJrNzrE1bW1tTLpfrBIB7iWi+SlAFbUYRUfbxa5ubm19MpVI5eS+RSEQOHjx4VS6XW05ENwCAnN5RvhBRdj+PRCKR7r6+vsNjho7jXCyEWIKI3yCi2UXyvItz/gtVZ8oVLAXl3BznfBARZ5RxcAgRDxDRmYg4u9SiFET8DwA8TEQPleg/pTs597cv71f+ZQqaKxsLS/bjso+XX3Tnl+g2BBHtR8T/5j94ZpbJ6yjnXOakvDYiFOB8FR8ioibVJ1iqHSLK6lnAOX+ZMXY/Ef1sgnS/xTl/kDEmX8pbJipeANjteZ6cCFW+TibgV2pra7/Y3d39+li0cu5PCPGUf/5LNRs5T2hZ1tcK58o6OzvnZbPZ3wHAx1V1SrTb5Xle0RdpYJcS1iljbFwFI+IwEZXrMgrdHEHEVY2NjSs3btx4zO+/o6PjkpGRkZ8S0efCxIaIL9TU1Hy7p6fnX367RYsWNRw5cmQFEcmvucYQurLPL/y3c1IA7ySiHyCiHGCJFak+2WdtQ8SNdXV1q1UGXmKx2BVCiJuJaCEAzC0C5W1E/GM0Gn2qt7d3Wzlw+QGm24lIfsh8KqjPl78CAHCJ6DkAeAwAzi7QPTmAOefzZBByqHBkZOSjQog5QohzLct6DxH3zZgx43UVqMUAtbe3twoh5hLR++MBUtOyrD29vb07ykEtdl/CHh4enic1hRBnWZZ1IBKJ7I1Go9vHhkxt2353SgGuNNmpamcAa34yBrABrJmAZnlTwQawZgKa5U0FG8CaCWiWNxVsAGsmoFneVLABrJmAZnlTwQbwxBNgjF2NiOfX1NS43d3dcrRL23XaVbDjOI8KIeSGSHnti0aj8/v6+t7SRfi0AtzZ2Tkrm836FwX+xPO87xrAE0CAMfYxIpKrbI5fckqfc37CJsEJcPe+xGlVwQbwRJVNER0D2AAOJFD1ughE3Dk26amTsalgnXT/v3zWvOR0Mj6dAL9JRBcWwOz3PO/4TiFdkCcbsDz8iTEmj2ooXLn5kud5nwiTY+g+2LbtvwHAFWNO5PFXjY2NZwYtgwoTSLm2kw24s7PzvGw2K1d+Fv7v7uacn7CvpFTsoQH796FJcUTs4px3l4NUzf3JBlxkZ9Vqz/PuCJNHaMCO49wihBh3EAUiZjjnWk+jmkzAsntwHGcbEX3SV8FLOOe/1Qq4ra3twlwut8u/qBoRP885fyGM8zBtJxOw4zg3CiHGbSWTq0ibmppmh92pFLqC89/ock/EEt/TfQsRr81kMm+GAafadrIAy+Wzw8PDcv9biy+/NZzz21TjPf6OCmsg27e3t18+Ojr6j4Aqli+FOznnv69Et5SNbsBye8TWrVuvE0LI89CafXCH5Rmdruu+ETaviipYOmGMrSSiB4Icym1YAPAiAFS05zhIk4hmAcBXffe2I2Jf2KT97YlIVuvVAHBBkXzu45w/UomfigHnj1rsJiKnEsfTyOZ5zvmXwmx8GVf91SSaSCTqBwYGUvlV6NVITUlbRHymtbV12Zo1a0YqDbDiCh5zmK/kewHg+5VuXqk0eF12cvcTEa2wbfsJleMTS8VRNeAx8fyG8ZvzuyMv0ZW8Zt1XLMt6GhHXqW7jLRfPhAEudCTPfJQvjNHRUflimvKXPOm6oaFhj47PfS2ApzzRSQzQANYM2wA2gDUT0CxvKtgA1kxAs7ypYANYMwHN8qaCDWDNBDTLmwo2gDUT0Cz/PyIBj6YQ80CaAAAAAElFTkSuQmCC"
            />
          </li>
          <li >店铺</li>
        </ul>
      </div>
      <div class="haspa">
        <ul >
          <li >
            <img src="data:image/png;base64,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"
            />
          </li>
          <li >
            <span  style="color: rgb(102, 102, 102);">客服电话</span>
          </li>
        </ul>
      </div>
      <!-- 购物车 -->
      <router-link to="/carts" tag="div" class="haspa" style="position: relative;">
        <ul >
          <li >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAKDUlEQVR4Xu2cD4wcVR3H329m99ptdwNIFxADrYktEKC1VPyHePNmtne5HpQCLohBqTZWBYMiFY2aWgrGPyBoDEhKwbOJilkV6NVeu9fZ90CpRND6L8TaRoGWUFlq2kpburszP/OaO7P7une7O/Pe7m06L7nksvN+v9/3ffa3M2/e/N4AiZpWAqDVe+ScRIA1J0EEOAKsmYBm91EGR4A1E9DsPsrgCLBmAprdT5jB/f397zh27NijhJD3EUJiQgcAeISQfyPiM6Zp3u+67u806+t69xMCtizraULI5ZOMEAFg/fTp01eNjIwc6noSmgYwGWABLdVE3C2WZQ2uWbPGb6LvSddlQsCU0icQ8apmiADAXYyx1c30Pdn6TAjYcZzTfd//tjgHI2J87Bw8DRHPlSEBwLF4PH5uPp9/7WQD2Gi8LU/TbNu+xPf9LYSQdLVzAFjBGBMXxahVEWgZsLC1bfvTvu//UCL5EOf8MxHdWgKBAFNKz0PEv0swiwDwx24GjIhlAHiFEDI6d+7cjevWrSuHHU8gwNls1iwWi28QQqaHFTBV7QFgZywWu3F0dPT5MBoDARYBLcvaQQh5Z5jgXWD7Rjwep2EgBwZMKd2AiB/tAkihJALAP2bPnr1gaGjozSCOwgC+AxHFNO5kaMs55z8OMtAwgJcg4q+loEgIeSmIkA7aiOvIWQ3ib+GcDwTRGBhwX1/fOaVS6WU5aCqVmjk8PHwkiJhO2fT19c2sVCqLfN9/gBByUR0d+zjnbw2iLzBgEYxSegART6kObJrmAtd1/xJETKdtBgYGph09evRfhJAamABwhDE2M4i+sICfQcT3VwcGgGsZY78KImYq2Ni2fa/v+7dLY9rPGJsVRF9YwA8h4qckMV9ijH0niJipYGNZ1lcJIXdLWp7lnIt18ZZbKMC2bX/W9/0fSFHXc84/2bKSKWJAKf0+It4qJc3DjLGVQSSGApzJZKxKpcKkwJxzToOImQo2lmUNE0KuqNZiGMathUJBTqSm5IYCLJY0Pc97XYq0l3N+TlPRp2AnSukriHh2tbRYLEa3bdvGg8gNBVgEtCzrVWkeiel0emYulzsaRFAnbZYsWXLWkSNHxHhqWiqVSg8PD8uJ1JTU0IAppU8h4gero/X09Fycz+f/1pSCKdSJUjqIiJskSYHnwMKPCsDrEXFFtSjTNK92XfeJKcSuKSmU0tWIeKfUeZRz3teUgzqdQgO2bfvLvu9/U7oofLFQKNwbVFSn7CilTyLi0ur4AHAfY6xmXtyKvtCAHcf5kOd5OUnUOsZYzfy4FVGd6ksp3YuIb5OS5ROFQuFHQTWFBkwpXYCIf5IAFxhjTlBRnbBzHOdMz/P2ybHj8filHVkPHheSzWaTxWLxvxLglxljszsBKmhM27YHfN/fLI3DTyaTqTCLV6EzWAiqN1WbM2fOjKCL1EEhhbGzbftrvu/fJfnYxTmfF8avKsC/IYR8QJpJXOi67gthxLXT1rIssUB1tRTzcc75NWF0KAFMKX0UET8u/byuYoxtDCOunbaU0hcRsea0BgBrGWNfD6NDFeCvIOI3JCGrOOffDSOuXbYT3PIT0zSzruv+IowOVYCvQ8SfS0K6phDFcZyM53mjMkgAOJ8xtrPjgDOZzMJKpSIXnWzjnC8OI65dtpTSeg9w30yn08lcLidqogM3JRm8dOnS1KFDh2pqhAHgJcbYnMDK2mhIKX0MEa+XQu7gnF8SVoYSwEIEpVRUvp8xLggA/FmzZiVyuVwprEid9itXrozv2rVrHyK+RbpIb2CM3RQ2tkrAv0XEy6oF9fT0XJDP5+UatrCaldo7jnOF53likb2mGYahZD1FJeAhRKz5xk3TvNJ1XXn5TymgMM6WLVt26sGDB59FxPNkP6ZpDriuK8p0QzVlgOvdCQHAFxhj94dSqMlYbPIplUqPyGvZ4+GmTZt29tatW09YfG9VjjLAjuN82PO8n0nnsQcZY7e0Kipsf0SE/v7+GbFYLFUul1Oe56UQUew3ORMR3w4A4uJ1LSKa9WKpvEArA0wpXYSINaWeAJBnjPU3AlYPCCEkKaAYhnEczvif+BwABKxxaOJ/+bNkyIcJazjn8sJ7o2HUPa4McCaTOaVSqRyQoojnWEMSEDH4VPVnADATEY1AI1BvtCOdTl+m6pmiMsBinJZlFQkhgSpg1HNq3SMAvAYA7y4UCsoKGFUD3j62M7T10XXYAgA2jG2qFEmirCkFPFWLssVNDyFEPBQQp7Dxv4OEkNcR8Z8AsIkx9mdlVKscqQZc76lsaN1je6QFkP8DQsSDAFANrBrc8f/FccMwDoyOjh4CAFG73PamFLBt2zf4vv9TeRQAUBJA6mTQCYBM0zwOToAxTfNAMpk8kMvlxIabrmxKATuOc6nneb+XSGzinF/ZlXQUiFYKeHBw8LTDhw//p1oXALzAGLtQgdaudKEUsCBAKRUXjtPHaYh9zL29vTNO1t34ygFblnXCVM00Tdt1XbnMtSszslXROgCLxZ3PS0JeNAxjhWEYf4jH4x25mjcC43mel8/nDzfq1+px5YDrrUm0KqqD/XeZpnmTylflKAc8dh5+ABFv7iCowKFVrqQJEVoAZ7PZnmKx+BQh5L2BR9pBw56enqSq04UWwIKN2NxXLpfXEkI+N9G6awcZThgaAJ5mjPWq0qYN8LjATCZzsed5YtO4qMI8TdevJiwQcTuOiDsSicTqkZERZQs+2gGHHXi327cN8PLly6fv2bNnoed58wFgTzwef77dL1Eae0Qv4i8khOyPxWJCwx6dX2JbAFNKlxBCHpa2R1UIId+aN2/eWhWvbmkEiVL6HkQcIoScL93Kr0ulUqs2btxYU+PcyF+zx7UDppReg4i/nETQY5zzG5oVHKTf2CKUuMM8/opIuQHA9t7e3st13M5rBTxWd7CzuuKn3gB17koae7/QXwkhF0z25RiGcVuhUPhekC9wMhutgCmlSxHxyUaiAeAnjLEbG/ULctxxnPme5zV8WiGymDFWU5kUJN4Jvw4VTibyYVmWKF5e0yiGziVNSunHELHh62DCvBOikxl8MyKKt4g0ato2kNfb3DLBeVhLNajWU8TixYvfVS6Xn2tEFwDuYYzd0ahfkON9fX1nlMvlV5uou8hxzq8LEqNjGSwCW5b1OCFk2UQiAGB/IpG4aPPmzSfsUVM1WErpfYh42yQaSvF4fJGO/dVaM1gMSGRQqVQSVYpicl/TAEA8CP0IY6xmf5oqsON+stlsolgsig05mToajiHiLZzzR1THFf60AxZBxB3U7t27b/d9fxAA5hNCxJbV7YlE4s6RkZG9OgYm+xT1b7ZtizexXI+Ix+/kAOA5wzDu1rndrC2A2wFwqsaIAGv+ZiLAEWDNBDS7jzI4AqyZgGb3UQZHgDUT0Ow+yuAIsGYCmt1HGawZ8P8AcAblhgqfTa8AAAAASUVORK5CYII="
            />
          </li>
          <li >购物车</li>
          <!---->
        </ul>
      </router-link>
      <div class="shopM">立即购买</div>
      <div class="shopC" @click="addToCart(product)">加入购物车</div>
      <!---->
      <!---->
    </footer>
  </div>
</template>
<script>
import http from "../../utils/http";
import { Toast, Spinner, Indicator } from 'mint-ui'
import { mapActions,mapMutations } from 'vuex'

export default {
  data() {
    return {
      product: {}
    };
  },
  created(){
    this.productId=""
  },
  async mounted() {
    this.productId = this.$route.query.productId;
    let res = await this.loadData(this.productId);
    this.product = res.data.productDetail;
  },
  computed:{
     
  },
  filters:{
    toNum:function(value){
      value = parseInt(String(value).substring(0,3))/10
      return value
    }
  },
  methods: {
    handleClick() {
      this.$router.go(-1);
    },
    async loadData(productId) {
      let result = await http.get({
        url: "/apis/product/info_V3",
        params: {
          productId
        }
      });
      return result;
    },
    addToCart (product) {
        if(!localStorage.getItem("token")){
             Toast({
                    message: '您还未登录，请先登录',
                    position: 'center',
                    duration: 500,
            })
            setTimeout(()=>{
                this.$router.push('/profile')
            },500)
        }
         let{
          productId,
          productName,
          quantityOnHandTotal,
          imageUrl,
          producer,
          productSize
        }=this.product
        let price = parseInt(String(product.partyId).substring(0,3))/10
        let count = 1
        let cartMsg={productId, productName,quantityOnHandTotal,imageUrl,producer,productSize,price,count}
       
        //把该商品的id,图片url,价格，库存，放入store的cartList
        this.$store.commit('addCart',cartMsg)

        
        this.$toast.message('加入购物车成功',{color:"success"});
        // console.log(this.$store.state.cartList)
        //同时存入localStroage的操作应该放到state里面去做，因为要判断之前是否已经放入购物车
        
    },
    
    

  }
};
</script>
<style lang="stylus" scoped>
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

.proMsg {
  width: 100%;

  .proimg {
    background: #fff;

    img {
      width: 320px;
      display: block;
      margin: 0 auto;
    }
  }

  .protit {
    background: #fff;
    margin-top: 10px;
    height: 500px;
    padding 20px
    h4{
      color red
    }
    h3 {
      font-size: 18px;
      line-height: 30px;
      font-weight: 400;
    }
    p{
        border-bottom 1px #eee solid
    }
    p,span{
        font-size 12px
        line-height 30px
    }
        
  }
}
.footer-option
    height 50px
    width 100%
    position fixed
    bottom 0
    display flex
    flex-flow row nowrap
    div
        height 100%
        flex 10
        text-align center
        ul
            li
                height 100%
                font-size 12px
                img
                    height 22px
                    width 22px
.shopM
    color #e8473a
    background #ffebe9
    line-height 50px
    font-size 15px;
    flex 20 !important
.shopC
    color #fff
    background #e9473a
    border 1px solid #b22222
    line-height 50px
    flex 25 !important
    font-size 15px
.haspa
    padding-top 5px

</style>

