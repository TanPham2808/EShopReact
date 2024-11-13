import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

// Base URL
axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (responseBody: AxiosResponse) => responseBody.data;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { status, statusText } = error.response as AxiosResponse;
    switch (status) {
      case 404:
        toast.error(statusText);
        break;
      case 401:
        toast.error(statusText);
        break;
      case 500:
        toast.error(statusText);
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
  list: () => requests.get("product"),
  detail: (id: number) => requests.get(`product/${id}`),
};

const TestError = {
  testErrorServer: () => requests.get("TestError"),
};

const agent = { Catalog, TestError };

export default agent;
