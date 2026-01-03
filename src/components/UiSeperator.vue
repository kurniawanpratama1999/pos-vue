<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    className?: string;
  }>(),
  {
    className: "bg-neutral-300 w-full",
  }
);
</script>

<template>
  <div class="px-3 my-3">
    <div :class="[props.className, 'h-[2px] rounded-[100%]']"></div>
  </div>
</template>
