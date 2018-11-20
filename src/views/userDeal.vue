<template>
    <div v-html="htmlVal">

    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: [],
        data() {
            return {
              htmlVal:'法律'
            }
        },
        created() {
          this.initData()
        },
        methods: {
          initData(){
            let options = {
              "loginUserID": "huileyou",
              "loginUserPass": "123",
              "operateUserID": "",
              "operateUserName": "",
              "pcName": "",
              "sos_doc_ID":"2",//文档ID
            }
            this.$store.dispatch('initUserDeal',options)
              .then(data=>{
                this.htmlVal = data.sos_doc_Content;
              },err=>{
                console.log(err)
              })
          }
        },
    }
</script>
<style   lang="less" type="text/less">
  @r: 20rem;
h1,h2,h3,h4,h5,h6{
  padding: 30/@r;
  font-weight:bold;
}
</style>
