<template>
    <div>
      <div class="container">
        <header>
          <strong class="headName">SOS适用场景</strong>
        </header>
        <ul class="contentBox">
          <li class="content clearfix" v-for="item,index in initApplicableSceneList" @click="goDetail(item)">
            <div class="contentLeftBox">
              <!--<img v-lazy="" src="../assets/img/userCenter/loginBg.png"/>-->
              <!--<img v-lazy="item.sos_us_LittleImage" :key="item.sos_us_LittleImage" :src="item.sos_us_LittleImage"/>-->
              <img :key="item.sos_us_LittleImage" :src="item.sos_us_LittleImage"/>
            </div>
            <div class="contentRightBox">
              <!--<div class="contentTitle">巴中一女子凌晨独自出行 遭遇抢劫脖子被插化妆笔</div>-->
              <div class="contentTitle">{{item.sos_us_Title}}</div>
              <!--<div class="contentTimeBox">2018-14 9:27:53</div>-->
              <div class="contentTimeBox">{{item.sos_us_UpdateTime}}</div>
            </div>
          </li>
        </ul>
        <div class="overBox" v-show="overBoxIsShow">
          <div class="goBack">
            <div class="trangle" @click="goBack"></div>
          </div>
          <div class="overBoxContent" v-html="overBoxContent"></div>
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters,} from 'vuex';
    export default {
      props: [],
      created(){
        this.initData();
      },
      computed:mapGetters([
        'initApplicableSceneList',
      ]),
      data(){
        return {
          overBoxContent:'',
          overBoxIsShow:false,
        };
      },
      methods:{
        initData(){
          let options = {
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "sos_us_ID": "",//适用场景ID
            "page": 1,//页码
            "rows": 10//条数
          };
          this.$store.dispatch("initApplicableScene",options)
            .then(
              (suc)=>{
              },
              ()=>{},
            );
        },
        goDetail(item){
          this.overBoxContent=item.sos_us_Content;
          this.overBoxIsShow=true;
        },
        goBack(){
          this.overBoxIsShow=false;
        },
      },
    }
</script>
<style scoped type="text/less" lang="less">
  @rem:20rem;

  .contentBox{
    overflow-y: scroll;
  }
  .overBoxContent{
    width: 100%;
    height: 100%;
    /*background-color: red;*/
    padding: 100/@rem 20/@rem 0/@rem 20/@rem;
    overflow-y:scroll
  }
  .trangle{
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    width: 20/@rem;
    height: 20/@rem;
    transform:rotate(45deg);
  }
  .goBack{
    height: 100/@rem;
    width: 100%;
    background-color: #562dd6;
    padding: 35/@rem 20/@rem 20/@rem 20/@rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .overBox{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: white;
  }
  .container{
    position: fixed;
    z-index: 1;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .headName{
    color: white;
    font-size: 35/@rem;
    line-height: 100/@rem;
    margin-left: 20/@rem  ;
  }
  header{
    /*position: fixed;*/
    /*z-index: 2;*/
    /*top: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    width: 100%;
    height: 100/@rem;
    background-color: #562dd6;
  }
  .contentBox{

  }
  .content{

    border-bottom:1px solid silver;
    padding: 10/@rem 20/@rem;
    height: 120/@rem;
    /*background-color: black;*/
    overflow: hidden;
  }
  .content>.contentLeftBox>img{
    height: 100%;
    width:100%;
    display: block;
  }
  .contentLeftBox{
    float: left;
    height: 100/@rem;
    /*width:25%;*/
    width:130/@rem;
    padding: 5/@rem 0;
    margin-right: 10/@rem;
  }
  .contentRightBox{
    /*overflow: hidden;*/
    height: 100/@rem;
    /*word-break: normal;*/
    /*width:75%;*/
    width:100%;
    /*<!--padding-left:200/@rem;-->*/
    /*background-color: red;*/
  }
  .contentTitle{
    height:80/@rem;
    line-height:30/@rem;
    font-weight:bold;
    font-size: 25/@rem;
    /*<!--margin-bottom:20/@rem;-->*/
  }
  .contentTimeBox{
    height:20/@rem;
    line-height:20/@rem;
    font-size: 12/@rem;
    color: #8e8e8e;
  }
</style>
