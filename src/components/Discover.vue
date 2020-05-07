<template>
  <div>
    <div class="top">
      <div class="top-middle"><span>JapJap</span></div>
      <div class="top-right">
        <div class="top-right-left"><i class="iconfont icon-tongzhi" /></div>
        <div class="top-right-right"><i class="iconfont icon-sousuo" /></div>
      </div>
    </div>
    <div class="middle-shadow">
      <div class="middle">
        <van-swipe class="middle-line1" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in initData.swipes" :key="index">
            <div class="middle-line1-item">
              <img :src="item.coverUrl" />
              <div class="middle-line1-item-rightbottom">
                <i class="iconfont icon-jurassic_bbs"></i>
                <span>{{item.discussNumber}}</span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
        <div class="middle-line2">
          <div class="middle-line2-item" v-for="(item,index) in initData.labels" :key="index"><span>{{item}}</span></div>
          <div class="middle-line2-itemfill"></div>
        </div>
        <div class="middle-line3" v-for="(item, index) in initData.labelLines" :key="index">
          <div class="middle-line3-top">
            <div class="middle-line3-top-left"><span>{{item.title}}</span></div>
            <div class="middle-line3-top-right"><span>查看更多</span></div>
          </div>
          <div class="middle-line3-bottom">
            <div class="middle-line3-bottom-item" v-for="(item2, index) in item.labelContents" :key="index">
              <div class="middle-line3-bottom-item-top"><img :src="item2.coverUrl" /></div>
              <div class="middle-line3-bottom-item-bottom"><span>{{item2.gameNameOrDescription}}</span></div>
            </div>
            <div class="middle-line3-bottom-itemfill"></div>
          </div>
        </div>
        <div class="middle-line4"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      initData: {}
    }
  },
  methods: {
    async init() {
      const res = (await this.$http.get('game/gameInformation2')).data
      if(res.code === 200) {
        this.initData = res.data
        console.log('初始化 发现/游戏数据2 数据成功')
        console.log(res.data)
      }else {
        console.log('初始化 发现/游戏数据2 数据失败')
      }
    }
  },
  mounted() {
    this.init()
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
.middle-shadow {
  background-color: #fff;
  width: 100vw;
  height: 92vh;
  box-sizing: border-box;
  padding-top: 19.5vw;
  overflow-x: hidden;
  overflow-y: scroll;
  .middle {
    overflow-x: hidden;
    .middle-line1 {
      z-index: 0;
      width: 100vw;
      .middle-line1-item {
        width: 100vw;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        img {
          width: auto;
          height: 20vh;
        }
        .middle-line1-item-rightbottom {
          position: absolute;
          right:2vw;
          bottom: 1.5vh;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          i {
            font-size: 4vw;
            margin-right: 1vw;
            text-shadow: 0 0 1vw #000;
          }
          span {
            font-size: 2.5vw;
            text-shadow: 0 0 1vw #000;
          }
        }
      }
    }
    .middle-line2 {
      display: flex;
      justify-content: start;
      height: 11vh;
      width: 100vw;
      overflow-x: scroll;
      box-sizing: border-box;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
      .middle-line2-itemfill {
        border: 0.1vw solid #fff;
      }
      .middle-line2-item {
        background-color: #14b9c8;
        height: 5vh;
        line-height: 5vh;
        margin: 2.5vh 2.6vw;
        flex: 0 0 auto;
        padding: 0 4vw;
        border-radius: 5vw;
        span {
          color: #fff;
          font-size: 4vw;
        }
      }
    }
    .middle-line2::-webkit-scrollbar {
      display: none;
    }
    .middle-line3 {
      margin: 0 0 3vh 0;
      .middle-line3-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3vh;
        padding: 0 3vw;
        .middle-line3-top-left {
          font-weight: bold;
          font-size: 5vw;
        }
        .middle-line3-top-right {
          font-size: 3.5vw;
          color: #14b9c8;
        }
      }
      .middle-line3-bottom {
        display: flex;
        justify-content: start;
        overflow-x: scroll;
        overflow-y: hidden;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        .middle-line3-bottom-itemfill {
          border: 0.1vw solid #fff;
        }
        .middle-line3-bottom-item {
          margin: 0 3vw;
          .middle-line3-bottom-item-top {
            img {
              width: 21vw;
              height: auto;
              border-radius: 5vw;
            }
          }
          .middle-line3-bottom-item-bottom {
            margin-top: 1vh;
            font-size: 3vw;
          }
        }
      }
      .middle-line3-bottom::-webkit-scrollbar {
        display: none;
      }
    }
    .middle-line4 {
      border-top: 0.1vw solid #fff;
    }
  }
}
</style>