import axios from 'axios';

const itemApiInstance = axios.create({
  baseURL: import.meta.env.VITE_ITEM_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420',
    accept: '*/*',
  },
});

itemApiInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
export default itemApiInstance;
