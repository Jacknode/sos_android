/**
 * Created by leibo on 2018/10/8.
 */
import {getNewStr} from '@/assets/js/public'
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
          console.log(arr)
          commit('initSwiperList',arr)
          commit('initScrollingMessageList',data.dataSmsg)
          relove(data.resultcontent);
        } else {
          reject(data.resultcontent)
        }
      })
    })
  }
}
