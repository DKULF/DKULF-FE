import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import { HTTPError } from '@/api/HttpError';

const TIMEOUT = 30000;

export interface AxiosErrorResponse {
  status: number;
  httpStatus?: string;
  message?: string;
}

const authApiInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL || 'http://13.209.97.233:8079/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: TIMEOUT,
});

const itemApiInstance = axios.create({
  baseURL:
    import.meta.env.VITE_ITEM_API_URL ||
    'https://7693-220-149-255-6.ngrok-free.app/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: TIMEOUT,
});

const configureInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = localStorage.getItem('accessToken');
      const newConfig = { ...config };

      if (newConfig.url?.includes('upload')) {
        newConfig.headers['Content-Type'] = 'multipart/form-data';
      }

      if (accessToken) {
        newConfig.headers.Authorization = `Bearer ${accessToken}`;
      }

      return newConfig;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<AxiosErrorResponse>) => {
      const originalRequest = error.config;
      if (!error.response || !originalRequest) throw error;

      const { data, status } = error.response;
      throw new HTTPError(status, data.httpStatus, data.message);
    },
  );
};

configureInterceptors(authApiInstance);
configureInterceptors(itemApiInstance);

export { authApiInstance, itemApiInstance };
