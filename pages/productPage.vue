<template>
    <div class="bg-gray-100 min-h-screen">
      <!-- Include your existing TopNav component here -->
      <TopNav />
  
      <!-- Content Container -->
      <div class="container mx-auto p-8">
        <!-- Product Details -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <!-- Product Photo -->
          <!-- <img
            class="rounded-lg"
            width="100%"
            src="/path/to/your/product/image.jpg"
            alt="Product Photo"
          /> -->
  
          <!-- Product Name -->
          <div class="text-3xl font-semibold">Sample Product</div>
  
          <!-- Product Description -->
          <div class="text-base mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
  
          <!-- Product Price -->
          <div class="text-2xl font-semibold mt-4">$19.99</div>
  
          <!-- Quantity Selection -->
          <div class="mt-4">
            <label for="quantity" class="text-lg font-semibold">Quantity:</label>
            <input
              v-model="selectedQuantity"
              type="number"
              id="quantity"
              class="w-16 px-2 py-1.5 border rounded-md focus:outline-none"
              min="1"
              max="10"
            />
          </div>
  
          <!-- Add to Cart Button -->
          <button
            @click="addToCart"
            class="bg-[#F02C56] text-white px-6 py-3 rounded-lg mt-4 font-semibold text-lg hover:bg-[#E02450]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedQuantity = ref(1); // Default quantity selected
  
  const addToCart = () => {
    // You can add the selected product and quantity to the shopping cart here
    // For now, we'll just log the selected item for demonstration purposes
    const product = {
      name: 'Sample Product',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 19.99,
      image: '/path/to/your/product/image.jpg',
    };
  
    const cartItem = {
      product,
      quantity: selectedQuantity.value,
    };
  
    console.log('Added to Cart:', cartItem);
  };
  </script>
  
  <style scoped>
  /* You can add custom CSS styles here */
  </style>
  