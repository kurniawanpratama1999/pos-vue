<script lang="ts">
export const icons = {
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
  success: {
    width: 24,
    height: 24,
    body: '<g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.535 6.381l-4.95 4.95l-2.12-2.121a1 1 0 0 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0l5.586-5.586a1 1 0 0 0-1.415-1.415"/></g>',
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
  question: {
    width: 24,
    height: 24,
    body: '<g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-9.5a3.625 3.625 0 0 0-3.625 3.625a1 1 0 1 0 2 0a1.625 1.625 0 1 1 2.23 1.51c-.676.27-1.605.962-1.605 2.115V14a1 1 0 1 0 2 0c0-.244.05-.366.261-.47l.087-.04A3.626 3.626 0 0 0 12 6.5"/></g>',
  },
  cancel: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>',
  },
  exclamation: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4a51.2 51.2 0 0 0 0 102.4"/>',
  },
  information: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>',
  },
  error: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="m9.225 12.425l1.45 1.975q.15.2.4.2t.4-.2l1.45-1.975L14.35 14.4q.15.2.413.2t.412-.2l2.25-3.075q.25-.35.188-.75t-.413-.65t-.75-.187t-.65.412l-1.05 1.425L13.325 9.6q-.15-.2-.413-.2t-.412.2l-1.425 1.975L9.625 9.6q-.15-.2-.4-.2t-.4.2l-2.25 3.075q-.25.35-.188.75t.413.65t.75.188t.65-.413zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>',
  },
  forbidden: {
    body: '<path fill="currentColor" fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-6.305 4.17A4.5 4.5 0 0 1 3.83 6.305zm2.475-2.475L6.305 3.83a4.5 4.5 0 0 1 5.865 5.865" clip-rule="evenodd"/>',
  },
};
</script>

<script setup lang="ts">
import { addIcon, Icon } from "@iconify/vue";
import { watchEffect } from "vue";

const props = defineProps<{
  icon: keyof typeof icons;
}>();

watchEffect(() => {
  addIcon(`@custom:self:${props.icon}`, icons[props.icon]);
});
</script>

<template>
  <Icon :icon="`@custom:self:${props.icon}`" v-bind="$attrs" />
</template>
