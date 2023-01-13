<template>
  <button
    @click="clickHandler"
    class="px-4 py-2 rounded-full transition"
    :class="{
      'bg-secondary text-light shadow-none': chosenFilter === filterItem,
      'bg-white text-darker shadow': chosenFilter !== filterItem,
    }"
  >
    {{ filterItem }}
    <span
      class="rounded-full px-2 py-0.5 transition"
      :class="{
        'bg-white text-darker': chosenFilter === filterItem,
        'bg-secondary text-light': chosenFilter !== filterItem,
      }"
      >2</span
    >
  </button>
</template>

<script setup lang="ts">
defineProps<{
  chosenFilter: string
  filterItem: string
  clickHandler: () => void
}>()
</script>
