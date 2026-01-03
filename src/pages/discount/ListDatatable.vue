<script setup lang="ts">
import UiListDatatable from "@/components/UiListDatatable.vue";
import { discounts } from "@/store/dummyData";
</script>

<template>
  <section class="p-4">
    <UiListDatatable
      title="Discount"
      :heads="[
        'Name',
        'Type',
        'Percentage',
        'Amount',
        'Is Stack',
        'Priority',
        'Max Discount',
        'Apply to',
        'Is Active',
        'Start At',
        'End Date',
      ]"
      :bodies="discounts"
      addRoute="discount.create"
      editRoute="discount.edit"
      apiDelete="api delete" />
  </section>
</template>
