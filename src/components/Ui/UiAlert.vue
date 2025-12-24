<script lang="ts">
type ButtonVariant =
  | "green"
  | "red"
  | "blue"
  | "yellow"
  | "gray"
  | "transparent";
export interface Button {
  text: "ok" | "no" | "close" | "cancel" | string;
  variant: ButtonVariant;
  className?: string;
  handleClick?: () => void | Promise<void>;
}

export interface Props {
  message: string;
  variant?:
    | "success"
    | "invalid"
    | "error"
    | "information"
    | "warning"
    | "forbidden"
    | "delete";
  action?: Button[];
  isActive: boolean;
  redirectTo?: RouteLocationRaw;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import UiIcon, { icons } from "./UiIcon.vue";
import { type RouteLocationRaw } from "vue-router";

const props = withDefaults(defineProps<Props>(), {
  variant: "success",
  isActive: false,
});

const emit = defineEmits<{ (e: "close"): void }>();

function close() {
  emit("close");
}

function btnHandleClick(btn: Button) {
  if (btn.handleClick) btn.handleClick();
}

const buttonVariant = {
  green: "bg-emerald-400",
  red: "bg-red-400",
  blue: "bg-indigo-400",
  yellow: "bg-yellow-400",
  gray: "bg-neutral-400",
  transparent: "bg-transparent",
};

const alertVariant = {
  success: "bg-green-100 border-green-400 text-green-500",
  invalid: "bg-red-100 border-red-400 text-red-500",
  error: "bg-red-100 border-red-400 text-red-500",
  information: "bg-blue-100 border-blue-400 text-blue-500",
  warning: "bg-yellow-100 border-yellow-400 text-yellow-500",
  forbidden: "bg-red-100 border-red-400 text-red-500",
  delete: "bg-red-100 border-red-400 text-red-500",
};

const alertIcon = computed<keyof typeof icons>(() => {
  let result: keyof typeof icons;
  switch (props.variant) {
    case "information":
    case "delete":
      result = "information";
      break;
    case "success":
      result = "success";
      break;
    case "error":
      result = "error";
      break;
    case "forbidden":
      result = "forbidden";
      break;
    case "warning":
      result = "exclamation";
      break;
    case "invalid":
      result = "cancel";
      break;
    default:
      result = "success";
      break;
  }

  return result;
});

const alertIsActive = computed(() => (props.isActive ? "top-10" : "-top-full"));
</script>

<template>
  <!-- BACKDROP -->
  <div
    v-show="isActive"
    @click="close"
    :class="['z-99 bg-black/10', 'fixed top-0 left-0 right-0 bottom-0']"
  />

  <!-- ALERT WRAPPER -->
  <div
    :class="[
      alertIsActive,
      'z-100 min-w-xs max-w-md',
      'fixed',
      'left-1/2 -translate-x-1/2',
      'transition-all',
    ]"
  >
    <div
      :class="[alertVariant[props.variant], 'border-t-4 px-2 py-3', 'shadow']"
    >
      <div class="flex items-center gap-1">
        <UiIcon :icon="alertIcon" />
        <h3 class="font-bold capitalize">{{ props.variant }}</h3>
      </div>
      <p class="text-black/80 text-sm pl-5">{{ props.message }}</p>

      <template v-if="props.action && props.action.length > 0">
        <div class="pt-5 flex gap-3 items-center justify-start w-full">
          <button
            v-for="(btn, btnIndex) in props.action"
            :key="'btn-alert-' + btnIndex"
            type="button"
            @click="btnHandleClick(btn)"
            :class="[
              buttonVariant[btn.variant],
              'px-2 py-1 rounded text-sm min-w-[50px] font-bold text-white',
              btn?.className ?? '',
            ]"
          >
            {{ btn.text }}
          </button>
        </div>
      </template>
    </div>
  </div>
</template>
