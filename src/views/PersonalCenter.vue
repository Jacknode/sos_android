<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>个人信息</strong>
    </header>
    <section>
      <div class="personalInfoTop">
        <div class="headerImg">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2323965838,1386432598&fm=27&gp=0.jpg"
               alt="">
          <div>
            <i></i>
          </div>
        </div>
        <div class="personalName">
          <div>
            <strong>王小小</strong>
            <i></i>
          </div>
          <input type="text" v-show="false">
        </div>
        <div class="personalSex clearfix">
          <a href="javascript:;" class="active">男</a>
          <a href="javascript:;">女</a>
        </div>
        <div class="personalInfo clearfix">
          <strong>用户账号</strong>
          <div>
            <span>111111</span>
          </div>
        </div>
        <div class="personalInfo clearfix">
          <strong>用户姓名</strong>
          <div>
            <span>王小小</span>
          </div>
        </div>
      </div>
      <div class="personalInfoBottom">
        <div class="personalInfo clearfix">
          <strong>手机号码</strong>
          <div>
            <input type="text" placeholder="请输入手机号码">
          </div>
        </div>
        <div class="personalInfo clearfix">
          <strong>身份证号</strong>
          <div>
            <input type="text" placeholder="请输入身份证号">
          </div>
        </div>
        <div class="personalInfo clearfix">
          <strong>邮箱地址</strong>
          <div>
            <input type="text" placeholder="请输入邮箱地址">
          </div>
        </div>
      </div>
      <a href="javascript:;">保存</a>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {InlineXSwitch} from 'vux'

  export default {
    components: {
      InlineXSwitch
    },
    computed: mapGetters([]),
    data() {
      return {
        value: false
      }
    },
    methods: {
      goTopPage() {
        this.$router.go(-1)
      }
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
    border-bottom: 1px solid #ccc;
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
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  section {
    position: fixed;
    top: 80/@rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 100/@rem;
  }

  .personalInfoTop {
    padding-top: 20/@rem;
    background-color: #fff;
    margin-bottom: 12/@rem;
  }

  .headerImg {
    width: 130/@rem;
    margin: 0 auto;
    position: relative;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
  }

  .headerImg img {
    width: 130/@rem;
    height: 130/@rem;
  }

  .headerImg div {
    position: absolute;
    background-color: rgba(42, 160, 221, .48);
    height: 50/@rem;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .headerImg i {
    display: block;
    width: 32/@rem;
    height: 26/@rem;
    background: url("../assets/img/userCenter/camera.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 9/@rem auto 0;
  }

  .personalName {
    width: 200/@rem;
    margin: 0 auto;
    padding: 15/@rem 0;
  }

  .personalName > div {
    text-align: center;
    font-size: 25/@rem;
    color: #2e2e2e;
  }

  .personalName i {
    width: 22/@rem;
    height: 28/@rem;
    display: inline-block;
    background: url("../assets/img/userCenter/edit.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    vertical-align: middle;
  }

  .personalName input {
    width: 200/@rem;
    text-align: center;
    font-size: 25/@rem;
  }

  .personalSex {
    width: 232/@rem;
    margin: 0 auto 40/@rem;
    font-size: 23/@rem;
    line-height: 40/@rem;
  }

  .personalSex > a {
    float: left;
    width: 100/@rem;
    text-align: center;
    border: 1px solid #bfbfbf;
    -webkit-border-radius: 20/@rem;
    -moz-border-radius: 20/@rem;
    border-radius: 20/@rem;
    color: #bfbfbf;
  }

  .personalSex > a.active {
    color: #1296db;
    border-color: #1296db;
  }

  .personalSex > a:first-of-type {
    margin-right: 32/@rem;
  }

  .personalInfo {
    margin: 0 30/@rem;
    border-bottom: 1px solid #edeeef;
    padding: 20/@rem 0;
    font-size: 24/@rem;
    line-height: 40/@rem;
  }

  .personalInfo > strong {
    float: left;
    margin-right: 20/@rem;
    color: #333;
  }

  .personalInfo span {
    color: #999;
    float: left;
    width: 100%;
  }

  .personalInfo > div {
    overflow: hidden;
  }

  .personalInfo input {
    float: left;
    width: 100%;
    font-size: 24/@rem;
    color: #999;
    padding: 0;
    line-height: 40/@rem;
  }

  .personalInfoBottom {
    background-color: #fff;
  }

  .personalInfoBottom > .personalInfo:last-of-type,
  .personalInfoTop > .personalInfo:last-of-type {
    border-bottom: none;
  }

  section > a {
    display: block;
    margin: 40/@rem 30/@rem 0;
    text-align: center;
    color: #fff;
    background-color: #4ba7ff;
    font-size: 24/@rem;
    line-height: 70/@rem;
    -webkit-border-radius: 35/@rem;
    -moz-border-radius: 35/@rem;
    border-radius: 35/@rem;
  }

</style>
