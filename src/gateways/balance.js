export default class {
  constructor (vuex) {
    this.vuex = vuex
  }

  store (request) {
    this.vuex.dispatch('balance/store', request)
    return {}
  }
}
