import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import show from '@/components/show.vue'
import reptile from '@/components/reptile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', component: reptile},
    { path: '/reptile', component: reptile },
    { path: '/show', component: show }
  ]
})
