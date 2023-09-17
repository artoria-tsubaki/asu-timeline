import { createRouter, createWebHistory } from 'vue-router'

import Timeline from '@/components/Timeline.vue'
import Timeline2 from '@/components/Timeline2.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Timeline2
    }
  ]
})

export default router