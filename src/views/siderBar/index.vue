<template>
  <div>
    <div
      class="menuSider"
      :style="{ minHeight: clientHeight + 'px' }"
      :class="[openIcon ? 'styleAA' : '']"
    >
      <el-scrollbar
        wrap-class="scrollbar-wrapper"
        :class="[openIcon ? 'styleAA' : '']"
        class="menuSiderScroll"
      >
        <el-menu
          class="muen-el"
          style="overflow: auto; overflow-x: hidden"
          :style="{ maxHeight: `${screenHeight1}px` }"
          :collapse-transition="false"
          ref="menus"
          :collapse="openIcon"
          :default-active="activeMenu"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :router="true"
          mode="vertical"
        >
          <sidebar-item
            v-for="route in routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
            :class="{ bgOne: route.isShow }"
          />
        </el-menu>
      </el-scrollbar>
      <div :class="[openIcon ? 'icBottom1' : 'icBottom']">
        <i
          class="iconfont icon-Expand fn"
          v-show="openIcon"
        ></i>
        <i
          class="iconfont icon-Collect fn"
          v-show="!openIcon"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarItem from "./SidebarItem";
import variables from "@/assets/styles/variables.scss";
//  :default-openeds="['/3D', '/AI','/TaskCenter','/dataCenter','/userCenter']"
export default {
  name: "SiderBar",
  components: { SidebarItem },
  mounted(){
    setTimeout(() => {
      console.log('vvvvvv',this.routes);
    }, 1000);
  },
  computed: {
     routes() {
      return this.$router.options.routes[0].children
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },
  data() {
    return {
      arr: [],
      // 展开时的路由
      // routes: [],
      // 关闭时的路由
      closeRoutes: [],
      // 中间值
      mRouters: [],
      wholeRoute: [],
      screenHeight1: document.body.clientHeight - 115,
      // screenHeight: document.body.clientHeight - 110,
      // windowWidth: document.documentElement.clientWidth,
      aa: [],
      bb: [],
      cc: [],
      dd: [],
      ee: [],
      a: [],
      b: [],
      d: [],
      c: [],
      width1: 260,
      openIcon: false,
      isLogin: false,
      clientHeight: document.body.clientHeight - 56,
    };
  }
}
</script>
<style lang="scss" scoped>
.muen-el {
  //滚动条整体
  height: 100%;
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
.fn {
  cursor: pointer;
  font-size: 25px;
  margin-left: 18px;
  line-height: 56px;
}
.icBottom {
  border-top: #f3f3f5 1px solid;
  position: fixed;
  bottom: 6px;
  width: 260px;
  height: 50px;
  // background: red;
}
.icBottom1 {
  height: 50px;
  border-top: #f3f3f5 1px solid;
  position: fixed;
  bottom: 6px;
  width: 64px;
  // background: red;
}

.styleAA {
  width: 64px !important;
  /deep/ .el-submenu__title span {
    display: none;
  }
  /deep/.el-submenu__icon-arrow {
    display: none;
  }
}
/deep/ .el-menu--collapse {
  width: 100%;
}
/deep/ .el-scrollbar__bar.is-horizontal {
  height: 0;
}
// /deep/ .el-icon-arrow-down:before{
//   content:''
// }
/deep/ .el-icon-arrow-right:before {
  content: "";
}
/deep/ .el-menu {
  background: #ffffff;
  border-right: none;
  a:nth-child(3) {
    color: red;
  }
}
/deep/ .el-menu-item {
  // height: 35px;
  // line-height: 35px;
  color: rgba(10, 25, 51, 0.5) !important;
  // text-align: center;
  font-size: 15px;
  // background-color: rgba(10, 25, 51, 0.02) !important;
}
/deep/ .el-menu-item i {
  // height: 35px;
  // line-height: 35px;
  color: #0a1933 !important;
  // text-align: center;
  font-size: 15px;
  // background-color: rgba(10, 25, 51, 0.02) !important;
}
.bgOne {
  /deep/ .el-menu-item {
    // height: 35px;
    // line-height: 35px;
    color: #0a1933 !important;
    // text-align: center;
    font-size: 15px;
    background-color: rgba(10, 25, 51, 0.02) !important;
  }
  /deep/ .el-menu-item i {
    color: #0a1933 !important;
    font-size: 15px;
  }
}
/deep/ .el-menu-item.is-active {
  //  text-decoration: none;
  color: rgb(64, 158, 255) !important;
  background: rgba(52, 127, 255, 0.1) !important;
  border-right: 2px solid;
}
/deep/ .el-submenu__title {
  // height: 48px;
  // line-height: 48px;
  font-weight: 400;
  // color: #0a1933 !important;
  color: #0a1933 !important;
  background-color: rgba(10, 25, 51, 0.02) !important;
  font-size: 15px;
}
/deep/ .el-submenu__title i {
  font-size: 15px;
  color: #0a1933 !important;
}
/deep/ .el-menu-item i {
  font-size: 15px;
  color: #0a1933 !important;
  margin-right: 4px;
}

[data-v-0ac34886] /deep/.el-submenu .el-menu-item {
  min-width: 100px !important;
  padding: 0 !important;
  padding-left: 18px !important;
}
/deep/ .el-scrollbar__wrap {
  margin-right: 0px !important;
  overflow: hidden;
}
a:nth-child(3) {
  color: red;
}
.el-scrollbar {
  overflow: initial;
}
/deep/.el-menu-item:hover {
  background-color: rgba(6, 16, 48, 0.03) !important;
}
.menuSider {
  width: 260px;
  height: 100%;
  background: #ffffff;
  // background: red;

  box-shadow: 0px 0px 7px -3px rgba(10, 25, 51, 0.2);
  /deep/.el-scrollbar__view{
    height: 100%;
  }
  .menuSiderScroll {
    // background: blue;
    position: fixed;
    height: 100%;
    width: 266px;
    left: 0;
    // top: 64px;
  }
}
.menuFirstTitle {
  height: 64px;
  background: #347fff;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  line-height: 36px;
  display: flex;
  align-items: center;
  p {
    margin-left: 20px;
  }
}

@media screen and (max-width: 1680px) {
  /deep/.menuSiderScroll {
    // top: 76px !important;
  }
}
</style>
<style lang="scss">
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>>

