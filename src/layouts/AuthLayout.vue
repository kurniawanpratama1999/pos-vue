<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-neutral-800 text-neutral-200 min-h-screen">
    <header
      class="bg-neutral-700 h-14 grid grid-cols-[300px_1fr_300px] items-center px-4"
    >
      <div class="flex flex-row justify-start">
        <h1
          style="text-shadow: 1px 1px 1px var(--color-emerald-300)"
          class="text-3xl font-bold text-emerald-600"
        >
          POSVUE <small>1.0</small>
        </h1>
      </div>

      <nav class="font-bold text-center space-x-10">
        <a href="#" class="">
          <span>Usage</span>
        </a>
        <a href="#" class="">
          <span>Api reference</span>
        </a>
        <a href="#" class="">
          <span>Author</span>
        </a>
      </nav>

      <div class="flex flex-row justify-end">
        <a href="#" class="text-emerald-600">
          <Icon icon="material-symbols-light:dark-mode" class="text-4xl" />
        </a>
      </div>
    </header>
    <main class="p-3 text-neutral-100">
      <router-view />
    </main>
  </div>
</template>
