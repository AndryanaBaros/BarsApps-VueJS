// import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const url = "http://localhost:3000/best-products";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    title: "Basooooooo Sollooooo",
  },
  mutations: {},
  actions: {
    // getPosts({ commit }) {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => {
    //       commit("SET_POSTS", response.data);
    //     });
    // },
  },
  modules: {},
  getters: {
    getTitle: (state) => state.title,
    // getAllJokes: (state) => state.allJokes,
  },
});
