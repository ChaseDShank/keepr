import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import Vault from '@/components/Vault'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/vault/:id',
      name: 'Vault',
      component: Vault
    }
   
   
  ]
})
