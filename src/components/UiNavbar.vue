<script setup lang="ts">
import { RouterLink } from "vue-router";
import UiIcon from "./UiIcon.vue";
</script>

<template>
  <header class="shadow bg-neutral-100 fixed top-0 left-0 right-0 z-100">
    <div class="flex justify-between items-center px-3 py-1 h-12">
      <h1
        class="w-full max-w-[calc(var(--container-4xs)-12px)] text-xl font-bold flex items-center gap-x-1 text-emerald-500">
        <UiIcon icon="pos" />
        POSVUE <small class="text-xs">1.0</small>
      </h1>
      <nav class="flex gap-7">
        <RouterLink to="" class="flex items-center gap-x-1">
          <UiIcon icon="dashboard" />
          <span>Dashboard</span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'transaction' }"
          class="flex items-center gap-x-1">
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
    </div>
  </header>
</template>
