import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { env } from "@shared/config/env";
import type { ApiResponse } from "@shared/model";

// export type ApiError = {
//   status: number;
//   code: string;
//   message: string;
//   error?: unknown;
// };

const buildError = (error: AxiosError): ApiResponse<object> => {
  const data = error.response?.data as ApiResponse<object>;

  if (data) return data;

  return {
    message: error.message,
    success: false,
    statusCode: error.response?.status || 500,
    timestamp: new Date(),
    error: {
      code: "UNKNOWN_ERROR",
      message: "An unknown error occurred",
      details: {},
      rowErrors: {},
    },
  };
};

const onRequest = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers["x-app-env"] = env.ENV;
  return config;
};

export const http = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(onRequest);

http.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(buildError(error)),
);
