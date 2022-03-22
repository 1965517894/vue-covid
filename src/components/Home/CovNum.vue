<template>
  <div class="num">
    <div class="content">
      <div class="title">截止北京时间 {{ parseTime(covData.modifyTime) }}</div>
      <ul class="wrap">
        <li>
          较昨日
          <span class="current-confirmed">{{ signAll(covData.currentConfirmedIncr) }}</span>
          <div class="bold current-confirmed">{{ thous(covData.currentConfirmedCount) }}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          较昨日
          <span class="overseas">{{ signAll(covData.suspectedIncr) }}</span>
          <div class="bold overseas">{{ thous(covData.suspectedCount) }}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          较昨日
          <span class="asymptomatic">{{ signAll(covData.seriousIncr) }}</span>
          <div class="bold asymptomatic">{{ thous(covData.seriousCount) }}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          较昨日
          <span class="confirmed">{{ signAll(covData.curedIncr) }}</span>
          <div class="bold confirmed">{{ thous(covData.curedCount) }}</div>
          <strong>累积确诊</strong>
        </li>
        <li>
          较昨日
          <span class="dead">{{ signAll(covData.deadIncr) }}</span>
          <div class="bold dead">{{ thous(covData.deadCount) }}</div>
          <strong>累积死亡</strong>
        </li>
        <li>
          较昨日
          <span class="cured">{{ signAll(covData.curedIncr) }}</span>
          <div class="bold cured">{{ thous(covData.curedCount) }}</div>
          <strong>累积治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CovNum",
  props: {
    covData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  setup() {
    //  个位数补零，Number=>String
    const format = (num) => (num >= 10 ? "" + num : "0" + num);
    // 转换时间格式
    const parseTime = (ut) => {
      let time = new Date(ut);
      let minute = time.getMinutes();
      let hour = time.getHours();
      let date = time.getDate();
      let month = time.getMonth() + 1;
      let year = time.getFullYear();
      return `${year}-${format(month)}-${format(date)} ${format(hour)}-${format(
        minute
      )}`;
    };
    // 添加正负号和千分位逗号
    const signAll = (value) =>
      parseInt(value) > 0
        ? "+" + parseInt(value).toLocaleString()
        : parseInt(value).toLocaleString();
    //  只添加千分号
    const thous = (value) => parseInt(value).toLocaleString();

    return { parseTime, signAll, thous };
  },
};
</script>

<style scoped>
.num {
  background-color: #f5f5f5;
  padding-top: 0.3rem;
}

.num .content {
  padding: 0.2rem;
  background-color: #fff;
  border-radius: 0.2rem 0.2rem 0 0;
}

.title {
  color: #666;
  margin-bottom: 0.2rem;
  font-size: 0.16rem;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 0.05rem 0.05rem rgba(196, 186, 186, 0.3);
  border-radius: 0.1rem;
  padding: 0.3rem 0;
}

.wrap li {
  position: relative;
  width: 33.33333%;
  font-size: 0.3rem;
  text-align: center;
  color: #666;
  font-weight: bold;
}

.wrap li:nth-child(-n + 3) {
  margin-bottom: 0.3rem;
}

.wrap li:not(:nth-child(3n))::after {
  content: "";
  position: absolute;
  top: 0.2rem;
  right: -0.02rem;
  width: 0.04rem;
  height: 0.8rem;
  background-color: rgba(87, 82, 82, 0.3);
}

.wrap li span {
  font-weight: 400;
}

strong {
  color: #333;
}

.current-confirmed {
  color: #f74c31;
}

.overseas {
  color: #f78207;
}

.asymptomatic {
  color: #a25a4e;
}

.confirmed {
  color: #ae212c;
}

.dead {
  color: #5d7092;
}

.cured {
  color: #28b7a3;
}
</style>