<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiSeperator from "@/components/UiSeperator.vue";
import { reactive } from "vue";

interface Credentials {
  email: string;
  password: string;
}

const credentials = reactive<Credentials>({
  email: "",
  password: "",
});
</script>

<template>
  <section class="w-full min-h-dvh flex-center">
    <form
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
        <UiButton :to="{ name: 'user' }" className="font-bold w-full"
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
