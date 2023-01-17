<template>
  <a
    :href="competition.url"
    target="_blank"
    class="p-4 bg-white hover:bg-secondary rounded shadow-md group transition group"
  >
    <div>
      <h3
        class="font-bold text-lg text-darker group-hover:text-light transition"
      >
        {{ competition.name }}
      </h3>
      <p class="font-semibold text-primary">
        {{ competition.site }}
      </p>
    </div>
    <div>
      <p class="font-semibold text-darker group-hover:text-light transition">
        Start:
        <span class="font-normal">
          {{ moment(competition.start_time).format("YYYY/MM/DD, HH:mm:ss") }}
        </span>
      </p>
      <p class="font-semibold text-darker group-hover:text-light transition">
        End:
        <span class="font-normal">
          {{ moment(competition.end_time).format("YYYY/MM/DD, HH:mm:ss") }}
        </span>
      </p>
      <p class="font-semibold text-darker group-hover:text-light transition">
        Duration (hours):
        <span class="font-normal">
          {{
            moment(competition.end_time)
              .diff(competition.start_time, "hours", true)
              .toFixed(1)
          }}
        </span>
      </p>
      <p class="font-semibold text-darker group-hover:text-light transition">
        Status:
        <span class="font-semibold text-primary transition">{{
          competition.status == "CODING" ? "ONGOING" : "UPCOMING"
        }}</span>
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
