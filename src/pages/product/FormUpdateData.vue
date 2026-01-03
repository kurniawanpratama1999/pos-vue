<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiFormUpdateData from "@/components/UiFormUpdateData.vue";
import { reactive } from "vue";

const props = defineProps<{ id?: string }>();

const product = reactive<{
  name: string;
  category: string;
  price: string;
  description: string;
}>({
  name: "",
  category: "",
  price: "0",
  description: "",
});
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
            {{ props.id ? "Update Product" : "Create Product" }}
          </h3>
        </div>
      </template>
      <!-- CONTROLS -->
      <template #control>
        <UiFormControl
          v-model="product.name"
          id="name"
          label="Name"
          :required="!props.id" />

        <UiFormSelect
          v-model="product.category"
          id="category"
          label="Category"
          :items="[
            { id: '1', name: 'Mie' },
            { id: '2', name: 'Dimsum' },
            { id: '3', name: 'Minuman' },
          ]"
          :required="!props.id"
          :isBlank="!props.id" />

        <UiFormControl
          v-model="product.price"
          id="price"
          label="Price"
          :required="!props.id" />

        <UiFormControl
          v-model="product.description"
          id="description"
          label="Description"
          :required="!props.id" />
      </template>

      <div class="flex items-center gap-1 justify-end mt-5">
        <UiButton :to="{ name: 'product' }" variant="ghost">Close</UiButton>
        <UiButton v-if="props.id" color="blue">Save Change</UiButton>
        <UiButton v-else>Save</UiButton>
      </div>
    </UiFormUpdateData>
  </section>
</template>
