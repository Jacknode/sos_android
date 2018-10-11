<template>
  <div>
    <div id="wrap">
      <header>
        <img src="../assets/img/userCenter/register.png" alt="">
        <strong>欢迎注册</strong>
      </header>
      <section>
        <div class="registerPhone clearfix">
          <span>+86</span>
          <div>
            <input type="text" placeholder="手机号" v-model="register.phone">
          </div>
        </div>
        <div class="loginPassword clearfix">
          <i></i>
          <div>
            <div>
              <input type="password" placeholder="请输入密码" v-model="register.password">
              <i></i>
            </div>
          </div>
        </div>
        <div class="messageNum clearfix">
          <i></i>
          <div class="clearfix">
            <div>
              <input type="text" placeholder="请输入验证码" v-model="register.validateNo">
              <span @click="VerificationCode" v-show="isVerificationCode">{{VerificationCodeValue}}</span>
              <span v-show="isNum" style="background: #bbb;color: #fff">{{num}}</span>
            </div>
          </div>
        </div>
        <a href="javascript:;" @click="submit">确定</a>
        <p>已有账号?<a href="javascript:;" @click="goLogin">登录</a></p>
      </section>
    </div>
    <toast v-model="showPositionValue" :type="type" :time="800" is-show-mask position="middle">{{toastValue}}</toast>
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
        VerificationCodeValue: '验证码',
        isVerificationCode: true,
        isNum: false,
        num: 60,
        type: 'warn',
        timer: null,
        toastValue: '手机号不能为空！',
        showPositionValue: false,
        register: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "phone": "",
          "extensionID": "",
          "password": "",
          "validateNo": "",//验证码
        }
      }
    },
    watch: {
      num(){
        if (this.num == 0) {
          clearInterval(this.timer)
          this.VerificationCodeValue = '重新发送验证码'
          this.isVerificationCode = true;
          this.isNum = false;
        }
      }
    },
    methods: {
      //点击验证码
      VerificationCode(){
        if (!this.register.phone) {
          this.showPositionValue = true;
          return
        }
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "phone": this.register.phone,//用户编码
          "sendType": "0",//0注册发送短信 1 找回密码发送短信 2 动态密码
        };
        this.$store.dispatch('VerificationCode', options)
        .then((data) => {
          //弹窗设置
          this.type = 'success';
          this.toastValue = data
          this.showPositionValue = true;

          //设置倒计时
          this.isVerificationCode = false;
          this.isNum = true

          clearInterval(this.timer)
          this.timer = setInterval(() => {
            this.num--;
          }, 1000);
        }, err => {
          this.type = 'warn';
          this.toastValue = err
          this.showPositionValue = true;
        })
      },
      //提交
      submit(){
        if (!this.register.validateNo) {
          this.toastValue = '验证码不能为空'
          this.showPositionValue = true;
          return
        }
        if (!this.register.password) {
          this.toastValue = '密码不能为空'
          this.showPositionValue = true;
          return
        }
        this.$store.dispatch('registerSubmit',this.register)
        .then((suc)=>{
          //弹窗设置
          this.type = 'success';
          this.toastValue = suc
          this.showPositionValue = true;
          this.$router.push({name: 'Login'})
        }, err => {
          this.type = 'warn';
          this.toastValue = err
          this.showPositionValue = true;
        })
      },
      goLogin(){
        this.$router.push({name: 'Login'})
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

  input {
    border: none;
  }

  #wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    padding-top: 100/@rem;
  }

  header {
    padding: 0 30/@rem;
    font-size: 30/@rem;
    line-height: 100/@rem;
    font-weight: bold;
  }

  header img {
    width: 100/@rem;
    height: 100/@rem;
  }

  header strong {
    margin-left: 10/@rem;
  }

  section {
    margin-top: 50/@rem;
    padding: 0 30/@rem;
  }

  section > div {
    border-bottom: 1px solid #eaeaea;
    padding: 0 10/@rem;
  }

  .registerPhone > span {
    float: left;
    font-size: 25/@rem;
    margin-top: 18/@rem;
  }

  .registerPhone > div {
    overflow: hidden;
  }

  .registerPhone > div > input {
    float: left;
    width: 100%;
    font-size: 20/@rem;
    padding: 15/@rem 20/@rem;
    line-height: 30/@rem;
  }

  .loginPassword {
    border-bottom: 1px solid #eaeaea;
    padding: 0 10/@rem;
  }

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
    width: 24/@rem;
    height: 32/@rem;
    background: url("../assets/img/userCenter/Lock.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 25/@rem;
    margin-right: 18/@rem;
  }

  .loginPassword > div:before {
    content: '';
    position: absolute;
    width: 1px;
    background-color: #cdcecd;
    height: 30/@rem;
    z-index: 2;
    margin-top: 27/@rem;
  }

  .loginPassword > div {
    overflow: hidden;
    position: relative;
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

  .messageNum > i {
    float: left;
    width: 28/@rem;
    height: 36/@rem;
    background: url("../assets/img/userCenter/security.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-right: 15/@rem;
    margin-top: 25/@rem;
  }

  .messageNum > div {
    overflow: hidden;
    position: relative;
  }

  .messageNum > div:before {
    content: '';
    position: absolute;
    width: 1px;
    background-color: #cdcecd;
    height: 30/@rem;
    z-index: 2;
    margin-top: 27/@rem;
  }

  .messageNum > div > div {
    float: left;
    width: 100%;
  }

  .messageNum input {
    float: left;
    width: 50%;
    border: none;
    font-size: 20/@rem;
    line-height: 30/@rem;
    padding: 25/@rem 20/@rem 25/@rem 20/@rem;
    color: #333;
  }

  .messageNum span {
    font-size: 20/@rem;
    float: right;
    background-color: #5c7eec;
    color: #fff;
    text-align: center;
    padding: 0 20/@rem;
    line-height: 40/@rem;
    -webkit-border-radius: 15/@rem;
    -moz-border-radius: 15/@rem;
    border-radius: 15/@rem;
    margin-top: 20/@rem;
  }

  section > a {
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

  section > p {
    text-align: center;
    color: #cccccc;
    font-size: 20/@rem;
    line-height: 40/@rem;
    margin-top: 20/@rem;
  }

  section > p > a {
    display: inline;
    color: #5c7eec;
    margin-left: 10/@rem;
  }

</style>

