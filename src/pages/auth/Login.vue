<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { reactive } from "vue";
import FormInput from "../../components/FormInput.vue";
import { useModalStore } from "../../store/modal";
import { useRouter } from "vue-router";
import { useAccessTokenStore } from "../../store/accessToken";
import { useFetch } from "../../utils/useFetch";

const modal = useModalStore();
const router = useRouter();
const auth = reactive({
  email: "",
  password: "",
});

const login = async () => {
  try {
    const apiLogin = "http://localhost:3000/api/v1/auth/login";
    const fetchApiLogin = await useFetch(apiLogin, false, "POST", "", auth);
    if (fetchApiLogin.success) {
      useAccessTokenStore.value = fetchApiLogin.data;
      modal.open("user-login", "login berhasil", "default", [
        {
          text: "Ok",
          variant: "green",
          handleClick: () => {
            router.push({ name: "user.index" });
            modal.close();
          },
        },
      ]);
    } else {
      let message: string;
      if (auth.email === "" && auth.password === "") {
        message = "Email and Password is empty";
      } else if (auth.email === "") {
        message = "Email is empty";
      } else if (auth.password === "") {
        message = "Password is empty";
      } else {
        message = fetchApiLogin.error.message;
      }
      modal.open("user-login", message, "default", [
        {
          text: "Ok",
          variant: "green",
          handleClick: () => {
            modal.close();
          },
        },
      ]);
    }
  } catch (error: any) {
    modal.open("user-login", error.message, "default", [
      {
        text: "Ok",
        variant: "green",
        handleClick: () => {
          modal.close();
        },
      },
    ]);
  }
};
</script>

<template>
  <div class="min-h-[calc(100dvh-4rem)] flex items-center">
    <div class="w-full max-w-sm mx-auto shadow bg-neutral-700 p-5 rounded">
      <div class="p-2">
        <div class="flex text-6xl items-center gap-3 justify-center">
          <Icon icon="streamline-flex:receipt-solid" class="text-emerald-600" />
        </div>
        <h2
          class="text-center text-2xl text-emerald-600"
          style="text-shadow: 1px 1px 1px var(--color-emerald-300)"
        >
          LOGIN ACCOUNT
        </h2>
      </div>
      <div id="card-content">
        <form action="" class="form-wraper space-y-5">
          <FormInput
            id-name="email"
            label="Email"
            v-model="auth.email"
            :required="true"
            type="email"
          />

          <FormInput
            id-name="password"
            label="Password"
            v-model="auth.password"
            :required="true"
            type="password"
          />

          <div class="mt-8 w-full">
            <button
              @click="login"
              type="button"
              class="rounded w-full bg-emerald-700 font-bold py-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>
