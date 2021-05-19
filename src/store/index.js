import { createStore } from 'vuex'
import balance from './balance'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    balance: {
      namespaced: true,
      ...balance
    }
  }
})
