const initial = {
  eaten: []
}

export const mutations = {
  add (state, intake) {
    state.eaten.push(intake)
  }
}

export const actions = {
  add ({ commit }, command) {
    commit('add', command)
  }
}

export default { state: () => initial, mutations, actions }
