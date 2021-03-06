/**
 * Created by leibo on 2018/10/8.
 */
// 路由懒加载
const getComponent = (name) => () => import(`../views/${name}.vue`);

export default [
  //首页
  {
    path: '/',
    name: 'Home',
    component: getComponent('Home')
  },
  //设置
  {
    path: '/settingPage',
    name: 'SettingPage',
    component: getComponent('SettingPage')
  },
  //用户手册
  {
    path: '/userManual',
    name: 'UserManual',
    component: getComponent('UserManual')
  },

  //报警须知
  {
    path: '/alarmNeeds',
    name: 'AlarmNeeds',
    component: getComponent('AlarmNeeds')
  },
  //我的位置
  {
    path: '/myLocation',
    name: 'MyLocation',
    component: getComponent('MyLocation')
  },
  //内部通告
  {
    path: '/notice',
    name: 'Notice',
    component: getComponent('Notice')
  },
  //登录
  {
    path: '/login',
    name: 'Login',
    component: getComponent('Login')
  },
  //注册
  {
    path: '/register',
    name: 'Register',
    component: getComponent('Register')
  },
  //SOS适用场景
  {
    path: '/applicableScene',
    name: 'ApplicableScene',
    component: getComponent('ApplicableScene')
  },
  //忘记密码
  {
    path: '/forgetPassword',
    name: 'ForgetPassword',
    component: getComponent('ForgetPassword')
  },
  //修改密码
  {
    path: '/changePassword',
    name: 'ChangePassword',
    component: getComponent('ChangePassword')
  },
  //下载
  {
    path: '/downLoad',
    name: 'DownLoad',
    component: getComponent('DownLoad')
  },
  //个人信息
  {
    path: '/personalCenter',
    name: 'PersonalCenter',
    component: getComponent('PersonalCenter')
  },
  //报警记录
  {
    path: '/alarmRecord',
    name: 'AlarmRecord',
    component: getComponent('AlarmRecord')
  },
  //帮助中心
  {
    path: '/helpCenter',
    name: 'HelpCenter',
    component: getComponent('HelpCenter')
  },
  //用户分享
  {
    path: '/eWMShare',
    name: 'EWMShare',
    component: getComponent('EWMShare')
  },
  //用户反馈
  {
    path: '/userFeedback',
    name: 'UserFeedback',
    component: getComponent('UserFeedback')
  },
  //用户反馈
  {
    path: '/userDeal',
    name: 'UserDeal',
    component: getComponent('userDeal')
  },
  //我的守护者
  {
    path: '/myGuardian',
    name: 'MyGuardian',
    component: getComponent('MyGuardian')
  },
  //添加我的守护者
  {
    path: '/guardianAdd',
    name: 'GuardianAdd',
    component: getComponent('GuardianAdd')
  },
  //紧急联系人
  {
    path: '/urgentContacts',
    name: 'UrgentContacts',
    component: getComponent('UrgentContacts')
  },
  //添加紧急联系人
  {
    path: '/addUrgentContacts',
    name: 'AddUrgentContacts',
    component: getComponent('AddUrgentContacts')
  },
  //修改紧急联系人
  {
    path: '/updateUrgentContacts',
    name: 'UpdateUrgentContacts',
    component: getComponent('UpdateUrgentContacts')
  },
  //SOS地图
  {
    path: '/sOSMap',
    name: 'SOSMap',
    component: getComponent('SOSMap')
  }
]
