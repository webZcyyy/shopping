import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '../components/index/indexComponent.vue'
import HeaderComponent from '../components/header/headerComponent.vue'
import FooterComponent from '../components/footer/footerComponent.vue'
import LoginComponent from '../components/login/loginComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/header',
      name: 'header',
      component: HeaderComponent
    },
    {
      path: '/footer',
      name: 'footer',
      component: FooterComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    }
  ]
})
