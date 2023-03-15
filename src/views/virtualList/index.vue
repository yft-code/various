<template>
    <div ref="box" class="vl-box" :style="{ height: height + 'px' }">
        <div :style="{ height: boxHeight + 'px' }">
            <div
                class="vl-box-item"
                :style="{
                    height: rowHeight + 'px',
                    lineHeight: rowHeight + 'px',
                    top: (index + offsetIndex) * rowHeight + 'px'
                }"
                v-for="(item,index) in offsetData"
                :key="item.index"
            >{{ item }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: Array(100).fill('').map((v, i) => { return { index: i } }),
            height: 500,
            rowHeight: 30,
            offset: 0,
            offsetIndex: 0
        }
    },
    computed: {
        boxHeight() {
            return this.data.length * this.rowHeight;
        },
        offsetData() {
            let count = Math.ceil(this.height / this.rowHeight);
            let index = Math.floor(this.offset / this.rowHeight);
            this.offsetIndex = index;
            return this.data.slice(index, count + index);
        }
    },
    mounted() {
        this.$refs.box.addEventListener('scroll', () => {
            this.offset = this.$refs.box.scrollTop;   
            console.log(this.offset )       
        },false)
    },
}
</script>

<style scoped>
.vl-box {
    border: 2px solid #0094ff;
    overflow: auto;
}
.vl-box > div {
    overflow: hidden;
    position: relative;
}
.vl-box > div > div {
    position: absolute;
    width: 100%;
}
.vl-box-item {
    box-sizing: border-box;
    border-bottom: 1px dotted red;
}
</style>
