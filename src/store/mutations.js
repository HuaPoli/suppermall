import {ADD_TO_CART,ADD_COUNTER} from './mutaion-types'
export default  {
    [ADD_TO_CART](state,playload) {
      playload.count = 1
      state.goodsList.push(playload)
    },
    [ADD_COUNTER](state,playload) {
      playload.count += 1
    }
  }