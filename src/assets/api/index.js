/**
 * 请求接口的方法
 */
import axios from "axios";
// 接口地址
import base from "./base";

const api = {
  /**
   *
   * 病毒信息
   */
  getCovInfo: function () {
    return axios.get(base.host + base.covInfo);
  },
  /**
   * 国内疫情
   */
  getChinaData: function () {
    return axios.get(base.host + base.chinaData);
  },
  /**
   * 轮播图数据接口
   */
  getSwiperBanner: function () {
    return axios.get(base.host + base.covSwipe);
  },
};

export default api;
