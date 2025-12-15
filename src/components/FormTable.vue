<script setup lang="ts">
interface FormTableProps<T> {
  datas: T[];
  uniqueName: string;
}
const props = defineProps<FormTableProps<any>>();
</script>

<template>
  <table class="w-full">
    <thead>
      <tr class="bg-white/10 [&_td]:px-3 [&_td]:py-2">
        <slot name="table-header"></slot>
      </tr>
    </thead>
    <tbody class="[&_td]:px-3 [&_td]:py-2 border-b border-neutral-700">
      <tr
        v-for="(item, index) in props.datas"
        :key="props.uniqueName + '-' + (item.id ?? index)"
      >
        <slot name="table-body" :item="item" :index="index"></slot>
      </tr>
    </tbody>
    <tfoot>
      <slot name="table-footer"></slot>
    </tfoot>
  </table>
</template>
