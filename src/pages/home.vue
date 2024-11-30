<script setup lang="ts">
import { useCarStore } from '~/composables/useCars'

const { createCar } = useCarStore()

const car = ref({
  id: 0,
  model: '',
  image: '',
  year: '',
  price: '',
})
</script>

<template>
  <div class="mt-10 flex justify-between">
    <input v-model="car.model" type="text" class="border" placeholder="model">
    <input v-model="car.year" type="text" class="border" placeholder="year">
    <input v-model="car.price" type="text" class="border" placeholder="price">
  </div>
  <div class="flex justify-center">
    <button class="mt-10" @click="createCar(car)">
      Click me
    </button>
  </div>
</template>
