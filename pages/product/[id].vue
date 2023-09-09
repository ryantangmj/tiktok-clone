<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Include your existing TopNav component here -->
    <TopNav />

    <!-- Content Container -->
    <div class="container mx-auto p-8">
      <!-- Product Details -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <!-- Product Photo -->
        <img
          class="rounded-lg h-160 w-160" 
          src="~/assets/images/Dress.png"
          alt="Product Photo"
        />

        <!-- Product Name -->
        <div class="text-3xl font-semibold">Teen Girls Patch Pocket Suedette Dress With Tee</div>

        <!-- Product Description -->
        <div class="text-base mt-4 text-gray-700">
          <div>Color: Red and White</div>
          <div>Style: Casual</div>
          <div>Pattern Type: Colorblock</div>
          <div>Top Type: Tee</div>
          <div>Details: Button Front, Rib-Knit, Pocket</div>
          <div>Neckline: Stand Collar</div>
          <div>Sleeve Length: Long Sleeve</div>
          <div>Sleeve Type: Regular Sleeve</div>
          <div>Fit Type: Regular Fit</div>
          <div>Fabric: Non-Stretch</div>
          <div>Material: Suedette</div>
          <div>Dresses Composition: 100% Polyester</div>
          <div>Tops Composition: 67% Polyester, 30% Viscose, 3% Elastane</div>
          <div>Care Instructions: Machine wash or professional dry clean</div>
          <div>Body: Unlined</div>
          <div>Sheer: No</div>
        </div>

        <!-- Product Price (Dynamic) -->
        <div class="text-2xl font-semibold mt-4">
          ${{ calculatedPrice.toFixed(2) }}
        </div>

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
        <div class="bg-white w-2 h-6"></div> <!-- White box with a height and width -->

        <!-- Add to Cart and Contact Seller Buttons -->

          <button
            @click="contactSeller"
            class="bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold text-lg hover:bg-[#E02450]"
          >
            Contact Us
          </button>
          <div class="bg-white w-2 h-6"></div> <!-- White box with a height and width -->
          <button
            @click="addToCart"
            class="bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold text-lg hover:bg-[#E02450]"
          >
            Add to Cart
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const selectedQuantity = ref(1); // Default quantity selected

const product = {
  name: 'Sample Product',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  price: 19.99,
  image: '/path/to/your/product/image.jpg',
};

const calculatedPrice = computed(() => {
  return product.price * selectedQuantity.value;
});

const addToCart = () => {
  // You can add the selected product and quantity to the shopping cart here
  // For now, we'll just log the selected item for demonstration purposes
  const cartItem = {
    product,
    quantity: selectedQuantity.value,
  };

  console.log('Added to Cart:', cartItem);
};

const contactSeller = () => {
  // Logic to contact seller
};
</script>

<style scoped>
/* You can add custom CSS styles here */
</style>
