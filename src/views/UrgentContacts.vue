<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>紧急联系人</strong>
      <div class="rightIcon" @click="goAddUrgentContacts">
        <i></i>
      </div>
    </header>
    <section>
      <ul class="guardianList">
        <li class="clearfix" v-for="item,index in searchContactList">
          <div class="guardianName">
            <!--<strong>{{item.sos_ecp_ECPName}}</strong>-->
            <strong>紧急联系人1</strong>
            <span>{{item.sos_ecp_ECPPhone}}</span>
          </div>
          <div class="operation">
            <!--删除-->
            <span class="deleteIcon"></span>
            <!--编辑-->
            <span class="editIcon" @click="goUpdate(item)"></span>
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
    computed: mapGetters([
      'searchContactList',
      'userInfo',
    ]),
    watch: {},
    data() {
      return {
        showToast: false,
        showCon: '',
        typeState: 'warn',
      }
    },
    created() {
      this.initData();
    },
    methods: {
/*      goUpdate(){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "sos_ecp_ID": "1",//紧急联系人标识
            "sos_ecp_UserID": "1",//用户ID
            "sos_ecp_ECPID": "1",//紧急联系人ID
            "sos_ecp_type": "1",//状态(1申请中2同意3拒绝)
          }
        };
        this.$store.dispatch('updateContact',options)
          .then();
      },*/
      goUpdate(item){
        console.log(1,item)
        this.$router.push({
          name: 'UpdateUrgentContacts',
        })
      },
      initData(){
        let userInfo='';
        if(this.userInfo){
          userInfo=this.userInfo.sm_ui_ID;
        };
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "sos_ecp_ID": "",//紧急联系人标识
          "sos_ecp_UserID":userInfo?userInfo: "",//用户ID
          "sos_ecp_ECPID": "",//紧急联系人ID
          "sos_ecp_type": "",//状态(1申请中2同意3拒绝)
          "page": 1,//页码
          "rows": 5//条数
        };
        this.$store.dispatch('searchContact',options)
          .then()
      },
      goTopPage() {
        this.$router.go(-1)
      },
      goAddUrgentContacts(){
        this.$router.push({name: 'AddUrgentContacts'})
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
