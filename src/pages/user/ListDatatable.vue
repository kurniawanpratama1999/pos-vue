<script setup lang="ts">
import UiListDatatable from "@/components/UiListDatatable.vue";
import { users } from "@/store/dummyData";
import { computed } from "vue";

const modifyUsers = computed(() =>
  users.map((user) => ({
    id: user.id,
    name: user.name,
    role_name: user.role_name,
    email: user.email,
  }))
);
</script>

<template>
  <section class="p-4">
    <UiListDatatable
      title="Users  "
      :heads="['Name', 'Rolename', 'Email']"
      :bodies="modifyUsers"
      addRoute="user.create"
      editRoute="user.edit"
      apiDelete="api delete" />
  </section>
</template>
