<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>帮助中心</strong>
    </header>
    <section>
      <div class="ewmBox">
        <div>
          <img src="../assets/img/ewmImg.png" alt="">
        </div>
        <p>扫描二维码下载APP</p>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    components: {},
    computed: mapGetters([]),
    data() {
      return {}
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
    background: url("../assets/img/ewmShareBg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .ewmBox {
    position: absolute;
    bottom: 20/@rem;
    left: 50%;
    margin-left: -130/@rem;
    width: 260/@rem;
  }

  .ewmBox div {
    padding: 20/@rem;
    height: 260/@rem;
    background: url("../assets/img/ewmBox.png") no-repeat;
    -webkit-background-size:  100% 100%;
    background-size:  100% 100%;
    margin-bottom: 20/@rem;
  }

  .ewmBox div img {
    width: 100%;
    height: 100%;
  }

  .ewmBox p {
    font-size: 28/@rem;
    color: #fff;
    font-weight: bold;
    font-family: "宋体";
    font-style: italic;
    text-align: center;
  }

</style>
