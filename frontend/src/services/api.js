import axios from "axios";

export const API_URL_AUTH = "http://localhost:5000/api/auth";

export const $axios = axios.create({
  withCredentials: true,
  baseURL: API_URL_AUTH,
});

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL_AUTH,
});

$axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

$axios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const { data } = await $api.get("/refresh");
        localStorage.setItem("accessToken", data.accessToken);
        return $axios.request(originalRequest);
      } catch (error) {
        console.log("Not authorized!");
        localStorage.removeItem("accessToken");
        window.location.href = "/sign-in";
      }
    }
    throw error;
  }
);
