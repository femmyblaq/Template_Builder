import Vuex from "vuex";
import Vue from "vue";
// import createPersistedState from "vuex-createPersisted state";
import auth from "./modules/auth";

// Load Vuex
Vue.use(Vuex);
// Create store
export default new Vuex.Store({
  state: {
    clickedMenu: false,
    mobileView: false,
    windowWidth: null,
    footerSlide: false,
  },
  mutations: {
    TOGGLE_MENU(state) {
      state.clickedMenu = !state.clickedMenu;
      state.mobileView = false;
      if (state.footerSlide == true) {
        state.footerSlide = false;
      }
      console.log("slide side", state.clickedMenu);
      console.log("slide footer", state.footerSlide);
    },
    MOBILE_CHECKSCREEN(state) {
      state.windowWidth = window.innerWidth;
      if (state.windowWidth <= 800) {
        // state.mobileView = true;
        state.clickedMenu = true;
      }
      console.log("screen size > > ", state.windowWidth);
    },
    SLIDE_FOOTER(state) {
      state.footerSlide = !state.footerSlide;
      console.log("slide side", state.clickedMenu);
      console.log("slide footer", state.footerSlide);
    },
  },
  actions: {
    toggleMenu: ({ commit }) => {
      commit("TOGGLE_MENU");
    },
    mobileView: ({ commit }) => {
      commit("MOBILE_CHECKSCREEN");
    },
    slideFooter: ({ commit }) => {
      commit("SLIDE_FOOTER");
    },
  },
  getters: {
    toggleSide: (state) => {
      return state.clickedMenu;
    },
  },
  modules: {
    auth,
  },
  //   plugins: [createPersistedState()],
});
