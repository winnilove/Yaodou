<template>
  <div class="wrap">
    <div class="tit">
      <p @click="handleClick">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAAGyxPnNAAAAAXNSR0IArs4c6QAAAkxJREFUWAntmLsvBFEUxtcj8Ug8CyHRSBCVggRRSEThLyChU1KQ+Aso0ChUFCjUhCiUCiqNEImGxFKJR+GVCOLxfVmHY83O7JgjRjI3OXvPnDnnd7+5d/buzMZiabZVp7xXHczUB27+g9vJ9M99GZxlL1KrlWxJMLn/Vp6cEOz4HOWeQ9wh6drvOKSy0Fcb9pVtmky9rV5EJhWlk+SV4z3pQqiH47lCkpzjJ5lFJGfRYdM3ZCLy+Znx6f5XbwLCeb07Fhew9w4jsDookFsNQV9WIxXUbZVk/Ql6gnHVaM8w1+YGbVeVy8o3cctAkUs/MSEmQQT+se0mnQ90eIZqDnAciBIV//oMyF3gOJDbze9UkIsggWy3iS7YZwXKReFRMFSiulEBNyyA3Qo4awEcVcBBC+CSAnZaAMmQRamzApJzr8DZluBTBS61BG8rsOlULCqw2aLxykcUeIgBq9YFkNwVc1ZQcvRX1pIbKwGtz5QYwaIZ+MEM9KPmAnYAa/lB/a+W8CVoHibfbelNXhYslBcDsukgkI+gDRYDBGXUABCHycxJv4tYeVC4RX0HIDcwESb9CmJ8pPvzNgAFfFMTYdKP/bkyCOBD8oyDuEfEemChaAtQIbMmPbecplCoUyLiDkInEctQOaFx26DkCiYzKv0aYvmhUamEVME/hIlQ6fcRq1R5oXELoGQdJkKlv0SsOTQqlRDuBtMwESo9d4NelRcqlw8gTvvreKhUKjGpfrGmVI6n6/ffDU+gQwLv3UJYLSyuzucpP3KjGUg1A2+G9KjdWrVZxgAAAABJRU5ErkJggg=="
          class="topbar_button_img"
        />
      </p>
      <h3>个人信息</h3>
      <p></p>
    </div>
    <div class="logmethod">
        <p @click="handleMethod(true)" :class="flag == true ? 'active' :''">登录</p>
        <p @click="handleMethod(false)" :class="flag == false ? 'active' :''">注册</p>
    </div>
    <sign-in v-if="flag"></sign-in>
    <sign-up v-else ></sign-up>
  </div>
</template>
<script>
import SignIn from './SignIn'
import SignUp from './SignUp'
 export default {
     data(){
         return {
             flag:true,
             isActive : true
         }
     },
    methods: {
        handleClick() {
            this.$router.push("/");
        },
        handleMethod(b){
            this.flag=b
        }
    },
    components:{
        SignIn,
        SignUp
    }
 }
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/border.styl';

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
    color #333
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
.logmethod
    width 100%
    display flex
    flex-flow row nowrap
    background #fff
    p
        width 50%
        height 60px
        font-size 22px
        text-align center
        line-height 58px
        border_1px(0,0,1px,0)
        color #eee
.active 
  color #333 !important
  border-bottom 2px solid red !important

</style>
