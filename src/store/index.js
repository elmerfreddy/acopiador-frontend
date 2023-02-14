import { createStore } from "vuex";

export default createStore({
  state: {
    usuario: "",
    token:"",
  },

  getters: {},

  mutations: {
    login(state, usuario) {
      state.usuario = usuario;
      localStorage.setItem("usuario", usuario);
    },
    setToken(state, token) {
      state.token= token
      localStorage.setItem("token", token);
    },
    logout(state) {
      state.usuario = "";
      state.token = "";
      localStorage.removeItem("usuario");
      localStorage.removeItem("token")
    },
    initializeStore(state) {
      if (localStorage.getItem("usuario")) {
        state.usuario = localStorage.getItem("usuario");
      }
      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token");
      }
    },
  },

  actions: {},

  modules: {},
});
