<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>用户反馈</strong>
    </header>
    <section>
      <div>
        <textarea placeholder="请留下您宝贵的意见" v-model="feedbackContent"></textarea>
        <span>{{fontLength}}/{{conLength}}</span>
      </div>
      <a href="javascript:;" @click="feedbackSubmit">提交</a>
    </section>
    <toast v-model="showToast" :type="typeState" :text="showCon"></toast>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {Toast} from 'vux'

  export default {
    components: {
      Toast
    },
    computed: mapGetters([]),
    watch: {
      feedbackContent(){
        if( this.feedbackContent.length > this.conLength ){
          this.showToast = true;
          this.showCon = '反馈内容不能大于'+ this.conLength +'字'
          this.feedbackContent = this.feedbackContent.substring(0,this.conLength)
        }
        this.fontLength = this.feedbackContent.length;
      }
    },
    data() {
      return {
        userInfo: {},
        feedbackContent: '',
        feedbackCon: '',
        showToast: false,
        showCon: '',
        typeState: 'warn',
        fontLength: 0,
        conLength: 150,
      }
    },
    created() {
      if (localStorage.getItem('userInfo')) {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      }
    },
    methods: {
      goTopPage() {
        this.$router.go(-1)
      },
      feedbackSubmit() {
        if (!this.feedbackContent) {
          this.showToast = true;
          this.showCon = '反馈内容不能为空'
          return
        }
        let insertCustomerFeedBack = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "sos_cfb_UserID": this.userInfo.sm_ui_ID ? this.userInfo.sm_ui_ID : '',//用户ID
            "sos_cfb_Content": this.feedbackContent,//反馈内容
          }
        }
        this.$store.dispatch('feedbackSubmit', insertCustomerFeedBack)
          .then(suc => {
            this.showToast = true;
            this.typeState = 'success'
            this.showCon = suc;
            setTimeout(()=>{
              this.$router.go(-1)
            },1000)
          }, err => {
            this.showToast = true;
            this.typeState = 'cancel'
            this.showCon = err;
          })
      },
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
    z-index: 2;
    box-shadow: 0 5px 10px #ccc;
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
  }

  section > div {
    height: 450/@rem;
    width: 100%;
    background-color: #fff;
    margin-top: 10/@rem;
  }

  textarea {
    display: block;
    width: 100%;
    height: 400/@rem;
    padding: 30/@rem;
    font-size: 28/@rem;
    line-height: 40/@rem;
    font-family: "微软雅黑";
    color: #333333;
    letter-spacing: 1px;
  }

  section > div span {
    display: block;
    text-align: right;
    padding-right: 20/@rem;
    color: #666;
    font-size: 28/@rem;
    line-height: 40/@rem;
    font-family: "微软雅黑";
  }

  section > a {
    display: block;
    margin: 66/@rem 30/@rem 0;
    color: #fff;
    background-color: #4ba7ff;
    font-size: 28/@rem;
    line-height: 70/@rem;
    text-align: center;
    -webkit-border-radius: 41/@rem;
    -moz-border-radius: 41/@rem;
    border-radius: 41/@rem;

  }

</style>
