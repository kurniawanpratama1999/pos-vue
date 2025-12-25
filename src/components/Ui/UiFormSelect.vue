<script setup lang="ts" generic="T">
import { type HTMLAttributes, type InputHTMLAttributes } from "vue";

interface ClassName {
  wraper?: HTMLAttributes["class"];
  label?: HTMLAttributes["class"];
  input?: HTMLAttributes["class"];
  message?: HTMLAttributes["class"];
}

const model = defineModel<string>();

const props = withDefaults(
  defineProps<{
    items: { id: string; name: string }[] | undefined;
    id: HTMLAttributes["id"];
    label: string;
    className?: ClassName;
    required?: InputHTMLAttributes["required"];
    errMessage?: string;
  }>(),
  {
    className: () => ({
      wraper: "grid w-full",
      label: "w-full",
      input: "",
      message: "text-xs text-red-500 italic",
    }),
    type: "text",
    required: true,
  }
);
</script>

<template>
  <div :class="props.className.wraper">
    <label :for="props.id" :class="props.className.label">
      {{ props.label }} <small v-if="required" class="text-red-500">*</small>
    </label>
    <select
      v-model="model"
      :name="props.id"
      :id="props.id"
      :class="[
        props.className.input,
        'w-full border px-3 py-1 border-neutral-400 rounded outline-0 focus:outline outline-emerald-400',
      ]"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      :required="props.required"
    >
      <option value="">-- Select {{ props.label }}</option>
      <template v-if="items && items.length > 0">
        <option
          v-for="(item, index) in items"
          :key="`select-${item.id}-${item.name}-${index}`"
          :value="item.id"
          :selected="model === item.name"
        >
          {{ item.name }}
        </option>
      </template>
    </select>
    <span v-show="errMessage && model" :class="props.className.message">
      {{ errMessage }}
    </span>
  </div>
</template>
