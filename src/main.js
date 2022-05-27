import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
// import axios from "axios";
Vue.config.productionTip = false;
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "https://gabbyblog.herokuapp.com/";
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

("process.env.VUE_APP_BASE_URL");
