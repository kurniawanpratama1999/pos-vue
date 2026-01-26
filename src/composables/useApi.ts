import axios from "axios";

export const useApi = axios.create({
  baseURL: "http://localhost:3000",

  timeout: 1000,

  headers: {
    "Content-Type": "application/json",
    "x-url": window.location.pathname,
  },

  withCredentials: true,
});
