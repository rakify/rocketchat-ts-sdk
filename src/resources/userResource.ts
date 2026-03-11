import { RocketChatClient } from "../client";
import { RocketChatResponse, User } from "../types";

export class UserResource {
  constructor(private client: RocketChatClient) {}

  /**
   * Create a new user
   */
  async create(
    username: string,
    email: string,
    password: string,
    name: string,
    active = true,
    roles = ["user"],
    joinDefaultChannels = true,
    requirePasswordChange = false,
  ): Promise<RocketChatResponse<{ user: User }>> {
    return this.client.post("/users.create", {
      username,
      email,
      password,
      name,
      active,
      roles,
      joinDefaultChannels,
      requirePasswordChange,
    });
  }

  /**
   * Get user information
   */
  async info(
    userId?: string,
    username?: string,
  ): Promise<RocketChatResponse<{ user: User }>> {
    const params: any = {};
    if (userId) params.userId = userId;
    if (username) params.username = username;

    return this.client.get("/users.info", params);
  }

  /**
   * List all users
   */
  async list(
    offset = 0,
    count = 50,
    sort?: Record<string, number>,
    fields?: Record<string, number>,
    query?: Record<string, any>,
  ): Promise<RocketChatResponse<{ users: User[] }>> {
    const params: any = {
      offset,
      count,
    };
    if (sort) params.sort = JSON.stringify(sort);
    if (fields) params.fields = JSON.stringify(fields);
    if (query) params.query = JSON.stringify(query);

    return this.client.get("/users.list", params);
  }

  /**
   * Update user
   */
  async update(
    userId: string,
    data: Partial<User>,
  ): Promise<RocketChatResponse<{ user: User }>> {
    return this.client.post("/users.update", {
      userId,
      data,
    });
  }

  /**
   * Delete user
   */
  async delete(
    userId: string,
    confirmRelinquish = false,
  ): Promise<RocketChatResponse> {
    return this.client.post("/users.delete", {
      userId,
      confirmRelinquish,
    });
  }

  /**
   * Deactivate user
   */
  async deactivate(
    userId: string,
    confirmRelinquish = false,
  ): Promise<RocketChatResponse> {
    return this.client.post("/users.deactivate", {
      userId,
      confirmRelinquish,
    });
  }

  /**
   * Get user's own info
   */
  async getMe(): Promise<RocketChatResponse<User>> {
    return this.client.get("/me");
  }

  /**
   * Get user preferences
   */
  async getPreferences(
    userId?: string,
  ): Promise<RocketChatResponse<{ preferences: Record<string, any> }>> {
    const params: any = {};
    if (userId) params.userId = userId;

    return this.client.get("/users.getPreferences", params);
  }

  /**
   * Set user preferences
   */
  async setPreferences(
    userId: string,
    preferences: Record<string, any>,
  ): Promise<RocketChatResponse<{ user: User }>> {
    return this.client.post("/users.setPreferences", {
      userId,
      preferences,
    });
  }

  /**
   * Set user status
   */
  async setStatus(
    message?: string,
    status?: "online" | "away" | "busy" | "offline",
  ): Promise<RocketChatResponse> {
    return this.client.post("/users.setStatus", {
      message,
      status,
    });
  }

  /**
   * Get user status
   */
  async getStatus(
    userId?: string,
    username?: string,
  ): Promise<
    RocketChatResponse<{
      message: string;
      connectionStatus: string;
      status: string;
    }>
  > {
    const params: any = {};
    if (userId) params.userId = userId;
    if (username) params.username = username;

    return this.client.get("/users.getStatus", params);
  }

  /**
   * Set user avatar
   */
  async setAvatar(
    userId: string,
    avatarUrl?: string,
    username?: string,
  ): Promise<RocketChatResponse> {
    const data: any = { userId };
    if (avatarUrl) data.avatarUrl = avatarUrl;
    if (username) data.username = username;

    return this.client.post("/users.setAvatar", data);
  }

  /**
   * Reset user avatar
   */
  async resetAvatar(
    userId: string,
    username?: string,
  ): Promise<RocketChatResponse> {
    const data: any = { userId };
    if (username) data.username = username;

    return this.client.post("/users.resetAvatar", data);
  }

  /**
   * Create user auth token
   */
  async createToken(
    userId?: string,
    username?: string,
  ): Promise<RocketChatResponse<{ authToken: string; userId: string }>> {
    const data: any = {};
    if (userId) data.userId = userId;
    if (username) data.username = username;

    return this.client.post("/users.createToken", data);
  }

  /**
   * Get user presence
   */
  async getPresence(
    userId?: string,
    username?: string,
  ): Promise<
    RocketChatResponse<{
      presence: string;
      connectionStatus: string;
      lastLogin: Date;
    }>
  > {
    const params: any = {};
    if (userId) params.userId = userId;
    if (username) params.username = username;

    return this.client.get("/users.getPresence", params);
  }

  /**
   * Forgot password
   */
  async forgotPassword(email: string): Promise<RocketChatResponse> {
    return this.client.post("/users.forgotPassword", {
      email,
    });
  }

  /**
   * Register user
   */
  async register(
    username: string,
    email: string,
    password: string,
    name: string,
    secretURL?: string,
  ): Promise<RocketChatResponse<{ user: User }>> {
    return this.client.post("/users.register", {
      username,
      email,
      password,
      name,
      secretURL,
    });
  }

  /**
   * Request data download
   */
  async requestDataDownload(
    fullExport = false,
  ): Promise<RocketChatResponse<{ requested: Date; exportId: string }>> {
    return this.client.get("/users.requestDataDownload", {
      fullExport,
    });
  }
}
