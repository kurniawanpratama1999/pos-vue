<script setup lang="ts">
import UiListDatatable from "@/components/UiListDatatable.vue";
import { urls } from "@/store/dummyData";
import { computed } from "vue";
const modifyUrls = computed(() =>
  urls.map((url) => ({
    id: url.id,
    name: url.name,
    category: url.category,
    url: url.url,
  }))
);
</script>

<template>
  <section class="p-4">
    <UiListDatatable
      title="Url Access"
      :heads="['Name', 'Category', 'Url']"
      :bodies="modifyUrls"
      addRoute="url.create"
      editRoute="url.edit"
      apiDelete="api delete" />
  </section>
</template>
