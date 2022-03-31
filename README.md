# vue-covid

仿丁香医生，vue 实例练习项目

[界面预览](http://120.76.172.12/vue-covid)

## 修改记录

- 2022.3.22 解决 api 接口 http 报错问题
- 2022.3.22 解决疫情城市地图加载报错

## TODO

- 疫情城市地图加载报错
- vant 选项卡大小未进行 rem 适配
- 页面第一次加载时间长，发现是因为chunk-vendors.js太大，且服务器带宽太小
- ~~页面回退，echarts地图不能显示问题 `echartsDom.remove(_echarts_instance_)`~~