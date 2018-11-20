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
  //添加联系人
  sureAdd(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EmergencyContactPerson/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (data.resultcode == "01") {
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
  //修改个人信息
  updatePersonalCenter(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStrHly + '/UserInfo/Update', JSON.stringify(data), {
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
  //添加签到
  addSignIn(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStrHly + '/SignIn/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (data.resultcode == "008"){
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
  //修改联系人
  updateContact(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStrHly + '/EmergencyContactPerson/Update', JSON.stringify(data), {
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
          } else if (data.resultcode == '002'){
            relove(data.resultcontent)
          } else{
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
          if (Number(data.resultcode) == 200) {
            relove(data.totalRows);
            commit("searchUserBook",data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询紧急联系人
  searchContact({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EmergencyContactPerson/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.totalRows);
            commit("searchContact",data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询报警须知
  initAlarmNeeds({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/Document/SelectApp', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.data);
            commit("initAlarmNeeds",data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //初始化适用场景
  initApplicableScene({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/UsageScenario/AndroidSelect', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.totalRows);
            commit("initApplicableScene",data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //初始化用户手册
  initUserManual({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/UserManual/SelectApp', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.totalRows);
            commit("initUserManual",data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //初始化用户信息
  initPersonalCenter({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/UserInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.totalRows);
            commit("initPersonalCenter",data.data[0])
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  initUserDeal(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/Document/SelectApp', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.data[0]);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  }
}
