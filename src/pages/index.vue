<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
</script>

<template>
  <div class="mt-10 container">
    <div class="flex items-center">
      <div class="w-1/2">
        <h1 class="text-4xl font-bold">
          Прокат люксовых автомобилей
        </h1>
        <p class="mt-2 text-xl font-semibold">
          по самым выгодным условиям
        </p>
        <p class="mt-4">
          Катайтесь на люксовых автомобилях по самым выгодным ценам в Алматы
        </p>
        <div class="mt-5 w-full flex justify-between">
          <button class="w-[48%] border border-orange-macan rounded-lg bg-orange-macan px-5 py-3 transition-500 hover:bg-[#121212]" @click="router.push('/autopark')">
            Посмотрет автопарк
          </button>
          <button class="w-[48%] flex items-center justify-center border border-orange-macan rounded-lg px-5 py-3 transition-500 hover:bg-orange-macan">
            <div class="i-ic-round-whatsapp mr-2" />
            Написать WhatsApp
          </button>
        </div>
      </div>
      <div class="w-1/2">
        <img src="/bmw.webp" class="scale-x-[-1] transform" alt="">
      </div>
    </div>
    <div class="mt-10 flex justify-between">
      <ReccomendCardComponent class="">
        <template #icon>
          <div class="i-material-symbols:credit-card-outline" />
        </template>
        <template #header>
          Приятные цены
        </template>
        <template #text>
          Мы предлагаем только лучшие автомобили для аренды
        </template>
      </ReccomendCardComponent>
      <ReccomendCardComponent>
        <template #icon>
          <div class="i-material-symbols-nest-clock-farsight-analog-outline-rounded" />
        </template>
        <template #header>
          Быстрое оформление
        </template>
        <template #text>
          Мы предлагаем только лучшие автомобили для аренды
        </template>
      </ReccomendCardComponent>
      <ReccomendCardComponent>
        <template #icon>
          <div class="i-material-symbols:person" />
        </template>
        <template #header>
          Приятный сервис
        </template>
        <template #text>
          Мы предлагаем только лучшие автомобили для аренды
        </template>
      </ReccomendCardComponent>
      <ReccomendCardComponent>
        <template #icon>
          <div class="i-material-symbols:directions-car-outline" />
        </template>
        <template #header>
          Лучшие автомобили
        </template>
        <template #text>
          Мы предлагаем только лучшие автомобили для аренды
        </template>
      </ReccomendCardComponent>
    </div>
  </div>
</template>
