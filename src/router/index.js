import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyComp from '@/components/MyComp'
import Tab from '@/components/tab'
import MsgBox from '@/components/MessageBox'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/msgbox',
      name: 'msgbox',
      component: MsgBox
    },
    {
      path: '/comp',
      name: 'MyComp',
      component: MyComp
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
