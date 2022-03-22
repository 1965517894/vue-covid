<!-- api接口已废弃 -->
<template>
  <div class="info">
    <div class="title">
      <i></i>
      病毒信息
    </div>

    <div class="content">
      <p>{{ covInfo.note1 }}</p>
      <p>{{ covInfo.note2 }}</p>
      <p>{{ covInfo.note3 }}</p>
      <p>{{ covInfo.remark1 }}</p>
      <p>{{ covInfo.remark2 }}</p>
      <p>{{ covInfo.remark3 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CovInfo",
  props: {
    covInfo: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.info {
  padding: 0.16rem;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
}

.title {
  font-size: 0.34rem;
  font-weight: 700;
}

.title i {
  display: inline-block;
  width: 0.1rem;
  height: 0.4rem;
  margin-right: 0.03rem;
  vertical-align: middle;
  background-color: #4169e2;
}

.content {
  padding: 0.1rem 0.2rem;
}

.content p {
  font-size: 0.3rem;
  margin: 5px 0;
}
</style>