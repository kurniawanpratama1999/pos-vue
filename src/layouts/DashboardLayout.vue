<script setup lang="ts">
import UiHeader from "../components/Ui/UiHeader.vue";
import UiNavSide from "../components/Ui/UiNavSide.vue";
</script>

<template>
  <!-- HEADER START -->
  <UiHeader />
  <!-- HEADER END -->

  <!-- NAVSIDE START -->
  <UiNavSide />
  <!-- NAVSIDE END -->

  <!-- MAIN START -->
  <main
    class="relative left-(--container-3xs) w-[calc(100dvw-var(--container-3xs))] overflow-x-hidden"
  >
    <div class="p-2">
      <router-view />
    </div>
  </main>
  <!-- MAIN END -->

  <!-- FOOTER START -->
  <footer></footer>
  <!-- FOOTER END -->
</template>
