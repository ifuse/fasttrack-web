import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
import router from "./router/"
import store from "./store"
import "./registerServiceWorker"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "font-awesome/css/font-awesome.css"
import * as firebase from "firebase"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

var config = {
  apiKey: "AIzaSyDcrCPJGS8ly9e3tBMMu45B2S1fMWQMR84",
  authDomain: "fasttrack-staging.firebaseapp.com",
  databaseURL: "https://fasttrack-staging.firebaseio.com",
  projectId: "fasttrack-staging",
  storageBucket: "fasttrack-staging.appspot.com",
  messagingSenderId: "18531712313",
  appId: "1:18531712313:web:81a2df10271d2a4e"
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app")
  }
})
