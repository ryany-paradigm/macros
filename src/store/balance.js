const initial = {
  balance: {
    proteins: 0,
    carbs: 0,
    fats: 0
  }
}

export const mutations = {
  store (state, request) {
    state.balance.proteins = request.proteins
    state.balance.carbs = request.carbs
    state.balance.fats = request.fats
  }
}

export const actions = {
  store ({ commit }, request) {
    commit('store', request)
  }
}

export default { state: () => initial, mutations, actions }
