<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="rounded bg-orange-macan p-2 transition-500 hover:bg-opacity-70">
    <button @click="router.push('/contacts')">
      Связаться с нами
    </button>
  </div>
</template>
