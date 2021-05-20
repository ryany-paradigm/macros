export default class {
  constructor (store) {
    this.store = store
  }

  add (command) {
    this.store.dispatch('weight/add', command)
    return {}
  }
}
