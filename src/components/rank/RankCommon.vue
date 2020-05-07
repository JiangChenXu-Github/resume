<template>
  <div class="main">
    <div class="item" v-for="(item, index) in itemList" :key="index">
      <div class="item-left"><span>{{item}}</span></div>
      <div class="item-middle">
        <div class="item-middle-left"><img src="https://s1.ax1x.com/2020/04/24/JByvIs.png" /></div>
        <div class="item-middle-right">
          <div class="item-middle-right-top">
            <span class="item-middle-right-top-left">烟雨江湖</span>
            <span class="item-middle-right-top-right">CN</span>
          </div>
          <div class="item-middle-right-bottom">
            <i class="iconfont icon-1" />
            <span class="item-middle-right-bottom-left">8.0</span>
            <span class="item-middle-right-bottom-right">全新活动剧情【生于】...</span>
          </div>
        </div>
      </div>
      <div class="item-right">
        <span>下载</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  }
}
</script>
<style lang="less" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
  .item-left {
    font-size: 4vw;
    color: #888;
  }
  .item-middle {
    width: 70vw;
    display: flex;
    justify-content: space-around;
    padding: 0 2vw;
    .item-middle-left {
      padding: 3vw 0;
      img {
        width: 15vw;
        height: auto;
      }
    }
    .item-middle-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5vw 3vw 5vw 0;
      border-bottom: solid #ddd 0.1vw;
      .item-middle-right-top {
        display: flex;
        justify-content: start;
        align-items: center;
        .item-middle-right-top-left {
          padding-right: 2vw;
          font-size: 5vw;
        }
        .item-middle-right-top-right {
          border: 0.2vw solid #000;
          border-radius: 1vw;
          font-size: 3vw;
          padding: 0.5vw 1vw;
        }
      }
      .item-middle-right-bottom {
        i {
          font-size: 4vw;
          color: #14b9c8;
          margin-right: 1vw;
        }
        .item-middle-right-bottom-left {
          font-size: 4vw;
          color: #14b9c8;
          margin-right: 2vw;
        }
        .item-middle-right-bottom-right {
          font-size: 3vw;
        }
      }
    }
  }
  .item-right {
    font-size: 3vw;
    color: #fff;
    background-color: #14b9c8;
    padding: 2vw 4vw;
    font-weight: bold;
    border-radius: 2vw;
  }
}
</style>