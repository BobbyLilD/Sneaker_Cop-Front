import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
   {
      path: "/",
      name: "feed-page",
      meta: {
      title: 'Feed',
      layout: 'main-layout'
      },
      component: () => import("@/pages/FeedPage.vue"),
   },
   {
     path: "/login",
     name: "login-page",
     meta: {
       title: 'Login',
       layout: 'auth-layout'
     },
     component: () => import("@/pages/LoginPage.vue"),
   },
   {
    path: "/registration",
    name: "registration-page",
    meta: {
      title: 'Register',
      layout: 'auth-layout'
    },
    component: () => import("@/pages/RegistrationPage.vue"),
   },
   {
    path: "/item/:id",
    name: "item-page",
    meta: {
      title: 'Item',
      layout: 'main-layout'
    },
    component: () => import("@/pages/ItemPage.vue"),
   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const {accessToken} = localStorage;
  if(accessToken || to.name === 'login-page' || to.name === 'registration-page') {
    next()
  } else {
    next('/login');
  }
})


export default router