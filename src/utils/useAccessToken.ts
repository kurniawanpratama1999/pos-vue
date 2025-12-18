import { useAccessTokenStore } from "../store/accessToken";
import { useFetch } from "./useFetch";

export const useAccessToken = async (): Promise<string | null> => {
  const res = await useFetch(
    "http://localhost:3000/api/v1/auth/refresh",
    true,
    "GET"
  );

  if (res.success) {
    useAccessTokenStore.value = res.data;
    return useAccessTokenStore.value;
  }

  return null;
};
