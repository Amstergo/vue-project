import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/Home";
import Ad from "@/components/Ads/Ad";
import AdList from "@/components/Ads/AdList";
import NewAd from "@/components/Ads/NewAd";
import Login from "@/components/Auth/Login";
import Registration from "@/components/Auth/Registration";
import Orders from "@/components/User/Orders";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "",
      name: "home",
      component: Home
    },
    {
      path: "/ad/:id",
      name: "ad",
      component: Ad,
      props: true
    },
    {
      path: "/list",
      name: "list",
      component: AdList
    },
    {
      path: "/new",
      name: "new ad",
      component: NewAd
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/registration",
      name: "reg",
      component: Registration
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
    }
  ],
  mode: "history"
});
