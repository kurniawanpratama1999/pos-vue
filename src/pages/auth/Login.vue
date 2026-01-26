<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiSeperator from "@/components/UiSeperator.vue";
import { useApi } from "@/composables/useApi";
import { getAccessToken } from "@/store/getAccessToken";
import { reactive } from "vue";
import { useRouter } from "vue-router";

interface Credentials {
  email: string;
  password: string;
}

const credentials = reactive<Credentials>({
  email: "",
  password: "",
});

const router = useRouter();
const submit = async () => {
  try {
    const res = await useApi.post("/auth/login", credentials);
    if (res.status === 202) {
      console.log("AccessToken when login is success : ", res.data.data);
      getAccessToken.value = res.data.data;
      router.push({ name: "role" });
    }
  } catch (error) {
    alert("login gagal");
  }
};
</script>

<template>
  <section class="w-full min-h-dvh flex-center">
    <form
      @submit.prevent="submit"
      class="p-4 shadow w-full max-w-xs bg-neutral-100 rounded-lg space-y-3">
      <UiFormControl
        v-model="credentials.email"
        id="email"
        type="email"
        label="Email" />

      <UiFormControl
        v-model="credentials.password"
        id="password"
        type="password"
        label="Password" />

      <UiSeperator />

      <div>
        <UiButton buttonType="submit" className="font-bold w-full"
          >Login</UiButton
        >
      </div>

      <div class="mt-3">
        <p class="text-xs italic text-center text-neutral-600">
          Cannot login? Call our CS
        </p>
      </div>
    </form>
  </section>
</template>
