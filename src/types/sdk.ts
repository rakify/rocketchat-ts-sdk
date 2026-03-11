export interface RocketChatConfig {
  baseUrl: string;
  userId?: string;
  authToken?: string;
  username?: string;
  password?: string;
}

export interface RocketChatResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  errorType?: string;
}

export type ResponsePromise = Promise<RocketChatResponse<any>>;
export type IHeaders = Record<string, string>;
