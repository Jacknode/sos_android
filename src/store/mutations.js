/**
 * Created by leibo on 2018/10/8.
 */
import getters from './getters'

const state = {
  swiperList:[],//轮播图
  scrollingMessageList:[],//滚动消息
};

const mutations = {
  initSwiperList(state,data){
    state.swiperList = data;
  },
  initScrollingMessageList(state,data){
    state.scrollingMessageList = data;
  },
};

export default {
  getters,
  state,
  mutations
}
