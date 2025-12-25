import { useAccessTokenStore } from "@/store/useAccessTokenStore";
import { axiosOrigin } from "@/utils/useAxiosOrigin";
import { AxiosError } from "axios";

export interface Role {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface SaveRole {
  name: string;
}

export const RoleController = {
  index: async () => {
    try {
      const fetching = await axiosOrigin.get("/role", {
        headers: { Authorization: `Bearer ${useAccessTokenStore.value}` },
      });

      return fetching.data.data as Role[];
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Something went wrong");
      }

      return undefined;
    }
  },

  show: async (id: string) => {
    try {
      const fetching = await axiosOrigin.get(`/role/${id}`);
      return fetching.data.data as Role;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Something went wrong");
      }

      return undefined;
    }
  },

  create: async (body: SaveRole) => {
    try {
      await axiosOrigin.post("/role", body);
      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
      return false;
    }
  },

  update: async (id: string, role: SaveRole) => {
    try {
      await axiosOrigin.put(`/role/${id}`, role);
      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }

      return false;
    }
  },
  destroy: async (id: string) => {},
};
