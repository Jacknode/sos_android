<template>
  <div id="app">
    <x-header>
      <span>紧急救助</span>
      <x-icon slot="overwrite-left" type="navicon" size="35"
              style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>

    <div v-transfer-dom>
      <popup v-model="show8" position="left" width="50%">
        <div class="position-horizontal-demo">
          <span class="vux-close" @click="show8 = false"></span>
        </div>
      </popup>
    </div>
    <!-- rourer-view 作为默认插槽内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import {XHeader,Popup,TransferDom} from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Popup
    },
    name: 'app',
    data(){
      return {
        show8:false,
        isShowNav: false,
        drawerVisibility: false
      }
    },
    mounted(){
      let s = document.querySelector('.vux-header-left');
      s.onclick=()=>{
        this.show8 = true;
        console.log(1)
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
  .position-horizontal-demo {
    position: relative;
    height: 100%;
  .vux-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
  }
</style>
