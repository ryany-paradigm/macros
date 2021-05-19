export default class {
  constructor (store) {
    this.store = store
  }

  get (query) {
    return this.store.state.intake
  }

  add (command) {
    this.store.dispatch('intake/add', command)
    return {}
  }
}
