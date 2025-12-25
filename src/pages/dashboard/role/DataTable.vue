<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useDateIndo } from "@/utils/useDateIndo";
import UiTable from "@/components/Ui/UiTable.vue";
import UiTableActions from "@/components/Ui/UiTableActions.vue";
import UiFormSearch from "@/components/Ui/UiFormSearch.vue";
import UiTableAdd from "@/components/Ui/UiTableAdd.vue";
import { useAlertStore } from "@/store/useAlertStore";
import { RoleController, type Role } from "@/controllers/roleController";

const alert = useAlertStore();
const roles = ref<Role[] | undefined>(undefined);

onMounted(async () => {
  roles.value = await RoleController.index();
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
    <UiTable :source="roles ?? []">
      <template #cheader>
        <UiFormSearch
          id="search-role"
          name="search-role"
          placeholder="Search role"
        />
        <UiTableAdd text="New role" :redirect-to="{ name: 'role.create' }" />
      </template>
      <template #thead>
        <th>
          <input type="checkbox" name="cb-all" id="cb-all" />
        </th>
        <th class="w-1/2">Name</th>
        <th class="w-1/2">Created at</th>
        <th>Actions</th>
      </template>
      <template #tbody="{ items }">
        <tr :key="'role-table-' + items.id">
          <td>
            <input
              type="checkbox"
              :name="`cb` + items.id"
              :id="`cb` + items.id"
            />
          </td>
          <td>{{ items.name }}</td>
          <td>{{ useDateIndo(new Date(items.created_at)) }}</td>
          <td>
            <UiTableActions
              :handle-delete="
                () => {
                  handleDelete();
                }
              "
              :router-edit="{ name: 'role.show', params: { id: items.id } }"
            />
          </td>
        </tr>
      </template>
    </UiTable>
  </section>
</template>
