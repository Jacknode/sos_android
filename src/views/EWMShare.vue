<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>分享APP</strong>
    </header>
    <section>
      <div class="ewmBox">
<!--        <div>
          <div>
            <qrcode
              :size="137"
              value="http://qiankevideo.oss-cn-hangzhou.aliyuncs.com/20181011/41489ed32d9b45a2b577abc8d12b8cee.apk"
              type="img"></qrcode>
          </div>
        </div>-->
        <!--<p>扫描二维码下载APP</p>-->
      </div>
      <div class="shareId">
        分享邀请码:{{shareId}}
      </div>
      <div class="goQQ" @click="goQQ"></div>
      <div class="goWeiXin" @click="goWeiXin"></div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  import {Qrcode} from 'vux'

  export default {
    components: {Qrcode},
    computed: mapGetters([
      'userInfo',
    ]),
    data() {
      return {
        shareId: '',
      }
    },
    methods: {
      goQQ(){
      },
      goWeiXin(){
      },
      goTopPage() {
        this.$router.go(-1)
      }
    },
    created(){
      if(this.userInfo){
        this.shareId=JSON.parse(localStorage.getItem('userInfo')).sm_ui_ID
      };
    },
  }
</script>
<style scoped lang="less" type="text/less">
  @rem: 20rem;

  input {
    border: none;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80/@rem;
    background-color: #fff;
    font-size: 30/@rem;
    line-height: 80/@rem;
    text-align: center;
  }

  .leftIcon {
    position: absolute;
    padding: 20/@rem;
    top: 4/@rem;
    left: 10/@rem;
  }

  .leftIcon > i {
    display: block;
    width: 32/@rem;
    height: 31/@rem;
    background: url("../assets/img/setting/goback.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }

  section {
    position: fixed;
    top: 80/@rem;
    left: 0;
    width:100%;
    height:100%;
    right: 0;
    bottom: 0;
    background: url("../assets/img/ewmShareBg1.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .ewmBox {
    position: absolute;
    bottom: 20/@rem;
    left: 50%;
    margin-left: -130/@rem;
    width: 260/@rem;
  }

  .ewmBox > div {
    padding: 20/@rem;
    height: 260/@rem;
    width: 260/@rem;
    background: url("../assets/img/ewmBox.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-bottom: 20/@rem;
    position: relative;
  }

  .ewmBox > div > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .ewmBox p {
    font-size: 23/@rem;
    color: #fff;
    font-family: "宋体";
    text-align: center;
    color: #3593be;

  }

  .goQQ{
    width: 65 /@rem;
    height: 65 /@rem;
    border-radius: 45px;
    position: absolute;
    top: 59%;
    left: 26%;
  }

  .goWeiXin{
    width: 65 /@rem;
    height: 65 /@rem;
    border-radius: 45px;
    position: absolute;
    top: 59%;
    right: 26%;
  }
  .shareId{
    width: 300 /@rem;
    height: 65 /@rem;
    position: absolute;
    top: 47%;
    right: 25%;
    /*background-color: red;*/
    line-height: 65 /@rem;
    text-align: center;
    font-size: 30/@rem;
    padding-right: 45/@rem;
    padding-top: 5/@rem;
  }

</style>
