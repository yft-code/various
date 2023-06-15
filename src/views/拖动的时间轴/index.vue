<template>
  <div>
    <div class="timeLineContainer" ref="timeLineContainer">
    <canvas
      ref="canvas"
      @mousemove="onMousemove"
      @mouseout="onMouseout"
      @mousedown="onMousedown"
      @mousewheel="onMouseweel"
    ></canvas>
  </div>
  </div>
</template>

<script>
export default {
data(){
    return {
        aopp:'dsajdasgd'
    }
},
methods: {
        init () {
            // 获取外层宽高
            let {
                width,
                height
            } = this.$refs.timeLineContainer.getBoundingClientRect()
            this.width = width
            this.height = height
            // 设置画布宽高为外层元素宽高
            this.$refs.canvas.width = width
            this.$refs.canvas.height = height
            // 获取画图上下文
            this.ctx = this.$refs.canvas.getContext('2d')
        },
    draw () {
        this.drawMiddleLine()
    },
    // 画中间的白色竖线
    drawMiddleLine () {
        let lineWidth = 2
        // 线的x坐标是时间轴的中点，y坐标即时间轴的高度
        let x = this.width / 2
        this.drawLine(x, 0, x, this.height, lineWidth, '#fff')
    },
    // 画线段方法
    drawLine (x1, y1, x2, y2, lineWidth = 1, color = '#fff') {
        // 开始一段新路径
        this.ctx.beginPath()
        // 设置线段颜色
        this.ctx.strokeStyle = '#fff'
        // 设置线段宽度
        this.ctx.lineWidth = lineWidth
        // 将路径起点移到x1,y1
        this.ctx.moveTo(x1, y1)
        // 将路径移动到x2,y2
        this.ctx.lineTo(x2, y2)
        // 把路径画出来
        this.ctx.stroke()
    }
    }
}
</script>

<style>

</style>