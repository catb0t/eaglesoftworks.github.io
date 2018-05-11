import Vue from "vue";
import VueRouter from "vue-router";
import home from "./parts/home.vue";
import sieged from "./parts/sieged.vue";

import "../style/main.scss";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: home },
  { path: '/home', component: home },
  { path: '/sieged', component: sieged },
  { path: '/game', component: sieged },
  { path: '/sieged-game', component: sieged }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
let v = new Vue({
    el: "#app",
    template: `
    <div>
      <home />
      <sieged />
    </div>
    `,
    components: {
      home, sieged
    },
    router
});
