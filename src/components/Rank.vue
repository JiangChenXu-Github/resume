<template>
  <div>
    <div class="top">
      <div class="top-middle"><span>JapJap</span></div>
      <div class="top-right">
        <div class="top-right-left"><i class="iconfont icon-tongzhi" /></div>
        <div class="top-right-right"><i class="iconfont icon-sousuo" /></div>
      </div>
    </div>
    <van-tabs class="top-bar" v-model="active" animated lazy-render swipeable color="#14b9c8" line-width="5vw" title-active-color="#14b9c8">
      <van-tab class="top-bar-content" v-for="item in topBarData" :title="item.name" :key="item.id">
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
        {id: 0, name: '热门榜'},
        {id: 1, name: '新品榜'},
        {id: 2, name: '预约榜'},
        {id: 3, name: '热卖榜'},
        {id: 4, name: '热玩榜'},
        {id: 5, name: '厂商'}
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
      font-size: 8vw;
    }
    .top-right {
      position: absolute;
      right: 2vw;
      display: flex;
      justify-content: space-between;
      padding-right: 2vw;
      width: 17vw;
      div {
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
    height:74.5vh;
    overflow-y: scroll;
  }
}
</style>