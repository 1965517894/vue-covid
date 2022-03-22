<template>
    <div class="box">
        <div class="title">
            <i></i>
            国内疫情趋势
        </div>
        <div class="swipe">
            <!-- 轮播图banner -->
            <van-swipe
                class="my-swipe"
                :autoplay="5000"
                indicator-color="white"
                @change="onChange"
                ref="swipeDom"
            >
                <van-swipe-item v-for="item in bannerList" :key="item.title">
                    <img :src="item.image" alt style="width:100%" />
                </van-swipe-item>
            </van-swipe>
            <!-- 轮播图选项卡 -->
            <ul class="list">
                <li
                    v-for="(item, index) in arr"
                    :key="index"
                    :class="{ active: index === activeIndex }"
                    @click="handleClick(index)"
                >{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import api from "@/assets/api/index"

export default {
    name: 'IndexSwipe',
    setup() {
        const activeIndex = ref(0);
        // 轮播图选项内容
        const arr = ref(["新增疑似/新增确诊", "现存确诊/现存疑是", "死亡/治愈", "病死率", "治愈率"])
        const onChange = (index) => {
            activeIndex.value = index
            // console.log(index);
        }
        // 获取轮播图组件实例 需要通过return暴露
        const swipeDom = ref()
        const handleClick = (index) => {
            // console.log(swipeDom.value);
            swipeDom.value.resize()
            swipeDom.value.swipeTo(index)
        }

        // 轮播图内容
        const bannerList = ref([])
        api.getSwiperBanner().then((res) => {
            bannerList.value = res.data.result; //数组
            // console.log(bannerList);
        }).catch((err) => {
            throw err
        })

        return { activeIndex, arr, onChange, swipeDom, handleClick, bannerList }
    },
    // methods: {
    //     handleClick(index) {
    //         this.$refs.swipeDom.swipeTo(index)
    //     }
    // },
};
</script>

<style lang="less" scoped>
.box {
    padding: 0.16rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;

    .title {
        font-size: 0.34rem;
        font-weight: 700;
        margin-bottom: 0.3rem;

        i {
            display: inline-block;
            width: 0.1rem;
            height: 0.4rem;
            margin-right: 0.03rem;
            vertical-align: middle;
            background-color: #4169e2;
        }
    }
    .swipe {
        .list {
            display: flex;
            justify-content: space-between;
            margin-top: 0.1rem;
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-basis: 1.2rem;
                padding: 0.1rem 0.06rem;
                list-style: none;
                font-size: 0.24rem;
                background-color: #eee;
                border-radius: 0.1rem;
            }
            .active {
                background-color: #39a9ed;
                color: #fff;
            }
        }
    }
}
</style>