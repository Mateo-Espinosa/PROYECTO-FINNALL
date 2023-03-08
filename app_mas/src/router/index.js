import { createRouter, createWebHistory } from 'vue-router'
import infoView from '@/views/infoView.vue'
import mainView from '@/views/mainView.vue'
import helpView from '@/views/helpView.vue'
import aboutView from '@/views/AboutView.vue'
import contactView from '@/views/contactView.vue'

const routes = [
  {
    path: '/info',
    name: 'info',
    component: infoView
  },
  {
    path: '/',
    name: 'main',
    component: mainView
  },
  {
    path: '/help',
    name: 'help',
    component: helpView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
