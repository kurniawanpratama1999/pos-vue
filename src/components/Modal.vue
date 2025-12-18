<script lang="ts">
export interface Button {
  text: "Cancel" | "Ok" | "Delete" | "Approve";
  variant: "red" | "blue" | "green" | "yellow" | "light" | "dark";
  handleClick: () => void | Promise<void>;
  className?: string;
}

export type Type = "success" | "warning" | "danger" | "default" | "info";

export interface Props {
  idName: string;
  message: string;
  button: Button[];
  type: Type;
  isActive: boolean;
}
</script>

<script setup lang="ts">
const buttonVariant = {
  red: "text-red-50 bg-red-400",
  blue: "text-blue-50 bg-blue-400",
  green: "text-emerald-50 bg-emerald-400",
  yellow: "text-amber-50 bg-amber-400",
  light: "text-neutral-50 bg-neutral-400",
  dark: "text-neutral-100 bg-neutral-600",
};

const modalBackground = {
  success: "bg-emerald-700",
  warning: "bg-amber-700",
  danger: "bg-danger-700",
  default: "bg-neutral-700",
  info: "bg-blue-700",
};

const props = withDefaults(defineProps<Props>(), {
  message: "Something wrong",
  type: "default",
  isActive: false,
});

const emit = defineEmits<{ (e: "close"): void }>();

const closeModal = () => {
  emit("close");
};

const onButtonClick = (btn: Button) => {
  btn.handleClick();
};
</script>

<template>
  <div
    v-show="props.isActive"
    @click="closeModal"
    class="fixed top-0 left-0 right-0 bottom-0 p-3 bg-white/5 z-102 backdrop-blur-sm flex justify-center items-center"
  ></div>
  <div
    v-show="props.isActive"
    :id="idName"
    :class="[
      'fixed top-1/2 left-1/2 -translate-1/2 w-full max-w-sm rounded-xl border border-neutral-600 text-white p-5 z-103',
      modalBackground[props.type],
    ]"
  >
    <p>{{ props.message }}</p>
    <div class="mt-3 flex gap-3 items-center justify-end">
      <button
        type="button"
        v-for="(btn, index) in props.button"
        :key="'btnModal-' + props.idName + index"
        @click="onButtonClick(btn)"
        :class="[
          'px-3 py-2 rounded',
          buttonVariant[btn.variant],
          btn.className,
        ]"
      >
        {{ btn.text }}
      </button>
    </div>
  </div>
</template>
