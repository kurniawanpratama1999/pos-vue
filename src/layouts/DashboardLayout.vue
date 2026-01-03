<script setup lang="ts">
import UiAside from "@/components/UiAside.vue";
import UiNavbar from "@/components/UiNavbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <UiNavbar />
  <UiAside />
  <main
    :class="[
      'relative left-(--container-4xs)',
      'w-full max-w-[calc(100dvw-var(--container-4xs))]',
      'pt-12',
    ]">
    <RouterView />
  </main>
</template>
