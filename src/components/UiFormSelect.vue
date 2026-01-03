<script lang="ts">
export const VARIANT_CLASS = {
  red: "outline-red-300",
  green: "outline-green-300",
  blue: "outline-blue-300",
  yellow: "outline-yellow-300",
  dark: "outline-neutral-800",
  light: "outline-neutral-100",
};

export interface SelectItem {
  id: string;
  name: string;
}

export interface PropsFormControl {
  id: string;
  label?: string;
  required?: boolean;
  items: SelectItem[];
  variant?: keyof typeof VARIANT_CLASS;
  inputStyle?: string;
  wrapperStyle?: string;
  isBlank?: boolean;
  blankText?: string;
}
</script>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = withDefaults(defineProps<PropsFormControl>(), {
  label: "",
  required: false,
  variant: "green",
  isBlank: false,
  blankText: "All",
});

/* ===== v-model (ID) ===== */
const modelValue = defineModel<string | null>();

/* ===== State ===== */
const isOpen = ref(false);
const search = ref("");
const activeIndex = ref(-1);
const filteredItems = ref<SelectItem[]>([]);

/* ===== Computed ===== */
const variantClass = computed(() => VARIANT_CLASS[props.variant]);

/* ===== Watch items ===== */
watch(
  () => props.items,
  (items) => {
    filteredItems.value = props.isBlank
      ? [{ id: "0", name: props.blankText }, ...items]
      : [...items];
  },
  { immediate: true }
);

/* ===== Watch search ===== */
watch(search, (value) => {
  filteredItems.value = !value
    ? [...props.items]
    : props.items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
  activeIndex.value = -1;
});

/* ===== Sync when parent set ID ===== */
watch(
  modelValue,
  (id) => {
    const item = props.items.find((i) => i.id === id);
    if (item) search.value = item.name;
  },
  { immediate: true }
);

/* ===== Handlers ===== */
const selectItem = (item: SelectItem) => {
  modelValue.value = item.id == "0" ? "" : item.id;
  search.value = item.name;
  isOpen.value = false;
};

const close = () => {
  isOpen.value = false;
  activeIndex.value = -1;
};
</script>

<template>
  <div :class="['relative w-full', wrapperStyle]">
    <!-- Label -->
    <label :for="id" class="text-sm">
      {{ label }}
      <small v-if="required" class="text-red-500">*</small>
    </label>

    <!-- Input -->
    <input
      :id="id"
      type="text"
      v-model="search"
      @focus="isOpen = true"
      autocomplete="off"
      :placeholder="`Select ${label}`"
      :class="[
        'w-full rounded border border-neutral-400 px-3 py-1.5 outline-0 focus:outline',
        variantClass,
        inputStyle,
      ]" />

    <!-- Click outside -->
    <div v-if="isOpen" class="fixed inset-0 z-0" @click="close" />

    <!-- Dropdown -->
    <ul
      v-if="isOpen"
      class="absolute z-10 mt-1 w-full max-h-40 overflow-auto rounded border bg-white shadow">
      <li
        v-for="(item, i) in filteredItems"
        :key="item.id"
        @click="selectItem(item)"
        :class="[
          'px-3 py-1 cursor-pointer text-sm',
          i === activeIndex ? 'bg-neutral-200' : 'hover:bg-neutral-100',
        ]">
        {{ item.name }}
      </li>

      <li
        v-if="!filteredItems.length"
        class="px-3 py-2 text-sm text-neutral-400">
        Tidak ditemukan
      </li>
    </ul>
  </div>
</template>
