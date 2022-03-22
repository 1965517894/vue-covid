<template>
  <div class="hot">
    <div class="title">
      <i></i>
      疫情热点
    </div>
    <div class="content">
      <ul>
        <li class="hot-list" v-for="item in covHot" :key="item.id">
          <span class="new">最新</span>
          {{ format(item.title) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CovHot",
  props: {
    covHot: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  setup() {
    // title最大长度限制为20
    const format = (str) => {
      if (str.length >= 22) {
        return str.slice(0, 22) + "...";
      } else {
        return str;
      }
    };
    return { format };
  },
};
</script>

<style scoped>
.hot {
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
  padding-left: 0.2rem;
}

.content li {
  font-size: 0.3rem;
  margin: 0.2rem 0;
}

.hot-list {
  white-space: nowrap;
  overflow: hidden;
}

.hot-list::after {
  font-family: "iconfont" !important;
  content: "\e61b";
  float: right;
  color: #d9d9d9;
  margin-top: 0.05rem;
  font-weight: 700;
}

.new {
  margin-right: 0.1rem;
  padding: 0 0.05rem;
  background-color: #f74c31;
  color: white;
  font-size: 0.26rem;
  border-radius: 10%;
}
</style>