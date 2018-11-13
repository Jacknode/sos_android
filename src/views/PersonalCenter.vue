<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>个人信息</strong>
    </header>
    <section>
      <div class="personalInfoTop">
        <div class="headerImg">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2323965838,1386432598&fm=27&gp=0.jpg"
               alt="">
          <div>
            <i></i>
          </div>
        </div>
        <div class="personalName">
          <div>
            <!--<strong>{{updateObj.data.sm_ui_Name}}</strong>-->
            <input type="text" placeholder="请输入用户名"  v-model="updateObj.data.sm_ui_Name">
            <i></i>
          </div>
          <input type="text" v-show="false">
        </div>
        <div class="personalSex clearfix">
          <a href="javascript:;" :class="{active:sexActive==0}" @click="changeSex(0)">男</a>
          <a href="javascript:;":class="{active:sexActive==1}" @click="changeSex(1)">女</a>
        </div>
        <div class="personalInfo clearfix">
          <strong>用户账号</strong>
          <div>
            <span>{{userCode}}</span>
          </div>
        </div>
        <div class="personalInfo clearfix">
          <strong>用户姓名</strong>
          <div>
            <span>{{updateObj.data.sm_ui_Name}}</span>
          </div>
        </div>
      </div>
      <div class="personalInfoBottom">
        <div class="personalInfo clearfix">
          <strong>手机号码</strong>
          <div>
            <!--<input type="text" placeholder="请输入手机号码">-->
            <input type="text" placeholder="请输入手机号码" v-model="updateObj.data.sm_ui_Phone">
          </div>
        </div>
        <div class="personalInfo clearfix">
          <strong>身份证号</strong>
          <div>
            <input type="text" placeholder="请输入身份证号"  v-model="updateObj.data.sm_ui_CertNo">
          </div>
        </div>
        <div class="personalInfo clearfix">
          <strong>邮箱地址</strong>
          <div>
            <input type="text" placeholder="请输入邮箱地址"  v-model="updateObj.data.sm_ui_Email">
          </div>
        </div>
      </div>
      <a href="javascript:;" @click="update">保存</a>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {InlineXSwitch,AlertPlugin } from 'vux'
  Vue.use(AlertPlugin)
  export default {
    components: {
      InlineXSwitch,
      AlertPlugin ,
    },
    computed: mapGetters([
      'initPersonalCenterList',
      'userInfo',
    ]),
    data() {
      return {
        value: false,
      sexActive:0,
        userCode:'',
        updateObj:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token": "",
          "data": {
            "sm_ui_ID": "1",//标识
            "sm_ui_Name": "邓传金",//用户姓名
            "sm_ui_HeadImage": "http://image.1000da.com.cn/images/20180530/19e44a88fd814d0a9fe86a35670f4ea4.png",//用户头像
            "sm_ui_JobID": "1",//职业编码
            "sm_ui_EducationID": "1",//学历编码
            "sm_ui_RoleID": "1",//用户角色
            "sm_ui_Phone": "18111729770",//手机号
            "sm_ui_Birthday": "1990-03-21",//生日
            "sm_ui_WechatNo": "18111729770",//微信号
            "sm_ui_QQNo": "515131419",//QQ号
            "sm_ui_Sex": "1",//性别(0女1男)
            "sm_ui_Email": "515131419@qq.com",//邮箱
            "sm_ui_Provice": "63",//省
            "sm_ui_City": "273",//市
            "sm_ui_County": "2863",//县
            "sm_ui_Address": "四川省泸州市纳溪区渠坝镇永宁街道滨河春色",//详细地址
            "sm_ui_MarryStatus": "0",//婚姻状况(0未婚1已婚)
            "sm_ui_CertNo": "510503199003213712",//身份证号码
          }

        },
      }
    },
    created(){
      this.initData();
    },
    methods: {
      update(){
        let _this=this;
        this.$store.dispatch("updatePersonalCenter",this.updateObj)
          .then(
            (suc)=>{
              this.$vux.alert.show({
                content:suc,
                onShow () {
                },
                onHide () {
                  _this.$router.push({
                    name:'Home',
                  })
                }
              })
            },
            (err)=>{},
          );
      },
      changeSex(id){
        switch (id){
          case 0 : return this.sexActive=0;
          case 1 : return this.sexActive=1;
        }
      },
      initData(){
        let id='';
        if(this.userInfo){
          id = this.userInfo.sm_ui_ID;
        }
        let options={
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token": "",
          "sm_ui_ID": id?id:"",//标识
          //"sm_ui_UserCode": "18111729770",//用户编码
          //"sm_ui_Name": "饶兴平",//用户姓名
          //"sm_ui_JobID": "1",//职业编码
          //"sm_ui_JobName":"",//职业名称
          //"sm_ui_EducationID": "1",//学历编码
          //"sm_ui_EducationName":"",//学历名称
          //"sm_ui_RoleID": "1",//用户角色
          //"sm_ui_RoleName":"",//角色名称
          //"sm_ui_extensionID": "1",//推广员ID
          //"sm_ui_CancelerID": "1",//注销员ID
          //"sm_ui_Phone": "1",//手机号
          //"sm_ui_Sex": "1",//性别(0女1男)
          //"sm_ui_Provice": "1",//省
          //"sm_ui_City": "1",//市
          //"sm_ui_County": "1",//县
          //"sm_ui_IsDelete": "0",//状态(0可用  1不可用)
          //"createFrom": "2018-04-28",//创建时间从
          //"createTo": "2018-06-28",//创建时间从
          //"sm_ui_MarryStatus": "1",//婚姻状况(0未婚1已婚)
          //"cancelFrom": "2018-04-28",//注销时间
          //"cancelTo": "2018-06-28"
          "page": "1",
          "rows": "10"

        };
        this.$store.dispatch("initPersonalCenter",options)
          .then(
            ()=>{
              //性别
              this.sexActive=this.initPersonalCenterList.sm_ui_Sex;
              //账号
              this.userCode=this.initPersonalCenterList.sm_ui_UserCode;
              //电话号码
              this.updateObj.data.sm_ui_Phone=this.initPersonalCenterList.sm_ui_Phone;
              //身份证
              this.updateObj.data.sm_ui_CertNo=this.initPersonalCenterList.sm_ui_CertNo;
              //邮箱
              this.updateObj.data.sm_ui_Email=this.initPersonalCenterList.sm_ui_Email;
              //用户名
              this.updateObj.data.sm_ui_Name=this.initPersonalCenterList.sm_ui_Name;
            },
            ()=>{},
          );
      },
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
    padding-bottom: 100/@rem;
  }

  .personalInfoTop {
    padding-top: 20/@rem;
    background-color: #fff;
    margin-bottom: 12/@rem;
  }

  .headerImg {
    width: 130/@rem;
    margin: 0 auto;
    position: relative;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
  }

  .headerImg img {
    width: 130/@rem;
    height: 130/@rem;
  }

  .headerImg div {
    position: absolute;
    background-color: rgba(42, 160, 221, .48);
    height: 50/@rem;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .headerImg i {
    display: block;
    width: 32/@rem;
    height: 26/@rem;
    background: url("../assets/img/userCenter/camera.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 9/@rem auto 0;
  }

  .personalName {
    width: 200/@rem;
    margin: 0 auto;
    padding: 15/@rem 0;
  }

  .personalName > div {
    text-align: center;
    font-size: 25/@rem;
    color: #2e2e2e;
  }

  .personalName i {
    width: 22/@rem;
    height: 28/@rem;
    display: inline-block;
    background: url("../assets/img/userCenter/edit.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    vertical-align: middle;
  }

  .personalName input {
    width: 200/@rem;
    text-align: center;
    font-size: 25/@rem;
  }

  .personalSex {
    width: 232/@rem;
    margin: 0 auto 40/@rem;
    font-size: 23/@rem;
    line-height: 40/@rem;
  }

  .personalSex > a {
    float: left;
    width: 100/@rem;
    text-align: center;
    border: 1px solid #bfbfbf;
    -webkit-border-radius: 20/@rem;
    -moz-border-radius: 20/@rem;
    border-radius: 20/@rem;
    color: #bfbfbf;
  }

  .personalSex > a.active {
    color: #1296db;
    border-color: #1296db;
  }

  .personalSex > a:first-of-type {
    margin-right: 32/@rem;
  }

  .personalInfo {
    margin: 0 30/@rem;
    border-bottom: 1px solid #edeeef;
    padding: 20/@rem 0;
    font-size: 24/@rem;
    line-height: 40/@rem;
  }

  .personalInfo > strong {
    float: left;
    margin-right: 20/@rem;
    color: #333;
  }

  .personalInfo span {
    color: #999;
    float: left;
    width: 100%;
  }

  .personalInfo > div {
    overflow: hidden;
  }

  .personalInfo input {
    float: left;
    width: 100%;
    font-size: 24/@rem;
    color: #999;
    padding: 0;
    line-height: 40/@rem;
  }

  .personalInfoBottom {
    background-color: #fff;
  }

  .personalInfoBottom > .personalInfo:last-of-type,
  .personalInfoTop > .personalInfo:last-of-type {
    border-bottom: none;
  }

  section > a {
    display: block;
    margin: 40/@rem 30/@rem 0;
    text-align: center;
    color: #fff;
    background-color: #4ba7ff;
    font-size: 24/@rem;
    line-height: 70/@rem;
    -webkit-border-radius: 35/@rem;
    -moz-border-radius: 35/@rem;
    border-radius: 35/@rem;
  }

</style>
