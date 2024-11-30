<script setup lang="ts">

</script>

<template>
  <div class="ml-10 mt-5 w-[30%] border rounded-xl bg-white text-black">
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
