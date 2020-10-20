const linkActiveClass = "my-link-active-class";
// pass custom class to Vue Material
Vue.material.router.linkActiveClass = linkActiveClass;
// pass custom class to Vue Router
router = new VueRouter({
  routes,
  linkActiveClass
});
const app = new Vue({
  name: "Root",
  router
});
