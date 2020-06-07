<template>
  <section class="main">
    <Carousel />
    <div class="content" v-if="this.$store.state.products.productslist.length>0">
      <Products
        v-for="pro in this.$store.state.products.productslist"
        :key="pro.id"
        :product="pro"
      />
    </div>
    <Loading v-else />
  </section>
</template>

<script>
import Loading from "@/components/Loading";
import Products from "@/components/Products";
import Carousel from "@/components/Carousel";
export default {
  components: {
    Products,
    Loading,
    Carousel
  },
  created() {
    return this.$store.dispatch("products/fetchProducts");
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  padding-bottom: 100px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
}
</style>