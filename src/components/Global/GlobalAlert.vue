<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAlertStore } from "@/store/useAlertStore";
import UiAlert from "@/components/Ui/UiAlert.vue";

const alert = useAlertStore();
const router = useRouter();
</script>

<template>
  <UiAlert
    @close="
      () => {
        alert.close();
        if (alert.redirectTo) {
          router.push(alert.redirectTo);
        }
      }
    "
    :is-active="alert.isActive"
    :message="alert.message"
    :variant="alert.variant"
    :action="alert.action"
  />
</template>
