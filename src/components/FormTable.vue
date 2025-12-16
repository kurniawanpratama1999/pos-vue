<script setup lang="ts">
interface FormTableProps<T> {
  datas: T[];
  uniqueName: string;
}
const props = defineProps<FormTableProps<any>>();
</script>

<template>
  <table class="w-full">
    <thead class="max-lg:hidden">
      <tr class="bg-white/10 [&_td]:px-3 [&_td]:py-2">
        <slot name="table-header"></slot>
      </tr>
    </thead>
    <tbody
      class="[&_td]:px-3 [&_td]:py-2 border-b border-neutral-700 max-lg:grid gap-3 p-3"
    >
      <tr
        v-for="(item, index) in props.datas"
        :key="props.uniqueName + '-' + (item.id ?? index)"
        :class="[
          'flex flex-col lg:table-row',
          '[&_td]:lg:before:hidden [&_td]:before:content-[attr(data-col)]',
          '[&_td]:before:font-bold [&_td]:before:mr-3',
          '[&_td]:max-lg:grid',
          'max-lg:bg-white/4 rounded-xl',
          'border-b border-neutral-700',
        ]"
      >
        <slot name="table-body" :item="item" :index="index"></slot>
      </tr>
    </tbody>
    <tfoot>
      <slot name="table-footer"></slot>
    </tfoot>
  </table>
</template>
