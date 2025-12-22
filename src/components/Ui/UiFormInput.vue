<script setup lang="ts">
import { ref, watch, type HTMLAttributes, type InputHTMLAttributes } from "vue";
import { ZodError, type ZodType } from "zod";

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
    z: ZodType;
  }>(),
  {
    className: () => ({
      wraper: "grid w-full",
      label: "w-full",
      input: "w-full border px-3 py-1 border-neutral-400 rounded",
      message: "text-xs text-red-500 italic",
    }),
    type: "text",
    required: true,
  }
);

const errMessage = ref<string>("");

watch(model, () => {
  try {
    props.z.parse(model.value);
    errMessage.value = "";
  } catch (error) {
    if (error instanceof ZodError) {
      errMessage.value = error.flatten((e) => e.message).formErrors[0] ?? "";
    }
  }
});
</script>

<template>
  <div :class="props.className.wraper">
    <label :for="props.id" :class="props.className.label">{{
      props.label
    }}</label>
    <input
      v-model="model"
      :type="props.type"
      :class="props.className.input"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      :required="props.required"
    />
    <span v-show="errMessage" :class="props.className.message">
      {{ errMessage }}
    </span>
  </div>
</template>
