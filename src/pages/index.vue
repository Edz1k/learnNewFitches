<script setup lang="ts">
import { useCarStore } from '~/composables/useCars'

defineOptions({
  name: 'IndexPage',
})

const { getAllCars, cars } = useCarStore()

onMounted(async () => {
  await getAllCars()
})
</script>

<template>
  <div class="flex">
    <CardComponent v-for="car in cars" :key="car.id">
      <template #header>
        <img :src="car.image" class="m-auto h-40 w-1/2">
      </template>
      <template #body>
        <p>{{ car.model }}</p>
        <p>{{ car.year }}</p>
      </template>
      <template #footer>
        <div class="flex justify-center">
          <router-link :to="`/${car.firebaseId}`" class="w-1/2 rounded-lg bg-orange p-2 text-center text-white">
            Заказать
          </router-link>
        </div>
      </template>
    </CardComponent>
  </div>
</template>
