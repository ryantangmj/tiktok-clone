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
          class="rounded-lg h-110 w-110" 
          src="~/assets/images/red.png"
          alt="Product Photo"
        />

        <!-- Product Name -->
        <div class="text-3xl font-semibold">Teen Girls Red Formal Dress</div>

        <!-- Product Description -->
        <div class="text-base mt-4 text-gray-700">
          <div>Color: Red</div>
          <div>Style: Formal</div>
          <div>Pattern Type: Colorblock</div>
          <div>Top Type: Tee</div>
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
          @click="showConfirmation = true"
          class="bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold text-lg hover:bg-[#E02450]"
        >
          Purchase
        </button>

         <!-- Render Confirmation Popup -->
        <div v-if="showConfirmation" class="fixed inset-0 flex items-center justify-center z-50">
          <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-700">
            <p class="text-2xl font-semibold mb-4">Confirm Purchase</p>
            <p class="text-lg">Product: {{ product.name }}</p>
            <p class="text-lg">Quantity: {{ selectedQuantity }}</p>
            <p class="text-lg">Price: ${{ calculatedPrice.toFixed(2) }}</p>
            <div class="mt-6 flex justify-end space-x-4">
              <button
                @click="handlePurchaseConfirmation(true)"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500"
              >
                Yes
              </button>
              <button
                @click="handlePurchaseConfirmation(false)"
                class="px-4 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const selectedQuantity = ref(1); // Default quantity selected

const product = {
  name: 'Teen Girls Patch Pocket Suedette Dress With Tee',
  description: 'example description.',
  price: 19.99,
  image: 'image to path',
};

const calculatedPrice = computed(() => {
  return product.price * selectedQuantity.value;
});

let showConfirmation = ref(false);

const handlePurchaseConfirmation = (confirmed) => {
  if (confirmed) {
    alert(`You bought ${product.name} , post a product promoting this product to get TikTok Coins.`);
    // Redirect to the home page
    try {
        if (res.status === 200) {
            setTimeout(() => {
                router.push('/profile/' + $userStore.id)
                isUploading.value = false
            }, 1000)
        }
    } catch (error) {
        errors.value = error.response.data.errors
        isUploading.value = false
    }
  } else {
    // Close the confirmation popup
    showConfirmation.value = false;
  }
};
</script>

<style scoped>
/* You can add custom CSS styles here */
</style>
