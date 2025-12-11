<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="min-h-[calc(100dvh-4rem)] flex items-center">
    <div
      id="card"
      class="w-full max-w-sm mx-auto shadow bg-neutral-700 p-5 rounded"
    >
      <div id="card-header" class="p-2">
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
          <div>
            <label for="email" class="block text-white font-bold mb-1"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="form-control outline border-0 px-3 py-2 rounded outline-neutral-400 w-full focus:outline-neutral-100"
            />
          </div>

          <div>
            <label for="password" class="block text-white font-bold mb-1"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              class="form-control outline border-0 px-3 py-2 rounded outline-neutral-400 w-full focus:outline-neutral-100"
            />
          </div>

          <div class="mt-8 w-full">
            <button
              type="submit"
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
