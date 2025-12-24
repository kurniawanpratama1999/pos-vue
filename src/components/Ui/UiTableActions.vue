<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import UiIcon from "./UiIcon.vue";
const props = defineProps<{
  handleDelete: () => void;
  routerEdit: RouteLocationRaw;
}>();
</script>

<template>
  <div class="flex gap-2">
    <button
      type="button"
      @click="props.handleDelete"
      class="text-xl px-3 py-1 rounded bg-red-400 text-white"
    >
      <UiIcon icon="delete" />
    </button>
    <router-link
      :to="routerEdit"
      class="text-xl px-3 py-1 rounded bg-indigo-400 text-white"
    >
      <UiIcon icon="edit" />
    </router-link>
  </div>
</template>
