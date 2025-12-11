<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";

const isAsideActive = ref<boolean>(false);
const handleAside = (): void => {
  isAsideActive.value = !isAsideActive.value;
};
const asideClassName = computed<string>(() => {
  return isAsideActive.value ? "left-0" : "-left-(--container-3xs) lg:left-0";
});
</script>

<template>
  <div class="bg-neutral-800 text-neutral-200 min-h-screen relative">
    <header
      class="bg-neutral-700 h-14 grid grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr_300px] items-center px-4"
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
        'fixed top-14 w-3xs bottom-0 bg-neutral-600 transition-all',
        'space-y-5 px-3 py-3 overflow-y-auto',
        asideClassName,
      ]"
    >
      <dropdown :is-close="true">
        <template #trigger>Master Data</template>
        <template #items>
          <a href="#">User</a>
          <a href="#">Role</a>
          <a href="#">Anchor</a>
          <a href="#">Permission</a>
        </template>
      </dropdown>

      <dropdown>
        <template #trigger>General Data</template>
        <template #items>
          <a href="#">Category</a>
          <a href="#">Product</a>
          <a href="#">Variant</a>
        </template>
      </dropdown>

      <dropdown>
        <template #trigger>Transaction</template>
        <template #items>
          <a href="#">Order</a>
          <a href="#">Order Detail</a>
          <a href="#">Report</a>
        </template>
      </dropdown>

      <dropdown>
        <template #trigger>Readable</template>
        <template #items>
          <a href="#">Usage</a>
          <a href="#">Api Reference</a>
          <a href="#">Author</a>
        </template>
      </dropdown>

      <dropdown>
        <template #trigger>Profile</template>
        <template #items>
          <a href="#">Kurniawan Pratama</a>
          <a href="#">Schedule</a>
          <a href="#">Logout</a>
        </template>
      </dropdown>
    </aside>
    <main
      class="p-3 text-neutral-100 lg:relative left-(--container-3xs) w-[calc(100vw-var(--container-3xs))]"
    >
      <router-view />
    </main>
  </div>
</template>
