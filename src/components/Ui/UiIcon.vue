<script setup lang="ts">
import { addIcon, Icon } from "@iconify/vue";
import { onMounted } from "vue";

const icons = {
  delete: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"/>',
  },
  edit: {
    width: 24,
    height: 24,
    body: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21h18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="48" stroke-dashoffset="48" d="M7 17v-4l10 -10l4 4l-10 10h-4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"/></path></g><path fill="currentColor" fill-opacity="0" d="M14 6l4 4L21 7L17 3Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"/></path>',
  },
  add: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/>',
  },
  save: {
    left: 0,
    top: 0,
    width: 24,
    height: 24,
    rotate: 0,
    vFlip: false,
    hFlip: false,
    body: '<path fill="currentColor" d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"/>',
  },
};

const props = defineProps<{
  icon: keyof typeof icons;
}>();

onMounted(() => {
  addIcon(`@custom:self:${props.icon}`, icons[props.icon]);
});
</script>

<template>
  <Icon :icon="`@custom:self:${props.icon}`" v-bind="$attrs" />
</template>
