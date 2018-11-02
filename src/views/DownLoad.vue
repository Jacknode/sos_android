<template>
    <div>
      <section>
        <img class="imgBox" src="../assets/img/downLoad.jpg" />
        <div class="bottomBox"></div>
      </section>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: [],
    }
</script>
<style scoped>
  section{
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom:0;
    position: relative;
  }

  .imgBox{
    width: 100%;
    height: 100%;
  }

  .bottomBox{
    width: 70%;
    height: 5%;
    /*background-color: red;*/
    position: absolute;
    bottom: 29%;
    left: 14%;
    border-radius: 45px;
  }
</style>
