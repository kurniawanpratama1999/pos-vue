<script setup lang="ts">
import z from "zod";
import UiFormInput from "../../../components/Ui/UiFormInput.vue";
import UiIcon from "../../../components/Ui/UiIcon.vue";

async function login() {
  console.log(alert("cihuy"));
}
</script>

<template>
  <section class="flex items-center justify-center min-h-dvh">
    <div class="w-full max-w-sm mx-auto">
      <div class="mb-2 font-bold text-xl text-emerald-500">
        <h2>Insert New User</h2>
      </div>
      <form>
        <div class="space-y-3 p-5 bg-neutral-100 rounded shadow">
          <UiFormInput
            id="name"
            label="Full Name"
            :z="
              z.string().refine((s) => /^[a-zA-Z].*/.test(s), {
                error: 'First letter cannot a number',
              })
            "
          />
          <UiFormInput id="roleId" label="roleId" :z="z.number()" />
          <UiFormInput id="email" label="Email" :z="z.email()" />
          <UiFormInput id="password" label="Password" :z="z.string().min(8)" />
          <UiFormInput
            id="password_confirmation"
            label="Password Confirmation"
            :z="z.string()"
          />
        </div>

        <div class="flex items-center justify-end gap-3 mt-3">
          <router-link
            :to="{ name: 'user' }"
            class="text-md px-2 py-1 rounded bg-transparent text-black"
          >
            <div class="flex gap-x-1 items-center">
              <span>Cancel</span>
            </div>
          </router-link>
          <button
            @click="login"
            type="button"
            class="text-md px-2 py-1 rounded bg-emerald-400 text-white shadow"
          >
            <div class="flex gap-x-1 items-center">
              <UiIcon icon="save" />
              <span>Save</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
