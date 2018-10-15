<template>
  <div>
    <header>
      <div class="leftIcon" @click="goTopPage">
        <i></i>
      </div>
      <strong>报警记录</strong>
    </header>
    <!--<section>-->
      <!--mescroll滚动区域的基本结构-->
      <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
        <ul class="recordList">
          <li v-for="item,index in AlarmRecordUpCallbackList">
            <strong>{{item.sm_al_TypeName}}</strong>
            <div class="policeTime clearfix">
              <i></i>
              <span>{{item.sm_al_CreateTime | getUseTime}}</span>
            </div>
            <div class="policeAddress clearfix">
              <i></i>
              <div>
                <span>{{item.sm_al_Address}}</span>
              </div>
            </div>
          </li>
        </ul>
        <!--内容...-->
      </mescroll-vue>
      <img src="../assets/img/policeListBg.png" class="imgBg" v-show="!AlarmRecordUpCallbackList.length" alt="">

    <!--</section>-->
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {InlineXSwitch} from 'vux'
  // 引入mescroll的vue组件
  import MescrollVue from 'mescroll.js/mescroll.vue'

  export default {
    components: {
      MescrollVue,
      InlineXSwitch
    },
    computed: mapGetters([
      'userInfo',
    ]),
    data() {
      return {
        AlarmRecordUpCallbackList:[],
        options:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token": "",
          "sm_al_ID": "",//报警信息编号
          "sm_al_UserID": "",//报警人账号
          "sm_al_UserName": "",//报警人名称
          "sm_al_UserPhone": "",//报警人电话
          "sm_al_CertNo": "",//报警人身份证号码
          "sm_al_Type": "",//报警类型
          "sm_al_TypeName": "",//报警类型名称
          "sm_al_Status": "",//报警状态(0未处理 1处理中 2处理完毕)
          "sm_al_IsDelete": "",//是否删除（0未删除1已删除）
          "sm_al_CityOrContryID": "",//市或区县ID
          "page": 1,//页码
          "rows": 5//条数
        },
        value: false,
        mescroll: null, // mescroll实例对象
        mescrollDown:{}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
        mescrollUp: { // 上拉加载的配置.
          callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
          //以下是一些常用的配置,当然不写也可以的.
          page: {
            num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
            size: 5 //每页数据条数,默认10
          },
          htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
          noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
          toTop: {
            //回到顶部按钮
            src: "https://raw.githubusercontent.com/mescroll/mescroll/master/vue-demo/static/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
            offset: 1000 //列表滚动1000px才显示回到顶部按钮
          },
          empty: {
            //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
            warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
            icon: "https://raw.githubusercontent.com/mescroll/mescroll/master/vue-demo/static/mescroll/mescroll-totop.png", //图标,默认null,支持网络图
            tip: "暂无相关数据~" //提示
          }
        },
        dataList: [] // 列表数据
      }
    },
    methods: {
      // mescroll组件初始化的回调,可获取到mescroll对象
      mescrollInit (mescroll) {
        this.mescroll = mescroll
      },
      //上拉加载
      upCallback(page, mescroll){
        console.log(page, mescroll)
        this.options.page = page.num;
        this.options.sm_al_UserID = this.userInfo.sm_ui_ID
        this.$store.dispatch('AlarmRecordUpCallback',this.options)
        .then((arr)=>{

          // 如果是第一页需手动制空列表
          if (page.num === 1) this.AlarmRecordUpCallbackList = []
          // 把请求到的数据添加到列表
          this.AlarmRecordUpCallbackList = this.AlarmRecordUpCallbackList.concat(arr)

          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length)
          })

        }).catch((e) => {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr()
        })
      },
      goTopPage() {
        this.$router.go(-1)
      }
    },
  }
</script>
<style scoped lang="less" type="text/less">
  @rem: 20rem;

  input {
    border: none;
  }

  .imgBg  {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
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

  .mescroll {
    height: auto;
    position: fixed;
    top: 80/@rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20/@rem;
  }

  .recordList > li {
    background-color: #fff;
    padding: 0 25/@rem 20/@rem;
    -webkit-border-radius: 10/@rem;
    -moz-border-radius: 10/@rem;
    border-radius: 10/@rem;
    margin-bottom: 20/@rem;
  }

  .recordList > li:last-of-type {
    margin-bottom: 0;
  }

  .recordList strong {
    display: block;
    font-size: 26/@rem;
    line-height: 70/@rem;
    color: #000;
    border-bottom: 1px dashed #b3b1b1;
    margin-bottom: 11/@rem;
  }

  .recordList div {
    font-size: 23/@rem;
    color: #666;
  }

  .policeTime {
    line-height: 53/@rem;
  }

  .policeTime > i {
    float: left;
    width: 27/@rem;
    height: 27/@rem;
    background: url("../assets/img/alarmRecord/time.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-top: 13/@rem;
    margin-right: 20/@rem;
    margin-left: 5/@rem;
  }

  .policeTime > span {
    float: left;
  }

  .policeAddress > i {
    float: left;
    width: 25/@rem;
    height: 35/@rem;
    background: url("../assets/img/alarmRecord/posiiton.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 8/@rem 20/@rem 0 5/@rem;
  }

  .policeAddress > div {
    overflow: hidden;
    padding-top: 10/@rem;
  }

  .policeAddress span {
    float: left;
    width: 100%;
    line-height: 30/@rem;
  }

</style>
