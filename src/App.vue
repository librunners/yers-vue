<template>
  <div id="app">
    <view-box ref="viewBox" body-padding-bottom="55px">
      <!-- <x-header body-padding-top="46px" 
        style="width:100%;position:fixed;background-color: #0078d7;left:0;top:0;z-index:100;"
        :left-options="{showBack: false}"
      >优而思校长在线</x-header>-->
      <router-view></router-view>
      <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" tag="a" class="mui-tab-item" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/my" tag="a" class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">我的</span>
        </router-link>
      </nav>
    </view-box>
  </div>
</template>

<script>
import { XHeader, ViewBox } from 'vux'

export default {
  components: {
    XHeader,
    ViewBox
  }
}
</script>

<style lang="less" scope>
@import "~vux/src/styles/reset.less";

* {
  box-sizing: unset;
}
body {
  background-color: #fbf9fe;
}
</style>
