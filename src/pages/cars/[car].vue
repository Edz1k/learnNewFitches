<script setup lang="ts">
import { useCarStore } from '@/composables/useCars'
import type { Car } from '@/types/cars'

const router = useRouter()

const { getContentById } = useCarStore()

const car = ref<Car>()

onMounted(async () => {
  const params = router.currentRoute.value.params as { car: string }
  const fetchedCar = await getContentById(params.car)
  if (fetchedCar) {
    car.value = fetchedCar
  }
  else {
    car.value = undefined
  }
})
</script>

<template>
  <div v-if="car" class="flex flex-col items-center">
    <p class="text-center text-sm">
      Ангел хранитель с тобой почти всегда, но иногда он может не успеть — у него же нет BMW M5 F10
    </p>
    <div class="relative flex flex-col items-center">
      <h1 class="absolute top-12 text-4xl drop-shadow-2xl drop-shadow-color-white">
        BMW M5 F10
      </h1>
      <img :src="car.image" class="z-10 h-64 w-full object-cover">
    </div>
    <p>{{ car.model }}</p>
    <p>{{ car.manufactureYear }}</p>
    <p>{{ car.price }}</p>
    <p>{{ car.description }}</p>
    <p>{{ car.bodyType }}</p>
    <p>{{ car.accelerationTime }}</p>
    <p>{{ car.fuelConsumption }}</p>
    <p>{{ car.fuelType }}</p>
    <p>{{ car.engineType }}</p>
    <p>{{ car.enginePower }}</p>
    <p>{{ car.transmissionType }}</p>
    <p>{{ car.driveType }}</p>
  </div>
</template>
