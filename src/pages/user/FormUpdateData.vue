<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiFormSelect from "@/components/UiFormSelect.vue";
import UiFormUpdateData from "@/components/UiFormUpdateData.vue";
import { roles } from "@/store/dummyData";
import { computed, reactive } from "vue";

const props = defineProps<{ id?: string }>();

const user = reactive<{ name: string; roleId: string; email: string }>({
  name: "",
  roleId: "",
  email: "",
});

const modifyRoles = computed(() =>
  roles.map((role) => ({ id: String(role.id), name: role.name }))
);
</script>

<template>
  <section class="min-h-dvh flex justify-center">
    <UiFormUpdateData>
      <template #header>
        <div
          :class="[
            props.id ? 'bg-indigo-400' : 'bg-emerald-400',
            ' px-3 py-2',
          ]">
          <h3 class="text-white font-bold text-xl">
            {{ props.id ? "Update User" : "Create User" }}
          </h3>
        </div>
      </template>
      <!-- CONTROLS -->
      <template #control>
        <UiFormControl
          v-model="user.name"
          id="name"
          label="Name"
          :required="!props.id" />

        <UiFormSelect
          v-model="user.roleId"
          id="roleId"
          label="Rolename"
          :items="modifyRoles"
          :required="!props.id"
          :isBlank="!props.id" />

        <UiFormControl
          v-model="user.email"
          id="email"
          label="Email"
          type="email"
          :required="!props.id" />
      </template>

      <div class="flex items-center gap-1 justify-end mt-5">
        <UiButton :to="{ name: 'user' }" variant="ghost">Close</UiButton>
        <UiButton v-if="props.id" color="blue">Save Change</UiButton>
        <UiButton v-else>Save</UiButton>
      </div>
    </UiFormUpdateData>
  </section>
</template>
