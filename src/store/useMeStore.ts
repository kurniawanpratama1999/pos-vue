import { ref } from "vue";

export const useMeStore = ref<{
  id: number;
  name: string;
  email: string;
  roleId: number;
} | null>(null);
