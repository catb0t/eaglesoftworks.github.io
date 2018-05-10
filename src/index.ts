import Vue from "vue";
import VueRouter from "vue-router";
import home from "./components/home.vue";
import sieged from "./components/sieged.vue";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: home },
  { path: '/home', component: home },
  { path: '/sieged', component: sieged },
  { path: '/game', component: sieged },
  { path: '/sieged-game', component: sieged }
]

const router = new VueRouter({
  routes
})

let v = new Vue({
    el: "#app",
    components: {
      home, sieged
    },
    router
});
