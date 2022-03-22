import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入公共初始化样式
import "@/assets/css/base.css";
// 引入iconfont
import "@/assets/css/iconfont.css";
// 引入移动端适配js
// import "@/assets/js/phone";

// 引入vant
import vant from "./plugins/vant";
// 引入echarts
import echarts from "./plugins/echarts";

const app = createApp(App);

app.use(router).use(vant).use(echarts);
app.mount("#app");
