<template>
    <div>
      <header>用户手册</header>
      <div class="container">
        <ul class="userManualBox">
          <li v-for="item,index in initUserManualList" @click="goOverBox(item)">
            {{item.sos_um_Title}}
          </li>
        </ul>
      </div>
      <div v-show="overBoxIsDisplay" class="overBox">
        <div class="headBox">{{headTitle}}</div>
        <div class="overBoxContent">
          <img :src="overBoxContent">
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import{mapGetters} from'vuex';
    export default {
      props: [],
      computed:mapGetters([
        'initUserManualList',
      ]),
      data(){
        return{
          overBoxIsDisplay:false,
          headTitle:'',
          overBoxContent:'',
        }
      },
      created(){
        this.initData();
      },
      methods:{
        initData(){
          let options={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "sos_um_ID": "",//用户手册ID
            "page": 1,//页码
            "rows": 10//条数
          };
          this.$store.dispatch('initUserManual',options)
            .then(
              ()=>{},
              ()=>{},
            );
        },
        goOverBox(item){
          this.overBoxIsDisplay=true;
          this.headTitle=item.sos_um_Title;
          this.overBoxContent=item.sos_um_ImgUrl;
        },
      },
    }
</script>
<style scoped type="text/less" lang="less">
  @rem:30rem;
  .overBoxContent{
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 150/@rem;
    overflow:scroll;
  }
  .overBoxContent>img{
    width: 100%;
  }
  .headBox{
    color: white;
    height: 150/@rem;
    background-color: royalblue;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 0 20/@rem;
    line-height: 150/@rem;
    font-size: 45/@rem;
    z-index: 3;
  }
  .overBox{
    position: fixed;
/*    top: 150/@rem;*/
    right: 0;
    left: 0;
    bottom: 0;
    /*background-color: red;*/
    padding:0 20/@rem;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  header{
    color: white;
    height: 150/@rem;
    background-color: royalblue;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 0 20/@rem;
    line-height: 150/@rem;
    font-size: 45/@rem;
    z-index: 1;
  }
  .container{
    z-index: 1;
    position: fixed;
    top: 150/@rem;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    padding:0 20/@rem;
  }
  .userManualBox>li{
    width:100%;
    height:100/@rem;
    border-bottom: 1px solid silver;
    line-height: 100/@rem;
    text-align: left;
    font-size: 40/@rem;
  }
</style>
