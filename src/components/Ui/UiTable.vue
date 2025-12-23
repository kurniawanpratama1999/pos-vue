<script setup lang="ts" generic="T">
const props = defineProps<{
  source: T[];
}>();
</script>

<template>
  <!-- CARD WRAPER -->
  <div class="max-w-[calc(100dvw-var(--container-3xs))]">
    <!-- CARD HEADER -->
    <div class="mb-2 flex gap-x-3 h-16 bg-neutral-100 items-center px-3">
      <slot name="cheader"></slot>
    </div>

    <!-- CARD CONTENT -->
    <div class="overflow-x-auto px-2">
      <table
        :class="[
          'w-full',
          '[&_th]:px-3 [&_th]:py-2 [&_th]:font-normal',
          '[&_td]:px-3 [&_td]:py-1.5',
        ]"
      >
        <thead class="bg-neutral-100/80 text-black/70">
          <tr class="text-left">
            <slot name="thead"></slot>
          </tr>
        </thead>
        <tbody
          :class="[
            '[&_tr]:border-y-8 [&_tr]:border-y-neutral-200',
            '[&_tr]:bg-neutral-100/80',
            '[&_tr]:*:text-nowrap [&_tr]:*:align-middle',
            '[&_tr]:hover:bg-black/3',
            '[&_tr]:has-checked:bg-red-200',
          ]"
        >
          <template v-for="(items, index) in props.source">
            <slot name="tbody" :items :index></slot>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
