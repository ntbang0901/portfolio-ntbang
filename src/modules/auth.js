const state = () => ({
  isAuthenticated: true
})

const getters = {}

const actions = {}

const mutations = {
  TOGGLE_AUTH(state) {
    state.isAuthenticated = !state.isAuthenticated
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
