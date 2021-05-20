export const mutations = {
  set (state, goal) {
    state.goal = goal
  }
}

export const actions = {
  set ({ commit }, goal) {
    commit('set', goal)
  }
}

export default { mutations, actions }
