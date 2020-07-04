import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter)

export const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.router = router;

router.beforeEach((to, from, next) => {
  if((!localStorage.token && ['about'].find(( el ) => el === to.name)) ||
    (localStorage.token && ['sign-in', 'sign-up'].find(( el ) => el === to.name))
    ){
    next({
      path: '/',
    })
  } else {
    next();
  }
})
export default router;
