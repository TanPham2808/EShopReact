import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

// Base URL
axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (responseBody: AxiosResponse) => responseBody.data;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status, statusText } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateError: string[] = []; // Khởi tạo mảng
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateError.push(data.errors[key]);
            }
          }
          throw modelStateError.flat(); // Quăng throw ra trên Console
        }
        toast.error(statusText);
        break;
      case 404:
        toast.error(statusText);
        break;
      case 401:
        toast.error(statusText);
        break;
      case 500:
        router.navigate("/server-error", { state: { error: data } });
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
  TestNotFound: () => requests.get("/Buggy/not-found"),
  TestValidation: () => requests.get("/Buggy/validation-error"),
  TestServerError: () => requests.get("/Buggy/server-error"),
};

const agent = { Catalog, TestError };

export default agent;
