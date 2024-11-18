import { defineStore } from 'pinia'
import type { Product } from '~/types/productTypes'

export const useProductStore = defineStore('products', () => {
  const productList = ref<Product[]>([])
  async function getAllProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      productList.value = data
    }
    catch (err) {
      throw new Error(String(err))
    }
  }

  return {
    productList,
    getAllProducts,
  }
})
