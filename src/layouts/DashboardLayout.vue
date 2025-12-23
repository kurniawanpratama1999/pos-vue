<script setup lang="ts">
import UiNavSide from "../components/Ui/UiNavSide.vue";
</script>

<template>
  <!-- NAVSIDE START -->
  <UiNavSide />
  <!-- NAVSIDE END -->

  <!-- MAIN START -->
  <main
    class="relative left-(--container-3xs) w-[calc(100dvw-var(--container-3xs))] overflow-x-hidden"
  >
    <div class="p-0">
      <router-view />
    </div>
  </main>
  <!-- MAIN END -->

  <!-- FOOTER START -->
  <footer></footer>
  <!-- FOOTER END -->
</template>
