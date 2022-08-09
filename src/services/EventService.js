import { axiosInstance } from "../utils/api";
import { HEADERS } from "../utils/constants";
import { ALL_ENDPOINTS } from "../utils/endpoints";

export const fetchAllEvent = async ({ page, perPage }) => {
  return axiosInstance.get(ALL_ENDPOINTS.BUILD_ALL_EVENTS({ page, perPage }));
};

export const fetchSingleEvent = async ({ eventId }) => {
  return axiosInstance.get(ALL_ENDPOINTS.BUILD_SINGLE_EVENT({ eventId }));
};

export const fetchRelatedEvents = async () => {
  return axiosInstance.get(ALL_ENDPOINTS.BUILD_RELATED_EVENTS());
};

export const createPublicEvent = ({ images, json_data }) => {
  const formData = new FormData();
  // append multiple images
  images.forEach((image) => formData.append("image", image));

  Object.entries(json_data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return axiosInstance.post(
    ALL_ENDPOINTS.BUILD_POST_NEW_EVENT(),
    formData,
    HEADERS.formData
  );
};
