<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, onMounted, watch } from "vue";
import Card from "../../../components/Card.vue";
import FormTable from "../../../components/FormTable.vue";
import { RouterLink } from "vue-router";
import { useModalStore } from "../../../store/modal";
import type { Button } from "../../../components/Modal.vue";
import { useAuthFetch } from "../../../utils/useAuthFetch";

interface User {
  id: number;
  role: { name: string };
  name: string;
  email: string;
  created_at: string;
}

const users = ref<User[]>([]);
const search = ref<string>("");
let idTime: number | null = null;

watch(search, () => {
  if (idTime) {
    clearTimeout(idTime);
  }

  const filterUser = async () => {
    const searchValue = search.value.trim() !== "" ? `?q=${search.value}` : "";
    const apiSearchUser = `http://localhost:3000/api/v1/user${searchValue}`;
    const fetchSearchUser = await useAuthFetch(apiSearchUser, true, "GET");
    if (fetchSearchUser.success) {
      users.value = fetchSearchUser.data;
    }
  };

  idTime = setTimeout(() => {
    filterUser();
  }, 300);
});

onMounted(async () => {
  const apiUsers = "http://localhost:3000/api/v1/user";
  const fetchApiUsers = await useAuthFetch(apiUsers, true, "GET");

  if (fetchApiUsers.success) {
    users.value = fetchApiUsers.data;
  }
});

const modal = useModalStore();

const askDelete = (id: number) => {
  const buttons: Button[] = [
    {
      text: "Cancel",
      variant: "light",
      handleClick: () => {
        modal.close();
      },
    },
    {
      text: "Delete",
      variant: "red",
      handleClick: async () => {
        const apiDeleteUser = `http://localhost:3000/api/v1/user/${id}/delete`;
        const fetchApiUsers = await useAuthFetch(apiDeleteUser, true, "PATCH");
        if (fetchApiUsers.success) {
          modal.close();
        }
      },
    },
  ];

  modal.open(
    "asking-delete-user",
    `Are you sure wanna delete the id-${id}?`,
    "default",
    buttons
  );
};
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
              v-model="search"
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
                  <button
                    class="px-3 py-2 rounded bg-red-400"
                    @click="askDelete(item.id)"
                  >
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
