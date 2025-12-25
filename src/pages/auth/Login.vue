<script setup lang="ts">
import { reactive } from "vue";
import { Icon } from "@iconify/vue";

import { axiosOrigin } from "@/utils/useAxiosOrigin";

import { useAccessTokenStore } from "@/store/useAccessTokenStore";
import { useAlertStore } from "@/store/useAlertStore";

import UiForm from "@/components/Ui/UiForm.vue";
import UiFormInput from "@/components/Ui/UiFormInput.vue";

const alert = useAlertStore();

const credentials = reactive({
  email: "",
  password: "",
});

function loginSuccess() {
  alert.open({
    message: "Login berhasil ye",
    variant: "success",
    redirectTo: { name: "user" },
  });
}

function loginFailed() {
  alert.open({
    message: "Gagal Login",
    variant: "invalid",
  });
}

async function submit() {
  try {
    const response = await axiosOrigin.post("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });

    useAccessTokenStore.value = response.data.data;

    loginSuccess();
  } catch (error) {
    loginFailed();
  } finally {
    credentials.password = "";
  }
}
</script>

<template>
  <section class="flex-center flex-col h-dvh">
    <div class="w-full max-w-xs mx-auto">
      <header class="flex-center flex-col w-full text-center p-2">
        <Icon icon="mdi:money" class="text-7xl text-emerald-500" />
        <h2 class="text-3xl font-black text-emerald-500">
          Point of Sales <small>1.0</small>
        </h2>
      </header>

      <hr class="border-neutral-400" />
      <UiForm @submit.prevent="submit">
        <template #form-control>
          <UiFormInput
            v-model="credentials.email"
            id="email"
            label="Email"
            type="email"
            required="true"
          />
          <UiFormInput
            v-model="credentials.password"
            id="password"
            label="Password"
            type="password"
            required="true"
          />
        </template>

        <template #form-button>
          <button
            type="submit"
            :class="[
              'px-3 py-1 rounded bg-emerald-400 w-full text-white font-bold',
              'disabled:bg-neutral-600',
            ]"
          >
            Login
          </button>
        </template>
      </UiForm>
    </div>
  </section>
</template>
