<script setup lang="ts">
import UiIcon from "@/components/UiIcon.vue";

interface Props {
  handleCart: () => void;
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
        <UiIcon icon="pos" class="lg:hidden" />
        POSVUE <small class="text-xs">1.0</small>
        <button
          type="button"
          :class="['max-lg:hidden lg:ml-4 rotate-90']"
          @click="props.handleAside">
          <UiIcon icon="arrow" />
        </button>
      </h1>

      <button type="button" :class="['lg:hidden']" @click="props.handleCart">
        <UiIcon icon="cart" />
      </button>
      <slot></slot>
    </div>
  </header>
</template>
