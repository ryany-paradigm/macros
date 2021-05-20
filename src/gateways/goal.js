export default class {
  constructor (store) {
    this.store = store
  }

  set ({ goal }) {
    const goals = ['bulk', 'maintain', 'cut']
    if (goals.includes(goal)) {
      this.store.dispatch('goal/set', goal)
      return {}
    }

    throw new TypeError(`Invalid goal: ${goal}`)
  }
}
