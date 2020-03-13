import * as fb from "firebase";

class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit("common/clearError", null, { root: true });
      commit("common/setLoading", true, { root: true });
      try {
        const user = await fb
          .auth()
          .createUserWithEmailAndPassword(email, password);

        commit("setUser", new User(user.uid));
        commit("common/setLoading", false, { root: true });
      } catch (e) {
        commit("common/setLoading", false, { root: true });
        commit("common/setError", e.message, { root: true });
        throw e;
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit("common/clearError", null, { root: true });
      commit("common/setLoading", true, { root: true });
      try {
        const user = await fb
          .auth()
          .signInWithEmailAndPassword(email, password);

        commit("setUser", new User(user.uid));
        commit("common/setLoading", false, { root: true });
      } catch (e) {
        commit("common/setLoading", false, { root: true });
        commit("common/setError", e.message, { root: true });
        throw e;
      }
    },
    autoLoginUser({ commit }, payload) {
      commit("setUser", new User(payload.uid));
    },
    logoutUser({ commit }) {
      fb.auth().signOut();
      commit("setUser", null);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isUserLoggedIn(state) {
      return state.user != null;
    }
  }
};
