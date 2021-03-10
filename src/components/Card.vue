<template>
  <div class="container ">
    <div class="row">
      <div class="card shadow bg-white rounded mb-5" v-for="post in posts" :key="post.id" style="width: 18rem">
        <img class="card-img-top" v-bind:src="post.url" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">
            <!-- {{post.harga}} -->
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  name: "Card",

  computed: {
    ...mapState('posts', ["posts"])
  },
  created() {
    this.$store.dispatch('posts/loadPosts')
  }
};
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
    justify-content: space-around;
  }
  .container {
    margin-bottom: 100px  ;
  }

  .card {
    width: 200px;
    height: 300px;
    img {
      width: 100%;
      height: 50%;
    }
  } 
  
</style>
