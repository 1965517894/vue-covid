<template>
    <div class="test" ref="dom" @click="handleClick">测试</div>
</template>


<script>
import { onMounted, ref } from "vue"
export default {
    setup() {
        const dom = ref()
        onMounted(() => {
            console.log(dom.value);
        });
        // dom需要暴露出去
        return { dom }
    }
}
</script>


<!-- <script setup>
import { onMounted, ref } from "vue"
const dom = ref()
onMounted(() => {
    console.log(dom.value);
});
</script> -->

<style scoped>
.test {
    width: 200px;
    height: 200px;
    background-color: pink;
}
</style>