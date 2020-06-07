<template>
  <input type="number" class="col-md-6" min="1" v-model="quantityproduct" />
</template>

<script>
export default {
  name: "Input",
  props: ["quantity", "id"],
  data() {
    return {
      quantityproduct: this.quantity,
      idproduct: "",
      cart: this.$store.state.cart.cartlist
    };
  },
  methods: {},
  watch: {
    quantityproduct(newVal) {
      let findedIndex = this.$store.state.cart.cartlist.findIndex(n => {
        return n.id == this.id;
      });

      this.$store.dispatch("cart/changeQuan", {
        index: findedIndex,
        quan: newVal
      });
      console.log(newVal);
    }
  }
};
</script>

<style>
</style>