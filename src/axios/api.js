import axios from 'axios';

const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://stage.skylink.net.in:8000/api', // Set your API base URL
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

// You can add request or response interceptors here
axiosApi.interceptors.request.use(
  (config) => {
    // Modify request config before sending (e.g., add auth token)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => {
    // Process successful responses
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default axiosApi;
