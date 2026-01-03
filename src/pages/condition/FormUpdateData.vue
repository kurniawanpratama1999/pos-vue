<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiFormUpdateData from "@/components/UiFormUpdateData.vue";
import { reactive } from "vue";

const props = defineProps<{ id?: string }>();

interface Condition {
  discount_id: string;
  product_id: string;
  min_quantity: string;
}

const condition = reactive<Condition>({
  discount_id: "",
  product_id: "",
  min_quantity: "1",
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
            {{ props.id ? "Update Condition" : "Create Condition" }}
          </h3>
        </div>
      </template>
      <!-- CONTROLS -->
      <template #control>
        <UiFormControl
          v-model="condition.discount_id"
          id="discount_id"
          label="Discount Name"
          :required="!props.id" />

        <UiFormControl
          v-model="condition.product_id"
          id="product_id"
          label="Product Name"
          :required="!props.id" />

        <UiFormControl
          v-model="condition.min_quantity"
          id="min_quantity"
          label="Min. Quantity"
          :required="!props.id" />
      </template>

      <div class="flex items-center gap-1 justify-end mt-5">
        <UiButton :to="{ name: 'condition' }" variant="ghost">Close</UiButton>
        <UiButton v-if="props.id" color="blue">Save Change</UiButton>
        <UiButton v-else>Save</UiButton>
      </div>
    </UiFormUpdateData>
  </section>
</template>
