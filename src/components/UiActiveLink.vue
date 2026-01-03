<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from "vue-router";

const props = defineProps<{
  to: RouteLocationRaw;
}>();
</script>

<template>
  <RouterLink active-class="font-bold" :to="props.to">
    <slot></slot>
  </RouterLink>
</template>
