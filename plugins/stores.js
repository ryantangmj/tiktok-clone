import { useUserStore } from "~/stores/user";
import { useProfileStore } from "~/stores/profile";
import { useGeneralStore } from "~/stores/general";
import { useProductStore } from "~~/stores/product";

export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      userStore: useUserStore(),
      profileStore: useProfileStore(),
      generalStore: useGeneralStore(),
      productStore: useProductStore(),
    },
  };
});
