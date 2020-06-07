<template>
  <div class="main-wrapper">
    <div class="product-parent">
      <div class="overlay">
        <nuxt-link :to="`/products/${product.id}`" class="btn-detail">Details</nuxt-link>
        <button class="btn-shop" @click="addtocart">Shopping</button>
      </div>
      <img :src="product.image" alt />
      <h4>{{product.title}}</h4>
      <div class="price-wrap">
        <h3>{{product.price}}$</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      products: this.product
    };
  },
  created() {
    return this.$store.dispatch("products/fetchProducts")
  },
  methods: {
    addtocart() {
      let finded = this.$store.state.cart.cartlist.find(n => {
        return n.id == this.product.id;
      });
      if (!finded) {
        let prod={
            id: this.product.id,
            price: this.product.price,
            title: this.product.title,
            image: this.product.image,
            description: this.product.description,
           category: this.product.category,
            quantity: 1
        }
        this.$store.dispatch("cart/fetchCart",prod)
        localStorage.setItem('cart',JSON.stringify(this.$store.state.cart.cartlist))
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
}
.product-parent {
  box-shadow: 0 10px 20px -6px rgba(114, 113, 113, 0.623);
  border: 1px solid lightgray;
  width: 400px;
  height: auto;
  padding: 30px 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  overflow:hidden;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    padding: 30px 120px;
  }
}
.product-parent .overlay{
   transition: all 500ms ease-in-out;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: -100%;
    right: 0;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.product-parent {
  &:hover .overlay {
    left:0
  }
}

img {
  width: 10vw;
  height: 12vw;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    width: 40vw;
    height: 45vw;
  }
}
h4 {
  margin-top: 100px;
  text-align: center;
  font-weight: bold;
}
.price-wrap {
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
h5 {
  margin-top: 5px;
  color: blue;
}
h3 {
  color: rgb(78, 103, 216);
  font-weight: bold;
}
p {
  text-align: center;
  color: gray;
  font-weight: 500;
}
.btn-wrap {
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.btn-detail {
  margin-top: 10px;
}
.btn-shop {
  padding: 10px 30px;
  margin-top: 10px;
}
a,button {
  text-decoration: none;
  cursor: pointer;
  background-color: white;
  border: 1px solid white;
  color: black;
  padding: 10px 40px;
  font-size: 20px;
  border-radius: 10px;
  font-weight: 700;
  background-color: transparent;
  color: white;
  &:hover,
  &:focus,
  &:active {
    background-color: white;
    color: black;
    outline: none;
    border: 1px solid black;
  }
}
</style>