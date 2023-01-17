<template>
  <button
    @click="clickHandler"
    class="px-4 py-2 rounded-full shadow active:shadow-none transition outline-none"
    :class="{
      'bg-secondary text-light shadow-primary/50': chosenFilter === filterItem,
      'bg-white text-darker': chosenFilter !== filterItem,
    }"
  >
    {{ displayText || filterItem }}
    <span
      class="rounded-full px-2 py-0.5 transition"
      :class="{
        'bg-white text-darker': chosenFilter === filterItem,
        'bg-secondary text-light': chosenFilter !== filterItem,
      }"
    >
      {{ amount }}
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  chosenFilter: string
  displayText?: string
  filterItem: string
  amount: number
  clickHandler: () => void
}>()
</script>
