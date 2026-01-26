<script setup lang="ts">
import UiListDatatable from "@/components/UiListDatatable.vue";
import { useInterceptor } from "@/composables/useInterceptor";
import { onMounted, ref } from "vue";

const roles = ref([]);
onMounted(async () => {
  const response = await useInterceptor.get("/role");
  roles.value = response.data.data;
});
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
