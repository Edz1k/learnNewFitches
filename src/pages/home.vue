<script setup lang="ts">
import { useCarStore } from '~/composables/useCars'

const { cars } = useCarStore()
</script>

<template>
  {{ cars }}
</template>
