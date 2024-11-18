<script setup lang="ts">

</script>

<template>
  <div class="w-1/4 rounded-xl bg-white text-black">
    <div>
      <slot name="header" />
    </div>
    <div class="border-t p-7">
      <slot name="body" />
    </div>
    <div class="border-t p-7">
      <slot name="footer" />
    </div>
  </div>
</template>
