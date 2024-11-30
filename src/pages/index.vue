<script setup lang="ts">
import { useCarStore } from '~/composables/useCars'

defineOptions({
  name: 'IndexPage',
})

const { getAllCars, cars, deleteCarbyId } = useCarStore()

onMounted(async () => {
  await getAllCars()
})
</script>

<template>
  <div v-for="car in cars" :key="car.id">
    <CardComponent>
      <template #header>
        <img :src="car.image">
      </template>
      <template #body>
        <p>{{ car.model }}</p>
        <p>{{ car.year }}</p>
      </template>
      <template #footer>
        <button @click="deleteCarbyId(car.firebaseId)">
          Delete
        </button>
      </template>
    </CardComponent>
  </div>
</template>
