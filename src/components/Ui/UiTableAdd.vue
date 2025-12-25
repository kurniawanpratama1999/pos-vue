<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import UiIcon from "./UiIcon.vue";

const props = defineProps<{
  text: string;
  redirectTo: RouteLocationRaw;
}>();
</script>

<template>
  <div class="ml-auto flex gap-2">
    <router-link
      :to="props.redirectTo"
      class="text-md px-3 py-1 rounded bg-emerald-400 text-white"
    >
      <div class="flex gap-1 items-center">
        <UiIcon icon="add" />
        <span>{{ props.text }}</span>
      </div>
    </router-link>
  </div>
</template>
