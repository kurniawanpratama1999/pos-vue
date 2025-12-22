<script setup lang="ts">
import { Icon } from "@iconify/vue";
import UiFormInput from "../../components/Ui/UiFormInput.vue";
import UiForm from "../../components/Ui/UiForm.vue";
import { reactive, ref, watch } from "vue";
import { axiosOrigin } from "../../store/axiosOrigin";
import { useDataStore } from "../../store/data";
import { useRouter } from "vue-router";
import z from "zod";

const dataStore = useDataStore();
const router = useRouter();

const credentials = reactive({
  email: "",
  password: "",
});

const loginActive = ref<boolean>(false);

watch([credentials], () => {
  const credentialCheck = z.object({
    email: z.email(),
    password: z.string().min(8),
  });

  try {
    credentialCheck.parse({
      email: credentials.email,
      password: credentials.password,
    });
    loginActive.value = true;
  } catch (error) {
    loginActive.value = false;
  }
});

async function login() {
  try {
    const response = await axiosOrigin.post("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });

    const { data } = response.data;
    dataStore.setToken(data);
    router.push({ name: "dashboard" });
  } catch (error) {
    console.log(error);
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
      <UiForm>
        <template #form-control>
          <UiFormInput
            v-model="credentials.email"
            id="email"
            label="Email"
            type="email"
            required="true"
            :z="z.email()"
          />
          <UiFormInput
            v-model="credentials.password"
            id="password"
            label="Password"
            type="password"
            required="true"
            :z="z.string().min(8)"
          />
        </template>

        <template #form-button>
          <button
            type="button"
            @click="login"
            :class="[
              'px-3 py-1 rounded bg-emerald-400 w-full text-white font-bold',
              'disabled:bg-neutral-600',
            ]"
            :disabled="!loginActive"
          >
            Login
          </button>
        </template>
      </UiForm>
    </div>
  </section>
</template>
