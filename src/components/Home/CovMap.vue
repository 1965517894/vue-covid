<template>
  <div class="map-box">
    <div class="title">
      <i></i>
      国内疫情地图
    </div>

    <van-tabs
      class="tab-column"
      v-model:active="active"
      type="card"
      @change="change"
      color="blue"
      animated
    >
      <van-tab title="现存确诊">
        <div id="curConfirm" class="map"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="confirm" class="map"></div>
      </van-tab>
    </van-tabs>

    <!-- 地图容器 -->
    <!-- <div id="curConfirm" class="map"></div>
    <div id="confirm" class="map"></div>-->
  </div>
</template>

<script>
import api from "../../assets/api/index"

// import { getCurrentInstance } from "vue";
// import { onMounted } from "vue";

export default {
  name: "CovMap",
  data() {
    return {
      active: 0,
      mapData: {}
    }
  },
  methods: {
    change() {
      // 延迟加载
      this.$nextTick(() => {
        this.$echarts.chinaMap("confirm", this.mapData.confirm);
      })

    }
  },

  mounted() {
    // 格式化数据
    // 需要数据格式  [{ name: "内蒙古", value: 200 },{ name: "北京", value: 800 },]
    const format = (data) => {
      let confirm = [];
      let curConfirm = [];
      for (let city of data) {
        // console.log(city);
        // xArea省份名  confirm累积确诊 curConfirm当前确诊
        confirm.push({ name: city.xArea, value: city.confirm });
        curConfirm.push({ name: city.xArea, value: city.curConfirm });
      }
      return { confirm, curConfirm };
    };

    // 请求数据 并绘制地图
    api.getChinaData().then(res => {
      const mapData = format(res.data.retdata);
      this.mapData = mapData;
      // console.log(mapData);

      this.$nextTick(() => {
        this.$echarts.chinaMap("curConfirm", mapData.curConfirm);
        // this.$echarts.chinaMap("confirm", mapData.confirm);
      })

    }).catch((err) => {
      throw err
    })
  }

  // setup() {
  //   onMounted(() => {
  //     const proxy = getCurrentInstance().appContext.config.globalProperties;
  //     proxy.$echarts.test("main");
  //   })
  // }
};
</script>


<style scoped>
.map-box {
  padding: 0.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
}

.title {
  font-size: 0.34rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}
.title i {
  display: inline-block;
  width: 0.1rem;
  height: 0.4rem;
  margin-right: 0.03rem;
  vertical-align: middle;
  background-color: #4169e2;
}

.map {
  width: 7.18rem;
  height: 6rem;
  background-color: #f5f5f5;
  margin-top: 0.3rem;
}
</style>