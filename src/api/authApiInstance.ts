import axios from 'axios';

const authApiInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
  },
  withCredentials: true,
});

authApiInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default authApiInstance;
