import { axiosInstance } from "../utils/api";
import { HEADERS } from "../utils/constants";
import { ALL_ENDPOINTS } from "../utils/endpoints";

export const postQuery = (data) => {
  return axiosInstance.post(
    ALL_ENDPOINTS.BUILD_POST_QUERY(),
    data,
    HEADERS.formData
  );
};
