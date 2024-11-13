import axios, { AxiosError, AxiosResponse } from "axios";

// Base URL
axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (responseBody: AxiosResponse) => responseBody.data;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
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

const agent = { Catalog };

export default agent;
