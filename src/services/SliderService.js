import { axiosInstance } from "../utils/api";
import { ALL_ENDPOINTS } from "../utils/endpoints";

export const fetchHeroSlider = async ({ page = 1, size = 10 }) => {
  return axiosInstance.get(ALL_ENDPOINTS.BUILD_HERO_SLIDER({ page, size }));
};
