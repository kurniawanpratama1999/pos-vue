<script setup lang="ts">
import UiListDatatable from "@/components/UiListDatatable.vue";
import { categories } from "@/store/dummyData";
</script>

<template>
  <section class="p-4">
    <UiListDatatable
      title="Product Category"
      :heads="['Name', 'Description']"
      :bodies="categories"
      addRoute="category.create"
      editRoute="category.edit"
      apiDelete="api delete" />
  </section>
</template>
