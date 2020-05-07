<template>
  <div class="main"
       @mousedown="mainMousedownEvent" @mousemove="flag && mainMousemoveEvent($event)" @mouseup="mainMouseupEvent"
       @touchstart="mainTouchstartEvent" @touchmove="flag && mainTouchmoveEvent($event)" @touchend="mainTouchendEvent"
  >
    <div class="box">
      <div class="box-img1" @click="imgClickEvent(0)"><img :src="require('../assets/img/tap1.png')" /></div>
      <div class="box-img2" @click="imgClickEvent(1)"><img :src="require('../assets/img/tap2.png')" /></div>
      <div class="box-img3" @click="imgClickEvent(2)"><img :src="require('../assets/img/tap3.png')" /></div>
      <div class="box-img4" @click="imgClickEvent(3)"><img :src="require('../assets/img/tap4.png')" /></div>
      <div class="box-img5" @click="imgClickEvent(4)"><img :src="require('../assets/img/tap5.png')" /></div>
      <div class="box-img6" @click="imgClickEvent(5)"><img :src="require('../assets/img/tap6.png')" /></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      initPositionX: 0,
      rotateY: 0,
      changeImg: 0
    }
  },
  methods: {
    mainMousedownEvent($event) {
      document.getElementsByClassName('box-img' + (this.changeImg + 1))[0].style.opacity = '0.5'
      document.getElementsByClassName('box-img' + (this.changeImg + 1))[0].style.transform = 'rotateY(' + this.changeImg * -60 + 'deg) translateZ(' + 25 + 'vh)'
      this.flag = true
      this.initPositionX = $event.clientX
    },
    mainTouchstartEvent($event) {
      document.getElementsByClassName('box-img' + (this.changeImg + 1))[0].style.opacity = '0.5'
      document.getElementsByClassName('box-img' + (this.changeImg + 1))[0].style.transform = 'rotateY(' + this.changeImg * -60 + 'deg) translateZ(' + 25 + 'vh)'
      this.flag = true
      this.initPositionX = $event.changedTouches[0].clientX
    },
    mainMousemoveEvent($event) {
      let diff = this.getDifferenceX($event.clientX)
      this.setDeg(diff)
    },
    mainTouchmoveEvent($event) {
      let diff = this.getDifferenceX($event.changedTouches[0].clientX)
      this.setDeg(diff)
    },
    mainMouseupEvent($event) {
      this.flag = false
      this.rotateY += this.getDifferenceX($event.clientX) * 3
    },
    mainTouchendEvent($event) {
      this.flag = false
      this.rotateY += this.getDifferenceX($event.changedTouches[0].clientX) * 3
    },
    getDifferenceX(clientX) {
      let diff = (clientX - this.initPositionX) / document.documentElement.clientWidth * 100
      return diff
    },
    setDeg(diff) {
      document.getElementsByClassName('box')[0].style.transform = 'rotateX(-30deg) rotateY(' +  (this.rotateY + diff * 3) + 'deg)'
    },
    imgClickEvent(num, event) {
      document.getElementsByClassName('box-img' + (this.changeImg + 1))[0].style.opacity = '0.5'
      document.getElementsByClassName('box-img' + (this.changeImg + 1))[0].style.transform = 'rotateY(' + this.changeImg * -60 + 'deg) translateZ(' + 25 + 'vh)'
      this.changeImg = num
      let box = document.getElementsByClassName('box')[0]
      box.style.transform = 'rotateX(-30deg) rotateY(' +  (num * 60) + 'deg)'
      this.rotateY = num * 60
      setTimeout(() => {
        document.getElementsByClassName('box')[0].style.transform = 'rotateX(0deg) rotateY(' +  (num * 60) + 'deg)'
      }, 500)
      setTimeout(() => {
        let img = document.getElementsByClassName('box-img' + (num + 1))[0]
        img.style.opacity = '1'
        img.style.transform = 'rotateY(' + num * -60 + 'deg) translateZ(' + 30 + 'vh)'
      }, 1000)
      console.log(event.target)
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  overflow: hidden;
  user-select: none;
  width: 100vw;
  height: 80vh;
  perspective: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  .box {
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    width: 15vh;
    height: 30vh;
    transition: all .5s;
    div {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.8;
      transition: all .5s;
      img {
        -webkit-user-drag: none;
        height: 30vh;
        width: 15vh;
      }
    }
    .box-img1 {
      transform: translateZ(25vh);
    }
    .box-img2 {
      transform: rotateY(-60deg) translateZ(25vh);
    }
    .box-img3 {
      transform: rotateY(-120deg) translateZ(25vh);
    }
    .box-img4 {
      transform: rotateY(-180deg) translateZ(25vh);
    }
    .box-img5 {
      transform: rotateY(-240deg) translateZ(25vh);
    }
    .box-img6 {
      transform: rotateY(-300deg) translateZ(25vh);
    }
  }
}
</style>
