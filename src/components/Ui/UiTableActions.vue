<script setup lang="ts">
import UiIcon from "./UiIcon.vue";
</script>

<template>
  <div class="flex gap-2">
    <button class="text-xl px-3 py-1 rounded bg-red-400 text-white">
      <UiIcon icon="delete" />
    </button>
    <button class="text-xl px-3 py-1 rounded bg-indigo-400 text-white">
      <UiIcon icon="edit" />
    </button>
  </div>
</template>
