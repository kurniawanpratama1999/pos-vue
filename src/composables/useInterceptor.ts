import { getAccessToken } from "@/store/getAccessToken";
import axios from "axios";

export const useInterceptor = axios.create({
  baseURL: "http://localhost:3000",

  timeout: 1000,

  headers: {
    "Content-Type": "application/json",
    "x-url": window.location.pathname,
  },

  withCredentials: true,
});

useInterceptor.interceptors.request.use(
  (request) => {
    if (getAccessToken.value) {
      request.headers.Authorization = `Bearer ${getAccessToken.value}`;
    }

    return request;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let failedQue: any[] = [];

const processQue = (error: any, token: string | null = null) => {
  failedQue.forEach((promp) => {
    if (error) {
      promp.reject(error);
    } else {
      promp.resolve(token);
    }
  });
};

useInterceptor.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    if (originalRequest?.url?.includes("/auth/refresh-token")) {
      return Promise.reject(error);
    }

    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQue.push({
          resolve: (token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(useInterceptor(originalRequest));
          },
          reject,
        });
      });
    }

    isRefreshing = true;

    try {
      const response = await useInterceptor.post("/auth/refresh-token");
      const newAccessToken = await response.data.data;

      getAccessToken.value = newAccessToken;
      processQue(null, newAccessToken);

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return useInterceptor(originalRequest);
    } catch (error) {
      processQue(error, null);

      getAccessToken.value = null;
      window.location.href = "/login";

      return Promise.reject(error);
    } finally {
      isRefreshing = false;
    }
  }
);
