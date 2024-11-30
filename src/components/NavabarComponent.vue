<script setup lang="ts">
const menuItems = ref([
  { title: 'Рабочая', link: '/', id: 1 },
  { title: 'Домашняя', link: '/home', id: 2 },
  { title: 'Вечерняя', link: '/evening', id: 3 },
  { title: 'Просто', link: '/simple', id: 4 },
])
const selected = ref<number | null>(1)
function setSelected(id: number) {
  selected.value = id
}
</script>

<template>
  <div class="sticky top-0 flex items-center justify-between border-b bg-white p-4 dark:bg-black">
    <div class="w-1/9">
      <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" class="h-10 rounded-xl">
    </div>
    <div class="w-1/2">
      <ul class="flex justify-between">
        <li v-for="item in menuItems" :key="item.link" @click="setSelected(item.id)">
          <router-link :to="item.link" :class="selected === item.id ? 'text-grey dark:text-white' : 'text-gray'" class="transition duration-300 hover:text-black dark:hover:text-blue-2">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <button icon-btn @click="toggleDark()">
        <div i-carbon-sun dark:i-carbon-moon class="text-xl" />
      </button>
    </div>
  </div>
</template>
