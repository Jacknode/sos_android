<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>帮助中心</strong>
    </header>
    <section>

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
    box-shadow: 0 10px #ccc;
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

</style>
