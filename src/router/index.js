import { createRouter, createWebHistory } from 'vue-router'

import LoginStepOne from "@/views/LoginStepOne.vue";
import StandartLayout from "@/Layouts/StandartLayout.vue";
import loginStepTwo from "@/views/LoginStepTwo.vue";
import UserDashboard from "@/views/UserDashboard.vue";
import UserLayout from "@/Layouts/UserLayout.vue";
import UserProfile from "@/views/UserProfile.vue";
import store from "@/store";
const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginStepOne,
    meta: { PageLayout: StandartLayout }
  },
  {
    path: '/login-code',
    component: loginStepTwo,
    meta: { PageLayout: StandartLayout }

  },
  {
    path: '/user-page',
    component: UserDashboard,
    meta: { PageLayout: UserLayout },
    beforeEnter:(to,from,next)=> {
      if(!store.getters['user/getUserId']){
        return next({
          name:'home',
        })
      }
      next()
    }
  },


  {
    path: '/user-profile',
    component: UserProfile,
    meta: { PageLayout: UserLayout },
    beforeEnter:(to,from,next)=> {
      if(!store.getters['user/getUserId']){
        return next({
          name:'home',
        })
      }
      next()
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
