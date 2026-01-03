<script setup lang="ts">
import UiListDatatable from "@/components/UiListDatatable.vue";
import { discountConditions } from "@/store/dummyData";
import { computed } from "vue";
const modifyDiscountConditions = computed(() =>
  discountConditions.map((discountCondition) => ({
    id: discountCondition.id,
    discount_name: discountCondition.discount_name,
    product_name: discountCondition.product_name,
    min_quantity: discountCondition.min_quantity,
  }))
);
</script>

<template>
  <section class="p-4">
    <UiListDatatable
      title="Discount Condition"
      :heads="['Discount Name', 'Product Name', 'Min. Quantity']"
      :bodies="modifyDiscountConditions"
      addRoute="condition.create"
      editRoute="condition.edit"
      apiDelete="api delete" />
  </section>
</template>
