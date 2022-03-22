import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
// 异步
const CovCheck = () => import("../views/CovCheck.vue");
// import CovCheck from "../views/CovCheck.vue";
const CovItems = () => import("../views/CovItems.vue");
const CovCity = () => import("../views/CovCity.vue");
const TripGuide = () => import("../views/TripGuide.vue");
// 测试页面路由
const Test = () => import("../views/TestView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    // meta: {
    //   title: "疫情动态",
    // },
  },
  {
    path: "/covcheck",
    name: "covcheck",
    component: CovCheck,
    meta: {
      title: "核酸检测",
    },
  },
  {
    path: "/covitems",
    name: "covitems",
    component: CovItems,
    meta: {
      title: "防疫物资",
    },
  },
  {
    // 动态路由
    path: "/covcity/:cityname",
    name: "covcity",
    component: CovCity,
    props: true,
    meta: {
      title: "城市疫情",
    },
  },
  {
    path: "/trip",
    name: "/trip",
    component: TripGuide,
    meta: {
      title: "出现政策查询",
    },
  },
  {
    // 测试页面
    path: "/test",
    name: "test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
