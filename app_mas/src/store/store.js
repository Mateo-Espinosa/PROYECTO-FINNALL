import { createStore } from 'vuex';

export default createStore({
  state: {
    correo: '',
  },
  mutations: {
    actualizarCorreo(state, correo) {
      state.correo = correo;
    },
  },
});
