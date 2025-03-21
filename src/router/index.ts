import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import DoggoTypes from '@/views/dogs/DoggoTypes.vue'
import DetailView from '@/views/dogs/DetailView.vue'
import NotFound from '@/views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/types',
    name: 'types',
    component: DoggoTypes
  },
  {
    path: '/detail/:id?',
    name: 'detail',
    component: DetailView,
    props: true
  },
  //redirect
  {
    path:'/all-types',
    redirect:'/types'
  },
  // 404s
  {
    path:'/:catchALL(.*)',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router