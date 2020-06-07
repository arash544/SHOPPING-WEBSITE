<template>
  <div class="main-wrapper">
     <image-magnifier class="img" :src="getproduct.image" :zoom-src="getproduct.image"  width="310" height="330" zoom-width="400" zoom-height="300">
  </image-magnifier>
    <div class="price-wrap">
      <h4>{{getproduct.title}}</h4>
      <h3>{{getproduct.price}}$</h3>
      <h5>{{getproduct.category}}</h5>
      <p>{{getproduct.description}}</p>
      <div class="btn-wrap">
        <button class="btn-shop" @click="addtocart">Shopping</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.store.dispatch("products/fetchProducts");
  },
  computed: {
    getproduct() {
      return this.$store.getters["products/finder"](this.$route.params.id);
    }
  },
  methods: {
    addtocart() {
      let finded = this.$store.state.cart.cartlist.find(n => {
        return n.id == this.getproduct.id;
      });
      if (!finded) {
        let finded = this.$store.state.cart.cartlist.find(n => {
          return n.id == this.getproduct.id;
        });
        if (!finded) {
          this.$store.state.cart.cartlist = [
            ...this.$store.state.cart.cartlist,
            {
              id: this.getproduct.id,
              price: this.getproduct.price,
              title: this.getproduct.title,
              image: this.getproduct.image,
              description: this.getproduct.description,
              category: this.getproduct.category,
              quantity: 1
            }
          ];
        }
      }
      localStorage.setItem('cart',JSON.stringify(this.$store.state.cart.cartlist))
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-wrap {
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
.img {
  height: 23vw;
  width: 20vw;
  margin-left: 30px;
  padding-top:150px;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: auto;
    margin-top: -140px;
    margin-bottom: 130px;
    text-align: center;
  }
}
.main-wrapper {
  display: flex;
  width: 100%;
  margin-top: 110px;
  height: 70vh;
  flex-flow: wrap;
  @media only screen and (max-width: 768px) {
  }
}
.price-wrap {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: right;

  box-shadow: 0 10px 20px -6px rgba(114, 113, 113, 0.623);
  border: 1px solid lightgray;
  margin: auto;
  padding: 35px 35px;
  border-radius: 15px;
  @media only screen and (max-width: 768px) {
    margin-top: -100px;
    width: 100vw;
    text-align: center;
    
  }
}
.btn-shop {
  background-color: black;
  border: 1px solid black;
  color: white;
  padding: 10px 20px;
  width: 20vw;
  text-align: center;
  font-size: 22px;
  &:hover {
    background-color: white;
    color: black;
    outline: none;
    border: 1px solid black;
  }
    @media only screen and (max-width: 768px) {
    margin-top: 0;
    width: 100vw;
    text-align: center;
  }
}
.btn-detail {
  margin-top: 10px;
}
a {
  text-decoration: none;
  cursor: pointer;
}
h5 {
  margin-top: 5px;
  color: rgb(131, 95, 95);
}
h3 {
  color: rgb(131, 95, 95);
  font-weight: bold;
}
p {
  color: gray;
  font-weight: 500;
}
h4 {
  margin-top: 10px;
  font-weight: bold;
}
</style>





















