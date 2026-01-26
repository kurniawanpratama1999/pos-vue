<script setup lang="ts">
import UiButton from "@/components/UiButton.vue";
import UiFormControl from "@/components/UiFormControl.vue";
import UiFormUpdateData from "@/components/UiFormUpdateData.vue";
import { onBeforeMount, reactive } from "vue";

const props = defineProps<{ id?: string }>();

const role = reactive<{ name: string }>({
  name: "",
});

onBeforeMount(() => {
  console.log(window.location.pathname);
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
            {{ props.id ? "Update Rolename" : "Create Rolename" }}
          </h3>
        </div>
      </template>
      <!-- CONTROLS -->
      <template #control>
        <UiFormControl
          v-model="role.name"
          id="name"
          label="Name"
          :required="!props.id" />
      </template>

      <div class="flex items-center gap-1 justify-end mt-5">
        <UiButton :to="{ name: 'role' }" variant="ghost">Close</UiButton>
        <UiButton v-if="props.id" color="blue">Save Change</UiButton>
        <UiButton v-else>Save</UiButton>
      </div>
    </UiFormUpdateData>
  </section>
</template>
