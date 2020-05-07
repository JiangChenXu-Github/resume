<template>
  <div class="main">
    <div class="container"
         @mousedown="mousedownEvent" @mousemove="flag && mousemoveEvent($event)" @mouseup="mouseupEvent"
         @touchstart="touchstartEvent" @touchmove="flag && touchmoveEvent($event)" @touchend="touchendEvent">
      <div class="page1">
        <div id="jsi-flying-fish-container" class="background"></div>
        <div class="content">
          <div class="title">
            <div class="title-top"><span>你好，这是我的个人简历</span></div>
            <div class="title-bottom">
              <div class="title-bottom-left"><a href="#resume#about">关于我</a></div>
              <div class="title-bottom-right"><a href="#resume#production">作品</a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="page2" id="resume#about">
        <div class="title">
          <span>关于我</span>
        </div>
        <div class="content">
          <span>
            <p>. 我叫江晨旭，24岁，坐标重庆，目标是成为一名有价值的前端工程师</p>
            <p>. 我并不是计算机专业，毕业之后在一直在工作的闲余时间摸索计算机相关技术，自学前端技术</p>
            <p>. 没有互联网方面的工作经验，希望能有一个参与到实际工作的机会</p>
            <p>. 熟悉的的语言是Javascript以及Java语言</p>
            <p>. 此简历<a href="#resume">项目源码</a></p>
          </span>
        </div>
      </div>
      <div class="page4">
        <div class="title">求职意向</div>
        <div class="content">
          <div class="content-item"><i class="iconfont icon-html"></i><span class="content-item-middle">网页制作</span><sapn class="content-item-bottom"><p>响应式页面，简单不冗余代码</p><p>css3流畅动画效果，兼容不同浏览器</p></sapn></div>
          <div class="content-item"><i class="iconfont icon-javascript"></i><span class="content-item-middle">前端功能</span><sapn class="content-item-bottom"><p>用JS完成常见的前端功能特效</p><p>与后台数据进行交互</p></sapn></div>
        </div>
      </div>
      <div class="page5" id="resume#production">
        <div class="title">作品</div>
        <div class="content">
          <div class="content-1">
            <div class="content-information">
              <div class="content-information-left">
                <span>《仿taptap页面》</span>
              </div>
              <div class="content-information-right">
                <span @click="linkClickEvent">链接(移动端)</span>
              </div>
            </div>
            <my-tap class="content-tap"></my-tap>
          </div>
        </div>
      </div>
      <div class="page6">
        <div class="title">我的经历</div>
        <div class="content">
          <div class="content-top">
            <div class="content-dot"></div>
            <div class="content-text"><span>重庆大学本科毕业</span></div>
            <div class="content-dot"></div>
            <div class="content-text"><span>工作 + 自学计算机</span></div>
            <div class="content-dot"></div>
          </div>
          <div class="content-bottom">
            <div class="content-time">2014.9</div>
            <div class="content-time">2018.6</div>
            <div class="content-time">至今</div>
          </div>
        </div>
      </div>
      <div class="page7">
        <div class="title">联系我</div>
        <div class="content">
          <span>wechat && phone：13629787279</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      initClientY: 0,
      translateY: 0
    }
  },
  methods: {
    linkClickEvent() {
      this.$router.push('/homepage')
    },
    mousedownEvent($event) {
      this.flag = true
      this.initClientY = $event.clientY
      let container = document.getElementsByClassName('container')[0]
      container.style.transition = ''
    },
    touchstartEvent($event) {
      this.flag = true
      this.initClientY = $event.changedTouches[0].clientY
      let container = document.getElementsByClassName('container')[0]
      container.style.transition = ''
    },
    mousemoveEvent($event) {
      let diff = ($event.clientY - this.initClientY) / document.documentElement.clientHeight * 100
      let container = document.getElementsByClassName('container')[0]
      let position = diff + this.translateY
      const max = 0
      const min = -500
      if(position < max && position > min) {
        container.style.transform = 'translateY(' + position + 'vh)'
      }else {
        this.initClientY = $event.clientY
      }
    },
    touchmoveEvent($event) {
      let diff = ($event.changedTouches[0].clientY - this.initClientY) / document.documentElement.clientHeight * 100
      let container = document.getElementsByClassName('container')[0]
      let position = diff + this.translateY
      const max = 0
      const min = -500
      if(position < max && position > min) {
        container.style.transform = 'translateY(' + position + 'vh)'
      }else {
        this.initClientY = $event.changedTouches[0].clientY
      }
    },
    mouseupEvent($event) {
      let diff = ($event.clientY - this.initClientY) / document.documentElement.clientHeight * 100
      this.translateY = Math.round((diff + this.translateY) / 100) * 100
      let container = document.getElementsByClassName('container')[0]
      container.style.transition = 'all .5s'
      setTimeout(() => {
        container.style.transition = ''
      }, 500)
      container.style.transform = 'translateY(' + this.translateY + 'vh)'
      this.flag = false
    },
    touchendEvent($event) {
      let diff = ($event.changedTouches[0].clientY - this.initClientY) / document.documentElement.clientHeight * 100
      this.translateY = Math.round((diff + this.translateY) / 100) * 100
      let container = document.getElementsByClassName('container')[0]
      container.style.transition = 'all .5s'
      setTimeout(() => {
        container.style.transition = ''
      }, 500)
      container.style.transform = 'translateY(' + this.translateY + 'vh)'
      this.flag = false
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
  user-select: none;
  overflow: hidden;
  .container {
    .page1 {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      .background {
        height: 100vh;
        width: 100vw;
        opacity: 0.8;
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 50vh;
        box-sizing: border-box;
        .title {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          color: #606975;
          user-select: none;
          font-family: Serif;
          font-weight: bold;
          @media screen and (min-width: 1000px) {
            .title-top {
              font-size: 50px;
              margin: 35px 0;
              transition: all .8s;
            }
            .title-bottom {
              display: flex;
              width: 100vw;
              justify-content: space-around;
              div {
                font-size: 30px;
                border-left: solid #606975 3px;
                a {
                  transition: all .8s;
                  padding: 0 10px 0 7px;
                  color: #606975;
                }
                a:hover {
                  background-color: #606975;
                  color: white;
                }
              }
            }
          }
          @media screen and (max-width: 1000px) {
            .title-top {
              font-size: 8vw;
              margin: 8vw 0;
              transition: all .8s;
            }
            .title-bottom {
              display: flex;
              width: 100vw;
              justify-content: space-around;
              div {
                font-size: 5vw;
                border-left: solid #606975 0.5vw;
                line-height: 7vw;
                transition: all .8s;
                span {
                  padding: 0 1vw 0 0.7vw;
                }
              }
              div:hover {
                background-color: #606975;
                color: white;
              }
            }
          }
        }
      }
    }
    .page2 {
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      padding: 150px 100px;
      transition: all 0.8s;
      @media screen and (max-width: 1000px) {
        padding: 10vh 10vw;
      }
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: #606975;
      font-family: Serif;
      font-weight: bold;
      .title {
        transition: all 0.8s;
        font-size: 50px;
        @media screen and (max-width: 1000px) {
          font-size: 10vw;
        }
      }
      .content {
        transition: all 0.8s;
        font-size: 20px;
        @media screen and (max-width: 1000px) {
          font-size: 5vw;
        }
        span {
          P {
            transition: all 0.8s;
            margin: 20px 0;
            @media screen and (max-width: 1000px) {
              margin: 3vh 0;
            }
            a {
              color: #606975;
              border-bottom: solid 2px #606975;
              transition: all .8s;
              @media screen and (max-width: 1000px) {
                border-bottom: solid 0.5vw #606975;
              }
            }
            a:hover {
              color: #ffffff;
              background-color: #606975;
            }
          }
        }
      }
    }
    .page4 {
      width: 100vw;
      height: 100vh;
      color: #fff;
      background-color: #606975;
      font-family: Serif;
      font-weight: bold;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 50px;
        @media screen and (max-width: 1000px) {
          font-size: 10vw;
        }
      }
      .content {
        font-size: 20px;
        @media screen and (max-width: 1000px) {
          font-size: 5vw;
          flex-direction: column;
        }
        display: flex;
        justify-content: space-between;
        .content-item {
          padding: 0 150px;
          @media screen and (max-width: 1000px) {
            padding: 3vh 0;
            border-bottom: solid #ddd 0.1vw;
          }
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          i {
            font-size: 50px;
            padding: 30px 0;
            @media screen and (max-width: 1000px) {
              padding: 2vh 0;
              font-size: 8vw;
            }
          }
          .content-item-middle {
            border: solid 1px #606975;
            padding: 10px;
            @media screen and (max-width: 1000px) {
              padding: 1vw;
              border: solid 0.1vw #606975;
            }
          }
          .content-item-bottom {
            text-align: center;
            padding: 30px 0;
            @media screen and (max-width: 1000px) {
              padding: 2vh 0;
            }
          }
        }
      }
    }
    .page5 {
      user-select: none;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: #606975;
      font-family: Serif;
      font-weight: bold;
      overflow-x: hidden;
      .title {
        font-size: 50px;
        @media screen and (max-width: 1000px) {
          font-size: 10vw;
        }
      }
      .content {
        font-size: 20px;
        display: flex;
        justify-content: start;
        .content-1 {
          font-size: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .content-information {
            width: 300px;
            @media screen and (max-width: 1000px) {
              width: 80vw;
            }
            display: flex;
            justify-content: space-between;
            align-items: center;
            .content-information-right {
              border-bottom: solid 2px #606975;
              @media screen and (max-width: 1000px) {
                border-bottom: solid 0.5vw #606975;
              }
              transition: all .5s;
            }
            .content-information-right:hover {
              color: #fff;
              background-color: #606975;
            }
          }
        }
      }
    }
    .page6 {
      width: 100vw;
      height: 100vh;
      background-color: #606975;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      font-weight: bold;
      font-family: Serif;
      color: white;
      .title {
        font-size: 50px;
        @media screen and (max-width: 1000px) {
          font-size: 10vw;
        }
      }
      .content {
        font-size: 20px;
        @media screen and (max-width: 1000px) {
          font-size: 4vw;
        }
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .content-top {
          display: flex;
          justify-content: start;
          align-items: center;
          .content-dot {
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
            @media screen and (max-width: 1000px) {
              width: 2vw;
              height: 2vw;
            }
          }
          .content-text {
            padding: 0 20px 10px 20px;
            transform: translateY(-15px);
            border-bottom: solid 1px #fff;
            @media screen and (max-width: 1000px) {
              padding: 0 3vw 3vw 3vw;
              transform: translateY(-3.5vw);
            }
          }
        }
        .content-bottom {
          @media screen and (max-width: 1000px) {
            width: 90vw;
          }
          width: 500px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
    .page7 {
      width: 100vw;
      height: 100vh;
      color: #606975;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .title {
        @media screen and (max-width: 1000px) {
          font-size: 10vw;
        }
        font-size: 50px;
      }
      .content {
        @media screen and (max-width: 1000px) {
          font-size: 5vw;
        }
        font-size: 20px;
      }
    }
  }
}
</style>
