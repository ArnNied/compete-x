<template>
  <a
    :href="competition.url"
    target="_blank"
    class="p-4 bg-white rounded shadow-md active:shadow-none hover:shadow-primary/75 outline-none transition group"
  >
    <div>
      <h3 class="font-bold text-lg text-darker transition">
        {{ competition.name }}
      </h3>
      <p class="font-semibold text-primary">
        {{ competition.site }}
      </p>
    </div>
    <div>
      <p class="font-semibold text-darker transition">
        Start:
        <span class="font-normal">
          {{ moment(competition.start_time).format("YYYY/MM/DD, HH:mm:ss") }}
        </span>
      </p>
      <p class="font-semibold text-darker transition">
        End:
        <span class="font-normal">
          {{ moment(competition.end_time).format("YYYY/MM/DD, HH:mm:ss") }}
        </span>
      </p>
      <p class="font-semibold text-darker transition">
        {{ moment(competition.start_time) < moment() ? "Ends " : "Starts " }}
        {{ moment(competition.end_time).fromNow() }}
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { TCompetition } from "~~/typings/types"
import moment from "moment"

defineProps<{
  competition: TCompetition
}>()
</script>
