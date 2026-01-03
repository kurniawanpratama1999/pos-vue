<script setup lang="ts">
import UiListDatatable from "@/components/UiListDatatable.vue";
import { variants } from "@/store/dummyData";
import { converNumberToRupiah } from "@/utils/convertNumberToRupiah";
import { computed } from "vue";

const dummyVariant = computed(() =>
  variants.map((variant) => {
    const { id, name, adjust_price, product_name } = variant;
    return {
      id,
      name: `${product_name} (${name})`,
      adjust_price: converNumberToRupiah(adjust_price),
    };
  })
);
</script>

<template>
  <section class="p-4">
    <UiListDatatable
      title="Product Variant"
      :heads="['Product Name', 'Price Adjust']"
      :bodies="dummyVariant"
      addRoute="variant.create"
      editRoute="variant.edit"
      apiDelete="api delete" />
  </section>
</template>
