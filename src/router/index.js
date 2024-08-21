import { createRouter, createWebHistory } from 'vue-router';
import { useBiteStore } from '@/composable/usePinia';
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('../views/Welcome.vue'),
    },
    {
      path: '/login',
      name: 'Login',

      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',

      component: () => import('../views/Register.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/orders',
      name: 'Orders',
      component: () => import('../views/Orders.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),
    },
  ],
});

router.beforeResolve((to, from, next) => {
  const store = useBiteStore();
  const token = localStorage.getItem('token');
  const storeToken = store.token;

  if (to.name !== 'Login' && to.name !== 'Register' && !token && !storeToken) {
    next({ name: 'Login' });
  } else {
    next();
  }
});
export default router;
