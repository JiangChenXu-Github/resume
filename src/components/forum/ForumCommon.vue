<template>
  <div class="main">
    <div class="top-fixed"></div>
    <div class="content">
      <div class="content-shadow"></div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style lang="less" scoped>
.main {
  z-index: -2;
}
.top-fixed {
  position: fixed;
  top: 0;
  background-color: #14b9c8;
  width: 100vw;
  height: 10vh;
}
.content {
  position: absolute;
  top: 0;
  left: 2.5vw;
  width: 95vw;
  height: 76vh;
  margin: 0 auto;
  border-top-right-radius: 2vw;
  border-top-left-radius: 2vw;
  overflow-y: scroll;
  -ms-overflow-style: none;  //IE 10+
  overflow: -moz-scrollbars-none;  //Firefox
  .content-shadow {
    border-radius: 3vw;
    margin-left: 1vw;
    width: 93vw;
    height: 0.4vh;
    background-color: #000;
    opacity: 1;
    position: fixed;
    top: 0;
    filter: blur(1.5px);
  }
}
.content::-webkit-scrollbar {
  width: 0 !important; //chrome 和Safari，电脑端微信浏览器
  height: 0 !important; //这样在电脑端微信浏览器横向滚动会无效。不加!important则可
}
</style>