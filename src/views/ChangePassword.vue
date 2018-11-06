<template>
  <div>
    <div id="wrap">
      <header>
        <img src="../assets/img/userCenter/register.png" alt="">
        <strong>修改密码</strong>
      </header>
      <section>
        <div class="loginPassword clearfix">
          <i></i>
          <div>
            <div>
              <input type="password" placeholder="请输入原密码" v-model="oldPassword">
              <i></i>
            </div>
          </div>
        </div>
        <div class="loginPassword clearfix">
          <i></i>
          <div>
            <div>
              <input type="password" placeholder="请输入新密码" v-model="newPassword2">
              <i></i>
            </div>
          </div>
        </div>
        <div class="loginPassword clearfix">
          <i></i>
          <div>
            <div>
              <input type="password" placeholder="请重输入新密码" v-model="newPassword">
              <i></i>
            </div>
          </div>
        </div>
        <a href="javascript:;" @click="submitButton">提交</a>
      </section>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {
    Group,
    XNumber,
    PopupHeader,
    Popup,
    Radio,
    Selector,
    Datetime,
    XButton,
    PopupRadio,
    XInput,
    Cell,
    Alert,
    Toast,
  } from 'vux'
  Vue.use(AlertPlugin)
  export default {
    computed: mapGetters([]),
    data() {
      return {
        userIfo:'',
        oldPassword:'',
        newPassword:'',
        newPassword2:'',
      }
    },
    components: {
      XNumber,
      PopupHeader,
      Popup,
      Group,
      Radio,
      Selector,
      Datetime,
      XButton,
      PopupRadio,
      Cell,
      XInput,
      Alert,
    },
    created(){
      this.userInfo= JSON.parse(localStorage.getItem('userInfo'));
    },
    methods: {
      submitButton(){
        let options= {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token": "",
          "userCode": this.userInfo.sm_ui_UserCode?this.userInfo.sm_ui_UserCode:'',//当前用户的账号
          "oldPassword": this.oldPassword?this.oldPassword:'',//原来密码
          "newPassword":this.newPassword?this.newPassword:'',//新密码
        };

        this.$store.dispatch('updatePasswordAction',options)
          .then((suc)=>{
              this.$vux.alert.show({
                title: '修改密码成功',
                content: suc,
                onHide() {
                },
                onShow() {
                },
              })
//              this.$router.go(-1)
            this.$router.push({
              name:'Login',
            })
            },
            (err)=>{
              this.$vux.alert.show({
                title: '修改密码失败',
                content: err,
              })
            });

      },
      goLogin(){
        this.$router.push({name: 'Login'})
      },
      initData() {
      },
      search() {
        this.initData()
      },
      onHide() {
      },
      onShow() {
      },
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

  section>p > a {
    display: inline;
    color: #5c7eec;
    margin-left: 10/@rem;
  }

</style>

