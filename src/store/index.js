import { createStore } from 'vuex'
import balance from './balance'
import intake from './intake'

export default createStore({
  modules: {
    balance: {
      namespaced: true,
      ...balance
    },

    intake: {
      namespaced: true,
      ...intake
    }
  }
})
