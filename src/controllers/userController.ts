import { useAccessTokenStore } from "@/store/useAccessTokenStore";
import { axiosOrigin } from "@/utils/useAxiosOrigin";
import { AxiosError } from "axios";

export interface User {
  id: string;
  name: string;
  roleId: string;
  email: string;
  role: { id: string; name: string };
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface SaveUser {
  name: string;
  roleId: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const index = async () => {
  try {
    const fetching = await axiosOrigin.get("/user", {
      headers: { Authorization: `Bearer ${useAccessTokenStore.value}` },
    });

    return fetching.data.data as User[];
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Something went wrong");
    }

    return undefined;
  }
};

export const show = async (id: string) => {
  try {
    const fetching = await axiosOrigin.get(`/user/${id}`);
    return fetching.data.data as User;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Something went wrong");
    }

    return undefined;
  }
};

export const create = async (body: SaveUser) => {
  try {
    await axiosOrigin.post("/user", body);
    return true;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
    return false;
  }
};

export const update = async (id: string, user: SaveUser) => {
  const send: any = {
    name: user.name,
    email: user.email,
    roleId: user.roleId,
  };

  if (user.password !== "") {
    send.password = user.password;
  }

  try {
    await axiosOrigin.put(`/user/${id}`, send);
    return true;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }

    return false;
  }
};
export const destroy = async (id: string) => {};
