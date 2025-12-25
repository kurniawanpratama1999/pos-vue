<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useDateIndo } from "@/utils/useDateIndo";
import UiTable from "@/components/Ui/UiTable.vue";
import UiTableActions from "@/components/Ui/UiTableActions.vue";
import UiFormSearch from "@/components/Ui/UiFormSearch.vue";
import UiTableAdd from "@/components/Ui/UiTableAdd.vue";
import { useAlertStore } from "@/store/useAlertStore";
import { index as UserIndex, type User } from "@/controllers/userController";

const alert = useAlertStore();
const users = ref<User[] | undefined>(undefined);

onMounted(async () => {
  users.value = await UserIndex();
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
    <UiTable :source="users ?? []">
      <template #cheader>
        <UiFormSearch
          id="search-user"
          name="search-user"
          placeholder="Search user"
        />
        <UiTableAdd text="New user" :redirect-to="{ name: 'user.create' }" />
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
