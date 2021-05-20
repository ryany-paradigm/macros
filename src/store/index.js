import { createStore } from 'vuex'
import balance from './balance'
import goal from './goal'
import intake from './intake'
import weight from './weight'

export default createStore({
  modules: {
    balance: {
      namespaced: true,
      ...balance
    },

    goal: {
      namespaced: true,
      ...goal
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
