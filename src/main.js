import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import * as fb from "firebase";

import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyDL24P6-1cY5a3SV-BYXUEVHgUuG2LiaYc",
      authDomain: "vue-ad-project-d8fd6.firebaseapp.com",
      databaseURL: "https://vue-ad-project-d8fd6.firebaseio.com",
      projectId: "vue-ad-project-d8fd6",
      storageBucket: "vue-ad-project-d8fd6.appspot.com",
      messagingSenderId: "453886270006",
      appId: "1:453886270006:web:d713f2d98b2ef08c999697",
      measurementId: "G-F7B5V261T4"
    });
  }
}).$mount("#app");
