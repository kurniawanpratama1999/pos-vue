<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    mainClassName?: string;
    headerClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
  }>(),
  {
    mainClassName: "",
    headerClassName: "",
    contentClassName: "",
    footerClassName: "",
  }
);
</script>

<template>
  <!-- CARD WRAPER -->
  <div :class="[mainClassName, 'border border-neutral-400', 'rounded-xl']">
    <!-- CARD HEADER -->
    <div :class="[headerClassName, 'py-2', 'border-b border-neutral-400']">
      <slot name="card-header"></slot>
    </div>

    <!-- CARD CONTENT -->
    <div :class="[contentClassName]">
      <slot name="card-content"></slot>
    </div>

    <!-- CARD FOOTER -->
    <div :class="[footerClassName, 'py-2', 'border-t border-neutral-400']">
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>
