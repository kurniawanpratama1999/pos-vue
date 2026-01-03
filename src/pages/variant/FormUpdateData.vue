<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiFormSelect from "@/components/UiFormSelect.vue";
import UiFormUpdateData from "@/components/UiFormUpdateData.vue";
import { products } from "@/store/dummyData";
import { reactive } from "vue";

const props = defineProps<{ id?: string }>();

const variant = reactive<{ name: string; productId: string }>({
  name: "",
  productId: "",
});

const dummyProducts = products.map((product) => ({
  id: product.id.toString(),
  name: product.name,
}));
</script>

<template>
  <section class="min-h-dvh flex justify-center">
    <UiFormUpdateData>
      <template #header>
        <div
          :class="[
            props.id ? 'bg-indigo-400' : 'bg-emerald-400',
            ' px-3 py-2',
          ]">
          <h3 class="text-white font-bold text-xl">
            {{ props.id ? "Update Variant" : "Create Variant" }}
          </h3>
        </div>
      </template>
      <!-- CONTROLS -->
      <template #control>
        <UiFormSelect
          id="productId"
          label="Product Name"
          :items="dummyProducts"
          :required="!props.id"
          :isBlank="!props.id" />
        <UiFormControl
          v-model="variant.name"
          id="name"
          label="Name"
          :required="!props.id" />
      </template>

      <div class="flex items-center gap-1 justify-end mt-5">
        <UiButton :to="{ name: 'variant' }" variant="ghost">Close</UiButton>
        <UiButton v-if="props.id" color="blue">Save Change</UiButton>
        <UiButton v-else>Save</UiButton>
      </div>
    </UiFormUpdateData>
  </section>
</template>
