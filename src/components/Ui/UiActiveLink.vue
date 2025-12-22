<script setup lang="ts">
import { type RouteLocationAsRelativeGeneric } from "vue-router";

const props = defineProps<{
  href: RouteLocationAsRelativeGeneric;
}>();
</script>

<template>
  <RouterLink activeClass="font-bold" :to="props.href">
    <slot></slot>
  </RouterLink>
</template>
