<template>
  <div>

    <swiper loop auto :list="swiperList" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>

    <div id="footer">
      <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
        <swiper-item v-for="(item,index) in scrollingMessageList" :key="index"><p>{{item.sos_sm_Content}}</p></swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import { XHeader, TransferDom ,Swiper,SwiperItem} from 'vux'
  export default{
    directives: {
      TransferDom
    },
    name: '',
    data(){
      return {
        demo06_index:0,
      }
    },
    components: {
      XHeader,
      Swiper,
      SwiperItem
    },
    computed: mapGetters([
      'swiperList',
      'scrollingMessageList'
    ]),
    created(){
      //获取轮播图和滚动消息
      this.initSwiperList()
    },
    methods: {
      //点击图片
      demo06_onIndexChange(){},
      //获取轮播图和滚动消息
      initSwiperList(){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
        }
        this.$store.dispatch('initSwiperList',options)
      }
    },

  }
</script>
<style scoped type="text/less">
  .swiper-demo-img img {
    width: 100%;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
    color: #f60;
  }
</style>
