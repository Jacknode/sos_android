<template>
  <div id="wrap">
    <x-header style="position: fixed; top: 0;
left: 0; z-index: 1;width: 100%; height: 44px;">
      <span>紧急救助</span>
      <x-icon slot="overwrite-left" type="navicon" size="35"
              style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>

    <div v-transfer-dom>
      <popup v-model="show8" position="left" width="80%">
        <div class="position-horizontal-demo">
          <div class="titleBox">
            <img :src="userInfo.sm_ui_HeadImage"
                 alt="" @click="goPersonalCenter">
            <strong @click="goPersonalCenter">{{userInfo.sm_ui_Name}}</strong>
            <span>签到</span>
          </div>
          <ul class="serviceList">
            <li class="alarmRecord clearfix">
              <i></i>
              <strong>报警记录</strong>
            </li>
            <li class="emergencyContact clearfix">
              <i></i>
              <strong>紧急联系人</strong>
            </li>
            <li class="myGuardian clearfix">
              <i></i>
              <strong>我守护的人</strong>
            </li>
            <li class="userFeedback1 clearfix">
              <i></i>
              <strong>用户反馈</strong>
            </li>
            <li class="recommendedFriends clearfix">
              <i></i>
              <strong>推荐给朋友</strong>
            </li>
            <li class="ewmShare clearfix">
              <i></i>
              <strong>二维码分享</strong>
            </li>
            <li class="checkUpdate clearfix">
              <i></i>
              <strong>检查更新</strong>
            </li>
            <li class="setting clearfix" @click="goSetting">
              <i></i>
              <strong>设置</strong>
            </li>
            <li class="loginOut">
              <span @click="loginOut">退出登录</span>
            </li>
          </ul>
        </div>
      </popup>
    </div>


    <section>
      <swiper loop auto :list="swiperList" :index="swiperIndex" @on-index-change="demo06_onIndexChange"></swiper>
      <div id="footer">
        <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item v-for="(item,index) in scrollingMessageList" :key="index"><p>{{item.sos_sm_Content}}</p>
          </swiper-item>
        </swiper>
      </div>
      <div class="sosWrap">
        <div class="sosBox"></div>
        <ul class="sosList">
          <li class="userLogin" @click="goHelpCenter">
            <div>
              <i></i>
              <span>帮助中心</span>
            </div>
          </li>
          <li class="callThePolice">
            <div>
              <i></i>
              <span>我要报警</span>
            </div>
          </li>
          <li class="policeRecord" @click="goAlarmRecord">
            <div>
              <i></i>
              <span>报警记录</span>
            </div>
          </li>
          <li class="usershare" @click="goUserShare">
            <div>
              <i></i>
              <span>用户分享</span>
            </div>
          </li>
          <li class="userFeedback" @click="goUserFeedback">
            <div>
              <i></i>
              <span>用户反馈</span>
            </div>
          </li>
          <li class="updatePassword">
            <div>
              <i></i>
              <span>修改密码</span>
            </div>
          </li>
        </ul>
      </div>
    </section>




  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {XHeader, TransferDom, Swiper, SwiperItem, Popup} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    name: '',
    data() {
      return {
        swiperIndex: 0,
        showToUpdate: true,
        show8: false,
        isShowNav: false,
        drawerVisibility: false
      }
    },
    components: {
      XHeader,
      Swiper,
      SwiperItem,
      Popup
    },
    computed: mapGetters([
      'swiperList',
      'scrollingMessageList',
      'userInfo'
    ]),
    created() {
      //获取轮播图和滚动消息
      this.initSwiperList()
    },
    methods: {
      //点击图片
      demo06_onIndexChange() {
      },
      //获取轮播图和滚动消息
      initSwiperList() {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
        }
        this.$store.dispatch('initSwiperList', options)
      },
      //设置
      goSetting() {
        this.$router.push({name: 'SettingPage'})
      },
      //登录
      goHelpCenter() {
        this.$router.push({name: 'HelpCenter'})
      },
      //个人信息
      goPersonalCenter() {
        this.$router.push({name: 'PersonalCenter'})
      },
      //报警记录
      goAlarmRecord(){
        this.$router.push({name: 'AlarmRecord'})
      },
      //退出登录
      loginOut() {
        this.$store.commit('setUserInfo', {})
        localStorage.removeItem('userInfo')
       setTimeout(()=>{
         window.location.reload()
       },100)
      },
      //用户分享
      goUserShare(){
        this.$router.push({name: 'EWMShare'})
      },
      //用户反馈
      goUserFeedback(){
        this.$router.push({name: 'UserFeedback'})
      }
    },
    mounted() {
      let s = document.querySelector('.vux-header-left');
      s.onclick = () => {
        this.show8 = true;
      }
    }

  }
</script>
<style scoped lang="less" type="text/less">
  @import '~vux/src/styles/reset.less';

  @rem: 20rem;

  #wrap {
    overflow: hidden;
  }

  ul {
    list-style: none;
  }

  .swiper-demo-img img {
    width: 100%;
  }

  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }

  .text-scroll {
    height: 50px;
    padding-top: 10px;
  }

  .text-scroll p {
    font-size: 1rem;
    text-align: center;
    line-height: 30px;
    color: #f60;
  }

  section {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
  }

  .sosWrap {
    width: 20.4rem;
    height: 20.4rem;
    margin: 3rem auto 0;
    position: relative;
  }

  .sosList {
    position: relative;
    top: 7.26666rem;
    left: 8.3333rem;
  }

  .sosList > li {
    font: .9rem/2 "微软雅黑";
    color: #666;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }

  .userLogin i {
    background: url("../assets/img/user.png") no-repeat;
  }

  .userLogin {
    transform: rotate(-30deg) translateY(-8rem);
  }

  .userLogin > div {
    transform: rotate(30deg);
  }

  .callThePolice i {
    background: url("../assets/img/message.png") no-repeat;
  }

  .callThePolice {
    transform: rotate(30deg) translateY(-8rem);
  }

  .callThePolice > div {
    transform: rotate(-30deg);
  }

  .policeRecord i {
    background: url("../assets/img/alarm.png") no-repeat;

  }

  .policeRecord {
    transform: rotate(90deg) translateY(-8rem);
  }

  .policeRecord > div {
    transform: rotate(-90deg);
  }

  .usershare i {
    background: url("../assets/img/ewm.png") no-repeat;

  }

  .usershare {
    transform: rotate(150deg) translateY(-8rem);
  }

  .usershare > div {
    transform: rotate(-150deg);
  }

  .userFeedback i {
    background: url("../assets/img/cust.png") no-repeat;
  }

  .userFeedback {
    transform: rotate(210deg) translateY(-8rem);
  }

  .userFeedback > div {
    transform: rotate(-210deg);
  }

  .updatePassword i {
    background: url("../assets/img/password.png") no-repeat;
  }

  .updatePassword {
    transform: rotate(270deg) translateY(-8rem);
  }

  .updatePassword > div {
    transform: rotate(-270deg);
  }

  .sosList > li i {
    display: block;
    width: 4rem;
    height: 4rem;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .sosBox {
    width: 70%;
    height: 70%;
    background: url("../assets/img/SOS.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position: absolute;
    left: 15%;
    top: 15%;
  }



  #footer {
    border-bottom: .5rem solid #f0f0f0;
  }

  body {
    background-color: #fbf9fe;
  }

  #app {
    padding-top: 45px;
  }

  .position-horizontal-demo {
    position: relative;
    background-color: #fff;
    height: 100%;
    .vux-close {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) scale(4);
      color: #000;
    }
  }

  .titleBox {
    height: 300/@rem;
    width: 100%;
    background: url("../assets/img/titleBg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 50/@rem 30/@rem 0;
  }

  .titleBox > img {
    float: left;
    height: 100/@rem;
    width: 100/@rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 20/@rem;
  }

  .titleBox > span {
    float: left;
    text-align: center;
    font-size: 22/@rem;
    color: #fff;
    line-height: 40/@rem;
    background-color: rgba(255, 255, 255, .5);
    width: 100/@rem;
    margin: 10/@rem auto;
    border-radius: 25/@rem;
  }

  .titleBox > strong {
    display: block;
    font-weight: normal;
    font-size: 28/@rem;
    line-height: 38/@rem;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 20/@rem;
  }

  .serviceList {
    padding: 0 50/@rem 100/@rem 54/@rem;
    overflow: auto;
    position: absolute;
    top: 300/@rem;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 24/@rem;
    line-height: 46/@rem;
    color: #333;
  }

  .serviceList > li {
    margin-top: 20/@rem;
  }

  .serviceList > li:first-of-type {
    margin-top: 0;
  }

  .alarmRecord > i {
    background: url("../assets/img/alarmRecord.png") no-repeat;
  }

  .emergencyContact > i {
    background: url("../assets/img/emergencyContact.png") no-repeat;
  }

  .myGuardian > i {
    background: url("../assets/img/myGuardian.png") no-repeat;
  }

  .userFeedback1 > i {
    background: url("../assets/img/userFeedback.png") no-repeat;
  }

  .recommendedFriends > i {
    background: url("../assets/img/recommendedFriends.png") no-repeat;
  }

  .ewmShare > i {
    background: url("../assets/img/ewmShare.png") no-repeat;
  }

  .checkUpdate > i {
    background: url("../assets/img/checkUpdate.png") no-repeat;
  }

  .setting > i {
    background: url("../assets/img/setting.png") no-repeat;
  }

  .serviceList > li > i {
    float: left;
    width: 46/@rem;
    height: 46/@rem;
    margin-right: 50/@rem;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .serviceList > li > strong {
    float: left;
  }

  .loginOut > span {
    display: block;
    text-align: center;
    color: #2d82e5;
  }
</style>
