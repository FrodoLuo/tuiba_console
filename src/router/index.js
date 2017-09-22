import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Form from '@/components/SignUp/Form'
import CipherPage from '@/components/Ciphers/CipherPage.vue'
import CheckPage from '@/components/SignUp/Check.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/PartySignUp',
      name: 'Form',
      component: Form
    },
    {
      path: '/check',
      name: 'Check',
      component: CheckPage,
    },
    {
      path: '/Cipher',
      name: 'cipher',
      component: CipherPage
    }
  ]
})
