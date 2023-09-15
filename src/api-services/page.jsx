// ResourceService.js
import axios from 'axios';

const apiUrl = "http://172.16.20.91/api/"; // Define your API URL in your environment variables.

export async function post(url, payload) {
  try {
    const response = await axios.post(`${apiUrl}${url}`, payload);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function get(url, params) {
  try {
    const response = await axios.get(`${apiUrl}${url}`, { params });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function patch(url, payload) {
  try {
    const response = await axios.put(`${apiUrl}${url}`, payload);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function deleteRequest(url, payload) {
  try {
    const response = await axios.delete(`${apiUrl}${url}/${payload}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
