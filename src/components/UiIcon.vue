<script lang="ts">
const ICON_ITEMS = {
  arrow: {
    width: 12,
    height: 24,
    body: '<path fill="currentColor" fill-rule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"/>',
  },
  cart: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/>',
  },
  menu1: {
    width: 24,
    height: 24,
    body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 7.3H9.4m5.2 0h-.01M9.31 12H9.3m5.3 0h-.01m-5.18 4.7H9.4m5.2 0h-.01"/>',
  },
  menu2: {
    width: 20,
    height: 20,
    body: '<g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.5 9.2a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1m0-4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1" opacity="0.2"/><path d="M2 8.5a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"/></g>',
  },
  dotsY: {
    width: 21,
    height: 21,
    body: '<g fill="currentColor" fill-rule="evenodd"><circle cx="10.5" cy="10.5" r="1"/><circle cx="10.5" cy="5.5" r="1"/><circle cx="10.5" cy="15.5" r="1"/></g>',
  },
  pos: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" fill-rule="evenodd" d="M7.784 1.356a2.75 2.75 0 0 0-3.186 2.231l-2.43 13.787a2.75 2.75 0 0 0 2.23 3.186l11.818 2.084a2.75 2.75 0 0 0 3.185-2.23l2.432-13.788a2.75 2.75 0 0 0-2.231-3.186zM9.06 5.643A.75.75 0 1 0 8.8 7.12l7.878 1.39a.75.75 0 0 0 .26-1.478zm-1.563 4.548a.75.75 0 0 1 .869-.608l7.878 1.389a.75.75 0 1 1-.26 1.477l-7.879-1.39a.75.75 0 0 1-.608-.868m.174 3.33a.75.75 0 1 0-.26 1.477l4.924.869a.75.75 0 1 0 .26-1.478z" clip-rule="evenodd"/>',
  },
  dashboard: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M13.5 8.183V4.817q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23t-.23-.587M4 11.2V4.8q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23T4 11.2m9.5 8v-6.4q0-.34.234-.57t.58-.23h4.88q.347 0 .576.23t.23.57v6.4q0 .34-.234.57t-.58.23h-4.88q-.346 0-.576-.23t-.23-.57M4 19.183v-3.366q0-.357.234-.587t.58-.23h4.88q.347 0 .576.23t.23.587v3.366q0 .358-.234.587q-.234.23-.58.23h-4.88q-.346 0-.576-.23T4 19.183M5 11h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"/>',
  },
  transaction: {
    width: 32,
    height: 32,
    body: '<path fill="currentColor" d="M21 16h2v2h-2zM9 16h8v2H9zm12-4h2v2h-2zM9 12h8v2H9zm0-4h14v2H9z"/><path fill="currentColor" d="M25 2H7a2 2 0 0 0-2 2v25a1 1 0 0 0 1 1h1a1 1 0 0 0 .8-.4l2.2-2.933l2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933l2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933l2.2 2.933a1 1 0 0 0 .8.4h1a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2m0 25.333L22.8 24.4a1.035 1.035 0 0 0-1.6 0L19 27.333L16.8 24.4a1.035 1.035 0 0 0-1.6 0L13 27.333L10.8 24.4a1.035 1.035 0 0 0-1.6 0L7 27.333V4h18Z"/>',
  },
  orderDetail: {
    width: 512,
    height: 512,
    body: '<path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M160 336V48l32 16l32-16l31.94 16l32.37-16L320 64l31.79-16l31.93 16L416 48l32.01 16L480 48v224"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 272v112a80 80 0 0 1-80 80a80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 144h192m-128 80h128"/>',
  },
  logout: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="m16.56 5.44l-1.45 1.45A5.97 5.97 0 0 1 18 12a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 5.44A7.96 7.96 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-2.72-1.36-5.12-3.44-6.56M13 3h-2v10h2"/>',
  },
  plus: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"/>',
  },
  delete: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17"/>',
  },
  edit: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" fill-rule="evenodd" d="M5 20h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m-1-5L14 5l3 3L7 18H4zM15 4l2-2l3 3l-2.001 2.001z"/>',
  },
  crown: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M4 20h16v2H4zM21 5a1 1 0 0 0-1 1a.9.9 0 0 0 .064.332a1.1 1.1 0 0 0 .167.283l-2.12 1.692L15.994 10L14.24 6.927l-1.752-3.072a1.05 1.05 0 0 0 .369-.353A.95.95 0 0 0 13 3a1 1 0 1 0-2 0a.95.95 0 0 0 .143.502a1.05 1.05 0 0 0 .369.353L9.757 6.927L8.002 10L5.886 8.308L3.769 6.615a1.1 1.1 0 0 0 .167-.283A.9.9 0 0 0 4 6a1 1 0 1 0-1 1a.2.2 0 0 0 .041-.007a.2.2 0 0 1 .041-.01l.459 5.509L4 18h16l.459-5.508l.459-5.509a.2.2 0 0 1 .04.01A.2.2 0 0 0 21 7a1 1 0 1 0 0-2"/>',
  },
  general: {
    width: 24,
    height: 24,
    body: '<path fill="currentColor" d="M21.66 6.423L12 .845L2.34 6.423v11.154L12 23.155l9.66-5.578zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8"/>',
  },
} as const;
</script>

<script setup lang="ts">
import { Icon, addIcon } from "@iconify/vue";
import { onMounted } from "vue";

interface PropsIcon {
  icon: keyof typeof ICON_ITEMS;
}

const props = defineProps<PropsIcon>();

onMounted(() => {
  addIcon(`@custom:me:${props.icon}`, ICON_ITEMS[props.icon]);
});
</script>
<template>
  <Icon :icon="`@custom:me:${props.icon}`" class="text-xl" />
</template>
