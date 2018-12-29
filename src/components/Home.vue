<template>
  <div id="home-container">
    <swiper :list="imglist" :auto="true" height="200px"></swiper>
    <tab :line-width="4" active-color="#FF4029" v-model="index">
      <tab-item
        :selected="selectText === item"
        class="vux-center"
        v-for="(item, index) in typeList"
        :key="index"
        @on-item-click="typeCharge"
      >{{item}}</tab-item>
    </tab>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <a
          href="javascript:void(0);"
          class="weui-media-box weui-media-box_appmsg"
          v-for="(item,index) in panelList"
          :key="index"
        >
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" :src="item.src" alt>
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">{{item.title}}</h4>
            <p class="weui-media-box__desc">{{item.desc}}</p>
            <p class="weui-media-box_detail">
              <span class="mui-icon mui-icon-person">冯新华</span>
              <span class="mui-icon mui-icon-eye">12.2万</span>
              <span class="price">￥199</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Tab, TabItem } from 'vux'

export default {
  components: {
    Swiper, Tab, TabItem
  },
  created () {
    this.panelList.forEach(item => {
      item.titlebak = item.title
    })
  },
  methods: {
    typeCharge () {
      this.panelList.forEach(item => {
        item.title = item.titlebak + this.typeList[this.index]
      })
      console.log(this.index + ' ===' + this.typeList[this.index])
    },
    typeChargeBySwiper (currentIndex) {
      console.log(currentIndex + ' ===' + this.typeList[currentIndex])
    },
    getHeight (height) {
      console.log(height)
      console.log(this.$refs.panelHeight.height)
      this.height = height + 'px'
    }
  },
  data () {
    return {
      height: '',
      type: '1',
      selectText: '全部',
      index: 0,
      imglist: imglist,
      typeList: typeList,
      panelList: panelList,
      footer: {
        title: '加载更多',
        url: '#'
      }
    }
  }
}

const typeList = ['全部', '美食', '电影', '酒店', '外卖']

const panelList = [{
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上免费观看〡欢迎试看线上视频视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上免费观看〡欢迎试看线上视频视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上免费观看〡欢迎试看线上视频视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上免费观看〡欢迎试看线上视频视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上免费观看〡欢迎试看线上视频视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上免费观看〡欢迎试看线上视频视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上免费观看〡欢迎试看线上视频视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}, {
  src: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc6bf256edfe9925d40c6f5004a95ee4/d53f8794a4c27d1e3459d15716d5ad6eddc43822.jpg',
  title: '免费观看〡欢迎试看线上视频',
  desc: '员工管理、团队打造、薪酬管理、员工管理、团队打造、薪酬管理'
}]

const imglist = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]
</script>


<style lang="less">
@import "~vux/src/styles/weui/weui.less";

body {
  background-color: #fbf9fe;
}
</style>

<style lang="scss">
#home-container {
  .weui-media-box__title {
    margin-bottom: 10px;
  }

  .weui-media-box_detail {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;

    .mui-icon {
      font-size: 14px;
    }

    span {
      height: 20px;
      line-height: 20px;
    }

    .price {
      color: red;
      font-weight: bold;
    }
  }

  .weui-media-box__hd {
    width: 74px;
    height: 74px;
    line-height: 74px;
    text-align: center;

    img {
      width: 74px;
      height: 74px;
    }
  }
  .weui-panel {
    margin-top: 5px;
  }
}
</style>
