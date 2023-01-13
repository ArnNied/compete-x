<template>
  <div class="w-full grid grid-cols-4 gap-4 px-32">
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
