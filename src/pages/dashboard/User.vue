<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";

const API_HOST = "http://localhost:3000/api/v1";
const API_USER = API_HOST + "/user";

interface User {
  id: number;
  role: { name: string };
  name: string;
  email: string;
  created_at: string;
}
const users = ref<User[]>();

onMounted(async () => {
  const HIT_USER = await fetch(API_USER, {
    headers: {
      "x-current-url": window.location.pathname,
    },
  });

  const response = await HIT_USER.json();

  if (response.success) {
    users.value = response.data;
  }
});

// TOGGLE FOR ADD USER
const modalFormIsActive = ref(false);
const toggleModalForm = () => {
  modalFormIsActive.value = !modalFormIsActive.value;
};
</script>

<template>
  <section
    id="modal"
    :class="[
      modalFormIsActive ? 'flex' : 'hidden',
      'fixed top-0 left-0 right-0 bottom-0 bg-white/3 backdrop-blur z-200',
      'items-center justify-center',
    ]"
  >
    <div
      class="w-full max-w-sm p-5 bg-neutral-800 border border-neutral-400 rounded-xl"
    >
      <h3 class="text-2xl text-center font-bold mb-5">Insert New user</h3>
      <form action="" class="space-y-4 w-full mx-auto">
        <div class="w-full">
          <label for="name" class="block">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="py-2 w-full border rounded px-3 border-neutral-500 outline-0 focus:border-neutral-400"
            required
          />
        </div>
        <div class="w-full">
          <label for="roleId" class="block">Role Name</label>
          <input
            type="text"
            name="roleId"
            id="roleId"
            class="py-2 w-full border rounded px-3 border-neutral-500 outline-0 focus:border-neutral-400"
            required
          />
        </div>
        <div class="w-full">
          <label for="email" class="block">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            class="py-2 w-full border rounded px-3 border-neutral-500 outline-0 focus:border-neutral-400"
            required
          />
        </div>
        <div class="w-full">
          <label for="password" class="block">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            class="py-2 w-full border rounded px-3 border-neutral-500 outline-0 focus:border-neutral-400"
            required
          />
        </div>
        <div class="w-full">
          <label for="password_confirmation" class="block"
            >Password Confirmation</label
          >
          <input
            type="text"
            name="password_confirmation"
            id="password_confirmation"
            class="py-2 w-full border rounded px-3 border-neutral-500 outline-0 focus:border-neutral-400"
            required
          />
        </div>

        <div class="flex gap-4 items-center justify-end">
          <button
            @click="toggleModalForm"
            class="px-3 py-2 rounded flex items-center justify-center gap-1"
          >
            <span>Cancel</span>
          </button>
          <button
            class="px-3 py-2 rounded bg-emerald-400 flex items-center justify-center gap-1"
          >
            <Icon icon="material-symbols:save" />
            <span>Save</span>
          </button>
        </div>
      </form>
    </div>
  </section>

  <section id="data-table">
    <div :class="['card']">
      <div
        :class="['card-header', 'flex items-center justify-between', 'py-2']"
      >
        <div
          :class="[
            'rounded-full border border-neutral-700',
            'flex items-center justify-between',
            'px-3 py-2',
            'focus-within:border-neutral-300',
            'focus-within:[&_svg]:text-neutral-300',
          ]"
        >
          <label for="search" class="order-2">
            <Icon icon="proicons:search" class="text-neutral-700 text-xl" />
          </label>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="find user"
            class="order-1 outline-0 border-0 text-neutral-100"
          />
        </div>
        <div>
          <button
            @click="toggleModalForm"
            class="px-5 py-2 rounded bg-emerald-600"
          >
            <Icon icon="fluent-emoji-high-contrast:plus" />
          </button>
        </div>
      </div>
      <div :class="['card-content', 'overflow-x-auto', 'pb-5']">
        <table :class="['table', 'w-full']">
          <thead>
            <tr :class="['bg-white/10', '[&_td]:px-3 [&_td]:py-2']">
              <td>No</td>
              <td class="w-1/4">Name</td>
              <td class="w-1/4">Role</td>
              <td class="w-1/4">Email</td>
              <td class="w-1/4">Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="users"
              v-for="(val, key) in users"
              :key="'user-' + key"
              :class="[
                'table-data',
                '[&_td]:px-3 [&_td]:py-2',
                'border-b border-neutral-700',
              ]"
            >
              <td class="px-3" data-cell="No">
                <p class="text-nowrap">{{ val.id ?? "id?" }}</p>
              </td>
              <td class="px-3" data-cell="Name">
                <p class="text-nowrap">{{ val.name ?? "name?" }}</p>
              </td>
              <td class="px-3" data-cell="Role">
                <p class="text-nowrap">{{ val.role.name ?? "role?" }}</p>
              </td>
              <td class="px-3" data-cell="Email">
                <p class="text-nowrap">{{ val.email ?? "email?" }}</p>
              </td>
              <td class="px-3" data-cell="Date">
                <p class="text-nowrap">{{ val.created_at ?? "date?" }}</p>
              </td>
              <td class="px-3" data-cell="Action">
                <div class="flex items-stretch gap-2 text-xl">
                  <button class="px-3 py-1 rounded bg-red-400">
                    <Icon icon="material-symbols:delete" />
                  </button>
                  <button class="px-3 py-1 rounded bg-blue-400">
                    <Icon icon="mdi:pencil" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div :class="['card-footer', '']"></div>
    </div>
  </section>
</template>
