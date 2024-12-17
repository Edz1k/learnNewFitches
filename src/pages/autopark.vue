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
      <CardComponent v-for="car in cars" :key="car.id" class="mt-10 w-[30%] rounded-lg" @click="pushRouter(car.firebaseId)">
        <template #header>
          <div class="flex flex-col items-center">
            <img :src="car.image" class="h-50 w-full object-cover" loading="lazy">
            <h1 class="mt-2 text-2xl">
              {{ car.model }}
            </h1>
          </div>
        </template>
        <template #body>
          <div class="p-4">
            {{ car.description }}
          </div>
        </template>
        <template #footer>
          <div class="flex justify-between p-4">
            <div class="flex flex-col items-center">
              <div class="i-fluent:fast-acceleration-20-regular text-2xl" />
              {{ car.accelerationTime }}
            </div>
            <div class="flex flex-col items-center">
              <div class="i-mdi:fuel text-2xl" />
              {{ car.fuelConsumption }}/100км
            </div>
            <div class="flex flex-col items-center">
              <div class="i-mdi:engine-outline text-2xl" />
              {{ car.enginePower }}
            </div>
          </div>
          <div>
            <button class="w-full rounded-b bg-orange-macan p-4 text-white transition-500 hover:bg-white hover:text-black">
              Забронировать
            </button>
          </div>
        </template>
      </CardComponent>
    </div>
  </div>
</template>
