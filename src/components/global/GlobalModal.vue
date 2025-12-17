<script setup lang="ts">
import { useModalStore } from "../../store/modal";
import Modal from "../Modal.vue";

const modal = useModalStore();
</script>

<template>
  <Modal
    :id-name="modal.idName"
    :is-active="modal.isActive"
    :message="modal.message"
    :type="modal.type"
    :button="modal.buttons"
    @close="modal.close"
  />
</template>
