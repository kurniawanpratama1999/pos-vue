import { axiosOrigin } from "../store/axiosOrigin";
import { useDataStore } from "../store/data";

export const authenticate = async (): Promise<boolean> => {
  const dataStore = useDataStore();
  try {
    const getAuth = await axiosOrigin.get("/auth/me");
    if (getAuth.status !== 200) {
      return false;
    }

    const { data } = getAuth.data;
    dataStore.setMe(data);
    return true;
  } catch (error) {
    return false;
  }
};
