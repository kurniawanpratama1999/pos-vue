import { useMeStore } from "../store/useMeStore";
import { axiosOrigin } from "../utils/useAxiosOrigin";

export const authenticate = async (): Promise<boolean> => {
  try {
    const getAuth = await axiosOrigin.get("/auth/me");
    if (getAuth.status !== 200) {
      return false;
    }

    useMeStore.value = getAuth.data.data;
    return true;
  } catch (error) {
    return false;
  }
};
