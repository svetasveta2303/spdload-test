export default [
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/pages/SignUp.vue'),
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/pages/SignIn.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/',
    redirect: '/home'
  }
];