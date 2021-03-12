import {ADD_TO_CART,ADD_COUNTER} from './mutaion-types'

export default {
    addCart({state,commit},playload){
      const product = state.goodsList.find(item => {
        return item.id === playload.id
      })
      if(product) {
        commit(ADD_COUNTER,product)
      }else {
        commit(ADD_TO_CART,playload)
      }
    }
}