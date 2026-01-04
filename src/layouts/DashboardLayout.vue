<script setup lang="ts">
import UiAside from "@/components/UiAside.vue";
import UiHeader from "@/components/UiHeader.vue";
import UiNavbar from "@/components/UiNavbar.vue";
import { ref } from "vue";
import { onBeforeRouteUpdate, RouterView } from "vue-router";

const isNavbarActive = ref<boolean>(false);
const isAsideActive = ref<boolean>(false);

const handleNavbar = () => {
  isNavbarActive.value = !isNavbarActive.value;
};

const handleAside = () => {
  isAsideActive.value = !isAsideActive.value;
};

const handleClose = () => {
  isNavbarActive.value = false;
  isAsideActive.value = false;
};

onBeforeRouteUpdate(() => {
  handleClose();
});
</script>

<template>
  <UiHeader
    :handleNavbar="() => handleNavbar()"
    :handleAside="() => handleAside()">
    <UiNavbar :isNavbarActive="isNavbarActive" />
  </UiHeader>
  <UiAside :isAsideActive="isAsideActive" />
  <Teleport to="body" v-if="isNavbarActive || isAsideActive">
    <div
      @click="handleClose"
      :class="[
        'backdrop fixed top-0 left-0 right-0 bottom-0 bg-black/5 z-99',
      ]"></div>
  </Teleport>
  <main
    :class="[
      'lg:relative left-(--container-4xs)',
      'w-full lg:max-w-[calc(100dvw-var(--container-4xs))]',
      'pt-12',
    ]">
    <RouterView />
  </main>
</template>
