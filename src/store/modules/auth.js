import axios from "axios";

const states = {
  user: null,
  post: null,
};

const getters = {};

const actions = {
  async Registration({ dispatch }, form) {
    await axios.post("/register", form);
    let userForm = new FormData();
    userForm.append("username", form.username);
    userForm.append("password", form.password);
    await dispatch("LogIn", userForm);
  },

  async LogIn({ commit }, user) {
    await axios.post("/Login", user);
    await commit("setUser", user.get("username"));
  },
};

const mutations = {};

export default {
  states,
  getters,
  actions,
  mutations,
};
