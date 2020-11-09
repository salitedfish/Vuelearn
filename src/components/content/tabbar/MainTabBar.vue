<template>
  <tabbar>
    <tabbaritem path="/home" activecolor="">
      <img slot="item-icon" src="~assets/img/tabbar/icon-test.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shouyeactive.png"
        alt=""
      />
      <div slot="item-text">主页</div>
    </tabbaritem>
    <tabbaritem path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/fenlei.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/fenleiactive.png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/gouwuche.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/gouwucheactive.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/wode.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/wodeactive.png"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/TabBar.vue";
import tabbaritem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbaritem
  }
};
</script>

<style>
</style>