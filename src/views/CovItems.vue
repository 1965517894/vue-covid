<template>
  <div>
    <img src="../assets/images/wuzi.png" alt />
    <van-tabs v-model:active="active" animated color="#313ff8">
      <van-tab v-for="item in arr" :title="item.title" :key="item.title">
        <!-- {{ item.img }} -->
        <img :src="item.img" alt />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref } from "vue";
import img1 from "../assets/images/jiujing.png";
import img2 from "../assets/images/kouzhao.png";

export default {
  name: "CovItem",
  data() {
    return {
      arr: [
        { title: "消毒剂", img: img1 },
        { title: "口罩", img: img2 },
      ],
    };
  },
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>

<style scoped>
img {
  width: 7.5rem;
}
</style>

<style>
:root {
  --van-tab-font-size: 0.3rem;
  --van-tab-line-height: 0.5rem;
  --van-tabs-line-height: 0.8rem;
}
</style>