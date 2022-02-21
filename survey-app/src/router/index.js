import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'createSurvey',
    component: () => import(/* webpackChunkName: "create-survey" */ '../views/CreateSurvey.vue')
  },
  {
    path: '/create-survey',
    name: 'createSurvey',
    component: () => import(/* webpackChunkName: "create-survey" */ '../views/CreateSurvey.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
