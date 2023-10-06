import apiInstance from "@/api-services/interceptor"

export async function post(url, payload) {
  try {
    const response = await apiInstance.post(`${url}`, payload);
    return response.data;
  } catch (error) {
    return error
  }
}

export async function get(url) {
  try {
    const response = await apiInstance.get(`${url}`, {});
    return response.data;
  } catch (error) {
    return error
    // throw error;
  }
}

export async function patch(url, payload) {
  try {
    const response = await apiInstance.put(`${url}`, payload);
    return response.data;
  } catch (error) {
    return error
  }
}

export async function deleteRequest(url, payload) {
  try {
    const response = await apiInstance.delete(`${url}`, { data: payload });
    return response.data;
  } catch (error) {
    return error
  }
}
