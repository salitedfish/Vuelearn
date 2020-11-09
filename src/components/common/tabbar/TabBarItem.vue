<template>
  <div class="tabbar-item" @click="tabbaritemonclick">
    <slot v-if="!isactive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="color"  v-bind:class="{ active: isactive }" >
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: {
      type: String,
    },
    activecolor: {
      default: 'black'
    }
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    color(){
      return this.isactive?{color:this.activecolor}:{}
    }
  },
  methods: {
    tabbaritemonclick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tabbar-item {
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 25px;
  height: 25px;
  margin-top: 3px;
  vertical-align: middle;
}
.tabbar-item .active {
  font-weight: bold;
  font-size: 14px;
}
</style>