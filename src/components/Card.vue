<template>
  <div class="container ">
    <div class="row">
      <div class="card shadow bg-white rounded" style="width: 18rem">
        <img class="card-img-top" src="../assets/bakso-solo.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">
            IDR 16.000
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img class="card-img-top" src="" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Bakso Solo</h5>
          <p class="card-text">
            IDR 16.000
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img class="card-img-top" src="" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Card",

  computed: {
    ...mapGetters({title: "getTitle"})
    
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
  
</style>
