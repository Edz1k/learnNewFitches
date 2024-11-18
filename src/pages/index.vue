<script setup lang="ts">
import { useProductStore } from '~/stores/product'

defineOptions({
  name: 'IndexPage',
})

const store = useProductStore()
onMounted(async () => {
  await store.getAllProducts()
})
const products = computed<any[]>(() => store.productList)
</script>

<template>
  <div class="m-auto mt-15 container">
    <div v-if="products.length > 0" class="flex flex-wrap">
      <CardComponent v-for="product in products" :key="product.id">
        <template #header>
          <h1 class="text-xl font-bold">
            {{ product.id }}
          </h1>
        </template>
        <template #body>
          <p>{{ product.description }}</p>
        </template>
        <template #footer>
          <p>{{ product.price }}</p>
        </template>
      </CardComponent>
    </div>
    <div v-else class="text-center text-gray-500">
      Загрузка данных...
    </div>
  </div>
</template>
