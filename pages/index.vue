<template>
  <div>
    <IndexHeader />
    <IndexFilterSection
      :sites="sites"
      :filter-site="filterSite"
      :filter-site-handler="filterSiteHandler"
      :statuses="statuses"
      :filter-status="filterStatus"
      :filter-status-handler="filterStatusHandler"
    />
    <IndexCompetitionList :competitions="listOfCompetitions" />
  </div>
</template>

<script setup lang="ts">
import { TCompetition } from "~~/typings/types"

const listOfCompetitions = ref<TCompetition[]>([])

const sites = ref(["Leet Code", "HackerRank", "CodeChef", "CodeForces"])
const filterSite = ref("")

const statuses = ref(["Ongoing", "Upcoming"])
const filterStatus = ref("")

onMounted(async () => {
  try {
    const req = await fetch("https://kontests.net/api/v1/all")
    const res: TCompetition[] = await req.json()

    listOfCompetitions.value = res
  } catch (error) {
    alert(error)
  }
})

function filterSiteHandler(site: string): void {
  if (filterSite.value == site) {
    filterSite.value = ""
  } else {
    filterSite.value = site
  }
}

function filterStatusHandler(status: string) {
  if (filterStatus.value == status) {
    filterStatus.value = ""
  } else {
    filterStatus.value = status
  }
}
</script>
