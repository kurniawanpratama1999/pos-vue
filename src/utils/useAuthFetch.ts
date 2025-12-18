import { useAccessTokenStore } from "../store/accessToken";
import { useAccessToken } from "./useAccessToken";
import { useFetch, type UseFetch } from "./useFetch";

export const useAuthFetch = async (
  api: string,
  currentUrl: boolean,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  body?: any
): Promise<UseFetch> => {
  let response = await useFetch(
    api,
    currentUrl,
    method,
    useAccessTokenStore.value,
    body
  );

  if (
    !response.success &&
    (response.error.message === "TOKEN_EXPIRED" ||
      response.error.message === "TOKEN_NOT_FOUND")
  ) {
    let newAccessToken = await useAccessToken();

    if (!newAccessToken) {
      return {
        success: false,
        message: "Unauthenticated",
        data: null,
        error: { message: "CREDENTIAL_NOT_FOUND" },
      };
    }

    response = await useFetch(api, currentUrl, method, newAccessToken, body);
  }

  return response;
};
