<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>设置</strong>
    </header>
    <section>
<!--      <p>建议打开坐标与报警上传，确保使用安全</p>
      <ul class="functionList">
        <li class="positionUpLoading clearfix">
          <i></i>
          <div>
            <div class="clearfix">
              <strong>开启坐标上传</strong>
              <span>
                <inline-x-switch v-model="value"></inline-x-switch>
              </span>
            </div>
          </div>
        </li>
        <li class="upLoadingVoice clearfix">
          <i></i>
          <div>
            <div class="clearfix">
              <strong>开启报警后录音上传</strong>
              <span>
                <inline-x-switch v-model="value1"></inline-x-switch>
              </span>
            </div>
          </div>
        </li>
      </ul>-->
      <div class="helpCenter clearfix">
        <i></i>
        <div>
          <div @click="goHelpCenter">
            <strong>帮助中心</strong>
            <span></span>
          </div>
        </div>
      </div>
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
        value: false,
        value1: false
      }
    },
    methods: {
      goTopPage(){
        this.$router.go(-1)
      },
      goHelpCenter(){
        this.$router.push({name:'HelpCenter'})
      }
    },
  }
</script>
<style scoped lang="less" type="text/less">
  @rem: 20rem;

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
  }

  section > p {
    background-color: #f6f6f6;
    font-size: 20/@rem;
    line-height: 60/@rem;
    color: #9d9d9d;
    text-indent: 30/@rem;
  }

  .functionList {
    background-color: #fff;
    padding: 0 30/@rem;
  }

  .positionUpLoading > i {
    float: left;
    width: 25/@rem;
    height: 33/@rem;
    margin-right: 30/@rem;
    background: url("../assets/img/setting/posiiotn.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 20/@rem;
  }

  .upLoadingVoice > i {
    float: left;
    width: 25/@rem;
    height: 36/@rem;
    margin-right: 30/@rem;
    background: url("../assets/img/setting/voice.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 20/@rem;
  }

  .functionList li {
    height: 80/@rem;
  }

  .functionList li strong {
    font-size: 25/@rem;
    line-height: 80/@rem;
    float: left;
  }

  .functionList li span {
    float: right;
    margin-top: 20/@rem;
  }

  .positionUpLoading > div {
    overflow: hidden;
  }

  .functionList li > div > div {
    float: left;
    width: 100%;
    border-bottom: 1px solid #d7d9da;
  }

  .functionList li:last-of-type > div > div {
    border-bottom: none;
  }

  .upLoadingVoice > div {
    overflow: hidden;
  }

  .helpCenter {
    margin-top: 20/@rem;
    background-color: #fff;
    padding: 0 30/@rem;
  }

  .helpCenter > i {
    float: left;
    width: 30/@rem;
    height: 34/@rem;
    margin-right: 24/@rem;
    background: url("../assets/img/setting/help.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 20/@rem;
  }

  .helpCenter > div {
    overflow: hidden;
  }

  .helpCenter > div > div {
    float: left;
    width: 100%;
  }

  .helpCenter strong {
    float: left;
    font-size: 25/@rem;
    line-height: 80/@rem;
    color: #2e2e2e;
  }

  .helpCenter span {
    float: right;
    width: 18/@rem;
    height: 27/@rem;
    background: url("../assets/img/setting/rightIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 30/@rem;
  }

</style>
