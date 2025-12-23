<script setup lang="ts">
const props = defineProps<{
  id: string;
  placeholder: string;
}>();
</script>

<template>
  <input
    type="search"
    :name="props.id"
    :id="props.id"
    :placeholder="props.placeholder"
    v-bind="$attrs"
    class="px-2 py-1 rounded inset-shadow-2xs bg-neutral-200 outline-0 focus:outline"
  />
</template>
