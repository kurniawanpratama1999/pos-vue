<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

interface UserData {
  id?: number;
  role?: { name: string };
  name?: string;
  email?: string;
}

interface User {
  success?: boolean;
  data?: UserData;
}

const router = useRoute();
const id = router.params.id;
const user = reactive<User>({
  success: false,
  data: {},
});

onMounted(() => {
  const hitApi = async () => {
    const api = `http://localhost:3000/api/v1/user/${id}`;
    const fetchUser = await fetch(api, {
      method: "get",
      headers: {
        "x-current-url": window.location.pathname,
      },
    });

    const response = await fetchUser.json();

    if (response.success) {
      user.data = response.data;
    } else {
      console.log(response);
    }
  };

  if (id) {
    hitApi();
  }
});
</script>

<template>
  <section class="w-full max-w-sm mx-auto space-y-6 pt-5">
    <h3 v-if="!id" class="text-3xl font-bold">Form Insert New User</h3>
    <h3 v-if="id" class="text-3xl font-bold">
      Update User {{ user.data?.name }}
    </h3>
    <form class="space-y-4 w-full max-w-sm">
      <div class="w-full space-y-1">
        <label class="block" for="name">Full Name</label>
        <input
          class="px-3 py-2 border border-neutral-500 outline-0 rounded w-full"
          type="text"
          name="name"
          id="name"
          :value="user.data?.name"
        />
      </div>

      <div class="w-full space-y-1">
        <label class="block" for="roleId">Role Name</label>
        <input
          class="px-3 py-2 border border-neutral-500 outline-0 rounded w-full"
          type="text"
          name="roleId"
          id="roleId"
          :value="user.data?.role?.name"
        />
      </div>

      <div class="w-full space-y-1">
        <label class="block" for="email">Email Address</label>
        <input
          class="px-3 py-2 border border-neutral-500 outline-0 rounded w-full"
          type="email"
          name="email"
          id="email"
          :value="user.data?.email"
        />
      </div>

      <div class="w-full space-y-1">
        <label class="block" for="password">Password</label>
        <input
          class="px-3 py-2 border border-neutral-500 outline-0 rounded w-full"
          type="password"
          name="password"
          id="password"
        />
      </div>

      <div class="w-full space-y-1">
        <label class="block" for="password_confirmation"
          >Password Confirmation</label
        >
        <input
          class="px-3 py-2 border border-neutral-500 outline-0 rounded w-full"
          type="password"
          name="password_confirmation"
          id="password_confirmation"
        />
      </div>

      <div class="flex items-center gap-2">
        <button class="flex items-center gap-1 bg-red-400 px-3 py-1 rounded">
          <Icon icon="material-symbols:delete" />
          <span>Delete</span>
        </button>
        <RouterLink :to="{ name: 'user.index' }" class="ml-auto">
          <span>Cancel</span>
        </RouterLink>
        <button
          class="flex items-center gap-1 bg-emerald-400 rounded px-3 py-1"
        >
          <Icon icon="material-symbols:save" />
          <span>Save</span>
        </button>
      </div>
    </form>
  </section>
</template>
