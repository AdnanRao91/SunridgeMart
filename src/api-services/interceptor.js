// middleware/jwt.js
import axios from 'axios';
import { TokenStorage } from "@/utils"

const TOKEN_HEADER_KEY = 'Authorization';



const token = new TokenStorage; // Implement your token retrieval logic
// Create an Axios instance with a base URL for your API
const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    [TOKEN_HEADER_KEY]: token.getToken() ? `Bearer ${token.getToken()}` : '', // Add token to headers if it exists
  },
});

// Request interceptor
apiInstance.interceptors.request.use(
  (config) => {
    // You can modify the request configuration here (e.g., add headers, tokens, etc.)
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
)

// Response interceptor
apiInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data here (e.g., format, transform, etc.)
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status === 498) {
        // Handle token expiration
        token.clearStorage(res);
        window.location.href = 'login'
        return;
      } else if (status === 401 || status === 400) {
        // Handle unauthorized or bad request
        token.clearStorage(res);
        window.location.href = 'login'
        return;
      }
    }
  }
);

export default apiInstance;