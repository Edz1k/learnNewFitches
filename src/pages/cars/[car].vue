<script setup lang="ts">
import { useCarStore } from '~/composables/useCars'

const router = useRouter()

const { getContentById } = useCarStore()

const car = ref()

onMounted(async () => {
  const params = router.currentRoute.value.params as { car: string }
  car.value = await getContentById(params.car)
})
</script>

<template>
  <div v-if="car" class="flex flex-col items-center">
    <img :src="car.image" class="m-auto h-10">
    <p>{{ car.model }}</p>
    <p>{{ car.year }}</p>
  </div>
</template>
