<template>
  <button
    @click="clickHandler"
    id="back-to-top"
    class="w-16 h-16 bg-primary fixed rounded-full shadow-md active:shadow-none hover:shadow-primary opacity-0 transition z-50 right-4 bottom-4 hidden"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      width="30"
      height="30"
      class="mx-auto fill-light"
    >
      <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue"

const scrollY = ref(0)
const buttonIsShown = ref(false)

function scrollHandler(): void {
  scrollY.value = window.scrollY

  const button = document.getElementById("back-to-top")

  if (!button) return

  if (scrollY.value > 100 && !buttonIsShown.value) {
    buttonIsShown.value = true
    button.classList.remove("hidden")
    setTimeout(() => {
      button.classList.replace("opacity-0", "opacity-100")
    }, 100)
  } else if (scrollY.value <= 100 && buttonIsShown.value) {
    buttonIsShown.value = false
    button.classList.replace("opacity-100", "opacity-0")
    setTimeout(() => {
      button.classList.add("hidden")
    }, 100)
  }
}

onMounted(() => {
  window.addEventListener("scroll", scrollHandler)
})

function clickHandler(): void {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>
