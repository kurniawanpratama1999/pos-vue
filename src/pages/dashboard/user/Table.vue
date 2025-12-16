<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import Card from "../../../components/Card.vue";
import FormTable from "../../../components/FormTable.vue";
import { RouterLink } from "vue-router";

const API_HOST = "http://localhost:3000/api/v1";
const API_USER = API_HOST + "/user";
interface User {
  id: number;
  role: { name: string };
  name: string;
  email: string;
  created_at: string;
}
const users = ref<User[]>([]);

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
</script>

<template>
  <section class="py-5">
    <Card
      content-class-name="overflow-x-auto"
      main-class-name="border-0"
      header-class-name="px-2"
    >
      <template #card-header>
        <div class="flex items-center justify-between gap-4">
          <label
            for="search"
            class="flex items-center gap-1 px-3 border border-neutral-400 rounded-full w-full max-w-sm"
          >
            <input
              type="search"
              name="search"
              id="search"
              class="py-1 w-full border-0 outline-0"
              placeholder="Search user..."
            />
            <Icon icon="mingcute:search-line" />
          </label>
          <RouterLink
            :to="{ name: 'user.create' }"
            class="block px-4 py-2 rounded bg-emerald-400"
          >
            <Icon icon="mingcute:plus-fill" />
          </RouterLink>
        </div>
      </template>
      <template #card-content>
        <FormTable :datas="users" unique-name="user">
          <template #table-header>
            <td>No</td>
            <td class="w-1/4">Name</td>
            <td class="w-1/4">Role</td>
            <td class="w-1/4">Email</td>
            <td class="w-1/4">Date</td>
            <td>Action</td>
          </template>
          <template
            #table-body="{ item, index }: { item: User, index: number }"
          >
            <td data-col="No" class="grid-cols-[calc(13*10px)_1fr]">
              <div><span class="lg:hidden">:</span> {{ index + 1 }}</div>
            </td>
            <td data-col="Full Name" class="grid-cols-[calc(13*10px)_1fr]">
              <div><span class="lg:hidden">:</span> {{ item.name }}</div>
            </td>
            <td data-col="Role Name" class="grid-cols-[calc(13*10px)_1fr]">
              <div><span class="lg:hidden">:</span> {{ item.role.name }}</div>
            </td>
            <td data-col="Email Address" class="grid-cols-[calc(13*10px)_1fr]">
              <div><span class="lg:hidden">:</span> {{ item.email }}</div>
            </td>
            <td data-col="Date Create" class="grid-cols-[calc(13*10px)_1fr]">
              <div><span class="lg:hidden">:</span> {{ item.created_at }}</div>
            </td>
            <td data-col="Actions" class="grid-cols-[calc(13*10px)_1fr]">
              <div class="flex gap-1">
                <span class="lg:hidden">:</span>
                <div class="flex items-center gap-3">
                  <button class="px-3 py-2 rounded bg-red-400">
                    <Icon icon="mdi:delete" />
                  </button>
                  <RouterLink
                    class="px-3 py-2 rounded bg-blue-400"
                    :to="{ name: 'user.show', params: { id: item.id } }"
                  >
                    <Icon icon="mdi:pencil" />
                  </RouterLink>
                </div>
              </div>
            </td>
          </template>
        </FormTable>
      </template>
    </Card>
  </section>
</template>
