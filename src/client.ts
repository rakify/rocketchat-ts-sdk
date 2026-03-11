import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { RocketChatConfig, RocketChatResponse } from "./types";

export class RocketChatClient {
  private api: AxiosInstance;
  private config: RocketChatConfig;

  constructor(config: RocketChatConfig) {
    this.config = config;
    this.api = axios.create({
      baseURL: `${config.baseUrl}/api/v1`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Add auth interceptor
    this.api.interceptors.request.use((requestConfig) => {
      if (this.config.userId && this.config.authToken) {
        requestConfig.headers["X-Auth-Token"] = this.config.authToken;
        requestConfig.headers["X-User-Id"] = this.config.userId;
      }
      return requestConfig;
    });
  }

  async login(
    username?: string,
    password?: string,
  ): Promise<
    RocketChatResponse<{ authToken: string; userId: string; me: any }>
  > {
    try {
      const credentials = {
        user: username || this.config.username,
        password: password || this.config.password,
      };

      const response = await this.api.post("/login", credentials);

      if (response.data.status === "success") {
        this.config.authToken = response.data.data.authToken;
        this.config.userId = response.data.data.userId;

        return {
          success: true,
          data: response.data.data,
        };
      }

      return {
        success: false,
        error: "Login failed",
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.error || error.message,
      };
    }
  }

  async logout(): Promise<RocketChatResponse> {
    try {
      await this.api.post("/logout");
      this.config.authToken = undefined;
      this.config.userId = undefined;

      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.error || error.message,
      };
    }
  }

  async get<T = any>(
    endpoint: string,
    params?: Record<string, any>,
  ): Promise<RocketChatResponse<T>> {
    try {
      const response = await this.api.get(endpoint, { params });
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.error || error.message,
      };
    }
  }

  async post<T = any>(
    endpoint: string,
    data?: any,
  ): Promise<RocketChatResponse<T>> {
    try {
      const response = await this.api.post(endpoint, data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.error || error.message,
      };
    }
  }

  async put<T = any>(
    endpoint: string,
    data?: any,
  ): Promise<RocketChatResponse<T>> {
    try {
      const response = await this.api.put(endpoint, data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.error || error.message,
      };
    }
  }

  async delete<T = any>(endpoint: string): Promise<RocketChatResponse<T>> {
    try {
      const response = await this.api.delete(endpoint);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.error || error.message,
      };
    }
  }
}
