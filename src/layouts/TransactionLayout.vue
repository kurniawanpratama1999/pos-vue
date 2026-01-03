<script setup lang="ts">
import UiNavbar from "@/components/UiNavbar.vue";
</script>

<template>
  <UiNavbar />
  <main class="w-full min-h-dvh pt-12">
    <router-view />
  </main>
</template>
