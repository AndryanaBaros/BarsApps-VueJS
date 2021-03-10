import axios from "axios";

const posts = {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = data;
    },
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
        .then((res) => {
          commit("SET_POSTS", res.data);
        })
        .catch((error) => console.log(error));
    },
  },
};

export default posts;
