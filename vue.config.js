const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  assetsDir: "static",
  transpileDependencies: true,
  devServer: {
    port: 3333, // 启动端口
    open: false, // 启动后是否自动打开网页
  },
  // proxy: {
  //   "/api": {
  //     target: "",
  //     ws: true, // 是否启用websocket
  //     changeOrigin: true, //是否跨域
  //     pathRewrite: { // 重写路径
  //       "^/api": "",
  //     },
  //   },
  // },
});
