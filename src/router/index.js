import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('views/home/Home.vue')
    },
    {
      path: '/cart',
      component: () => import('views/cart/Cart.vue')
    },
    {
      path: '/category',
      component: () => import('views/category/Category.vue')
    },
    {
      path: '/profile',
      component: () => import('views/profile/Profile.vue')
    },
  ],
  mode: 'history'
})
