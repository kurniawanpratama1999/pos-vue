<script setup lang="ts">
import { RouterLink } from "vue-router";
import UiIcon from "./UiIcon.vue";

interface Props {
  isNavbarActive?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isNavbarActive: false,
});
</script>

<template>
  <nav
    :class="[
      isNavbarActive ? 'flex ' : 'hidden lg:flex',
      'max-lg:flex-col gap-7',
      'max-lg:absolute top-14 right-2 max-lg:p-5 max-lg:bg-neutral-100 max-lg:shadow max-lg:rounded max-lg:z-100',
    ]">
    <RouterLink
      to=""
      class="flex items-center gap-x-1 max-lg:hover:bg-neutral-200">
      <UiIcon icon="dashboard" />
      <span>Dashboard</span>
    </RouterLink>
    <RouterLink :to="{ name: 'transaction' }" class="flex items-center gap-x-1">
      <UiIcon icon="transaction" />
      <span>Transaction</span>
    </RouterLink>
    <RouterLink to="" class="flex items-center gap-x-1">
      <UiIcon icon="orderDetail" />
      <span>Order Detail</span>
    </RouterLink>
    <RouterLink to="" class="flex items-center gap-x-1">
      <UiIcon icon="logout" />
      <span>Logout</span>
    </RouterLink>
  </nav>
</template>
