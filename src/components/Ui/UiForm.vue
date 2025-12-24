<template>
  <form class="w-full space-y-3 p-2" v-bind="$attrs">
    <slot name="form-control" />

    <div class="flex gap-2 mt-7">
      <slot name="form-button"></slot>
    </div>
  </form>
</template>
