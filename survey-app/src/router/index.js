import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'CreateSurvey',
    component: () => import(/* webpackChunkName: "create-survey" */ '../views/CreateSurvey.vue')
  },
  {
    path: '/create-survey',
    name: 'CreateSurvey',
    component: () => import(/* webpackChunkName: "create-survey" */ '../views/CreateSurvey.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
