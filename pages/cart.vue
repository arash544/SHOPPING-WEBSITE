<template>
  <div class="container">
    <table class="table table-striped table-responsive table-dark">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tr class="cell" v-for="cart in this.$store.state.cart.cartlist" :key="cart.id">
        <td>
          <Table :pic="cart.image" />
        </td>
        <td>
          <Table :text="cart.title" />
        </td>
        <td>
          <Table :text="cart.price" />
        </td>
        <td>
          <Input :quantity="cart.quantity" :id="cart.id" />
        </td>
        <td>
          <Cancel @removeItem="removeItm(cart.id)" />
        </td>
      </tr>
    </table>
    <div class="table-footer">
      <button class="btn-total">Total:{{total.toFixed(2)}}</button>
      <button class="btn-shop" @click="removeAll">remove all</button>
    </div>
  </div>
</template>

<script>
import Table from "@/components/Cart/Table";
import Input from "@/components/Cart/Input";
import Cancel from "@/components/Cart/Cancel";
export default {
  props: ["removeItem"],
  components: {
    Table,
    Input,
    Cancel
  },
  data() {
    return {
      cart: this.$store.state.cart.cartlist
    };
  },
  asyncData(context) {
    return context.store.dispatch("products/fetchProducts");
  },
  mounted() {
    if (
      this.$store.state.cart.cartlist == 0 &&
      localStorage.getItem("cart") != null
    ) {
      this.$store.state.cart.cartlist = JSON.parse(
        localStorage.getItem("cart")
      );
    }
  },
  computed: {
    total() {
      return this.$store.state.cart.cartlist.reduce((x, y) => {
        return x + Number(y.price * y.quantity);
      }, 0);
    }
  },
  methods: {
    removeItm(id) {
      this.$store.state.cart.cartlist = this.$store.state.cart.cartlist.filter(
        n => n.id != id
      );
      localStorage.setItem("cart", this.$store.state.cart.cartlist);
    },
    removeAll() {
      this.$store.state.cart.cartlist = [];
      localStorage.setItem("cart", this.$store.state.cart.cartlist);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-total {
  background-color: black;
  border: 1px solid black;
  color: white;
  padding: 10px 20px;
  opacity: 0.8;
  font-size: 22px;
  cursor: auto;
}

table {
  margin-top: 150px;
}
.btn-shop {
  background-color: black;
  border: 1px solid black;
  color: white;
  padding: 10px 20px;
  opacity: 0.8;
  font-size: 22px;
  &:hover {
    background-color: white;
    color: black;
    outline: none;
    border: 1px solid black;
  }
}
.table-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>