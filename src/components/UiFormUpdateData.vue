<script setup lang="ts"></script>

<template>
  <div class="w-fit mt-3 shadow h-fit">
    <div class="rounded-t overflow-hidden">
      <slot name="header"></slot>
    </div>

    <form class="bg-neutral-100 p-5">
      <div class="grid gap-3">
        <slot name="control"></slot>
      </div>

      <slot></slot>
    </form>
  </div>
</template>
