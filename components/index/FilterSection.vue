<template>
  <div class="py-6">
    <div class="w-fit px-4 md:px-8 mx-auto">
      <h2 class="font-semibold text-2xl text-primary text-center">
        Filter Site
      </h2>
      <div class="flex flex-row flex-wrap justify-center mt-2 space-x-4">
        <div v-for="(site, index) in sites" :key="index" class="py-2">
          <IndexFilterSectionButton
            :click-handler="() => filterSiteHandler(site)"
            :filter-item="site"
            :chosen-filter="filterSite"
            :amount="
              listOfCompetitions.filter(
                (competition) => competition.site === site
              ).length
            "
          />
        </div>
      </div>
    </div>
    <div class="w-fit mx-auto">
      <h2 class="font-semibold text-2xl text-primary text-center">Status</h2>
      <div class="flex flex-row mt-2 space-x-4">
        <IndexFilterSectionButton
          display-text="Ongoing"
          :click-handler="() => filterStatusHandler('CODING')"
          filter-item="CODING"
          :chosen-filter="filterStatus"
          :amount="
            listOfCompetitions.filter(
              (competition) =>
                competition.status === 'CODING' &&
                (filterSite === '' || competition.site === filterSite)
            ).length
          "
        />
        <IndexFilterSectionButton
          display-text="Upcoming"
          :click-handler="() => filterStatusHandler('BEFORE')"
          filter-item="BEFORE"
          :chosen-filter="filterStatus"
          :amount="
            listOfCompetitions.filter(
              (competition) =>
                competition.status === 'BEFORE' &&
                (filterSite === '' || competition.site === filterSite)
            ).length
          "
        />
      </div>
    </div>
    <div class="w-full px-4 md:px-16 xl:px-32 mt-4">
      <input
        @keyup="(e) => filterTextHandler((e.target as HTMLInputElement).value as string)"
        type="text"
        placeholder="Search by name"
        class="py-2 px-4 text-darker rounded-full shadow focus:shadow-primary/50 focus:outline-none transition"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TCompetition } from "~~/typings/types"

defineProps<{
  sites: string[]
  filterSite: string
  filterSiteHandler: (site: string) => void
  filterStatus: string
  filterStatusHandler: (status: string) => void
  filterTextHandler: (text: string) => void
  listOfCompetitions: TCompetition[]
  filteredCompetitions: TCompetition[]
}>()
</script>
