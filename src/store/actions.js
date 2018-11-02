/**
 * Created by leibo on 2018/10/8.
 */
import {getNewStr,getNewStrHly} from '@/assets/js/public'
// import request from '@/utils/request'
export default {
  //添加报警
  addAlarmAction(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/Alarm/Insert', JSON.stringify(data), {
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
  //修改密码
  updatePasswordAction({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStrHly + '/UserInfo/UpdatePassword', JSON.stringify(data), {
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
  },
  //用户反馈
  feedbackSubmit({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/CustomerFeedBack/Insert', JSON.stringify(data), {
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
  //查询接警状态
  searchAarmAction({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/Alarm/SelectStatus', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('searchAarmAction',data.data)
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询报警记录
  searchAlarmInfoAction({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/Alarm/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('searchAlarmInfoAction',data.data)
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询今天是否签到
  searchSignInIsTrue({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/SignIn/IsSignInToDay', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (data.resultcode == '001') {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询内部通告
  selectInternalCirculation({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/InternalCirculation/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log(data)
          if (Number(data.resultcode) == 200) {
            relove(data.totalRows);
            commit("selectInternalCirculation",data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询用户手册
  searchUserBook({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/UserManual/SelectApp', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log(data)
          if (Number(data.resultcode) == 200) {
            relove(data.totalRows);
            commit("searchUserBook",data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
}
