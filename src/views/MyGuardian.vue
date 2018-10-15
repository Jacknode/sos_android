<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>我的守护人</strong>
      <div class="rightIcon" @click="goGuardianAdd">
        <i></i>
      </div>
    </header>
    <section>
      <ul class="guardianList">
        <li class="clearfix" v-for="item,index in 10">
          <div class="guardianName">
            <strong>妈妈</strong>
            <span>13096009505</span>
          </div>
          <div class="operation">
            <!--删除-->
            <span class="deleteIcon"></span>
            <!--编辑-->
            <span class="editIcon"></span>
          </div>
        </li>
      </ul>


      <img src="../assets/img/guardianBg.png" class="imgBg" v-show="false" alt="">
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
      goGuardianAdd(){
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

  .rightIcon {
    position: absolute;
    padding: 20/@rem;
    top: 4/@rem;
    right: 10/@rem;
  }

  .rightIcon i {
    display: block;
    width: 32/@rem;
    height: 32/@rem;
    background: url("../assets/img/addGuardian.png") no-repeat;
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

  .guardianList {
    margin-top: 10/@rem;
  }

  .guardianList li {
    margin-bottom: 10/@rem;
    padding: 17/@rem 0;
    background-color: #fdfdfd;
  }

  .guardianList li:last-of-type {
    margin-bottom: 0;
  }

  .guardianName {
    float: left;
    font-size: 26/@rem;
    line-height: 42/@rem;
    color: #2e2e2e;
  }

  .guardianName > strong {
    float: left;
    border-right: 2px solid #e6e7e8;
    width: 128/@rem;
    text-align: center;
    margin-right: 35/@rem;
  }

  .guardianName > span {
    float: left;
  }

  .operation {
    float: right;
  }

  .editIcon {
    float: right;
    width: 28/@rem;
    height: 31/@rem;
    background: url("../assets/img/editIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 7/@rem 54/@rem 0 0;
  }

  .deleteIcon {
    float: right;
    width: 31/@rem;
    height: 31/@rem;
    background: url("../assets/img/deleteIcon.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 4/@rem 31/@rem 0 0;
  }

</style>
