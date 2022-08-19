import { axiosInstance } from "../utils/api";
import { ALL_ENDPOINTS } from "../utils/endpoints";

export const fetchAllGenres = () => {
  return axiosInstance.get(ALL_ENDPOINTS.BUILD_FETCH_ALL_GENRES());
};
