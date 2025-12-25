import axios from "axios";
import { useAccessTokenStore } from "@/store/useAccessTokenStore";

export const axiosOrigin = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
    "x-current-url": window.location.pathname,
  },
  withCredentials: true,
});

axiosOrigin.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalRequest = err.config;
    if (err.response.data.code === "TOKEN_IS_MISSING") {
      try {
        originalRequest._retry = true;
        const refresh = await axiosOrigin.get("/auth/refresh");
        const token = refresh.data.data;
        useAccessTokenStore.value = token;
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axiosOrigin(originalRequest);
      } catch (error) {}
    }

    return Promise.reject(err);
  }
);
