<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormSelect from "@/components/UiFormSelect.vue";
import { ref } from "vue";
const roleId = ref<string>("admin");
</script>

<template>
  <div class="w-full max-w-sm mx-2 mt-3">
    <div class="flex justify-between items-center mb-5">
      <div>
        <h3 class="text-xl font-bold">Permission</h3>
      </div>
    </div>

    <div class="mb-3 p-2 rounded bg-neutral-100 shadow">
      <UiFormSelect
        v-model="roleId"
        id="roleId"
        label="Rolename"
        :items="[
          { id: '1', name: 'admin' },
          { id: '2', name: 'Operator' },
          { id: '3', name: 'Pimpinan' },
        ]"
        :isBlank="true" />
    </div>

    <form class="grid">
      <div class="grid gap-y-1 bg-neutral-100 rounded p-2 shadow">
        <template
          v-for="(item, index) in [
            {
              id: 1,
              name: 'Dashboard',
              category: 'Navbar',
              Url: '/dashboard',
            },
            {
              id: 2,
              name: 'Transaction',
              category: 'Navbar',
              Url: '/transaction',
            },
            {
              id: 3,
              name: 'Order Detail',
              category: 'Navbar',
              Url: '/detail',
            },
            {
              id: 4,
              name: 'User',
              category: 'Master',
              Url: '/user',
            },
            {
              id: 5,
              name: 'Rolename',
              category: 'Master',
              Url: '/role',
            },
            {
              id: 6,
              name: 'Url',
              category: 'Master',
              Url: '/url',
            },
            {
              id: 7,
              name: 'Permission',
              category: 'Master',
              Url: '/permission',
            },
            {
              id: 8,
              name: 'Product',
              category: 'General',
              Url: '/product',
            },
            {
              id: 9,
              name: 'Product Variant',
              category: 'General',
              Url: '/variant',
            },
            {
              id: 10,
              name: 'Product Category',
              category: 'General',
              Url: '/category',
            },
            {
              id: 11,
              name: 'Discount',
              category: 'General',
              Url: '/discount',
            },
            {
              id: 12,
              name: 'Discount Condition',
              category: 'General',
              Url: '/condition',
            },
            {
              id: 13,
              name: 'Logout',
              category: 'All',
              Url: '/logout',
            },
            {
              id: 14,
              name: 'Print',
              category: 'All',
              Url: '/print',
            },
          ]"
          :key="index">
          <label for="" class="w-full flex gap-3 items-center justify-start">
            <input
              type="checkbox"
              :name="`url-${index}-${item.id}`"
              :id="`url-${index}-${item.id}`"
              class="w-fit" />
            <span>{{ item.Url }}</span>
          </label>
        </template>
      </div>

      <div class="mt-5 flex justify-end items-center">
        <UiButton>Save Change</UiButton>
      </div>
    </form>
  </div>
</template>
