<template>
    <div>
        <div class="background"><img :src="initData.firstData.coverImgUrl" /></div>
        <div class="content">
            <div class="content-first">
                <div class="content-first-top"><span>{{initData.firstData.gameName}}</span></div>
                <div class="content-first-middle"><span>{{initData.firstData.brief}}</span></div>
                <div class="content-first-bottom">
                    <i class="iconfont icon-1" /><span class="content-first-bottom-left">{{initData.firstData.score}}</span><span class="content-first-bottom-middle">|</span><span class="content-first-bottom-right">{{initData.firstData.numberOfScorePerson}}人评分</span>
                </div>
            </div>
            <div class="content-else">
                <div class="content-else-item" v-for="(item, index) in initData.elseData" :key="index">
                    <div class="content-else-item-top">
                        <div class="content-else-item-top-left">
                            <div class="content-else-item-top-left-left"><img :src="item.avatarImgUrl" /></div>
                            <div class="content-else-item-top-left-right">
                                <div class="content-else-item-top-left-right-top">
                                    <span class="content-else-item-top-left-right-top-gamename" v-if="item.gameName.length < 12">{{item.gameName}}</span>
                                    <span class="content-else-item-top-left-right-top-gamename" v-else>{{item.gameName.slice(0, 10)}} ...</span>
                                    <span v-show="item.label !== ''" class="content-else-item-top-left-right-top-label">{{item.label}}</span>
                                </div>
                                <div class="content-else-item-top-left-right-bottom"><span>{{item.pushBy}}</span><span v-show="item.pushBy === '来自广告'">AD</span></div>
                            </div>
                        </div>
                        <div class="content-else-item-top-right">
                            <div class="content-else-item-top-right-top"><i class="iconfont icon-1" /><span>{{item.score}}</span></div>
                            <div class="content-else-item-top-right-bottom"><span>{{item.numberOfScorePerson}}人评分</span></div>
                        </div>
                    </div>
                    <div class="content-else-item-middle"><img :src="item.coverImgUrl" /></div>
                    <div class="content-else-item-bottom"><span>{{item.brief}}</span></div>
                </div>
            </div>
            <div class="content-fill"><span>没有更多了</span></div>
        </div>
        <div class="top">
            <div class="top-middle">
                <div class="top-middle-top">
                    <div><span>推荐</span></div>
                    <div><span>视频</span></div>
                </div>
                <div class="top-middle-bottom"></div>
            </div>
            <div class="top-right">
                <div><i class="iconfont icon-tongzhi" /></div>
                <div><i class="iconfont icon-sousuo" /></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            initData: {
                firstData: {
                    avatarImgUrl: '',
                    brief: '',
                    coverImgUrl: '',
                    gameName: '',
                    label: '',
                    numberOfScorePerson: 0,
                    pushBy: '',
                    score: 0
                },
                elseData: []
            }
        }
    },
    methods: {
        async init() {
            const res = (await this.$http.get('/game/gameInformation1')).data
            if(res.code === 200) {
                this.initData.firstData = res.data[0]
                res.data.forEach((item, index) => {
                    if(index !== 0) {
                        this.initData.elseData[index - 1] = item
                    }
                })
            }
        }
    },
    mounted() {
        this.init()
    }
}
</script>
<style lang="less" scoped>
.background {
    display: flex;
    overflow: hidden;
    justify-content: space-around;
    img {
        height: 60vh;
    }
}
.content {
    position: fixed;
    overflow-X: hidden;
    overflow-Y: scroll;
    top: 0;
    width: 100vw;
    height: 92vh;
    .content-first {
        width: 100vw;
        color: #fff;
        box-sizing: border-box;
        height: 60vh;
        padding-top: 45vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-image: linear-gradient(to top, rgba(10, 10, 10, 1), rgba(10, 10, 10, 0));
        box-shadow: 0 2vw 2vw 2vw #000;
        .content-first-top {
            font-size: 7vw;
        }
        .content-first-middle {
            color: #bbb;
            font-size: 4vw;
        }
        .content-first-bottom {
            .content-first-bottom-left {
                padding-left: 1.5vw;
            }
            .content-first-bottom-middle {
                padding: 0 2vw;
            }
            .content-first-bottom-right {
                color: #bbb;
                font-size: 3vw;
            }
        }
    }
    .content-else {
        background-color: #fff;
        border-top-left-radius: 3vw;
        border-top-right-radius: 3vw;
        padding: 0vw 5vw;
        display: flex;
        flex-direction: column;
        justify-content: start;
        .content-else-item {
            display: flex;
            flex-direction: column;
            padding: 5vw 0;
            box-sizing: border-box;
            border-bottom: 0.2vw solid #ddd;
            .content-else-item-top { //上
                display: flex;
                justify-content: space-between;
                align-items: stretch;
                .content-else-item-top-left { //上左
                    display: flex;
                    justify-content: space-between;
                    .content-else-item-top-left-left {
                        margin-right: 3vw;
                        img {
                            width: 13vw;
                            height: auto;
                        }
                    }
                    .content-else-item-top-left-right {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: 1.5vw 0;
                        .content-else-item-top-left-right-top {
                            white-space: nowrap;
                            display: flex;
                            align-items: center;
                            .content-else-item-top-left-right-top-gamename {
                            }
                            .content-else-item-top-left-right-top-label {
                                margin-left: 1vw;
                                font-size: 3vw;
                                padding: 0.5vw;
                                border-radius: 0.5vw;
                                border: 0.2vw solid #888888;
                            }
                        }
                        .content-else-item-top-left-right-bottom {
                            font-size: 4vw;
                            color: #999;
                            white-space: nowrap;
                        }
                    }
                }
                .content-else-item-top-right { //上右
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 1.5vw 0;
                    color: #14b9c8;
                    .content-else-item-top-right-top {
                        white-space: nowrap;
                    }
                    .content-else-item-top-right-bottom {
                        white-space: nowrap;
                        font-size: 3vw;
                    }
                }
            }
            .content-else-item-middle { //中
                margin-top: 3vw;
                img {
                    border-radius: 2vw;
                    width: 90vw;
                    height: auto;
                }
            }
            .content-else-item-bottom { //下
                margin-top: 2vw;
                font-size: 4vw;
            }
        }
    }
    .content-fill {
        background-color: #fff;
        height: 30vh;
        width: 100vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #888;
        font-size: 4vw;
    }
}
.top {
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    font-size: 5vw;
    background-color: #14b9c8;
    padding-bottom: 1.5vw;
    height: 18vw;
    color: #fff;
    .top-middle {
        display: flex;
        flex-direction: column;
        width: 25vw;
        .top-middle-top {
            margin: 8vw 0 3vw 0;
            display: flex;
            justify-content: space-between;
        }
        .top-middle-bottom {
            background-color: #fff;
            width: 7vw;
            border: 0.5vw solid #fff;
            border-radius: 1vw;
        }
    }
    .top-right {
        position: fixed;
        top: 7vw;
        right: 4vw;
        display: flex;
        justify-content: space-between;
        width: 17vw;
        div {
            i {
                font-size: 6vw;
            }
        }
    }
}
</style>