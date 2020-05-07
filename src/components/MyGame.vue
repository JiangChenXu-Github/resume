<template>
  <div>
    <div class="top">
      <div class="top-middle"><span>我的游戏</span></div>
      <div class="top-right">
        <div class="top-right-left"><i class="iconfont icon-xiazai" /></div>
        <div class="top-right-right"><i :style="{fontSize: '8vw'}" class="iconfont icon-huojianxianxing" /></div>
      </div>
    </div>
    <van-tabs class="top-bar" v-model="active" animated swipeable color="#14b9c8" line-width="5vw" title-active-color="#14b9c8">
      <van-tab v-for="item in topBarData" :title="item.name" :key="item.id">
        <my-rank-common></my-rank-common>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topBarData: [
        {id: 0, name: '已装'},
        {id: 1, name: '更新'},
        {id: 2, name: '玩过'},
        {id: 3, name: '预约'}
      ],
      active: 0
    }
  }
}
</script>
<style lang="less" scoped>
  .top {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 19.5vw;
    background-color: #14b9c8;
    color: #fff;
    .top-middle {
      font-size: 5vw;
    }
    .top-right {
      position: absolute;
      right: 2vw;
      display: flex;
      justify-content: space-between;
      padding-right: 2vw;
      width: 17vw;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
          font-size: 6vw;
        }
      }
    }
  }
  .top-bar {
    position: fixed;
    left: 0;
    top: 19.5vw;
    font-weight: bold;
    width: 100vw;
    .top-bar-content {
      width: 100vw;
      height: 20vh;
    }
  }
</style>