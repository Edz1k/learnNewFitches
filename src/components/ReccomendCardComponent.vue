<script setup lang="ts"></script>

<template>
  <div class="w-[24%] border border-orange-macan rounded-xl p-4 transition-500 hover:bg-orange-macan">
    <div class="text-3xl">
      <slot name="icon" />
    </div>
    <h1 class="mt-1 text-xl font-bold">
      <slot name="header" />
    </h1>
    <p class="mt-2">
      <slot name="text" />
    </p>
  </div>
</template>
