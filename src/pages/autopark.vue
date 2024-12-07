<script setup lang="ts">
import { useCarStore } from '~/composables/useCars'
import type { Car } from '~/types/cars'

const { getAllCars, cars } = useCarStore()
const router = useRouter()

onMounted(async () => {
  await getAllCars()
})
function pushRouter(car: Car) {
  router.push(`/cars/${car.firebaseId}`)
}
</script>

<template>
  <div class="mt-10 flex justify-evenly">
    <CardComponent v-for="car in cars" :key="car.id" class="w-1/4" @click="pushRouter(car)">
      <template #header>
        <div class="flex flex-col items-center">
          <img :src="car.image" class="h-xl w-full">
          <h1 class="text-xl">
            {{ car.model }}
          </h1>
        </div>
      </template>
      <template #body>
        <p>{{ car.manufactureYear }}</p>
      </template>
      <template #footer>
        <div class="flex justify-center">
          ujnjdj
        </div>
      </template>
    </CardComponent>
  </div>
</template>
