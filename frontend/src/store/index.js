import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    connected: false,
    token: '',
    email: '',
    userId: '',
    prenom: '',
    nom: '',
    admin: '',
    avatar: ''
  },
  plugins: [createPersistedState()],
  mutations: {
    CHANGE_CONNECTED (state, val) {
      state.connected = val
    },
    ADD_TOKEN (state, val) {
      state.token = val
    },
    ADD_INFO (state, val) {
      state.userId = val.userId,
      state.email = val.email,
      state.prenom = val.prenom,
      state.nom = val.nom,
      state.admin = val.admin,
      state.avatar = val.avatar
    },
    UPDATE_INFO (state, val) {
      state.userId = val.userId,
      state.prenom = val.prenom,
      state.email = val.email,
      state.nom = val.nom,
      state.avatar = val.avatar
    }
  },
  actions: {
    loginAccount: ({commit}, userInfos) => {
      commit
      console.log(userInfos)
      commit('CHANGE_CONNECTED', userInfos.connected)
      commit('ADD_TOKEN', userInfos.token)
      commit('ADD_INFO', userInfos)
    },
    updateAccount: ({commit}, userInfos) => {
      commit
      commit('UPDATE_INFO', userInfos)
    },
    disconnect: ({commit}) => {
      commit('CHANGE_CONNECTED', false)
      commit('ADD_TOKEN', '')
    },
    updateProfile: ({commit}, userInfos) => {
      commit('ADD_INFO', userInfos)
    }
  },
  modules: {
  }
})
