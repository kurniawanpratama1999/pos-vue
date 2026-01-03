<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiFormUpdateData from "@/components/UiFormUpdateData.vue";
import { reactive } from "vue";

const props = defineProps<{ id?: string }>();

interface Discount {
  name: string;
  type: "" | "";
  percentage: string;
  amount: string;

  is_stackable: string;
  priority: string;
  max_discount: string;

  apply_to: "" | "";

  is_active: string;

  start_at: string;
  end_date: string;
}

const discount = reactive<Discount>({
  name: "",
  type: "",
  percentage: "0",
  amount: "0",

  is_stackable: "false",
  priority: "1",
  max_discount: "0",

  apply_to: "",

  is_active: "false",

  start_at: new Date().toString(),
  end_date: new Date().toString(),
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
            {{ props.id ? "Update Discount" : "Create Discount" }}
          </h3>
        </div>
      </template>
      <!-- CONTROLS -->
      <template #control>
        <UiFormControl
          v-model="discount.name"
          id="name"
          label="Name"
          wrapperStyle="col-start-1"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.type"
          id="type"
          label="Type"
          wrapperStyle="col-start-2"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.percentage"
          id="percentage"
          label="Percentage"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.amount"
          id="amount"
          label="Amount"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.is_stackable"
          id="is_stackable"
          label="Stackable"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.priority"
          id="priority"
          label="Priority"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.max_discount"
          id="max_discount"
          label="Max Discount"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.max_discount"
          id="max_discount"
          label="Max Discount"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.apply_to"
          id="apply_to"
          label="Apply to"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.is_active"
          id="is_active"
          label="Is Active"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.start_at"
          id="start_at"
          label="Start at"
          :required="!props.id" />

        <UiFormControl
          v-model="discount.end_date"
          id="end_date"
          label="End Date"
          :required="!props.id" />
      </template>

      <div class="flex items-center gap-1 justify-end mt-5">
        <UiButton :to="{ name: 'discount' }" variant="ghost">Close</UiButton>
        <UiButton v-if="props.id" color="blue">Save Change</UiButton>
        <UiButton v-else>Save</UiButton>
      </div>
    </UiFormUpdateData>
  </section>
</template>
