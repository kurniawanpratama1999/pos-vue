<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

const VARIANT_CLASS = {
  pill: "rounded-full!",
  rounded: "rounded!",
  outline: "outline!",
  ghost: "bg-transparent!",
} as const;

const BASE_CLASS = {
  pill: "",
  ghost: "",
  outline: "",
  rounded: "",
} as const;

const COLOR_CLASS = {
  red: {
    pill: "",
    ghost: "text-red-500",
    outline: "",
    rounded: "bg-red-400 text-white",
  },
  green: {
    pill: "",
    ghost: "",
    outline: "",
    rounded: "bg-emerald-400 text-white",
  },
  blue: {
    pill: "",
    ghost: "",
    outline: "",
    rounded: "bg-indigo-400 text-white",
  },
  yellow: {
    pill: "",
    ghost: "",
    outline: "",
    rounded: "",
  },
  dark: {
    pill: "",
    ghost: "",
    outline: "",
    rounded: "",
  },
  light: {
    pill: "",
    ghost: "",
    outline: "",
    rounded: "",
  },
} as const;

interface PropsButton {
  variant?: keyof typeof VARIANT_CLASS;
  color?: keyof typeof COLOR_CLASS;
  className?: string;
  to?: RouteLocationRaw;
  icon?: {
    name: string;
    position: "left" | "right";
  };
}
const props = withDefaults(defineProps<PropsButton>(), {
  variant: "rounded",
  color: "green",
  className: "",
});

const baseClass = computed(
  () => `px-3 py-1 block text-center ${BASE_CLASS?.[props.variant]}`
);
const variantClass = computed(() => VARIANT_CLASS?.[props.variant]);
const colorClass = computed(() => COLOR_CLASS?.[props.color]?.[props.variant]);
</script>

<template>
  <RouterLink
    v-if="props.to"
    :to="props.to"
    :class="[baseClass, variantClass, colorClass, className]"
    v-bind="$attrs"
    ><slot></slot
  ></RouterLink>
  <button
    v-else
    type="button"
    :class="[baseClass, variantClass, colorClass, className]"
    v-bind="$attrs">
    <slot></slot>
  </button>
</template>
