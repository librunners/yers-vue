<template>
  <div class="detail-container">
    <div class="video-player">
      <video-player
        class="vjs-custom-skin"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied"
      ></video-player>
    </div>
    <div class="tab">
      <tab :line-width="4" active-color="#FF4029" v-model="currentIndex">
        <tab-item
          :selected="selectText === item"
          class="vux-center"
          v-for="(item, index) in typeList"
          :key="index"
          @on-item-click="typeCharge"
        >{{item}}</tab-item>
      </tab>
      <div class="content">
        <div v-show="currentIndex==0">
          <h1>详情</h1>
        </div>
        <div v-show="currentIndex==1">
          <h1>目录</h1>
        </div>
        <div v-show="currentIndex==2">
          <h1>评论</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import '../libs/video/css/custom-theme.css'
import { videoPlayer } from 'vue-video-player'
import { Tab, TabItem } from 'vux'

export default {
  data () {
    return {
      typeList: ['详情', '目录', '评论'],
      selectText: '详情',
      currentIndex: 0,
      playerOptions: {
        muted: false,
        language: 'zh-cn',
        aspectRatio: '16:9',
        sources: [{
          type: 'video/mp4',
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        }],
        poster: '/src/assets/img/ban5.jpg',
        width: document.documentElement.clientWidth
      }
    }
  },
  components: {
    videoPlayer, Tab, TabItem
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    typeCharge () {
    },
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    },

    onPlayerLoadeddata (player) {

    },
    onPlayerCanplay (player) {

    },
    onPlayerCanplaythrough () {

    },
    onPlayerPlaying () {

    },
    onPlayerTimeupdate () {

    },
    onPlayerWaiting () {

    }
  }
}
</script>


<style lang="scss" scoped>
.detail-container {
  .tab {
    .content {
      padding: 5px;
    }
  }
}
</style>
