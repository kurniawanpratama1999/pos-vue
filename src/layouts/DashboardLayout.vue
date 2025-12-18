<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, onMounted, ref } from "vue";
import Dropdown from "../components/Dropdown.vue";
import { useFetch } from "../utils/useFetch";
import { useRouter } from "vue-router";
import { useAuthFetch } from "../utils/useAuthFetch";
const router = useRouter();
const isAsideActive = ref<boolean>(false);
const handleAside = (): void => {
  isAsideActive.value = !isAsideActive.value;
};
const asideClassName = computed<string>(() => {
  return isAsideActive.value ? "left-0" : "-left-(--container-3xs) lg:left-0";
});
const backdropClassName = computed(() => {
  return isAsideActive.value ? "fixed lg:hidden" : "hidden";
});

onMounted(async () => {
  const fetchRefreshToken = await useFetch(
    "http://localhost:3000/api/v1/auth/refresh",
    true,
    "GET"
  );

  if (!fetchRefreshToken.success) {
    router.push({ name: "login" });
  }
});

const logout = async () => {
  await useAuthFetch(
    "http://localhost:3000/api/v1/auth/logout",
    false,
    "DELETE"
  );
  router.push({ name: "login" });
};
</script>

<template>
  <div
    class="bg-neutral-900 text-neutral-200 w-dvw min-h-dvh relative overflow-x-hidden"
  >
    <div
      @click="handleAside"
      :class="[
        backdropClassName,
        'backdrop top-0 left-0 right-0 bottom-0 backdrop-blur bg-black/5 z-100',
      ]"
    ></div>

    <header
      class="bg-neutral-900 fixed top-0 z-99 w-full h-14 border-b border-neutral-700 flex max-lg:justify-between lg:grid lg:grid-cols-[calc(var(--container-3xs)+10rem)_1fr_10rem] items-center px-4"
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
        <template #trigger>Master Data</template>
        <template #items>
          <a href="#">User</a>
          <a href="#">Role</a>
          <a href="#">Anchor</a>
          <a href="#">Permission</a>
        </template>
      </Dropdown>

      <Dropdown :is-close="false">
        <template #trigger>General Data</template>
        <template #items>
          <a href="#">Category</a>
          <a href="#">Product</a>
          <a href="#">Variant</a>
        </template>
      </Dropdown>

      <Dropdown :is-close="false">
        <template #trigger>Transaction</template>
        <template #items>
          <a href="#">Order</a>
          <a href="#">Order Detail</a>
          <a href="#">Report</a>
        </template>
      </Dropdown>

      <Dropdown :is-close="false">
        <template #trigger>Readable</template>
        <template #items>
          <a href="#">Usage</a>
          <a href="#">Api Reference</a>
          <a href="#">Author</a>
        </template>
      </Dropdown>

      <Dropdown :is-close="false">
        <template #trigger>Profile</template>
        <template #items>
          <a href="#">Kurniawan Pratama</a>
          <a href="#">Schedule</a>
          <button @click="logout" class="inline w-fit">Logout</button>
        </template>
      </Dropdown>
    </aside>
    <main
      class="p-3 h-[200vh] pt-14 text-neutral-100 static lg:relative left-(--container-3xs) lg:w-[calc(100dvw-var(--container-3xs))]"
    >
      <router-view />
    </main>
  </div>
</template>
