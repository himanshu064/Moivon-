import { axiosInstance } from "../utils/api";
import { ALL_ENDPOINTS } from "../utils/endpoints";

export const fetchAllEvent = async () => {
  return axiosInstance.get(ALL_ENDPOINTS.BUILD_ALL_EVENTS());
};

export const fetchSingleEvent = async ({ eventId }) => {
  return axiosInstance.get(ALL_ENDPOINTS.BUILD_SINGLE_EVENT({ eventId }));
};
