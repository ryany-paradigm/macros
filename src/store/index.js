import { createStore } from 'vuex'
import balance from './balance'
import intake from './intake'
import weight from './weight'

export default createStore({
  modules: {
    balance: {
      namespaced: true,
      ...balance
    },

    intake: {
      namespaced: true,
      ...intake
    },

    weight: {
      namespaced: true,
      ...weight
    }
  }
})
