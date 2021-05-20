export const mutations = {
  add (state, command) {
    state.weighIns.push(command)
  }
}

export const actions = {
  add ({ commit }, command) {
    commit('add', command)
  }
}

export default { mutations, actions }
