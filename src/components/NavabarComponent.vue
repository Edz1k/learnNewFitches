<script setup lang="ts">
import { useRoute } from 'vue-router'

const menuItems = ref([
  { title: 'Главная', link: '/' },
  { title: 'Автопарк', link: '/autopark' },
  { title: 'Условия', link: '/details' },
  { title: 'Отзывы', link: '/reviews' },
])

const route = useRoute()
</script>

<template>
  <div class="relative sticky top-0 z-20 flex items-center justify-between border-b bg-[#111111] p-4 dark:bg-black">
    <!-- Логотип -->
    <div class="h-10 w-[16%]">
      <img src="/src/assets/logo.png" class="h-full w-full object-cover" alt="Логотип">
    </div>

    <!-- Меню -->
    <nav class="absolute left-[27%] w-1/2">
      <ul class="w-full flex justify-between">
        <li
          v-for="item in menuItems"
          :key="item.link"
          class="relative"
        >
          <router-link
            :to="item.link"
            class="px-4 py-2 transition-500"
            :class="{
              'text-white border-b-2 border-orange-macan': route.path === item.link,
              'text-gray-500': route.path !== item.link,
            }"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <ContactComponent />
  </div>
</template>
