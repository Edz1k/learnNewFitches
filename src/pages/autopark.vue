<script setup lang="ts">
import { useCarStore } from '@/composables/useCars'

const { getAllCars, cars } = useCarStore()
const router = useRouter()

onMounted(async () => {
  await getAllCars()
})
function pushRouter(firebaseId: string) {
  router.push(`/cars/${firebaseId}`)
}
</script>

<template>
  <div class="m-auto container">
    <div class="flex flex-wrap justify-between">
      <CardComponent v-for="car in cars" :key="car.id" class="mt-10 w-[30%]" @click="pushRouter(car.firebaseId)">
        <template #header>
          <div class="flex flex-col items-center">
            <img :src="car.image" class="h-xl w-full" loading="lazy">
            <h1 class="mt-5 text-2xl">
              {{ car.model }}
            </h1>
          </div>
        </template>
        <template #body>
          <p>{{ car.manufactureYear }}</p>
        </template>
      </CardComponent>
    </div>
  </div>
</template>
