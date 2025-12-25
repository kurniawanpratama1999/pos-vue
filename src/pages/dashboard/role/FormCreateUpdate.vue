<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

import { useAlertStore } from "@/store/useAlertStore";

import { show } from "@/controllers/userController";
import UiFormInput from "@/components/Ui/UiFormInput.vue";
import UiIcon from "@/components/Ui/UiIcon.vue";
import UiForm from "@/components/Ui/UiForm.vue";
import UiFormSelect from "@/components/Ui/UiFormSelect.vue";
import {
  RoleController,
  type Role,
  type SaveRole,
} from "@/controllers/roleController";

const route = useRoute();

const alert = useAlertStore();

const roleId = route.params.id as string;

const role = reactive<SaveRole>({
  name: "",
});

onMounted(async () => {
  try {
    if (roleId) {
      const data: Role | undefined = await RoleController.show(roleId);

      Object.assign(role, {
        name: data?.name,
      });
    }
  } catch (error) {
    console.error("cannot get role");
  }
});

function resetForm() {
  role.name = "";
}

async function submit() {
  try {
    let message: string;
    if (roleId) {
      await RoleController.update(roleId, role);
      message = "Role is updated";
    } else {
      await RoleController.create(role);
      message = "Role is created";
    }

    alert.open({
      message,
      variant: "success",
      redirectTo: { name: "role" },
    });
  } catch (error) {
    alert.open({
      message: "Role create/update is failed",
      variant: "invalid",
    });
  } finally {
    resetForm();
  }
}
</script>

<template>
  <section class="flex items-center justify-center min-h-dvh">
    <div class="w-full max-w-sm mx-auto">
      <div class="mb-2 font-bold text-xl px-3">
        <h2 v-if="roleId" class="text-indigo-500">Update Existing Role</h2>
        <h2 v-else class="text-emerald-500">Insert New Role</h2>
      </div>
      <UiForm class="px-3" @submit.prevent="submit">
        <template #form-control>
          <UiFormInput
            v-model="role.name"
            id="name"
            label="Role Name"
            :class-name="{ input: 'bg-neutral-100' }"
          />
        </template>
        <template #form-button>
          <router-link
            :to="{ name: 'role' }"
            class="text-md px-2 py-1 rounded bg-transparent text-black ml-auto"
          >
            <span>Cancel</span>
          </router-link>
          <button
            type="submit"
            :class="[
              'text-md text-white',
              roleId ? 'bg-indigo-400' : 'bg-emerald-400',
              'shadow',
              'px-2 py-1 rounded',
              'flex gap-x-1 items-center',
            ]"
          >
            <UiIcon icon="save" />
            <span>{{ roleId ? "Save changes" : "Save" }}</span>
          </button>
        </template>
      </UiForm>
    </div>
  </section>
</template>
