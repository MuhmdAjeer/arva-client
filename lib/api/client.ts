import axios, { AxiosInstance } from "axios";

export abstract class APIService {
  protected baseURL: string;
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = "http://localhost:5000/api") {
    this.baseURL = baseURL;
    this.axiosInstance = axios.create({
      baseURL,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(async (config: any) => {
      // TODO: Get session
      //   const session = await getSession();
      config.headers = {
        ...config.headers,
        // authorization: `Bearer ${session?.access_token}`,
      };
      return config;
    });
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        // TODO: handle auth and other errors
      }
    );
  }

  get(url: string, params = {}) {
    return this.axiosInstance.get(url, params);
  }

  post(url: string, data = {}, config = {}) {
    return this.axiosInstance.post(url, data, config);
  }

  put(url: string, data = {}, config = {}) {
    return this.axiosInstance.put(url, data, config);
  }

  patch(url: string, data = {}, config = {}) {
    return this.axiosInstance.patch(url, data, config);
  }

  delete(url: string, data?: any, config = {}) {
    return this.axiosInstance.delete(url, { data, ...config });
  }

  request(config = {}) {
    return this.axiosInstance(config);
  }
}
