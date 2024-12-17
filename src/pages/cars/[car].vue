<script setup lang="ts">
import type { Car } from '@/types/cars'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useCarStore } from '@/composables/useCars'

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
  <div class="container">
    <div v-if="car" class="mt-10 flex flex-col items-center">
      <div class="relative flex flex-col items-center">
        <h1 class="absolute top-12 text-4xl drop-shadow-2xl drop-shadow-color-white">
          {{ car.model }}
        </h1>
        <img :src="car.image" class="z-10 h-40 w-full object-cover">
      </div>
    </div>
    <div class="m-auto mt-10 w-[80%]">
      <Tabs default-value="description">
        <TabsList class="w-full bg-white">
          <TabsTrigger value="description" class="w-1/2">
            Описание
          </TabsTrigger>
          <TabsTrigger value="gallery" class="w-1/2">
            Фото
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <div>
            <p>{{ car?.model }}</p>
            <p>{{ car?.manufactureYear }}</p>
            <p>{{ car?.price }}</p>
            <p>{{ car?.description }}</p>
            <p>{{ car?.bodyType }}</p>
            <p>{{ car?.accelerationTime }}</p>
            <p>{{ car?.fuelConsumption }}</p>
            <p>{{ car?.fuelType }}</p>
            <p>{{ car?.engineType }}</p>
            <p>{{ car?.enginePower }}</p>
            <p>{{ car?.transmissionType }}</p>
            <p>{{ car?.driveType }}</p>
          </div>
        </TabsContent>
        <TabsContent value="gallery" />
      </Tabs>
    </div>
  </div>
</template>
