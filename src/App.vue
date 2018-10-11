<template>
  <div id="app">

    <!-- rourer-view 作为默认插槽内容 -->
    <router-view></router-view>
    <div class="toUpdateWrap" v-show="UpdateD">
      <div class="toUpdateBox">
        <div class="updateBg">
          <div class="updatePlane"></div>
          <i @click="cancle"></i>
        </div>
        <div class="toUpdateContent">
          <div class="aboutEdition">
            <span>最新版本: V{{obj.sm_as_VersionNo}}</span>
            <span>新版本大小: {{obj.sm_as_Size}}</span>
          </div>
          <div class="newContent">
            <strong>更新内容:</strong>
            <span>{{obj.sm_as_Describe}}</span>
          </div>
          <a href="javascript:;" @click="updateEdition">立即更新</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getNewStrHly} from '@/assets/js/public'

  export default {
//    directives: {
//      TransferDom
//    },
    components: {},
    name: 'app',
    data() {
      return {
        UpdateD: true,
        obj: {},
      }
    },
    methods: {
      cancle(){
        this.$store.commit('setIsOff', false)
        this.UpdateD = false
      },
      // 下载wgt文件
      createDownload() {
        plus.nativeUI.showWaiting("下载更新文件...");
        var downer = plus.downloader.createDownload(this.obj.sm_as_DownLoadUrl, {}, function (d, status) {
          if (status == 200) {
            plus.nativeUI.showWaiting("安装更新文件...");
            plus.runtime.install(d.filename, {}, function () {
              plus.nativeUI.closeWaiting();
              plus.nativeUI.alert("应用资源更新完成！", function () {
                plus.runtime.restart();
              });
            }, function (e) {
              plus.nativeUI.closeWaiting();
              plus.nativeUI.alert("安装更新文件失败[" + e.code + "]：" + e.message);
            });
          } else {
            plus.nativeUI.alert("下载更新失败！");
          }
          plus.nativeUI.closeWaiting();
        });
        downer.start();
      },
      //更新
      updateEdition(){
        this.createDownload()
      },
    },
    mounted() {

      var _this = this;
      mui.plusReady(function () {
        plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
          let version = wgtinfo.version;
          if (version) {
            let options = {
              "operateUserID": "",
              "operateUserName": "",
              "pcName": "",
              "loginUserID": "huileyou",
              "loginUserPass": "123",
              "token": "",
              "sm_as_AppID": "2"//2是sos
            }
            axios.post(getNewStrHly + '/AppStore/SelectNewest', JSON.stringify(options), {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            })
            .then((data) => {
              var resulte = data.data
              if (Number(resulte.resultcode) === 200) {
                _this.obj = resulte.data
                if (resulte.data.sm_as_VersionNo != version) {
                  _this.UpdateD = true;
                }
              }
            })
          }
        });
      })
    },
  }
</script>

<style lang="less" type="text/less">
  @rem:30rem;
  .toUpdateWrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 999;
  }

  .toUpdateBox {
    position: absolute;
    width: 530/@rem;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .updateBg {
    width: 100%;
    height: 280/@rem;
    background: url("http://hly.1000da.com.cn/assets/img/toUpdateBg.png") no-repeat center center;
    -webkit-background-size: cover;
    background-size: cover;
    -webkit-border-radius: 20/@rem 20/@rem 0 0;
    -moz-border-radius: 20/@rem 20/@rem 0 0;
    border-radius: 20/@rem 20/@rem 0 0;
  }

  .updatePlane {
    width: 103/@rem;
    height: 210/@rem;
    background: url("http://hly.1000da.com.cn/assets/img/plane.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position: absolute;
    top: -68/@rem;
    left: 50%;
    margin-left: -51/@rem;
    animation: rotatePlane 2s infinite;
    -moz-animation: rotatePlane 2s infinite;
    -webkit-animation: rotatePlane 2s infinite;
    -o-animation: rotatePlane 2s infinite;
  }

  .updatePlane.active {
    animation: myfirst 2s;
    -moz-animation: myfirst 2s;
    -webkit-animation: myfirst 2s;
    -o-animation: myfirst 2s;
  }

  @keyframes rotatePlane {
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  @keyframes myfirst {
    30% {
      transform: translateY(40px);
    }
    100% {
      transform: translateY(-1000px);
    }
  }

  .updateBg > i {
    position: absolute;
    width: 47/@rem;
    height: 47/@rem;
    right: 20/@rem;
    top: -90/@rem;
    background: url("./assets/img/home/closeUpdate.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .toUpdateContent {
    padding: 10/@rem 35/@rem 30/@rem;
    background-color: #fff;
    margin-top: -1px;
    -webkit-border-radius: 0 0 20/@rem 20/@rem;
    -moz-border-radius: 0 0 20/@rem 20/@rem;
    border-radius: 0 0 20/@rem 20/@rem;
  }
  .aboutEdition {
    font: bold 0.93@rem/1.66rem "微软雅黑";
    color: #333;
  }

  .aboutEdition > span {
    display: block;
  }
  .newContent {
    margin-top: 20/@rem;
    font: bold 0.93@rem/1.66rem "微软雅黑";
    color: #666;
  }

  .newContent > * {
    display: block;
  }

  .toUpdateContent > a {
    display: block;
    margin-top: 50/@rem;
    background-color: #f8921a;
    color: #ffffff;
    font: 1rem/2.66rem "微软雅黑";
    text-align: center;
  }

</style>
