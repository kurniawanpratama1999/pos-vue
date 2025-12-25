<script setup lang="ts">
/* IMPORT */
//! modules
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { AxiosError } from "axios";
import { useAlertStore } from "@/store/useAlertStore";
import { axiosOrigin } from "@/utils/useAxiosOrigin";
import UiFormInput from "@/components/Ui/UiFormInput.vue";
import UiIcon from "@/components/Ui/UiIcon.vue";
import UiForm from "@/components/Ui/UiForm.vue";
import UiFormSelect from "@/components/Ui/UiFormSelect.vue";

interface Role {
  id: string;
  name: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  roleId: string;
  roleName: string;
}

interface UserInput {
  name: string;
  roleId: string;
  email: string;
  password?: string;
  password_confirmation?: string;
}

const route = useRoute();
const alert = useAlertStore();
const userId = ref<string | undefined>(undefined);

const roles = ref<Role[] | undefined>(undefined);
const user = reactive<UserInput>({
  name: "",
  roleId: "",
  email: "",
  password: "",
  password_confirmation: "",
});

onMounted(async () => {
  const paramsId = route.params.id as string;
  userId.value = paramsId;
  try {
    if (userId.value) {
      const existingUser = await axiosOrigin.get(`/user/${userId.value}`);
      const data: User = existingUser.data.data;
      Object.assign(user, {
        name: data.name,
        email: data.email,
        roleId: String(data.roleId),
      });
    }

    const existingRole = await axiosOrigin.get("/role");
    roles.value = existingRole.data.data;
  } catch (error) {}
});

function resetForm() {
  user.password = "";
  user.password_confirmation = "";
}

async function updateUser() {
  const send: UserInput = {
    name: user.name,
    email: user.email,
    roleId: user.roleId,
  };

  if (user.password !== "") {
    send.password = user.password;
  }

  try {
    await axiosOrigin.put(`/user/${userId.value}`, send);
    alert.open({
      message: "User is updated",
      variant: "success",
      redirectTo: { name: "user" },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      alert.open({
        message: "Update user is failed",
        variant: "invalid",
      });
    }
  } finally {
    resetForm();
  }
}

async function createUser() {
  try {
    await axiosOrigin.post("/user", { ...user, roleId: Number(user.roleId) });
    alert.open({
      message: "New user is added",
      variant: "success",
      redirectTo: { name: "user" },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      alert.open({
        message: "Failed for add user",
        variant: "invalid",
      });
    }
  } finally {
    resetForm();
  }
}

async function submit() {
  if (userId.value) {
    await updateUser();
    return;
  }

  await createUser();
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
            <div class="flex gap-x-1 items-center">
              <span>Cancel</span>
            </div>
          </router-link>
          <button
            type="submit"
            :class="[
              'text-md text-white',
              userId ? 'bg-indigo-400' : 'bg-emerald-400',
              'shadow',
              'px-2 py-1 rounded',
            ]"
          >
            <div class="flex gap-x-1 items-center">
              <UiIcon icon="save" />
              <span>{{ userId ? "Save changes" : "Save" }}</span>
            </div>
          </button>
        </template>
      </UiForm>
    </div>
  </section>
</template>
