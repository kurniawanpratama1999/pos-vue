<script setup lang="ts">
import UiIcon from "./UiIcon.vue";

interface Props {
  handleNavbar: () => void;
  handleAside: () => void;
}
const props = defineProps<Props>();
</script>

<template>
  <header class="shadow bg-neutral-100 fixed top-0 left-0 right-0 z-101">
    <div class="flex justify-between items-center px-3 py-1 h-12">
      <button type="button" :class="['lg:hidden']" @click="props.handleAside">
        <UiIcon icon="menu2" />
      </button>

      <h1
        class="max-lg:max-w-[calc(var(--container-4xs)-12px)] text-xl font-bold flex items-center gap-x-1 text-emerald-500">
        <UiIcon icon="pos" />
        POSVUE <small class="text-xs">1.0</small>
      </h1>

      <button type="button" :class="['lg:hidden']" @click="props.handleNavbar">
        <UiIcon icon="menu1" />
      </button>
      <slot></slot>
    </div>
  </header>
</template>
