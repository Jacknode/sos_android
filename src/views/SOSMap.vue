<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>sos紧急报警</strong>
    </header>
    <section>
      <div id="container"></div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  import {Qrcode} from 'vux'

  export default {
    components: {Qrcode},
    computed: mapGetters([]),
    data() {
      return {}
    },
    methods: {
      goTopPage() {
        this.$router.go(-1)
      }
    },
    mounted(){

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
    -webkit-background-size: cover;
    background-size: cover;
  }

  section {
    position: fixed;
    top: 80/@rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  #container {
    width: 100%;
    height: 100%;
  }

</style>
