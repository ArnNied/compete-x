<template>
  <div
    class="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 md:px-16 xl:px-32 pb-12"
  >
    <IndexCompetitionCard
      v-for="competition in competitions"
      :competition="competition"
    />
  </div>
</template>

<script setup lang="ts">
import { TCompetition } from "~~/typings/types"

defineProps<{
  competitions: TCompetition[]
}>()
</script>
