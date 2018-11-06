<template>
    <div>
      <div class="container"></div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex';
    export default {
      props: [],
      created(){

      },
      conputed:Object.assign(mapGetters([
        'initAlarmNeedsList',
      ])),
      methods:{
          initData(){
            let options = {
              "loginUserID": "huileyou",
              "loginUserPass": "123",
              "operateUserID": "",
              "operateUserName": "",
              "pcName": "",
              "sos_doc_ID":"1",//文档ID
            };
            this.$store.dispatch('initAlarmNeeds',options)
              .then(
                (suc)=>{
                  document.getElementsByClassName('container')[0].innerHTML=suc[0].sos_doc_Content;
              },
                ()=>{}
              );
          },
        },
      mounted(){
        this.$nextTick(()=>{
          this.initData();
        });
      },
    }
</script>
<style scoped type="text/less" lang="less">
  @rem: 20rem;

  .container{
    position: fixed;
    top: 0;
    bottom: 0;
    right:0;
    left: 0;
    padding: 20/@rem;
  }
</style>
