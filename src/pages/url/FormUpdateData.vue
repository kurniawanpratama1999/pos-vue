<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiFormSelect from "@/components/UiFormSelect.vue";
import UiFormUpdateData from "@/components/UiFormUpdateData.vue";
import { reactive } from "vue";

const props = defineProps<{ id?: string }>();

const url = reactive<{ category: string; name: string; url: string }>({
  category: "",
  name: "",
  url: "",
});
</script>

<template>
  <section class="min-h-dvh flex justify-center">
    <UiFormUpdateData>
      <template #header>
        <div
          :class="[
            props.id ? 'bg-indigo-400' : 'bg-emerald-400',
            ' px-3 py-2',
          ]">
          <h3 class="text-white font-bold text-xl">
            {{ props.id ? "Update Url" : "Create Url" }}
          </h3>
        </div>
      </template>
      <!-- CONTROLS -->
      <template #control>
        <UiFormSelect
          v-model="url.category"
          id="category"
          label="Category"
          :items="[
            { id: '1', name: 'Navbar' },
            { id: '2', name: 'Master' },
            { id: '3', name: 'General' },
            { id: '4', name: 'All' },
          ]"
          :required="!props.id"
          :isBlank="!props.id" />

        <UiFormControl
          v-model="url.name"
          id="name"
          label="Name"
          :required="!props.id" />
        <UiFormControl
          v-model="url.url"
          id="url"
          label="Url"
          :required="!props.id" />
      </template>

      <div class="flex items-center gap-1 justify-end mt-5">
        <UiButton :to="{ name: 'url' }" variant="ghost">Close</UiButton>
        <UiButton v-if="props.id" color="blue">Save Change</UiButton>
        <UiButton v-else>Save</UiButton>
      </div>
    </UiFormUpdateData>
  </section>
</template>
