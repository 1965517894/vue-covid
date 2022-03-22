import {
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Cascader,
  Field,
  Popup,
  Button,
} from "vant";

export default {
  install: (app) => {
    app
      .use(Tab)
      .use(Tabs)
      .use(Swipe)
      .use(SwipeItem)
      .use(Cascader)
      .use(Field)
      .use(Popup)
      .use(Button);
  },
};
