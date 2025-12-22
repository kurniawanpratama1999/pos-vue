<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useDataStore } from "../../../store/data";

interface Users {
  id: number;
  name: string;
  rolename: string;
  email: string;
  date: string;
}

const dataStore = useDataStore();
const tbody = ref<Users[]>([]);
onMounted(() => {
  console.log(dataStore.original.me);
  console.log(dataStore.original.token);
});
</script>

<template>
  <section class="w-full overflow-x-auto">
    <table
      :class="[
        '[&_th]:px-2 [&_th]:text-nowrap',
        '[&_td]:px-2 [&_td]:text-nowrap',
      ]"
    >
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="value in tbody">
          <tr v-if="value" :key="'tbody' + value.id">
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            <td>{{ value.name }}</td>
            <td>{{ value.rolename }}</td>
            <td>{{ value.email }}</td>
            <td>{{ value.date }}</td>
            <td>
              <div class="flex gap-2">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>
