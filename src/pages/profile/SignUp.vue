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
              @click="register">
        </mu-button>
    </div>
</template>
<script>
import http from "../../utils/http"

import Vue from "vue";
import 'muse-ui/lib/styles/base.less';
import { Form ,TextField,Button} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
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
            btnText: '注册',
        }
    },
    components:{
        
    },
    methods: {
        check(item, error) {
            
        },
        async register(){
            let res= await http.post({
                url: '/api/consumers/register',
               
            })
            console.log(res)
        }
    },
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


