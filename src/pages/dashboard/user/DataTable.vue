<script setup lang="ts">
import { onMounted, ref } from "vue";
import { axiosOrigin } from "../../../store/axiosOrigin";
import { AxiosError } from "axios";
import { useAccessTokenStore } from "../../../store/token";
import { useDateIndo } from "../../../utils/useDateIndo";
import UiTable from "../../../components/Ui/UiTable.vue";
import UiTableActions from "../../../components/Ui/UiTableActions.vue";
import UiFormSearch from "../../../components/Ui/UiFormSearch.vue";
import UiTableAdd from "../../../components/Ui/UiTableAdd.vue";

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

const users = ref<Users[]>([]);
onMounted(async () => {
  try {
    const fetchUsers = await axiosOrigin.get("/user", {
      headers: { Authorization: `Bearer ${useAccessTokenStore.value}` },
    });

    users.value = fetchUsers.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.status);
    }
  }
});
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
        <th>Name</th>
        <th>RoleName</th>
        <th>Email</th>
        <th>Created at</th>
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
          <td><UiTableActions /></td>
        </tr>
      </template>
    </UiTable>
  </section>
</template>
