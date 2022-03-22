<template>
  <div class="nav">
    <div>
      <img src="../../assets/images/navIcon/1.png" alt />
      <p>1元义诊</p>
    </div>

    <div>
      <router-link to="/covcheck">
        <img src="../../assets/images/navIcon/2.png" alt />
        <p>核酸检测</p>
      </router-link>
    </div>

    <div>
      <router-link to="/covitems">
        <img src="../../assets/images/navIcon/3.png" alt />
        <p>防疫物资</p>
      </router-link>
    </div>

    <div>
      <router-link to="/trip">
        <img src="../../assets/images/navIcon/4.png" alt />
        <p>出行政策</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexNav",
};
</script>

<style scoped>
.nav {
  overflow: hidden;
}

.nav div {
  float: left;
  width: 25%;
  text-align: center;
  padding: 0.2rem 0;
}

.nav div img {
  width: 0.8rem;
  height: 0.8rem;
  vertical-align: middle;
}
</style>