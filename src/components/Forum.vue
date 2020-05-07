<template>
  <div class="background">
    <div class="top">
      <div class="top-top">
        <div><span @click="topTopClickEvent">关注</span></div>
        <div><span @click="topTopClickEvent1">推荐</span></div>
        <div><span @click="topTopClickEvent2">版块</span></div>
        <div><span @click="topTopClickEvent3">攻略</span></div>
      </div>
      <div :class="topBottomClass"></div>
    </div>
    <div class="top-top-fixed">
      <div class="top-fixed-middle"><i class="iconfont icon-sousuo" /><span>搜索论坛、帖子</span></div>
      <div class="top-fixed-right"><i class="iconfont icon-tongzhi" /></div>
    </div>
    <van-swipe ref="swipeRef" class="my-swipe" :show-indicators="false" :loop="false" @change="swipeChangeEvent">
      <van-swipe-item class="my-swipe-item"><my-forum-common><my-follow></my-follow></my-forum-common></van-swipe-item>
      <van-swipe-item class="my-swipe-item"><my-forum-common><my-recommend></my-recommend></my-forum-common></van-swipe-item>
      <van-swipe-item class="my-swipe-item"><my-forum-common><my-section></my-section></my-forum-common></van-swipe-item>
      <van-swipe-item class="my-swipe-item"><my-forum-common><my-strategy></my-strategy></my-forum-common></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topBottomClass: 'top-bottom'
    }
  },
  methods: {
    swipeChangeEvent(index) {
      switch (index) {
        case 0:
          this.topBottomClass = 'top-bottom'
          break
        case 1:
          this.topBottomClass = 'top-bottom1'
          break
        case 2:
          this.topBottomClass = 'top-bottom2'
          break
        case 3:
          this.topBottomClass = 'top-bottom3'
          break
        default:
          break
      }
    },
    topTopClickEvent() {
      this.topBottomClass = 'top-bottom'
      this.$refs.swipeRef.swipeTo(0, false)
    },
    topTopClickEvent1() {
      this.topBottomClass = 'top-bottom1'
      this.$refs.swipeRef.swipeTo(1, false)
    },
    topTopClickEvent2() {
      this.topBottomClass = 'top-bottom2'
      this.$refs.swipeRef.swipeTo(2, false)
    },
    topTopClickEvent3() {
      this.topBottomClass = 'top-bottom3'
      this.$refs.swipeRef.swipeTo(3, false)
    },
  }
}
</script>
<style lang="less" scoped>
.background {
  background-color: #ddd;
}
.top {
  background-color: #14b9c8;
  width: 100vw;
  height: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  padding: 11.5vh 0 0;
  .top-top {
    color: #fff;
    display: flex;
    justify-content: space-around;
    font-weight: bold;
  }
  .top-bottom {
    transition: all 0.5s;
    background-color: #fff;
    border-radius: 5vw;
    border: solid 0.4vw #fff;
    width: 5vw;
    margin-top: 0.5vh;
    margin-left: 9.3vw;
  }
  .top-bottom1 {
    transition: all 0.5s;
    background-color: #fff;
    border-radius: 5vw;
    border: solid 0.4vw #fff;
    width: 5vw;
    margin-top: 0.5vh;
    margin-left: 9.3vw;
    transform: translateX(25vw);
  }
  .top-bottom2 {
    transition: all 0.5s;
    background-color: #fff;
    border-radius: 5vw;
    border: solid 0.4vw #fff;
    width: 5vw;
    margin-top: 0.5vh;
    margin-left: 9.3vw;
    transform: translateX(50vw);
  }
  .top-bottom3 {
    transition: all 0.5s;
    background-color: #fff;
    border-radius: 5vw;
    border: solid 0.4vw #fff;
    width: 5vw;
    margin-top: 0.5vh;
    margin-left: 9.3vw;
    transform: translateX(75vw);
  }
}
.top-top-fixed {
  position: fixed;
  width: 100vw;
  top: 3.8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .top-fixed-middle {
    box-shadow: 0 0 1vw #999;
    height: 7vw;
    width: 50vw;
    background-color: #7dd1e8;
    border-radius: 2vw;
    color: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 3.5vw;
    i {
      font-size: 5vw;
      margin: 0 3vw;
    }
  }
  .top-fixed-right {
    position: fixed;
    right: 10vw;
    i {
      font-size: 6vw;
      color: #fff;
    }
  }
}
.my-swipe {
  width: 100vw;
  height: 76vh;
  .my-swipe-item {
    overflow: hidden;
  }
}
</style>