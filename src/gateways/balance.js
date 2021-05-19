export default class {
  constructor (vuex) {
    this.vuex = vuex
  }

  get (request) {
    return this.vuex.state.balance
  }

  store (request) {
    this.vuex.dispatch('balance/store', request)
    return {}
  }
}
