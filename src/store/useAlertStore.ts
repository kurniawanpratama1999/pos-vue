import { defineStore } from "pinia";
import type { Props as AlertProps } from "../components/Ui/UiAlert.vue";

export const useAlertStore = defineStore("alert", {
  state: (): AlertProps => ({
    isActive: false,
    message: "",
    variant: "success",
  }),
  actions: {
    open(params: Omit<AlertProps, "isActive">) {
      this.isActive = true;
      this.message = params.message;
      this.variant = params.variant;
      this.action = params.action;
      this.redirectTo = params.redirectTo;
    },
    close() {
      this.isActive = false;
    },
  },
});
