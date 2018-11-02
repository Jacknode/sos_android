<template>
    <div>
      <div class="container">
        <ul class="newsList">
          <li class="news" v-for="item,index in selectInternalCirculationList" @click="newsDetail(item)">
            <span>{{item.sos_ic_Title}}</span>
            <div class="timeBox">{{item.sos_ic_CreateTime | getUseTime}}</div>
          </li>
        </ul>
      </div>
      <div v-show="isShow"  class="newsDetailBox">
        <header class="linheight">{{newsDetailObj.sos_ic_type}}</header>
        <div class="linheight">可见区域: {{newsDetailObj.sos_ic_AreaNmaes}}</div>
        <div class="linheight">{{newsDetailObj.sos_ic_CreateTime}}</div>
        <div class="linheight">
          {{newsDetailObj.sos_ic_body}}
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    export default {
        props: [],
      computed:mapGetters([
        'selectInternalCirculationList',
      ]),
      data(){
          return{
            isShow:false,
            newsDetailObj:{
              sos_ic_type:'',
              sos_ic_body:'',
              sos_ic_Title:'',
              sos_ic_ID:'',
              sos_ic_CreateTime:'',
              sos_ic_AreaNmaes:'',
              sos_ic_AreaIDs:'',
            },
            newsList:[
              {
                name:'做陌生人的车,请你一定要记住以下这几条自救方法!!!'
              },
              {
                name:'做陌生人的车,请你一定要记住以下这几条自救方法!!!'
              },
              {
                name:'做陌生人的车,请你一定要记住以下这几条自救方法!!!'
              },
            ],
          }
      },
      created(){
        this.selectInternalCirculation();
      },
      methods:{
        newsDetail(item){
          console.log(111,item)
          this.newsDetailObj.sos_ic_type=item.sos_ic_type;
          this.newsDetailObj.sos_ic_body=item.sos_ic_body;
          this.newsDetailObj.sos_ic_Title=item.sos_ic_Title;
          this.newsDetailObj.sos_ic_ID=item.sos_ic_ID;
          this.newsDetailObj.sos_ic_CreateTime=item.sos_ic_CreateTime;
          this.newsDetailObj.sos_ic_AreaNmaes=item.sos_ic_AreaNmaes;
          this.newsDetailObj.sos_ic_AreaIDs=item.sos_ic_AreaIDs;
          this.isShow=true;
        },
        //查询内部通告
        selectInternalCirculation(){
          let options = {
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "sos_ic_ID": "",//通告ID（主键自增长）
            "sos_ic_Title": "",//通告标题
            "sos_ic_body": "",//通告内容
            "sos_ic_type": "hly",//通告类型（110是110系统通告、119是119系统通告、120是120系统通告\hly）
            "sos_ar_ID": "",//区域ID
            "page": 1,//页码
            "rows": 20//条数
          };
          this.$store.dispatch("selectInternalCirculation",options)
            .then();
        },
      },
    }
</script>
<style scoped lang="less" type="text/less">
  @rem: 20rem;
  .container{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .news{
/*    height: 100/@rem;*/
    width: 100%;
    border-bottom: 1px solid silver;
    padding: 5/@rem 10/@rem 20/@rem 10/@rem;
    line-height: 50/@rem;
    font-size: 25/@rem;
  }
  .newsDetailBox{
    width:100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    padding: 20/@rem;
  }
  .linheight{
    line-height: 50/@rem;
  }

  .timeBox{
    /*float: right;*/
  }
</style>
