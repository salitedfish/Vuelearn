<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style>
#tabbar {
  /* width: 100%; */
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 49px;
  justify-content: space-around;
  background-color: #f5f5f5;
  box-sizing: border-box;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}

</style>