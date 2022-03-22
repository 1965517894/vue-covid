<template>
    <div class="container">
        <div class="exit" @click="handleClickExit">返回疫情动态</div>
        <div class="select-box">
            <div class="title">
                <i></i>
                出行防疫政策查询
                <span class="text-right">更多地区持续添加中</span>
            </div>
            <!-- 出发城市 -->
            <van-field
                v-model="fromInput"
                is-link
                readonly
                label="出发城市"
                placeholder="请选择出发城市"
                @click="fromShow = true"
            />
            <van-popup v-model:show="fromShow" round position="bottom">
                <van-cascader
                    v-model="fromSelect"
                    title="选择出发城市"
                    :options="options"
                    @close="fromShow = false"
                    @finish="onFinishFrom"
                />
            </van-popup>
            <!-- 目的城市 -->
            <van-field
                v-model="toInput"
                is-link
                readonly
                label="目的城市"
                placeholder="请选择目的城市"
                @click="toShow = true"
            />
            <van-popup v-model:show="toShow" round position="bottom">
                <van-cascader
                    v-model="toSelect"
                    title="选择出发城市"
                    :options="options"
                    @close="toShow = false"
                    @finish="onFinishTo"
                />
            </van-popup>
        </div>
        <van-button class="btn" type="primary" @click="handleClick">查询政策</van-button>
    </div>

    <div class="tip">
        <span class="new">最新</span>
        <span class="text">多地出现确诊病例，关键时期请接力倡议</span>
    </div>

    <div class="info">
        <div class="info-title">
            <span class="info-city">太原</span>
            <span class="level">低风险</span>
            <span class="change-subscribe" @click="handleChangeSubscribe">订阅变动</span>
        </div>
        <div class="info-context">
            <div class="info-out">
                <h4>外出政策</h4>
                <p>非必要不前往中高风险地区所在地市及有病例报告的地市，如必须前往，务必全程做好个人防护，返并后按规定落实隔离医学观察。</p>
            </div>
            <div class="info-in">
                <h4>进入政策</h4>
                <p>1.14天内有中高风险地区旅居史的返（抵）并人员一律实施“14+5”集中隔离医学观察，分别于第1、4、7、10、14天开展1次核酸检测。</p>
                <p>2.14天内有中高风险地区所在县（直辖市的街道、乡镇）旅居史的返（抵）并人员一律实施“14+5”居家隔离医学观察，分别于第1、4、7、10、14天开展1次核酸检测。</p>
                <p>3.对14天内有病例报告但尚未调整风险等级所在县（直辖市乡镇、街道）旅居史的返（抵）并人员，实施“7+3”居家隔离医学观察措施，分别于第1、4、7天开展1次核酸检测。</p>
                <p>4.对2月13日以来有苏州市、2月15日以来有呼和浩特市、包头市旅居史的返（抵）并人员，实施“7+3”居家隔离医学观察措施。</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router'
import cities from "../util/chinaCity"
export default {
    name: 'TripGuide',
    setup() {
        // 出发城市参数
        const fromShow = ref(false);
        const fromInput = ref('');
        const fromSelect = ref('');
        // 目的城市参数
        const toShow = ref(false);
        const toInput = ref('');
        const toSelect = ref('');
        // 记录输入的城市信息
        const input = reactive({});
        // 选项列表，children 代表子选项，支持多级嵌套
        // const options = [
        //     {
        //         text: '浙江省',
        //         value: '330000',
        //         children: [{ text: '杭州市', value: '330100' }],
        //     },
        //     {
        //         text: '江苏省',
        //         value: '320000',
        //         children: [{ text: '南京市', value: '320100' }],
        //     },
        // ];
        const options = cities;
        // 全部选项选择完毕后，会触发 finish 事件
        const onFinishFrom = ({ selectedOptions }) => {
            fromShow.value = false;
            fromInput.value = selectedOptions.map((option) => option.text).join('/');
            input.from = selectedOptions
        };
        const onFinishTo = ({ selectedOptions }) => {
            toShow.value = false;
            toInput.value = selectedOptions.map((option) => option.text).join('/');
            input.to = selectedOptions
        };

        // 查询按钮点击触发事件
        const handleClick = () => {
            // console.log({
            //     from: fromInput.value,
            //     to: toInput.value
            // });
            console.log(input);
        }

        // 返回主页 点击事件
        const router = useRouter()
        const handleClickExit = () => {
            // window.location.href = "http://localhost:3333"
            router.push({ path: "/" })
        }

        const handleChangeSubscribe = () => {
            console.log("clicked to change the subscribe");
        }

        return {
            fromShow,
            options,
            onFinishFrom,
            fromInput,
            fromSelect,
            toShow,
            onFinishTo,
            toInput,
            toSelect,
            handleClick,
            handleClickExit,
            handleChangeSubscribe
        };
    },
};

</script>

<style lang="less" scoped>
.container {
    width: 7.5rem;
    background: url("../assets/images/tripGuide.png") no-repeat;
    background-size: 100%;
    // background-color: pink;
    padding-top: 2.5rem;
    .exit {
        position: absolute;
        top: 0.3rem;
        right: 0.2rem;
        padding: 0.1rem 0.16rem;
        font-size: 0.11rem;
        background-color: rgba(19, 15, 133, 0.5);
        color: #fff;
        border-radius: 999999rem;
    }
    .select-box {
        // display: flex;
        // margin-top: 0.5rem;
        background-color: #f7f8fa;
        padding: 0.2rem 0.2rem;
        margin: 0 0.2rem;
        border-radius: 0.2rem;
        .title {
            font-size: 0.3rem;
            font-weight: 700;
            margin-bottom: 0.1rem;
            i {
                display: inline-block;
                width: 0.1rem;
            }
            .text-right {
                float: right;
                height: 0.48rem;
                font-size: 0.2rem;
                font-weight: 400;
                color: #999999;
                line-height: 0.48rem;
            }
        }
    }
    .btn {
        margin: 0.2rem;
        // 计算属性运算符号一定要有空格
        width: calc(100% - 0.4rem);
        border-radius: 0.2rem;
    }
}

.tip {
    margin: 0 0.2rem;
    padding: 0.16rem 0.2rem;
    background-color: #eee;
    border-radius: 0.1rem;

    .new {
        color: red;
        background-color: #f3dcd8;
        margin-right: 0.2rem;
        padding: 0.06rem;
        border-radius: 0.05rem;
        font-size: 0.2rem;
    }
}

.info {
    padding: 0.2rem;
    direction: left;
    .info-title {
        display: flex;
        align-items: center;
        background-color: #40cca7;
        border-radius: 0.2rem;
        height: 1rem;
        color: #fff;
        .info-city {
            font-size: 0.4rem;
            font-weight: 700;
            margin: 0 0.2rem 0 0.3rem;
        }
        .change-subscribe {
            // 实现靠右
            margin-left: auto;
            margin-right: 0.2rem;
            height: 0.4rem;
            line-height: 0.4rem;

            color: #40cca7;
            font-size: 0.2rem;
            font-weight: 700;
            background-color: #fff;
            padding: 0 0.1rem;
            border-radius: 0.2rem;
        }
    }
    .info-context {
        font-size: 0.3rem;
        .info-out,
        .info-in {
            background-color: #eee;
            padding: 0.2rem;
            margin: 0.2rem 0;
            border-radius: 0.2rem;
            color: #666;
            h4 {
                margin-bottom: 0.1rem;
            }
        }
    }
}
</style>