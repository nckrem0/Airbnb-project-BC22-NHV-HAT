import axios, { AxiosError } from "axios";
import store from "store";
const axiosClient = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn/api",
  headers: {
    tokenByClass:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMiIsIkhldEhhblN0cmluZyI6IjMwLzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2OTc2NjQwMDAwMCIsIm5iZiI6MTY0MTgzNDAwMCwiZXhwIjoxNjY5OTE0MDAwfQ.mTJaYLlwFuAG-SiC8fUlH-taW8wV0VAASxdCPf54RX8",
  },
});

// setup response interceptor
interface ErrorResponse {
  content: string;
}
axiosClient.interceptors.response.use(
  (response) => {
    // call api thành công, ta có thể modify response trước khi trả ra cho nơi gọi api request
    // response.data (format của axios) .content là ( format do backend thiết kế)
    return response.data;
  },
  (error: AxiosError<ErrorResponse>) => {
    Promise.reject(error.response?.data);
  }
);

// setup request interceptor
axiosClient.interceptors.request.use((config) => {
  if (config.headers) {
    const { accessToken } = store.getState().auth.currentUser;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});
export default axiosClient;
