import { createStore } from 'vuex'

export default createStore({
  state: {
    usuario:"",
  },
  getters: {
  },
  mutations: {
    login(state,usuario){
      state.usuario = usuario;
      localStorage.setItem('usuario',usuario);
      alert('Logged in');
    },
    logout(state){
      state.usuario="";
      localStorage.removeItem('usuario');
      alert('logged out');
    },
    initializeStore(state){
      if(localStorage.getItem('usuario')){
        state.usuario = localStorage.getItem('usuario');
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
