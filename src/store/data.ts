import { defineStore } from "pinia";
interface Me {
  id: number;
  roleId: number;
  name: string;
  email: string;
}
const useDataStore = defineStore("data", {
  state: (): { me: Me | null; token: string | null } => ({
    me: null,
    token: null,
  }),
  getters: {
    original: (state) => state,
  },
  actions: {
    setMe(me: Me) {
      this.me = me;
    },
    setToken(token: string | null) {
      this.token = token;
    },
  },
});

export { useDataStore };
