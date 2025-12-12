<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";

const props = withDefaults(defineProps<{ isClose: boolean }>(), {
  isClose: false,
});
const isTriggerActive = ref<boolean>(props.isClose);
const handleItem = (): void => {
  isTriggerActive.value = !isTriggerActive.value;
};
const listClassName = computed<string>(() => {
  return isTriggerActive.value ? "grid" : "hidden";
});
</script>

<template>
  <div class="space-y-1">
    <div @click="handleItem" class="cursor-pointer">
      <h3
        class="text-lg font-bold text-emerald-400 flex items-center gap-x-1 hover:underline"
      >
        <slot name="trigger"></slot>
        <Icon
          icon="icon-park-solid:down-one"
          :class="[isTriggerActive ? '' : '-rotate-90', 'transition-all']"
        />
      </h3>
    </div>
    <div
      :class="[
        'pl-3 gap-y-1',
        listClassName,
        'overflow-hidden border-l border-emerald-500',
      ]"
    >
      <slot name="items"></slot>
    </div>
  </div>
</template>
