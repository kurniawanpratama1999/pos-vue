<script setup lang="ts">
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
    id: HTMLAttributes["id"];
    label: string;
    className?: ClassName;
    type?: InputHTMLAttributes["type"];
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
    <input
      v-model="model"
      :type="props.type"
      :class="[
        'w-full border px-3 py-1 border-neutral-400 rounded outline-0 focus:outline outline-emerald-400',
        props.className.input,
      ]"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      :required="props.required"
    />
    <span v-show="errMessage && model" :class="props.className.message">
      {{ errMessage }}
    </span>
  </div>
</template>
