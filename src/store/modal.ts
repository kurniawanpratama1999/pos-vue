import { defineStore } from "pinia";
import type { Button, Type } from "../components/Modal.vue";

export const useModalStore = defineStore("modal", {
  state: (): {
    isActive: boolean;
    idName: string;
    message: string;
    type: Type;
    buttons: Button[];
  } => ({
    isActive: false,
    idName: "",
    message: "",
    type: "default",
    buttons: [
      {
        text: "Cancel",
        variant: "light",
        handleClick: () => {},
      },
    ],
  }),
  actions: {
    open(idName: string, message: string, type: Type, buttons: Button[]) {
      this.idName = idName;
      this.message = message;
      this.type = type;
      this.buttons = buttons;

      this.isActive = true;
    },
    close() {
      this.isActive = false;
    },
  },
});
