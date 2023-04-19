import { createRouter, createWebHistory } from 'vue-router'

import Error from '../components/Error.vue'
import About from '../components/About.vue'
import Portfolio from '../components/Portfolio.vue'
import Resume from '../components/Resume.vue'
import Contact from '../components/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: About
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
