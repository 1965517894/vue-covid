<template>
  <!-- 疫情图片 -->
  <div class="header">
    <img src="@/assets/images/1.jpg" alt />
  </div>
  <!-- 病毒信息 -->
  <!-- <cov-info :covInfo="covInfo" /> -->
  <!-- 疫情热点 -->
  <cov-hot :covHot="covHot" />
  <!-- 主页导航 -->
  <index-nav />
  <!-- 数据统计 -->
  <cov-num :covData="covData" />
  <!-- 疫情地图 -->
  <cov-map />
  <!-- 疫情趋势轮播图 -->
  <index-swipe />
  <!-- footer -->
  <footer-com />
</template>

<script>
import api from "../assets/api/index";
// import CovInfo from "../components/Home/CovInfo.vue";
import CovHot from "../components/Home/CovHot.vue";
import IndexNav from "../components/Home/IndexNav.vue";
import CovNum from "../components/Home/CovNum.vue";
import CovMap from "../components/Home/CovMap.vue";
import IndexSwipe from "../components/Home/IndexSwipe.vue"

import FooterCom from "../components/Common/FooterCom.vue"
export default {
  name: "HomeView",
  components: { CovHot, IndexNav, CovNum, CovMap, IndexSwipe, FooterCom },
  data() {
    return {
      // covInfo: {},
      covHot: [],
      covData: {},
    };
  },
  created() {
    // 请求病毒信息接口
    api.getCovInfo().then((res) => {
      let data = res.data.newslist[0];
      // this.covInfo = {
      //   note1: data.desc.note1,
      //   note2: data.desc.note2,
      //   note3: data.desc.note3,
      //   remark1: data.desc.remark1,
      //   remark2: data.desc.remark2,
      //   remark3: data.desc.remark3,
      // };
      this.covHot = data.news;
      // console.log(data.desc);
      this.covData = {
        modifyTime: data.desc.modifyTime,
        // 现存确诊
        currentConfirmedCount: data.desc.currentConfirmedCount,
        currentConfirmedIncr: data.desc.currentConfirmedIncr,
        // 境外输入
        suspectedCount: data.desc.suspectedCount,
        suspectedIncr: data.desc.suspectedIncr,
        // 现存无症状
        seriousCount: data.desc.seriousCount,
        seriousIncr: data.desc.seriousIncr,
        // 累积确诊
        confirmedCount: data.desc.confirmedCount,
        confirmedIncr: data.desc.confirmedIncr,
        // 累积死亡
        deadCount: data.desc.deadCount,
        deadIncr: data.desc.deadIncr,
        // 累积治愈
        curedCount: data.desc.curedCount,
        curedIncr: data.desc.curedIncr,
      };
    });
  },
};
</script>

<style scoped>
.header img {
  width: 100%;
}
</style>