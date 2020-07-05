import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)) {
    if (localStorage.token) {
      next()
      return
    }
    next('/')
  } else {
    next() 
  }
})
Vue.router = router;

export default router;
