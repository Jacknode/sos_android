<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>添加守护人</strong>
    </header>
    <section>
      <div class="guardianName clearfix">
        <i></i>
        <div>
          <input type="text" placeholder="亲友称呼">
        </div>
      </div>
      <div class="guardianNum clearfix">
        <i></i>
        <div>
          <input type="text" placeholder="请输入守护人手机号">
        </div>
      </div>
      <a href="javascript:;">确定添加</a>
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
    watch: {},
    data() {
      return {
        showToast: false,
        showCon: '',
        typeState: 'warn',
      }
    },
    created() {
    },
    methods: {
      goTopPage() {
        this.$router.go(-1)
      },
      goGuardianAdd() {
        this.$router.push({name: 'GuardianAdd'})
      },
    }
  }
</script>
<style scoped lang="less" type="text/less">
  @rem: 20rem;

  input {
    border: none;
  }

  .imgBg {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    background-color: #f8f7f7;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20/@rem 30/@rem;
  }

  .guardianName,
  .guardianNum {
    border-bottom: 1px solid #eaeaea;
    padding: 25/@rem 33/@rem;
  }

  .guardianName > div,
  .guardianNum > div {
    overflow: hidden;
  }

  .guardianName input,
  .guardianNum input {
    float: left;
    width: 100%;
    font-size: 26/@rem;
    line-height: 40/@rem;
    color: #666;
  }

  .guardianName > i {
    float: left;
    width: 33/@rem;
    height: 33/@rem;
    background: url("../assets/img/peopleIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-right: 27/@rem;
  }

  .guardianNum > i {
    float: left;
    width: 22/@rem;
    height: 36/@rem;
    background: url("../assets/img/phoneIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-right: 30/@rem;
    margin-left: 5/@rem;
  }

  section > a {
    font-size: 26/@rem;
    color: #fff;
    text-align: center;
    display: block;
    line-height: 70/@rem;
    -webkit-border-radius: 35/@rem;
    -moz-border-radius: 35/@rem;
    border-radius: 35/@rem;
    background-color: #5c7eec;
    margin-top: 70/@rem;
    box-shadow: 0 3px 7px #6282ef;
  }
</style>
