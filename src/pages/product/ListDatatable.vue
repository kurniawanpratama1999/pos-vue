<script setup lang="ts">
import UiListDatatable from "@/components/UiListDatatable.vue";
import { products } from "@/store/dummyData";
import { converNumberToRupiah } from "@/utils/convertNumberToRupiah";
import { computed } from "vue";

const dummyProducts = computed(() =>
  products.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category_name,
    price: converNumberToRupiah(product.price),
    description: product.description,
  }))
);
</script>

<template>
  <section class="p-4">
    <UiListDatatable
      title="Product"
      :heads="['Name', 'Category', 'Price', 'Description']"
      :bodies="dummyProducts"
      addRoute="product.create"
      editRoute="product.edit"
      apiDelete="api delete" />
  </section>
</template>
