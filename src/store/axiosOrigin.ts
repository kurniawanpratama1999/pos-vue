import axios from "axios";

export const axiosOrigin = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
    "x-current-url": window.location.pathname,
  },
  withCredentials: true,
});
