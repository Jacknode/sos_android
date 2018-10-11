/**
 * Created by leibo on 2018/10/8.
 */
// 路由懒加载
const getComponent = (name) => () => import(`../views/${name}.vue`);

export default [
  {
    path: '/',
    name: 'Home',
    component: getComponent('Home')
  },
  {
    path: '/settingPage',
    name: 'SettingPage',
    component: getComponent('SettingPage')
  },
  {
    path: '/login',
    name: 'Login',
    component: getComponent('Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: getComponent('Register')
  },
  {
    path: '/forgetPassword',
    name: 'ForgetPassword',
    component: getComponent('ForgetPassword')
  },
  {
    path: '/personalCenter',
    name: 'PersonalCenter',
    component: getComponent('PersonalCenter')
  },
  {
    path: '/alarmRecord',
    name: 'AlarmRecord',
    component: getComponent('AlarmRecord')
  },
  {
    path: '/helpCenter',
    name: 'HelpCenter',
    component: getComponent('HelpCenter')
  },
  {
    path: '/eWMShare',
    name: 'EWMShare',
    component: getComponent('EWMShare')
  }
]
