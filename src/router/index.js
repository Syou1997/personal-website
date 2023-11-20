import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "./../views/HomeView.vue";
import MyInfo from "./../views/MyInfo.vue";
import Works from "./../views/Works.vue";
import Magic from "./../views/Magic.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/MyInfo',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Magic',
      name: 'Magic',
      component: Magic
    },

  ]
})

export default router
