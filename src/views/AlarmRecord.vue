<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>报警记录</strong>
    </header>
    <section>
      <ul class="recordList">
        <li v-for="item,index in 10">
          <strong>110报警</strong>
          <div class="policeTime clearfix">
            <i></i>
            <span>2018-09-20  14:12:23</span>
          </div>
          <div class="policeAddress clearfix">
            <i></i>
            <div>
              <span>泸州市江阳区大山坪枇杷沟现代150街道1109</span>
            </div>
          </div>
        </li>
      </ul>
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
    padding: 20/@rem;
  }

  .recordList > li {
    background-color: #fff;
    padding: 0 25/@rem 20/@rem;
    -webkit-border-radius: 10/@rem;
    -moz-border-radius: 10/@rem;
    border-radius: 10/@rem;
    margin-bottom: 20/@rem;
  }

  .recordList > li:last-of-type {
    margin-bottom: 0;
  }

  .recordList strong {
    display: block;
    font-size: 26/@rem;
    line-height: 70/@rem;
    color: #000;
    border-bottom: 1px dashed #b3b1b1;
    margin-bottom: 11/@rem;
  }

  .recordList div {
    font-size: 23/@rem;
    color: #666;
  }

  .policeTime {
    line-height: 53/@rem;
  }

  .policeTime > i {
    float: left;
    width: 27/@rem;
    height: 27/@rem;
    background: url("../assets/img/alarmRecord/time.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 13/@rem;
    margin-right: 20/@rem;
    margin-left: 5/@rem;
  }

  .policeTime > span {
    float: left;
  }

  .policeAddress > i {
    float: left;
    width: 25/@rem;
    height: 35/@rem;
    background: url("../assets/img/alarmRecord/posiiton.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 8/@rem 20/@rem 0 5/@rem;
  }

  .policeAddress > div {
    overflow: hidden;
    padding-top: 10/@rem;
  }

  .policeAddress span {
    float: left;
    width: 100%;
    line-height: 30/@rem;
  }

</style>
