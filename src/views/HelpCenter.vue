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
        <div v-for="item,index in searchUserBookList" @click="helpDetail(item)" class="clearfix">
          <span>{{item.sos_um_Title}}</span>
          <i></i>
        </div>
      </div>
    </section>
    <div v-show="contentIsShow" class="contentDetail">
      <div class="boxTop">
        <div class="goBack" @click="goBack"></div>
      </div>
      <div class="contentDetailContent">
        <div class="detailContent">{{detailContent}}</div>
        <img class="detailContentImg" :src="detailContentImg"  alt="" width="100%" >
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {InlineXSwitch} from 'vux'
  export default {
    components: {
      InlineXSwitch
    },
    computed: mapGetters([
      'searchUserBookList',
    ]),
    data() {
      return {
        detailContent:'',
        detailContentImg:'',
        contentIsShow:false,
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
    created(){
      this.searchUserBook();
    },
    methods: {
      //返回上一层
      goBack(){
        this.contentIsShow=false;
      },
      //查询用户手册
      searchUserBook(){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "sos_um_ID": "",//用户手册ID
          "page": 1,//页码
          "rows": 10//条数
        };
        this.$store.dispatch("searchUserBook",options)
          .then();
      },
      //去顶页
      goTopPage() {
        this.$router.go(-1)
      },
      //用户详情
      helpDetail(item){
        this.detailContent='';
        this.detailContentImg='';
        this.detailConten=item.sos_um_Content;
        this.detailContentImg=item.sos_um_ImgUrl;
        this.contentIsShow=true;
      },
    },
  }
</script>
<style scoped lang="less" type="text/less">
  @rem: 20rem;

  .goBack{
    width: 25/@rem;
    height: 25/@rem;
    transform: rotate(45deg);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
  }

  .boxTop{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 25/@rem;
    background-color: #2e9bff;
    height: 80/@rem;
    width: 100%;
  }
  .contentDetailContent{
    overflow: scroll;
    width: 100%;
    height: 100%;
    margin-top: 80/@rem;
  }

  .detailContent{

  }

  .detailContentImg{

  }

  .contentDetail{
    position: fixed;
    top: 0;
    right: 0;
    left: 0 ;
    bottom: 0;
    z-index: 10;
    background-color: white;
  }
  .contentDetail:last-of-type{
    /*overflow: scroll;*/
    /*background-color: royalblue;*/
  }

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
    background-color: #f6f6f6;
    overflow-y: auto;
    overflow-x: hidden;
  }

  section > div {
    background-color: #fff;
    margin-top: 20/@rem;
    padding: 0 20/@rem;
    font-size: 26/@rem;
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
