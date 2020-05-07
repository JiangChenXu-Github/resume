import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage.vue'
import View from "../views/View";
import Discover from "../components/Discover.vue"
import Forum from "../components/Forum.vue"
import Rank from "../components/Rank.vue"
import MyGame from "../components/MyGame.vue"
import Resume from "../views/Resume.vue"
import Tap from "../components/Tap.vue"

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/resume'},
  {path: '/resume', component: Resume},
  {path: '/', component: View, children: [
      {path: '/homepage', component: Homepage},
      {path: '/discover', component: Discover},
      {path: '/forum', component: Forum},
      {path: '/rank', component: Rank},
      {path: '/mygame', component: MyGame},
    ]}
]

const router = new VueRouter({
  routes
})

export default router
