<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string;
    idName: string;
    type?: string;
    required?: boolean;
  }>(),
  {
    type: "text",
    required: false,
  }
);

const model = defineModel<string | number | null>();
</script>

<template>
  <div class="w-full space-y-1">
    <label class="block" :for="idName"
      >{{ label }} <small v-if="required" class="text-red-500">*</small></label
    >
    <input
      class="px-3 py-2 border border-neutral-500 outline-0 rounded w-full"
      :type="type"
      :name="idName"
      :id="idName"
      v-model="model"
      :required="required"
    />
  </div>
</template>
