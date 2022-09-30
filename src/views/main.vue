<template>
  <div class="main-ai">
    <!-- 头部 -->
    <!-- <a-header></a-header> -->
    <!-- 主页面 -->
    <div class="main-aicont">
      <!-- 侧边栏 -->
      <silderBar/>
      <!-- <div class="right-cont"> -->
      <!-- 消息通知 -->
      <!-- <noticeComponent /> -->
      <!-- 业务组件 -->
      <!-- <router-view></router-view> -->
      <!-- </div> -->
      <div class='right-cont'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import silderBar from "../views/siderBar"
export default {
 components: {
    silderBar
  },
}
</script>


<style lang="scss" scoped>
.main-ai {
  height: 100%;
  /deep/.el-loading-mask {
    z-index: 1999;
  }
  /deep/.el-tabs__item {
    font-size: 16px;
  }
  /deep/.el-tabs__nav-wrap::after {
    background-color: #f9f9f9;
  }
  /deep/.el-pagination.is-background .el-pager li {
    background: #fff;
    border: 1px solid #ddd;
  }
  /deep/.el-pagination.is-background .btn-next {
    background: #fff;
    border: 1px solid #ddd;
  }
  /deep/.el-pagination.is-background .btn-prev {
    background: #fff;
    border: 1px solid #ddd;
  }
  /deep/.el-table__fixed {
    height: 100% !important;
  }
  /deep/.el-table__fixed-right {
    height: 100% !important;
  }
  /deep/.el-table {
    .el-button {
      padding-top: 12px !important;
      padding-bottom: 12px !important;
    }
  }
  // /deep/.el-table--fit {
  //   border-right: 1px solid #EBEEF5;
  //   border-left: 1px solid #EBEEF5;
  // }
  /deep/ .el-pagination__total {
    margin-top: 2px;
  }
  /deep/.el-pagination__editor.el-input .el-input__inner {
    margin-top: -3px;
  }
  /deep/.el-table {
    .el-table__fixed {
      height: auto !important; // 此处的important表示优先于element.style
      bottom: 17px; // 改为自动高度后，设置与父容器的底部距离，则高度会动态改变
    }
  }
  /deep/.el-table__body-wrapper {
    //滚动条整体
    &::-webkit-scrollbar {
      width: 6px;
      height: 14px;
    }
    //滚动条小方块
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgb(199, 203, 209);
      background: rgb(199, 203, 209);
    }
    //滚动条轨道
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgb(248, 248, 248);
      border-radius: 0;
      background: rgb(248, 248, 248);
    }
  }
  ///deep/.el-table th:first-child{
  //  padding-left: 24px;
  //}
  ///deep/.el-table th>.cell {
  //  padding-left: 24px;
  //}
  //.el-table .cell, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
  //  padding-left: 24px;
  //}
  /deep/.el-table__fixed-right {
    z-index: 1;
  }
  /deep/.el-table__fixed {
    z-index: 1;
  }
  /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #347fff;
    border-radius: 2px;
    filter: blur(0.1171875px);
  }
  /deep/.el-button--primary {
    background-color: #347fff;
    filter: blur(0.1171875px);
    border: none;
  }
  /deep/.el-button--default {
    color: rgba(10, 25, 51, 0.5);
    border: 1px solid rgba(10, 25, 51, 0.2);
  }
  /deep/.el-button--text {
    color: #347fff;
    font-size: 20px;
  }
  /deep/.el-button--default:hover {
    font-weight: 400;
    color: rgba(10, 25, 51, 0.5);
    background: #fff;
  }
  /deep/.el-button--default:focus,
  .el-button--default:hover {
    font-weight: 400;
    color: rgba(10, 25, 51, 0.5);
    background: #fff;
  }
  /deep/.el-form-item__label {
    font-weight: 400;
    font-size: 18px;
    color: #0a1933;
  }
  /deep/.el-form--inline .el-form-item__content {
    font-weight: 400;
    color: #0a1933;
    font-size: 18px;
  }
  /deep/.el-dialog__body {
    padding: 4px 20px 10px 20px;
  }
  /deep/.el-dialog__header {
    padding: 24px 24px;
  }
}
.main-aicont {
  display: flex;
  .right-cont {
    // width: calc(100% - 260px);
    width: calc(100% - 300px);
    padding: 24px;
  }
  .right-cont1 {
    // width: calc(100% - 260px);
    width: calc(100% - 64px);
  }
}
</style>
<style lang="scss">