<template>
  <div>
    <header></header>
    <section>
      <div class="loginBox">
        <div class="loginNum clearfix">
          <i></i>
          <div>
            <input type="text" placeholder="请输入账号/手机号">
          </div>
        </div>
        <div class="loginPassword clearfix">
          <i></i>
          <div>
            <div>
              <input type="password" placeholder="请输入密码">
              <i></i>
            </div>
          </div>
        </div>
        <a href="javascript:;">登录</a>
      </div>
      <div class="loginErr clearfix">
        <a href="javascript:;" @click="goRegister">注册</a>
        <a href="javascript:;" @click="goForgetPassword">忘记密码?</a>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {}
    },
    methods: {
      //注册
      goRegister() {
        this.$router.push({name: 'Register'})
      },
      //忘记密码
      goForgetPassword(){
        this.$router.push({name: 'ForgetPassword'})
      },
      initData() {
      },
      search() {
        this.initData()
      }
    },
  }
</script>
<style scoped lang="less">
  @rem: 20rem;

  header {
    width: 100%;
    height: 230/@rem;
    background: url("../assets/img/userCenter/loginBg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  section {
    padding: 50/@rem 30/@rem;
  }

  .loginNum,
  .loginPassword {
    border-bottom: 1px solid #eaeaea;
    padding: 0 10/@rem;
  }

  .loginNum > i {
    float: left;
    width: 24/@rem;
    height: 32/@rem;
    background: url("../assets/img/userCenter/loginNum.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 25/@rem;
  }

  .loginNum div {
    overflow: hidden;
  }

  .loginNum input,
  .loginPassword input {
    float: left;
    width: 100%;
    border: none;
    font-size: 20/@rem;
    line-height: 30/@rem;
    padding: 25/@rem 0 25/@rem 20/@rem;
    color: #333;
  }

  .loginPassword > i {
    float: left;
    width: 23/@rem;
    height: 32/@rem;
    background: url("../assets/img/userCenter/Lock.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 25/@rem;
  }

  .loginPassword > div {
    overflow: hidden;
  }

  .loginPassword > div > div {
    float: left;
    width: 100%;
    position: relative;
  }

  .loginPassword input {
    padding-left: 20/@rem;
    padding-right: 40/@rem;
  }

  .loginPassword > div i {
    position: absolute;
    top: 33/@rem;
    right: 0;
    width: 30/@rem;
    height: 20/@rem;
    background: url("../assets/img/userCenter/eyeIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .loginBox > a {
    display: block;
    text-align: center;
    width: 100%;
    background-color: #5c7eec;
    color: #fff;
    font-size: 20/@rem;
    line-height: 60/@rem;
    -webkit-border-radius: 30/@rem;
    -moz-border-radius: 30/@rem;
    border-radius: 30/@rem;
    margin-top: 60/@rem;
    box-shadow: 0 5px 10px #c3cff9;
  }

  .loginBox {
    margin-bottom: 24/@rem;
  }

  .loginErr {
    font-size: 20/@rem;
    line-height: 2;
  }

  .loginErr > a:first-of-type {
    float: left;
    color: #3d69e3;
  }

  .loginErr > a:last-of-type {
    float: right;
    color: #333;
  }

  :-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }

  ::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }

  input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }

  input::-webkit-input-placeholder {
    color: #ccc;
    opacity: 1;
  }


</style>
