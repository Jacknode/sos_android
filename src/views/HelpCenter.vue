<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>帮助中心</strong>
    </header>
    <section>
      <div class="helpList">
        <div v-for="item,index in helpList" class="clearfix">
          <span>{{item.value}}</span>
          <i></i>
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
        helpList: [
          {
            value: '1、台州110报警APP下载方式'
          },
          {
            value: '2、用户注册'
          },
          {
            value: '3、报警方式'
          },
          {
            value: '4、报警后'
          },
          {
            value: '5、已处理出警'
          },
          {
            value: '6、查看报警记录'
          },

        ],
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
  }

  section > div {
    background-color: #fff;
    margin-top: 20/@rem;
    padding: 0 20/@rem;
    font-size: 25/@rem;
    line-height: 90/@rem;
  }

  .helpList div {
    border-bottom: 1px solid #edeeef;
    color: #2e2e2e;
  }

  .helpList div:last-of-type {
    border-bottom: none;
  }

  .helpList span {
    float: left;
  }

  .helpList i {
    float: right;
    width: 18/@rem;
    height: 27/@rem;
    background: url("../assets/img/setting/rightIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 30/@rem;
  }

</style>
