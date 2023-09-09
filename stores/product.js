import { defineStore } from "pinia";
import { useUserStore } from "./user";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useProductStore = defineStore("product", {
  state: () => ({
    products: null,
    product: null,
  }),
  actions: {
    async getProducts() {
      let res = await $axios.get("/api/products");
      this.products = res.data;
    },
    async getProductById(id) {
      let res = await $axios.get(`/api/products/${id}`);
      this.product = res.data;
    },
  },
  persist: true,
});
