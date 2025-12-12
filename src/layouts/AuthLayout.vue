<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";
import Dropdown from "../components/Dropdown.vue";

const isAsideActive = ref<boolean>(false);
const handleAside = (): void => {
  isAsideActive.value = !isAsideActive.value;
};
const asideClassName = computed<string>(() => {
  return isAsideActive.value
    ? "left-0 lg:hidden"
    : "-left-(--container-3xs) lg:left-0 lg:hidden";
});
const backdropClassName = computed(() => {
  return isAsideActive.value ? "fixed lg:hidden" : "hidden";
});
</script>

<template>
  <div class="bg-neutral-900 text-neutral-200 min-h-screen relative">
    <div
      @click="handleAside"
      :class="[
        backdropClassName,
        'backdrop top-0 left-0 right-0 bottom-0 backdrop-blur bg-black/5 z-100',
      ]"
    ></div>

    <header
      class="bg-neutral-900 sticky top-0 h-14 border-b border-neutral-700 grid grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr_300px] items-center px-4"
    >
      <div class="flex flex-row justify-start items-center gap-3">
        <h1
          style="text-shadow: 1px 1px 1px var(--color-emerald-300)"
          class="text-3xl font-bold text-emerald-600"
        >
          POSVUE <small>1.0</small>
        </h1>
      </div>

      <nav class="font-bold text-center space-x-10 hidden lg:block">
        <a href="#" class="">
          <span>Usage</span>
        </a>
        <a href="#" class="">
          <span>Api reference</span>
        </a>
        <a href="#" class="">
          <span>Author</span>
        </a>
      </nav>

      <div class="flex flex-row justify-end gap-x-4">
        <a href="#" class="text-emerald-600">
          <Icon icon="material-symbols-light:dark-mode" class="text-4xl" />
        </a>
        <button :onclick="handleAside" class="lg:hidden cursor-pointer">
          <Icon
            icon="material-symbols:menu-rounded"
            class="text-4xl text-emerald-600"
          />
        </button>
      </div>
    </header>
    <aside
      :class="[
        'fixed z-101 top-0 lg:top-14 w-3xs bottom-0 bg-neutral-900 transition-all border-r border-neutral-700',
        'space-y-5 px-3 py-3 overflow-y-auto',
        asideClassName,
      ]"
    >
      <Dropdown :is-close="true">
        <template #trigger>Readable</template>
        <template #items>
          <a href="#">Usage</a>
          <a href="#">Api Reference</a>
          <a href="#">Author</a>
        </template>
      </Dropdown>
    </aside>
    <main class="p-3 h-dvh text-neutral-100">
      <router-view />
    </main>
  </div>
</template>
