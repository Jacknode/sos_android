<template>
  <div>
    <!--内容区块-->
    <section>
      <!--定位成功-->
      <div class="locationL">
        <ul class="locationList">
          <li><strong>定位成功</strong></li>
<!--          <li v-for="item,index in  locationList">
            <span class="locationListName">{{item.name}} :</span>
            <span class="locationListContent">{{item.content}}</span>
          </li>-->
          <li>
            <span class="locationListName">经度 :</span>
            <span class="locationListContent">{{locationObj.position.lng}}</span>
          </li>
          <li>
            <span class="locationListName">纬度 :</span>
            <span class="locationListContent">{{locationObj.position.lat}}</span>
          </li>
          <li>
            <span class="locationListName">国家 :</span>
            <span class="locationListContent">中国</span>
          </li>
          <li>
            <span class="locationListName">省 :</span>
            <span class="locationListContent">{{locationObj.addressComponent.province}}</span>
          </li>
          <li>
            <span class="locationListName">市 :</span>
            <span class="locationListContent">{{locationObj.addressComponent.city}}</span>
          </li>
          <li>
            <span class="locationListName">市编码 :</span>
            <span class="locationListContent">{{locationObj.addressComponent.citycode}}</span>
          </li>
          <li>
            <span class="locationListName">区 :</span>
            <span class="locationListContent">{{locationObj.addressComponent.district}}</span>
          </li>
          <li>
            <span class="locationListName">区域码 :</span>
            <span class="locationListContent">{{locationObj.addressComponent.adcode}}</span>
          </li>
          <li>
            <span class="locationListName">地址 :</span>
            <span class="locationListContent">{{locationObj.formattedAddress}}</span>
          </li>
        </ul>
      </div>
      <!--短信类容-->
      <div class="textContent">
        <ul class="locationList">
          <li><strong>短信内容:</strong></li>
<!--          <li v-for="item,index in  textContent">
            <span class="locationListName">{{item.name}} :</span>
            <span class="locationListContent">{{item.content}}</span>
          </li>-->
          <li>
            <span class="locationListName">经度 :</span>
            <span class="locationListContent">{{locationObj.position.lng}}</span>
          </li>
          <li>
            <span class="locationListName">纬度 :</span>
            <span class="locationListContent">{{locationObj.position.lat}}</span>
          </li>
          <li>
            <span class="locationListName">地址 :</span>
            <span class="locationListContent">{{locationObj.formattedAddress}}</span>
          </li>
        </ul>
      </div>
    </section>
    <!--短信报警-->
    <footer>
      短信报警
    </footer>
    <div id="container"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  import {XHeader, TransferDom, Swiper, SwiperItem, Popup, ConfirmPlugin, AlertPlugin} from 'vux';

  Vue.use(ConfirmPlugin);
  Vue.use(AlertPlugin);
  export default {
    props: [],
    data() {
      return {
        textContent: [
          {
            name: '经度',
            content: '111.1234',
          },
          {
            name: '纬度',
            content: '111.1234',
          },
          {
            name: '地址',
            content: '四川省泸州市江阳区308省道18号靠近泸州长江液压件成套生产有限公司',
          },
        ],
        locationList: [
          {
            name: '经度',
            content: '111.1234',
          },
          {
            name: '纬度',
            content: '111.1234',
          },
          {
            name: '国家',
            content: '中国',
          },
          {
            name: '省',
            content: '四川省',
          },
          {
            name: '市',
            content: '泸州市',
          },
          {
            name: '市编码区',
            content: '0830',
          },
          {
            name: '区域码地址',
            content: '510502',
          },
          {
            name: '地址',
            content: '四川省泸州三亚感情308省道18靠近泸州地址',
          },
          {
            name: '定位时间',
            content: '2018-10-29  14:38:56',
          },
        ],
        map: "",
        locationObj: {
          position:{
            lng:'',
            lat:'',
          },
          addressComponent:{
            province:"",
            city:'',
            citycode:'',
            adcode:'',
            district:'',
          },
          formattedAddress:'',
        },
      }
    },
    created() {

    },
    methods: {
      //初始化定位信息
      initPosition() {

        var mapObj = new AMap.Map('container', {
          resizeEnable: true
        })
        mapObj.plugin('AMap.Geolocation', ()=>{
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            noIpLocate: 2,
            noGeoLocation: 1,
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          });
          mapObj.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, 'complete', this.onComplete);//返回定位信息
          AMap.event.addListener(geolocation, 'error', this.onError);      //返回定位出错信息
        });
      },
      onComplete(data){
        if(data){
          this.locationObj=data;
        };
      },
      onError(data){

      },
    },
    mounted() {
      this.$nextTick(() => {
        this.initPosition();
      })
    },
  }
</script>
<style scoped lang="less" type="text/less">
  @rem: 20rem;

  #container {
    display: none;
    height: 400/@rem;
    width: 100%;
    background-color: #c8f922;
    position: fixed;
    top: 0;
    z-index: 100;
  }

  section {
    position: fixed;
    width: 100%;
    height: 80%;
    /*bottom: 50%;*/
    /*overflow-y:scroll;*/
    /*background-color: red;*/
  }

  footer {
    width: 200/@rem;
    height: 100/@rem;
    background-color: #2a0898;
    color: white;
    font-size: 30/@rem;
    line-height: 100/@rem;
    text-align: center;
    font-weight: 400;
    position: fixed;
    bottom: 10%;
    left: 200/@rem;

  }

  .locationL {
    width: 95%;
    padding: 20/@rem;
    border: 1/@rem solid silver;
    margin: 2.5% 2.5% 0 2.5%;
    box-shadow: 1px 1px 3px #888888;
  }

  .textContent {
    width: 95%;
    padding: 20/@rem;
    border: 1/@rem solid silver;
    margin: 2.5% 2.5% 0 2.5%;
    box-shadow: 1px 1px 3px #888888;
  }

  .locationList > li {
    line-height: 40/@rem;
  }

  .locationListName {
    width: 100/@rem;
    display: block;
    float: left;
    color: #111111;
  }

  .locationListContent {
    color: #818181;
  }

  #iCenter {
    width: 300px;
    height: 280px;
    border: 1px #000 solid;
    margin: 20px auto;
  }
</style>
