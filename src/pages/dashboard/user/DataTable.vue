<script setup lang="ts">
import { onMounted, ref } from "vue";
import { axiosOrigin } from "@/utils/useAxiosOrigin";
import { AxiosError } from "axios";
import { useAccessTokenStore } from "@/store/useAccessTokenStore";
import { useDateIndo } from "@/utils/useDateIndo";
import UiTable from "@/components/Ui/UiTable.vue";
import UiTableActions from "@/components/Ui/UiTableActions.vue";
import UiFormSearch from "@/components/Ui/UiFormSearch.vue";
import UiTableAdd from "@/components/Ui/UiTableAdd.vue";
import { useAlertStore } from "@/store/useAlertStore";

interface Role {
  id: number;
  name: string;
}

interface Users {
  id: number;
  name: string;
  role: Role;
  email: string;
  created_at: string;
}
// LOGIC
const alert = useAlertStore();
const users = ref<Users[]>([]);
onMounted(async () => {
  try {
    const fetchUsers = await axiosOrigin.get("/user", {
      headers: { Authorization: `Bearer ${useAccessTokenStore.value}` },
    });

    users.value = fetchUsers.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Something went wrong");
    }
  }
});

function handleDelete() {
  alert.open({
    message: "Are u sure want to delete?",
    variant: "delete",
    action: [
      {
        text: "Cancel",
        className: "ml-auto text-neutral-700!",
        variant: "transparent",
        handleClick: () => {
          alert.close();
        },
      },
      {
        text: "Yes, delete it",
        variant: "red",
        handleClick: () => {
          console.log("delete");
        },
      },
    ],
  });
}
</script>

<template>
  <section class="w-full">
    <UiTable :source="users">
      <template #cheader>
        <UiFormSearch
          id="search-user"
          name="search-user"
          placeholder="Search user"
        />
        <UiTableAdd />
      </template>
      <template #thead>
        <th>
          <input type="checkbox" name="cb-all" id="cb-all" />
        </th>
        <th class="w-1/4">Name</th>
        <th class="w-1/4">RoleName</th>
        <th class="w-1/4">Email</th>
        <th class="w-1/4">Created at</th>
        <th>Actions</th>
      </template>
      <template #tbody="{ items }">
        <tr :key="'user-table-' + items.id">
          <td>
            <input
              type="checkbox"
              :name="`cb` + items.id"
              :id="`cb` + items.id"
            />
          </td>
          <td>{{ items.name }}</td>
          <td>{{ items.role.name }}</td>
          <td>{{ items.email }}</td>
          <td>{{ useDateIndo(new Date(items.created_at)) }}</td>
          <td>
            <UiTableActions
              :handle-delete="
                () => {
                  handleDelete();
                }
              "
              :router-edit="{ name: 'user.show', params: { id: items.id } }"
            />
          </td>
        </tr>
      </template>
    </UiTable>
  </section>
</template>
