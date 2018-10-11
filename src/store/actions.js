/**
 * Created by leibo on 2018/10/8.
 */
import {getNewStr,getNewStrHly} from '@/assets/js/public'
export default {
  initSwiperList({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/SowingPic/AndroidSelectMx', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          let arr = data.dataSpic;
          arr = arr.map(item=>{
            return {
              img:item.sos_sp_ImageUrl,
              title:item.sos_sp_Title
            }
          })
          commit('initSwiperList',arr)
          commit('initScrollingMessageList',data.dataSmsg)
          relove(data.resultcontent);
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //注册发送短信
  VerificationCode(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/UserInfo/SosSendMessage', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent);
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //注册提交
  registerSubmit(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStrHly + '/UserInfo/RegByCode', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent);
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //登录提交
  loginSubmit({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStrHly + '/UserInfo/Login', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          localStorage.setItem('userInfo',JSON.stringify(data.data))
          commit('setUserInfo',data.data)
          relove(data.resultcontent);
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //上拉加载报警信息
  AlarmRecordUpCallback({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/Alarm/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.data);
        } else {
          reject(data.resultcontent)
        }
      })
    })
  }
}
