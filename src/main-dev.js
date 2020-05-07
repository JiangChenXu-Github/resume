import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入初始化css
import './assets/css/init.css'
//导入axios
import axios from "axios";
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://3116d5539s.qicp.vip/'
//导入vant
import 'vant/lib/index.css'
import './plugins/vant.js'
//导入自定义组件
import Follow from './components/forum/Follow.vue'
import Recommend from './components/forum/Recommend.vue'
import Section from './components/forum/Section.vue'
import Strategy from './components/forum/Strategy.vue'
import ForumCommon from './components/forum/ForumCommon.vue'
import RankCommon from './components/rank/RankCommon.vue'
import Tap from './components/Tap.vue'

Vue.component('my-follow', Follow)
Vue.component('my-recommend', Recommend)
Vue.component('my-section', Section)
Vue.component('my-strategy', Strategy)
Vue.component('my-forum-common', ForumCommon)
Vue.component('my-rank-common', RankCommon)
Vue.component('my-tap', Tap)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
