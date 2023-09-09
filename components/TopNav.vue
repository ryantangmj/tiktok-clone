<template>
  <div
    id="TopNav"
    class="fixed bg-white z-30 flex items-center w-full border-b h-[61px]"
  >
    <div
      :class="route.fullPath === '/' ? 'max-w-[1150px]' : ''"
      class="flex items-center justify-between w-full px-6 mx-auto"
    >
      <div :class="route.fullPath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">
        <NuxtLink to="/">
          <img width="115" src="~/assets/images/tiktok-logo.png" />
        </NuxtLink>
      </div>

      <div
        class="hidden md:flex items-center bg-[#F1F1F2] p-1 rounded-full max-w-[380px] w-full"
      >
        <input
          type="text"
          class="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
          placeholder="Search accounts"
        />
        <div class="px-3 py-1 flex items-center border-l border-l-gray-300">
          <Icon name="ri:search-line" color="#A1A2A7" size="22" />
        </div>
      </div>

      <div
        class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full"
      >
        <button
          @click="openPopUp()"
          class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"
        >
          <Icon name="mdi:plus" color="#000000" size="22" />
          <span class="px-2 font-medium text-[15px]">Upload</span>
        </button>

        <div v-if="!$userStore.id" class="flex items-center">
          <button
            @click="$generalStore.isLoginOpen = true"
            class="flex items-center bg-[#F02C56] text-white border rounded-md px-3 py-[6px]"
          >
            <span class="mx-4 font-medium text-[15px]">Log in</span>
          </button>
          <Icon name="mdi:dots-vertical" color="#161724" size="25" />
        </div>
        <div v-else class="flex items-center">
          <Icon
            class="ml-1 mr-4"
            name="carbon:send-alt"
            color="#161724"
            size="30"
          />
          <Icon
            class="mr-5"
            name="bx:message-detail"
            color="#161724"
            size="27"
          />
          <div class="relative">
            <button class="mt-1" @click="showMenu = !showMenu">
              <img class="rounded-full" width="33" :src="$userStore.image" />
            </button>

            <div
              v-if="showMenu"
              id="PopupMenu"
              class="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[43px] -right-2"
            >
              <NuxtLink
                :to="`/profile/${$userStore.id}`"
                @click="showMenu = false"
                class="flex items-center justify-start py-3 px-2 hover-bg-gray-100 cursor-pointer"
              >
                <Icon name="ph:user" size="20" />
                <span class="pl-2 font-semibold text-sm">Profile</span>
              </NuxtLink>
              <div
                @click="logout()"
                class="flex items-center justify-start py-3 px-1.5 hover-bg-gray-100 border-t cursor-pointer"
              >
                <Icon name="ic:outline-login" size="20" />
                <span class="pl-2 font-semibold text-sm">Log out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    id="popupModal"
    class="modal"
    :class="{ 'modal-open': isModalOpen }"
  >
    <div class="modal-content">
      <button @click="closePopup" class="back-button">
        <Icon name="mdi:arrow-left" color="#000" size="30" />
      </button>
      <h2 class="text-2xl font-semibold mb-4">Choose an Option</h2>
      <div class="flex justify-between items-center">
        <button @click="isLoggedInUpload" class="circle-button bg-dark-gray-500 hover:bg-dark-gray-600">
          <Icon name="mdi:upload" color="#fff" size="30" />
        </button>
        <button @click="isLoggedInSell" class="circle-button bg-dark-gray-500 hover:bg-dark-gray-600">
          <Icon name="mdi:store" color="#fff" size="30" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

const { $userStore, $generalStore } = useNuxtApp();

const route = useRoute();
const router = useRouter();

let showMenu = ref(false);
let isModalOpen = ref(false);

const openPopUp = () => {
  isModalOpen.value = true;
};

const closePopup = () => {
  isModalOpen.value = false;
};

const isLoggedInSell = () => {
  if ($userStore.id) {
    router.push("/sell");
  } else {
    $generalStore.isLoginOpen = true;
  }
  closePopup();
};

const isLoggedInUpload = () => {
  if ($userStore.id) {
    router.push("/upload");
  } else {
    $generalStore.isLoginOpen = true;
  }
  closePopup();
};

const logout = () => {
  try {
    $userStore.logout();
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1000;
  padding: 40px; /* Increase the padding to make it bigger */
  width: 300px; /* Adjust the width to make it wider */
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


.modal-open {
  display: block;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
}

.circle-button {
  width: 70px;
  height: 70px;
  border-radius: 50%; /* Make it circular */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  background-color: #333; /* Grey circle background color */
  color: #fff; /* White icon color */
}

.circle-button:hover {
  background-color: #555; /* Darker grey on hover */
  transform: scale(1.1); /* Add a slight scale effect on hover */
}
</style>