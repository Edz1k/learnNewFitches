<script setup lang="ts">
</script>

<template>
  <div class="bg-white text-black">
    <div>
      <slot name="header" />
    </div>
    <div class="min-h-70 flex items-center">
      <slot name="body" />
    </div>
    <div>
      <slot name="footer" />
    </div>
  </div>
</template>
