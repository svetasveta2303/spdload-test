export default [
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/pages/SignUp.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/pages/SignIn.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
];