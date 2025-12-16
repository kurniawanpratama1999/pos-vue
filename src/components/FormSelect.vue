<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    items?: { id?: number; name?: string }[];
    label: string;
    idName: string;
    required?: boolean;
  }>(),
  {
    required: true,
  }
);

const model = defineModel<string | number | null>();
</script>

<template>
  <div class="w-full space-y-1">
    <label class="block" :for="idName"
      >{{ label }} <small v-if="required" class="text-red-500">*</small></label
    >
    <select
      class="px-3 py-2 border border-neutral-500 outline-0 rounded w-full"
      :name="idName"
      :id="idName"
      v-model="model"
    >
      <option :value="null" class="capitalize" disabled>
        -- Select {{ label }} --
      </option>
      <option
        v-for="(item, index) in items"
        :value="item.id"
        :key="label + index"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
