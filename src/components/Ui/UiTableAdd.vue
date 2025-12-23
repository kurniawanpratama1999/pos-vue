<script setup lang="ts">
import UiIcon from "./UiIcon.vue";
</script>

<template>
  <div class="ml-auto flex gap-2">
    <router-link
      :to="{ name: 'user.create' }"
      class="text-md px-3 py-1 rounded bg-emerald-400 text-white"
    >
      <div class="flex gap-1 items-center">
        <UiIcon icon="add" />
        <span>New user</span>
      </div>
    </router-link>
  </div>
</template>
