<template>
    <div class="title">
        <i></i>
        {{ cityname }}疫情地图
    </div>
    <div id="main"></div>
    <div class="guide">
        <a href="https://m.dxy.com/article/27734" target="_blank">
            <img src="../assets/images/guide.png" alt />
        </a>
    </div>
    <footer-com />
</template>

<script>
import FooterCom from "../components/Common/FooterCom.vue"
export default {
    name: 'CovCity',
    props: ["cityname"],
    components: { FooterCom },
    mounted() {
        this.$echarts.cityMap("main", this.cityname, [])
    },

};
</script>

<style scoped>
.title {
    font-size: 0.34rem;
    font-weight: 700;
    margin: 0.3rem 0 0.2rem 0.16rem;
}
.title i {
    display: inline-block;
    width: 0.1rem;
    height: 0.4rem;
    margin-right: 0.03rem;
    vertical-align: middle;
    background-color: #1bd414;
}

#main {
    width: 7.5rem;
    height: 6rem;
    box-sizing: border-box;
    border: 1px solid #eee;
    /* background-color: #eee; */
    border-radius: 0.3rem;
    margin-bottom: 0.1rem;
}

.guide img {
    width: 100%;
}
</style>