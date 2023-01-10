import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root = "http://localhost:3000/";

Vue.http.interceptors.push((req) => {
  req.headers.set("Auth", "TOKEN" + Math.random());
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
