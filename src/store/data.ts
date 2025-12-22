import { defineStore } from "pinia";

const useDataStore = defineStore("data", {
  state: (): { me: any | null; token: string | null } => ({
    me: null,
    token: null,
  }),
  getters: {
    original: (state) => state,
  },
  actions: {
    setMe(me: any) {
      this.me = me;
    },
    setToken(token: string | null) {
      this.token = token;
    },
  },
});

export { useDataStore };
