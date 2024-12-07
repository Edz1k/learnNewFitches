<script setup lang="ts">

</script>

<template>
  <div class="bg-white text-black">
    <div>
      <slot name="header" />
    </div>
    <div class="min-h-[30vh] border-t p-7">
      <slot name="body" />
    </div>
    <div class="border-t p-7">
      <slot name="footer" />
    </div>
  </div>
</template>
