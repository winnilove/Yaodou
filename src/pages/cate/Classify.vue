<template>
  <div class="wrap">
    <div class="tit">
      <p @click="handleClick">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAAGyxPnNAAAAAXNSR0IArs4c6QAAAkxJREFUWAntmLsvBFEUxtcj8Ug8CyHRSBCVggRRSEThLyChU1KQ+Aso0ChUFCjUhCiUCiqNEImGxFKJR+GVCOLxfVmHY83O7JgjRjI3OXvPnDnnd7+5d/buzMZiabZVp7xXHczUB27+g9vJ9M99GZxlL1KrlWxJMLn/Vp6cEOz4HOWeQ9wh6drvOKSy0Fcb9pVtmky9rV5EJhWlk+SV4z3pQqiH47lCkpzjJ5lFJGfRYdM3ZCLy+Znx6f5XbwLCeb07Fhew9w4jsDookFsNQV9WIxXUbZVk/Ql6gnHVaM8w1+YGbVeVy8o3cctAkUs/MSEmQQT+se0mnQ90eIZqDnAciBIV//oMyF3gOJDbze9UkIsggWy3iS7YZwXKReFRMFSiulEBNyyA3Qo4awEcVcBBC+CSAnZaAMmQRamzApJzr8DZluBTBS61BG8rsOlULCqw2aLxykcUeIgBq9YFkNwVc1ZQcvRX1pIbKwGtz5QYwaIZ+MEM9KPmAnYAa/lB/a+W8CVoHibfbelNXhYslBcDsukgkI+gDRYDBGXUABCHycxJv4tYeVC4RX0HIDcwESb9CmJ8pPvzNgAFfFMTYdKP/bkyCOBD8oyDuEfEemChaAtQIbMmPbecplCoUyLiDkInEctQOaFx26DkCiYzKv0aYvmhUamEVME/hIlQ6fcRq1R5oXELoGQdJkKlv0SsOTQqlRDuBtMwESo9d4NelRcqlw8gTvvreKhUKjGpfrGmVI6n6/ffDU+gQwLv3UJYLSyuzucpP3KjGUg1A2+G9KjdWrVZxgAAAABJRU5ErkJggg=="
          class="topbar_button_img"
        />
      </p>
      <h3>分类</h3>
      <p></p>
    </div>
    <div id="navHead">
      <div id="inp">
        <svg
          class="icon"
          width="22px"
          height="22px"
          fill="#999"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#333333"
            d="M469.333333 213.333333a256 256 0 1 1-256 256 256 256 0 0 1 256-256m0-42.666666a298.666667 298.666667 0 1 0 298.666667 298.666666A298.666667 298.666667 0 0 0 469.333333 170.666667z"
          />
          <path
            fill="#333333"
            d="M789.333333 810.666667a21.333333 21.333333 0 0 1-15.146666-6.186667l-106.666667-106.666667a21.333333 21.333333 0 0 1 30.293333-30.293333l106.666667 106.666667a21.333333 21.333333 0 0 1 0 30.293333A21.333333 21.333333 0 0 1 789.333333 810.666667z"
          />
        </svg>
        <span class="text">搜索商品名/生产企业/旗舰店铺</span>
      </div>
    </div>
    <div class="cltit">
      <ul>
        <li
          v-for="(tit) in tits"
          :class="{active:active==tit.id}"
          @click="handleMore(tit.id)"
          :key="tit.id"
        >{{tit.text}}</li>
      </ul>
    </div>
    <div class="choose">
      <ul >
        <li>
          销量
        </li>
        <li  style="padding-left: 10px;">
          售价
          <span>
            <em class="up">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAAkUlEQVQoU4WOsQmCQQxGk5Pr3CKksXMBN7AQ1xB0BEdQxDHEwg0cwiYX+If4u8OLRDxJI6b6eHnhC0IYM5uo6sUREa0R8dnXGMVSysnMNh92Zuae4Suq6ra1doiHKaUdER2dvUURWSLi1auj6NVmtmLmGw7DMK+13gFgGqWQx5zzAkWk+O8/pI7VxT0AzP6IjxdDcDRXajSK9wAAAABJRU5ErkJggg=="
                />
            </em>
            <em class="down">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAAn0lEQVQoU2O8c+fO5f///+sw4AGMjIxXGO/cubPu////gfgUMjAwbGC8cuUKDzs7+2EGBgYDHIov/Pz505YRJHn79m0ZBgaGEwwMDNJoip8yMDBYqKqqPgErBIEHDx4Y/v79+xADAwMPVOgLKyurnYKCwnkQH64QxLl3757vv3//1oPYTExMgUpKSpthBqEoBAneuXMnDkSrqKgsQnYGAJndMTewjShaAAAAAElFTkSuQmCC"
                 />
            </em>
          </span>
        </li>
        <li >
          只看有货
        </li>
      </ul>
    </div>
    <div class="wrapItem">
      <GoodsList :id="id" :nowId="nowId"></GoodsList>
    </div>
  </div>
</template>
<script>
import GoodsList from "../../components/GoodsList";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      tits: [
        {
          id: 10001,
          text: "化药生物"
        },
        {
          id: 10002,
          text: "中成药品"
        },
        {
          id: 10003,
          text: "中药滋补"
        },
        {
          id: 10004,
          text: "医疗器械"
        },
        {
          id: 10005,
          text: "养生保健"
        },
        {
          id: 10006,
          text: "计生用品"
        },
        {
          id: 10007,
          text: "医疗用品"
        },
        {
          id: 10008,
          text: "美妆百货"
        }
      ],
      active: null,
      routeVal: null,
      id: null,
      nowId : null
    };
  },
  created() {
    this.active = null;
    this.routeVal = this.$route.query.id;
    this.nowId=null
  },
   beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // console.log(to.query)
    next(vm => {
      //他是先next以后才获得vm实例的
      // 通过 `vm` 访问组件实例
      // console.log(vm)
      //获得即将进入的list的id,再把这个nowId传给goodlist，goodlist收到这个id，将active设置为这个id，从而实现高亮
      vm.nowId=to.query
      
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.active = ""+this.nowId.id
      let bScroll = new BScroll(".cltit", {
        click: true,
        scrollX: true
      });
    });
  },
  methods: {
    handleClick() {
      this.$router.go(-1);
    },
    handleMore(id) {
      this.id = id;
      this.active = id;
    }
  },
  components: {
    GoodsList
  }
};
</script>
<style lang="stylus" scoped>
.wrap {
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  height: 100%;
}

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

#navHead {
  height: 0.48rem;
  width: 100%;
}

#inp {
  height: 0.33rem;
  width: 80%;
  margin-top: 0.07rem;
  border-radius: 0.2rem;
  border: 1px solid #e6e6e6;
  padding: 0 0 0 5px;
  background-color: #fff;

  .text {
    position: absolute;
    color: #999;
    line-height: 0.33rem;
    font-size: 0.14rem;
  }

  .icon {
    color: #999999;
    line-height: 0.33rem;
    margin-top: 5px;
  }
}

.cltit {
  height: 0.48rem;
  width: 100%;
  overflow: hidden;
  background-color: #fff;

  ul {
    width: min-content;
    display: flex;
    flex-flow: row nowarp;

    li {
      width: 0.75rem;
      height: 100%;
      text-align: center;
      line-height: 0.46rem;
      font-size: 0.13rem;
    }
  }
}

.choose {
  height: 0.4rem;
  width: 100%;
  background-color: #FFF;
  ul{
    height: 0.4rem;
    padding: 6px 14px;
    li{
      color: #666;
      margin-right: 20px;
      font-size: 12px;
      float: left;
      width: 60px;
      height: 0.22rem;
      border: 1px solid #e6e6e6;
      border-radius: 0.2rem;
      line-height: 0.22rem;
      text-align: center;
      em{
        position: relative;
        height :4px;
        width 6px;
      }
      .up{
        top:-4px
      }
      .down{
        top: 4px;
        left:-10px;
      }
    }
  }
}

.wrapItem {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

.active {
  color: red;
  border-bottom: 2px solid red;
  font-size:14px !important;
}

</style>
