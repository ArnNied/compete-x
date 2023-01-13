<template>
  <a
    :href="competition.url"
    class="p-4 bg-white hover:bg-secondary rounded shadow-md group transition"
  >
    <div>
      <h3
        class="font-bold text-lg text-darker group-hover:text-darker transition"
      >
        {{ competition.name }}
      </h3>
      <p class="font-semibold text-primary">
        {{ competition.site }}
      </p>
    </div>
    <div>
      <p class="text-darker">Start: {{ competition.start_time }}</p>
      <p class="text-darker">Start: {{ competition.end_time }}</p>
      <p class="text-darker">
        Status:
        <span class="font-semibold text-primary">{{
          competition.status == "CODING" ? "ONGOING" : "UPCOMING"
        }}</span>
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { TCompetition } from "~~/typings/types"

defineProps<{
  competition: TCompetition
}>()
</script>
