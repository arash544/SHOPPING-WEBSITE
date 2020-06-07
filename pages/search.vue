<template>
  <div class="main-wrapper">
    <div class="input-parent">
      <input type="text" class="inp" v-model="search" placeholder="Search" />
      <div class="main-btn">
        <div class="btn-group">
          <button @click="handleAscending" class="btn-asc">
            Price
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
          <span class="btn-spacer-main">|</span>
          <button @click="handleDescending" class="btn-desc">
            Price
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
          
        </div>
        <span class="btn-spacer">|</span>
        <div class="btn-group">
          <button @click="handleAscendingtitle" class="btn-asc">
            Title
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
          <span class="btn-spacer-main">|</span>
          <button @click="handleDescendingtitle" class="btn-desc">
            Title
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
          
        </div>
        <span class="btn-spacer">|</span>
        <div class="btn-group">
          <button @click="handleAscendingcate" class="btn-asc">
            Category
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
          <span class="btn-spacer-main">|</span>
          <button @click="handleDescendingcate" class="btn-desc">
            Category
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
          
        </div>
      </div>
    </div>
    <div
      class="product-parent"
      v-for="product in filteredProducts"
      :key="product.id"
      :produc="product"
    >
      <div>
        <div class="img-parent">
          <img :src="product.image" alt />
        </div>

        <h4>{{product.title}}</h4>
        <div class="price-wrap">
          <h3>{{product.price}}$</h3>
          <h5>{{product.category}}</h5>
        </div>
        <div class="btn-wrap">
          <nuxt-link :to="`/products/${product.id}`" class="btn-detail">Details</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/components/Products";
export default {
  components: {
    Products
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filteredProducts: function() {
      return this.$store.state.products.productslist.filter(n => {
        return n.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  asyncData(context) {
    return context.store.dispatch("products/fetchProducts");
  },
  methods: {
    addtocart(id) {
      let finded = this.$store.state.cart.cartlist.find(n => {
        return n.id == id;
      });
      if (!finded) {
        this.$store.state.cart.cartlist = [
          ...this.$store.state.cart.cartlist,
          {
            id: this.product.id,
            price: this.product.price,
            title: this.product.title,
            image: this.product.image,
            description: this.product.description,
            category: this.product.category,
            quantity: 1
          }
        ];
      }
    },
    handleAscending() {
      let sorted = this.$store.state.products.productslist.sort(function(a, b) {
        if (a.price < b.price) return -1;
        else if (a.price > b.price) return 1;
        else {
          return 0;
        }
      });
    },
    handleDescending() {
      let sorted = this.$store.state.products.productslist.sort(function(a, b) {
        if (a.price > b.price) return -1;
        else if (a.price < b.price) return 1;
        else {
          return 0;
        }
      });
    },
    handleAscendingtitle() {
      let sorted = this.$store.state.products.productslist.sort(function(a, b) {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        else {
          return 0;
        }
      });
    },
    handleDescendingtitle() {
      let sorted = this.$store.state.products.productslist.sort(function(a, b) {
        if (a.title > b.title) return -1;
        else if (a.title < b.title) return 1;
        else {
          return 0;
        }
      });
    },
    handleAscendingcate() {
      let sorted = this.$store.state.products.productslist.sort(function(a, b) {
        if (a.category < b.category) return -1;
        else if (a.category > b.category) return 1;
        else {
          return 0;
        }
      });
    },
    handleDescendingcate() {
      let sorted = this.$store.state.products.productslist.sort(function(a, b) {
        if (a.category > b.category) return -1;
        else if (a.category < b.category) return 1;
        else {
          return 0;
        }
      });
    }
  }
};
</script>

<style lang="scss"scoped>
.btn-spacer-main,
.btn-spacer
{
  margin-top: 6px;
  color: rgba(114, 113, 113, 0.623);
}
.btn-spacer{
  margin-left: -15px;

}
.main-btn {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 100px;
    flex-direction: column;
  }
}
.btn-asc,
.btn-desc {

  border:none;
  outline: none;
  &:focus,
  &:active,
  &:hover {
    outline: none;
    text-decoration: underline blue;
  }
}

.btn-group {
  margin-right: 20px;
  @media only screen and (max-width: 768px) {
    margin-left: -200px;
  }
}
.main-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-evenly;
  margin-bottom: 100px;
}
.input-parent {
  width: 100%;
  text-align: center;
  margin-top: 130px;
  display: flex;
  justify-content: space-between;
}
.img-parent {
  text-align: center;
}
.inp {
  width: 30%;
  border-radius: 25px;
  height: 40px;
  padding: 10px;
  margin-left: 20px;
  box-shadow: 0 10px 20px -6px rgba(114, 113, 113, 0.623);
  border: 1px solid rgb(179, 174, 174);
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
}
.product-parent {
  box-shadow: 0 10px 20px -6px rgba(114, 113, 113, 0.623);
  border: 1px solid lightgray;
  width: 450px;
  overflow: hidden;
  height: auto;
  padding: 20px 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    padding: 30px 120px;
  }
}
img {
  width: 8vw;
  height: 10vw;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    width: 40vw;
    height: 45vw;
    margin-top: 0;
  }
}
h4 {
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  padding: 10px 50px;
}
.price-wrap {
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 30px;
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
  text-align: center;
  color: gray;
  font-weight: 500;
  line-height: 1.2;
}
.btn-wrap {
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
}
.btn-detail {
  background-color: white;
  border: 1px solid black;
  color: black;
  padding: 10px 40px;
  &:hover {
    background-color: black;
    color: white;
    outline: none;
    border: 1px solid black;
  }
}
a {
  text-decoration: none;
  cursor: pointer;
}
</style>