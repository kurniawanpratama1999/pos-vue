<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

import { useAlertStore } from "@/store/useAlertStore";

import {
  type User,
  type SaveUser,
  show,
  update,
  create,
} from "@/controllers/userController";
import UiFormInput from "@/components/Ui/UiFormInput.vue";
import UiIcon from "@/components/Ui/UiIcon.vue";
import UiForm from "@/components/Ui/UiForm.vue";
import UiFormSelect from "@/components/Ui/UiFormSelect.vue";
import { RoleController, type Role } from "@/controllers/roleController";

const route = useRoute();

const alert = useAlertStore();

const userId = route.params.id as string;

const roles = ref<Role[] | undefined>(undefined);

const user = reactive<SaveUser>({
  name: "",
  roleId: "",
  email: "",
  password: "",
  password_confirmation: "",
});

onMounted(async () => {
  try {
    if (userId) {
      const data: User | undefined = await show(userId);

      Object.assign(user, {
        name: data?.name,
        email: data?.email,
        roleId: data?.roleId,
      });
    }

    roles.value = await RoleController.index();
  } catch (error) {
    console.error("cannot get user and/or role");
  }
});

function resetForm() {
  user.password = "";
  user.password_confirmation = "";
}

async function submit() {
  try {
    let message: string;
    if (userId) {
      await update(userId, user);
      message = "User is updated";
    } else {
      await create(user);
      message = "User is created";
    }

    alert.open({
      message,
      variant: "success",
      redirectTo: { name: "user" },
    });
  } catch (error) {
    alert.open({
      message: "User create/update is failed",
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
        <h2 v-if="userId" class="text-indigo-500">Update Existing User</h2>
        <h2 v-else class="text-emerald-500">Insert New User</h2>
      </div>
      <UiForm class="px-3" @submit.prevent="submit">
        <template #form-control>
          <UiFormInput
            v-model="user.name"
            id="name"
            label="Full Name"
            :class-name="{ input: 'bg-neutral-100' }"
          />
          <UiFormSelect
            v-model="user.roleId"
            id="roleId"
            label="Rolename"
            :items="roles"
            :class-name="{ input: 'bg-neutral-100' }"
          />
          <UiFormInput
            v-model="user.email"
            id="email"
            label="Email"
            :class-name="{ input: 'bg-neutral-100' }"
          />
          <UiFormInput
            v-model="user.password"
            id="password"
            label="Password"
            type="password"
            :required="userId ? false : true"
            :class-name="{ input: 'bg-neutral-100' }"
          />
          <UiFormInput
            v-model="user.password_confirmation"
            id="password_confirmation"
            label="Password Confirmation"
            type="password"
            :required="userId ? false : true"
            :class-name="{ input: 'bg-neutral-100' }"
          />
        </template>
        <template #form-button>
          <router-link
            :to="{ name: 'user' }"
            class="text-md px-2 py-1 rounded bg-transparent text-black ml-auto"
          >
            <span>Cancel</span>
          </router-link>
          <button
            type="submit"
            :class="[
              'text-md text-white',
              userId ? 'bg-indigo-400' : 'bg-emerald-400',
              'shadow',
              'px-2 py-1 rounded',
              'flex gap-x-1 items-center',
            ]"
          >
            <UiIcon icon="save" />
            <span>{{ userId ? "Save changes" : "Save" }}</span>
          </button>
        </template>
      </UiForm>
    </div>
  </section>
</template>
