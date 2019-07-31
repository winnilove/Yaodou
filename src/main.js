import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.styl'
import store from './store'
Vue.config.productionTip = false

/*MuseUI*/
import 'muse-ui/lib/styles/base.less';
import {
    AppBar,
    Avatar,
    BottomNav,
    Button,
    Checkbox,
    Divider,
    Grid,
    Icon,
    List,
    Menu,
    Paper,
    Popover,
    Radio,
    Select,
    Switch,
    TextField,
    SubHeader,
    Helpers,
    Drawer,
    Dialog,
    ExpansionPanel,
    Form,
    Tabs,
    Snackbar,
    AutoComplete,
    LoadMore,
    Card,
} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import 'typeface-roboto';
Vue.use(AppBar);
Vue.use(Avatar);
Vue.use(BottomNav);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Divider);
Vue.use(Grid);
Vue.use(Icon);
Vue.use(List);
Vue.use(Menu);
Vue.use(Paper);
Vue.use(Popover);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Switch);
Vue.use(TextField);
Vue.use(SubHeader);
Vue.use(Helpers);
Vue.use(Drawer);
Vue.use(Dialog);
Vue.use(ExpansionPanel);
Vue.use(Form);
Vue.use(Tabs);
Vue.use(Snackbar);
Vue.use(AutoComplete);
Vue.use(LoadMore);
Vue.use(Card);
import theme from 'muse-ui/lib/theme'; //主题
theme.add('teal', {
    background: {
        paper: '#ffffff',
        chip: '#ffffff',
        default: '#ffffff'
    }
}, 'light');
theme.use('teal');

//MuseUI插件
let options={
    position: 'top-end',               // 弹出的位置
    time: 2000,                       // 显示的时长
    color:'blue',
    successIcon: 'check_circle',      // 成功信息图标
}
import Toast from 'muse-ui-toast';  //这个Toast有依赖Snackbar所以必须先导入Snackbar
Vue.use(Toast,options);
import Message from 'muse-ui-message'; //Message 依赖 dialog所以必须倒入dialog
Vue.use(Message);

/*MuseUI end*/


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
