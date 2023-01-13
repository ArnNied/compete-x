<template>
  <div class="py-6">
    <div class="w-fit mx-auto">
      <h2 class="font-semibold text-2xl text-primary text-center">
        Filter Site
      </h2>
      <div class="flex flex-row mt-2 space-x-4">
        <IndexFilterSectionButton
          v-for="(site, index) in sites"
          :key="index"
          :click-handler="() => filterSiteHandler(site)"
          :filter-item="site"
          :chosen-filter="filterSite"
        />
      </div>
    </div>
    <div class="w-fit mx-auto mt-4">
      <h2 class="font-semibold text-2xl text-primary text-center">Status</h2>
      <div class="flex flex-row mt-2 space-x-4">
        <IndexFilterSectionButton
          v-for="(status, index) in statuses"
          :key="index"
          :click-handler="() => filterStatusHandler(status)"
          :filter-item="status"
          :chosen-filter="filterStatus"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sites: string[]
  filterSite: string
  filterSiteHandler: (site: string) => void
  statuses: string[]
  filterStatus: string
  filterStatusHandler: (status: string) => void
}>()
</script>
