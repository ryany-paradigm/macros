export default class {
  constructor (store) {
    this.store = store
  }

  add (command) {
    this.store.dispatch('intake/add', command)
    return {}
  }
}
