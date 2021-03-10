<template>
  <section>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-6 content">
            <h2>Order Foods anytime</h2>
            <span>& anywhere</span>
            <h3>Hey! Our delicious food is waiting for you, we are</h3>
            <h3>always near for you</h3>
            <button button class="btn">Order</button>
          </div>
          <div class="col-md-6 pt-5">
            <img src="../assets/logo.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="container menu">
        <h2>Our menu</h2>
      </div>
      <Card />
    </main>
  </section>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: #ebf9fc;
  height: 30rem;
}
.content {
  font: sans serif;
  margin-top: 15%;
  h2 {
    font-size: 2.2em;
    font-weight: bold;
  }
  span {
    font-size: 2.2em;
    font-weight: bold;
  }
  h3 {
    font-size: 1em;
    font-weight: 400;
    color: rgb(144, 136, 125);
  }
}

div img {
  width: 100%;
}

.menu {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-top: 150px;
  td {
    border-bottom: 4px solid $primary-color;
    width: 30px;
  }
  :after {
    content: "";
    border-bottom: 4px solid $primary-color;
    width: 70px;
    display: block;
    margin-left: 50px;
    margin-top: 5px;
  }
}

.btn {
  background-color: $primary-color;
  color: white;
  padding: 10px 40px;
  border-radius: 10px;
  margin-top: 20px;
}
</style>
