/**
 * Created by leibo on 2018/10/8.
 */
import getters from './getters'

const state = {
  swiperList:[],//轮播图
  scrollingMessageList:[],//滚动消息
  userInfo:{},//用户登录信息
  searchAarmList:[],//查询报警信息
  searchAlarmInfoList:[],//查询报警记录
  selectInternalCirculationList:[],//查询内部通告列表
  searchUserBookList:[],//查询用户手册
  searchContactList:[],//查询紧急联系人
  initAlarmNeedsList:[],//查询报警须知
  initApplicableSceneList:[],//查询适用场景
  initUserManualList:[],//查询用户手册
  initPersonalCenterList:[],//查询用户信息
};

const mutations = {
  initSwiperList(state,data){
    state.swiperList = data;
  },
  searchContact(state,data){
    state.searchContactList = data;
  },
  initScrollingMessageList(state,data){
    state.scrollingMessageList = data;
  },
  searchAarmAction(state,data){
    state.searchAarmList = data;
  },
  searchUserBook(state,data){
    state.searchUserBookList = data;
  },
  setUserInfo(state,obj){
    state.userInfo = obj;
  },
  searchAlarmInfoAction(state,data){
    state.searchAlarmInfoList = data;
  },
  selectInternalCirculation(state,data){
    state.selectInternalCirculationList = data;
  },
  initAlarmNeeds(state,data){
    state.initAlarmNeedsList = data;
  },
  initApplicableScene(state,data){
    state.initApplicableSceneList = data;
  },
  initUserManual(state,data){
    state.initUserManualList = data;
  },
  initPersonalCenter(state,data){
    state.initPersonalCenterList = data;
  },

};

export default {
  getters,
  state,
  mutations
}
