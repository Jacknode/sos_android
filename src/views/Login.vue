<template>
  <div>
    <header></header>
    <section>
      <div class="loginBox">
        <div class="loginNum clearfix">
          <i></i>
          <div>
            <input type="text" placeholder="请输入账号/手机号" v-model="options.userID">
          </div>
        </div>
        <div class="loginPassword clearfix">
          <i></i>
          <div>
            <div>
              <input :type="typeV" placeholder="请输入密码" v-model="options.password">
              <i @click="look"></i>
            </div>
          </div>
        </div>
        <a href="javascript:;" @click="login">登录</a>
      </div>
      <div class="loginErr clearfix">
        <a href="javascript:;" @click="goRegister">注册</a>
        <!--<a href="javascript:;" @click="goForgetPassword">忘记密码?</a>-->
      </div>
    </section>
    <toast v-model="showPositionValue" :type="type" :time="800" is-show-mask position="middle">{{toastValue}}</toast>
    <toast v-model="showSuccess" type="success"  is-show-mask position="middle">登录成功</toast>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {Toast} from 'vux'

  export default {
    computed: mapGetters([]),
    components: {
      Toast
    },
    data() {
      return {
        typeV:'password',
        toastValue: '手机号不能为空！',
        type: 'warn',
        showSuccess:false,
        showPositionValue: false,
        options:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token": "",
          "userID": "",//用户编码
          "password": ""//密码
        }
      }
    },
    methods: {
      //眼睛
      look(){
        if(this.typeV== 'text'){
          this.typeV= 'password'
        }else{
          this.typeV= 'text'
        }
      },
      //注册
      goRegister() {
        this.$router.push({name: 'Register'})
      },
      //登录
      login(){
        if (!this.options.userID) {
          this.showPositionValue = true;
          return
        }
        if (!this.options.password) {
          this.toastValue = '密码不能为空'
          this.showPositionValue = true;
          return
        }
        this.$store.dispatch('loginSubmit',this.options)
        .then((suc)=>{
          //弹窗设置
          this.showSuccess = true;
          setTimeout(()=>{
            this.$router.push({name: 'Home'})
          },1000)
        }, err => {
          this.type = 'warn';
          this.toastValue = err
          this.showPositionValue = true;
        })
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
<style scoped lang="less" type="text/less">
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
