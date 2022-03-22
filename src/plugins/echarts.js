import echarts from "echarts";

// import "echarts/map/js/china";
// 引入地图js文件
import "@/util/map";

export default {
  //如果插件是一个对象，就会调用install方法；如果是一个函数，则调用改函数
  install: (app) => {
    app.config.globalProperties.$echarts = {
      // 测试
      test: (id) => {
        let myChart = echarts.init(document.getElementById(id));
        let option = {
          title: {
            text: "ECharts 入门示例",
          },
          tooltip: {},
          legend: {
            data: ["销量"],
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        };
        option && myChart.setOption(option);
      },
      /**
       * 中国地图
       * @param {*} id
       * @param {*} data
       */
      chinaMap(id, data) {
        let myChart = echarts.init(document.getElementById(id));
        let option = {
          tooltip: {
            //悬浮弹框
            triggerOn: "click", //提示框触发的条件
            enterable: true, //鼠标是否可进入提示框浮层中，默认为false
            formatter(item) {
              //item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d
              let res = `
              <div style="display:flex">
                  <div>
                    <p>省份:${item.name}</p>
                    <p>确诊人数:${item.value}</p>
                  </div>
                  <div style="background-color:#eee;width:1px;margin:0.06rem 0.1rem"></div>
                  <div style="line-height:28px">
                    <a href="/covcity/${item.name}" style="color:#fff">详情<span class="iconfont">&#xe61b;</span></a>
                  </div>
              <div/>
              `;

              return res;
              // return (
              //   // '<a href="#/citys/' +
              //   // item.name +
              //   // '" style="color:#fff">省份：' +
              //   // item.name +
              //   // "--详情</a>"
              //   `省份：${item.name} <br/> ${item.value}`
              // );
            },
            textStyle: {
              fontSize: 9,
            },
          },
          visualMap: [
            {
              //映射高亮颜色
              orient: "horizontal", //水平的
              type: "piecewise", //离散
              bottom: 0,
              textGap: 4,
              itemGap: 4,
              itemWidth: 10,
              itemHeight: 10,
              padding: 2,
              textStyle: {
                fontSize: 9,
              },
              pieces: [
                // 配置颜色区间
                {
                  min: 0,
                  max: 0,
                  color: "#FFFFFF",
                },
                {
                  min: 1,
                  max: 9,
                  color: "#FAEBD2",
                },
                {
                  min: 10,
                  max: 99,
                  color: "#E9A188",
                },
                {
                  min: 100,
                  max: 499,
                  color: "#D56355",
                },
                {
                  min: 500,
                  max: 999,
                  color: "#BB3937",
                },
                {
                  min: 1000,
                  max: 10000,
                  color: "#772526",
                },
                {
                  min: 10000,
                  color: "#480F10",
                },
              ],
            },
          ],
          series: [
            {
              name: "省",
              type: "map", //地图
              map: "china", //中国地图 需要引入地图china.js
              roam: false, // 是否可拖拽、放大
              zoom: 1,
              aspectScale: 0.75,
              top: 40,
              layoutCenter: ["5%", "5%"],
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 8,
                  },
                },
              },
              itemStyle: {
                normal: {
                  areaColor: "rgba(0,255,236,0)",
                  borderColor: "rgba(0,0,0,0.2)",
                },
                emphasis: {
                  // 选中的区域颜色及阴影效果等
                  areaColor: "rgba(255,180,0,0.8)",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 20,
                  borderWidth: 0,
                },
              },
              data,
              // 测试数据
              // data: [
              //   { name: "内蒙古", value: 200 },
              //   { name: "北京", value: 800 },
              // ],
            },
          ],
        };
        option && myChart.setOption(option);
      },
      // 城市地图
      cityMap(id, cityname, data) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
          tooltip: {
            //悬浮弹框
            triggerOn: "click", //提示框触发的条件
            enterable: true,
            formatter(data) {
              //[{} ] data={}
              return data.name;
            },
          },
          visualMap: [
            {
              //映射高亮颜色
              orient: "horizontal", //垂直
              type: "piecewise", //离散
              bottom: 0,
              textGap: 4,
              itemGap: 4,
              itemWidth: 10,
              itemHeight: 10,
              padding: 2,
              textStyle: {
                fontSize: 9,
              },
              pieces: [
                // 配置颜色区间
                {
                  min: 0,
                  max: 0,
                  color: "#FFFFFF",
                },
                {
                  min: 1,
                  max: 10,
                  color: "#FDFDCF",
                },
                {
                  min: 10,
                  max: 100,
                  color: "#FE9E83",
                },
                {
                  min: 100,
                  max: 500,
                  color: "#E55A4E",
                },
                {
                  min: 500,
                  max: 10000,
                  color: "#4F070D",
                },
              ],
            },
          ],
          series: [
            {
              name: "市",
              type: "map", //地图
              map: cityname, //中国地图
              roam: false,
              zoom: 1,
              aspectScale: 0.75,
              top: 40,
              layoutCenter: ["5%", "5%"],
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 8,
                  },
                },
              },
              itemStyle: {
                normal: {
                  areaColor: "rgba(0,255,236,0)",
                  borderColor: "rgba(0,0,0,0.2)",
                },
                emphasis: {
                  // 选中的区域颜色及阴影效果等
                  areaColor: "rgba(255,180,0,0.8)",
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 20,
                  borderWidth: 0,
                },
              },
              data,
            },
          ],
        };
        myChart.setOption(option);
      },
    };
  },
};
