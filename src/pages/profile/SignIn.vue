<template>
    <div>
            <mu-text-field 
            v-model="user.name"
            label="用户名"
            label-float
            full-width
            @blur="check('password', '请输入密码')"
            class = "inputMsg"
            ></mu-text-field>
             <mu-text-field
            v-model="user.password"
            label="密码"
            full-width
            label-float
            @blur="check('password', '请输入密码')"
            type="password"
            class = "inputMsg">
          </mu-text-field>
          <mu-button
              class="btn"
              color="primary"
              v-text="btnText"
              round
              @click="login">
        </mu-button>
         <mu-button
              class="btn"
              color="gray"
              v-text="btnOut"
              round
              @click="loginOut">
        </mu-button>
    </div>
</template>
<script>
import http from "../../utils/http"
import Vue from "vue";
import { Form ,TextField,Button} from 'muse-ui';
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import { Toast, Spinner, Indicator } from 'mint-ui'


Vue.use(Form)
Vue.use(TextField)
Vue.use(Button)

export default {
    data(){
        return {
            user: {
                name: '',
                password: '',
            },
            btnText: '登录',
            btnOut:"注销"
        }
    },
    components:{
        
    },
    methods: {
        check(item, error) {
            
        },
         login(){
            // let res= await http.post({
            //     url: '/api/consumers/login',
            //      data:{
            //         username:"123",
            //         password:"123"
            //     }
            // },"headers")
            // if(res){
                // console.log(res.headers["x-access-token"])
                // localStorage.setItem('token',res.headers["x-access-token"])
                localStorage.setItem('token',111)

                Toast({
                    message: '登录成功',
                    position: 'center',
                    duration: 1000,
                })
                setTimeout(()=>{
                    this.$router.go(-1)
                },1000)
            // }
       },
       loginOut(){
           localStorage.removeItem("token")
           Toast({
                    message: '注销成功',
                    position: 'center',
                    duration: 1000,
            })
       }
    },
    created(){

    },
    mounted(){
    }
}
</script>
<style lang="stylus" scoped>
.sub
    margin-top 20px
.inputMsg
    height 50px
    font-size 18px
    padding 0 20px
.btn 
    width 80%
    margin 20px 10%
</style>


