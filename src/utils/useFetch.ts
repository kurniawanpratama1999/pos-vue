export interface UseFetch {
  success: boolean;
  message: string;
  data: any;
  error: any;
}

export const useFetch = async (
  api: string,
  currentUrl: boolean,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  authorization?: string,
  body?: any
): Promise<UseFetch> => {
  try {
    const headers: HeadersInit = {};

    if (method !== "GET" && method !== "DELETE") {
      headers["Content-Type"] = "application/json";
    }

    if (currentUrl) {
      headers["x-current-url"] = window.location.pathname;
    }

    if (authorization) {
      headers["Authorization"] = `Bearer ${authorization}`;
    }

    const request: RequestInit = {
      method,
      credentials: "include",
      headers,
    };

    if (body && method !== "GET" && method !== "DELETE") {
      request.body = JSON.stringify(body);
    }

    const response = await fetch(api, request);
    return await response.json();
  } catch (error) {
    console.error(`UseFetch Error`, { api, method, error });
    throw error;
  }
};
