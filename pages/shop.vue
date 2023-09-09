<template>
    <div class="shop-page">
      <div class="shop-header">
        <h1 class="shop-title">TikTok Shop</h1>
        <div class="search-bar">
          <input type="text" v-model="searchQuery" placeholder="Search products..." />
          <button @click="searchProducts">Search</button>
        </div>
      </div>
      <div class="product-list">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <img :src="product.image" alt="Product Image" class="product-image" />
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-price">${{ product.price }}</div>
          <button @click="buyProduct(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Teen Girls Patch Pocket Suedette Dress With Tee',
            description: 'Color: Red and White',
            price: 19.99,
            image: '~/assets/images/girlindress.png',
          },
          // add product list here
        ],
        searchQuery: '',
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter((product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      searchProducts() {
        // Implement search functionality
      },
      buyProduct(product) {
        // Implement the buy product functionality
        alert(`You bought ${product.name} for ${product.price} TikTok Coins.`);
      },
    },
  };
  </script>
  
  
<style scoped>
.shop-page {
  padding-top: 30px;
  padding-left: 20px;
  max-width: 1800px;
  margin: 0 auto;
}

.shop-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.shop-title {
  font-size: 30px;
  font-weight: bold;
  white-space: nowrap;
}

.search-bar {
  padding-right: 20px;
  display: flex;
  align-items: center;
}

.search-bar input[type="text"] {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  margin-right: 10px;
}

.search-bar button {
  background-color: #F02C56;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.product-description {
  font-size: 14px;
  color: #777;
  margin-top: 5px;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #F02C56;
  margin-top: 10px;
}

.product-card button {
  background-color: #F02C56;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
}
</style>

  