import cities from "china-area-data";

// const cities = require("../../node_modules/china-area-data/data");

// obj ==> array
const format = (obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push({ text: obj[key], value: key });
  }
  return arr;
};

const getData = (Id, obj) => {
  return format(obj[Id]);
};

const addChildren = (arr) => {
  for (let e of arr) {
    e.children = getData(e.value, cities);
  }
  return arr;
};

const res = addChildren(getData(86, cities));

export default res;
