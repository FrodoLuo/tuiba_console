import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Form from '@/components/SignUp/Form'
import CheckForm from '@/components/SignUp/Check'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/PartySignUp',
      name: 'Form',
      component: Form
    },
    {
      path: '/PartySignUp/check',
      name: 'check',
      component: CheckForm
    }
  ]
})
