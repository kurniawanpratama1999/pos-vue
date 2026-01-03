<script setup lang="ts">
import UiListDatatable from "@/components/UiListDatatable.vue";
import { roles } from "@/store/dummyData";
</script>

<template>
  <section class="p-4">
    <UiListDatatable
      title="User Rolename"
      :heads="['Name']"
      :bodies="roles"
      addRoute="role.create"
      editRoute="role.edit"
      apiDelete="api delete" />
  </section>
</template>
