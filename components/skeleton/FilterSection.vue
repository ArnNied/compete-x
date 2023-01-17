<template>
  <div class="py-6">
    <div class="w-fit mx-auto">
      <h2 class="font-semibold text-2xl text-primary text-center">
        Filter Site
      </h2>
      <div class="flex flex-row mt-2 space-x-4">
        <SkeletonFilterSectionButton />
        <SkeletonFilterSectionButton />
        <SkeletonFilterSectionButton />
        <SkeletonFilterSectionButton />
        <SkeletonFilterSectionButton />
      </div>
    </div>
    <div class="w-fit mx-auto mt-4">
      <h2 class="font-semibold text-2xl text-primary text-center">Status</h2>
      <div class="flex flex-row mt-2 space-x-4">
        <SkeletonFilterSectionButton />
        <SkeletonFilterSectionButton />
      </div>
    </div>
    <div class="w-full px-32 mt-4">
      <div
        class="w-60 h-10 bg-white rounded-full shadow focus:outline-none"
      ></div>
    </div>
  </div>
</template>
