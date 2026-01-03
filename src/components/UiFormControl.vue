<script lang="ts">
const VARIANT_CLASS = {
  red: "outline-red-300",
  green: "outline-green-300",
  blue: "outline-blue-300",
  yellow: "outline-yellow-300",
  dark: "outline-neutral-800",
  light: "outline-neutral-100",
};

export interface PropsFormControl {
  id: InputHTMLAttributes["id"];
  label?: string;
  type?: InputHTMLAttributes["type"];
  required?: boolean;
  variant?: keyof typeof VARIANT_CLASS;
  placeholder?: string;
  message?: string;
  inputStyle?: string;
  wrapperStyle?: string;
}
</script>

<script setup lang="ts">
import { computed, type InputHTMLAttributes } from "vue";

const model = defineModel<string>();

const props = withDefaults(defineProps<PropsFormControl>(), {
  placeholder: "",
  label: "",
  type: "text",
  required: true,
  variant: "green",
});

const variant = computed(() => VARIANT_CLASS[props.variant]);
</script>

<template>
  <div :class="['grid w-full', props.wrapperStyle]">
    <label :for="props.id" class="w-full text-sm">
      {{ props.label }}
      <small v-show="props.required" class="text-red-400">*</small>
    </label>
    <input
      v-model="model"
      :type="props.type"
      :name="props.id"
      :id="props.id"
      :placeholder="props.placeholder"
      autocapitalize="off"
      autocomplete="off"
      autocorrect="off"
      autosave="off"
      :class="[
        'w-full rounded border border-neutral-400 px-3 py-1 outline-0 focus:outline',
        variant,
        inputStyle,
      ]" />
    <span v-show="props.message">{{ props.message }}</span>
  </div>
</template>
