<script>
export default {
  name: "MenuItem",
  functional: true,
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];

    if (icon) {
      vnodes.push(<i class={[icon, "icon iconfont"]} />);
    }

    if (title) {
      vnodes.push(
        <span style="margin-left:6px" slot="title">
          {title}
        </span>
      );
    }
    return vnodes;
  },
};
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
.el-submenu__title i {
  color: #0a1933 !important;
  margin-right: 8px;
  font-size: 17px;
}
</style>
