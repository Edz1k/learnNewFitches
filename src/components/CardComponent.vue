<script setup lang="ts">
</script>

<template>
  <div class="bg-white text-black">
    <div>
      <slot name="header" />
    </div>
    <div class="min-h-[30vh] p-7">
      <slot name="body" />
    </div>
  </div>
</template>
