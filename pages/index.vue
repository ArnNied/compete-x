<template>
  <div>
    <IndexHeader />
    <IndexFilterSection
      :sites="sites"
      :filter-site="filterSite"
      :filter-site-handler="filterSiteHandler"
      :filter-status="filterStatus"
      :filter-status-handler="filterStatusHandler"
      :list-of-competitions="listOfCompetitions"
      :filtered-competitions="filteredCompetitions"
    />
    <IndexCompetitionList :competitions="filteredCompetitions" />
  </div>
</template>

<script setup lang="ts">
import { TCompetition } from "~~/typings/types"

const listOfCompetitions = ref<TCompetition[]>([])
const filteredCompetitions = ref<TCompetition[]>([])

const sites = ref(["Leet Code", "HackerRank", "CodeChef", "CodeForces"])
const filterSite = ref("")

const filterStatus = ref("")

onMounted(async () => {
  try {
    const req = await fetch("https://kontests.net/api/v1/all")
    const res: TCompetition[] = await req.json()

    listOfCompetitions.value = res
    filteredCompetitions.value = res

    sites.value = Array.from(
      new Set(res.map((competition) => competition.site))
    )
  } catch (error) {
    alert(error)
  }
})

function filterSiteHandler(site: string): void {
  if (site === filterSite.value) {
    filterSite.value = ""
  } else {
    filterSite.value = site
  }

  filterCompetitons()
}

function filterStatusHandler(status: string): void {
  if (status === filterStatus.value) {
    filterStatus.value = ""
  } else {
    filterStatus.value = status
  }

  filterCompetitons()
}

// Filter competitions based on site and status
function filterCompetitons() {
  filteredCompetitions.value = listOfCompetitions.value.filter(
    (competition) =>
      (filterSite.value === "" || competition.site === filterSite.value) &&
      (filterStatus.value === "" || competition.status === filterStatus.value)
  )
}
</script>
