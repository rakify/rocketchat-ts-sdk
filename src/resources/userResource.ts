import { BaseResource } from "./baseResource";
import type {
  IChatWhoAmIResponse,
  IHeaders,
  IUserListQuery,
  IUserListByStatusResponse,
  IUserPresenceResponse,
  IUserInfoResponse,
  ResponsePromise,
  IUserSetAvatarRequest,
} from "../types";

class ChatUserResource extends BaseResource {
  /**
   * @description Gets a list of users with optional filtering and bulk retrieval
   * accepts query with optional filters, sorting, and field selection
   */
  userList(
    query?: IUserListQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/users.list${this.addQuery(query)}`;
    return this.client.request(
      "GET",
      path,
      {},
      {},
      customHeaders,
      false,
      signal,
    );
  }

  /**
   * @description Gets a list of users by their status with optional filtering and bulk retrieval
   * accepts query with optional filters, sorting, and field selection
   */
  userListByStatus(
    query?: IUserListQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IUserListByStatusResponse> {
    const path = `/users.listByStatus${this.addQuery(query)}`;
    return this.client.request<IUserListByStatusResponse>(
      "GET",
      path,
      {},
      {},
      customHeaders,
      false,
      signal,
    );
  }

  /**
   * @description Gets presence information for specified users
   * @param userIds Array of user IDs to get presence for
   */
  userPresence(
    userIds: string[],
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IUserPresenceResponse> {
    const idsArray = Array.isArray(userIds) ? userIds : [];
    const query = { ids: idsArray };
    const path = `/users.presence${this.addQuery(query)}`;
    return this.client.request<IUserPresenceResponse>(
      "GET",
      path,
      {},
      {},
      customHeaders,
      false,
      signal,
    );
  }

  chatWhoAmI(
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IChatWhoAmIResponse> {
    const path = `/me`;
    return this.client.request<IChatWhoAmIResponse>(
      "GET",
      path,
      {},
      {},
      customHeaders,
      false,
      signal,
    );
  }

  /**
   * @description Gets information about a specific user
   * @param userId The user ID to get information for
   * @param customHeaders Custom headers for the request
   * @param signal Abort signal for the request
   */
  userInfo(
    userId: string,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IUserInfoResponse> {
    const query = { userId };
    const path = `/users.info${this.addQuery(query)}`;
    return this.client.request<IUserInfoResponse>(
      "GET",
      path,
      {},
      {},
      customHeaders,
      false,
      signal,
    );
  }

  /**
   * @description Sets the avatar for a user. Can upload an image file or set via URL.
   * @param options Object containing avatarUrl or image file, and optionally userId or username
   * @param customHeaders Custom headers for the request
   */
  setAvatar(
    options: IUserSetAvatarRequest,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/users.setAvatar`;

    if (options.image) {
      // Use multipart form data for file upload
      const formData = new FormData();
      formData.append("image", options.image);
      if (options.userId) formData.append("userId", options.userId);
      if (options.username) formData.append("username", options.username);
      return this.client.request(
        "POST",
        path,
        formData,
        {},
        customHeaders,
        true,
        signal,
      );
    } else if (options.avatarUrl) {
      // Use JSON body for URL
      const data = {
        avatarUrl: options.avatarUrl,
        ...(options.userId && { userId: options.userId }),
        ...(options.username && { username: options.username }),
      };
      return this.client.request(
        "POST",
        path,
        data,
        {},
        customHeaders,
        false,
        signal,
      );
    } else {
      throw new Error("Either avatarUrl or image must be provided");
    }
  }
}

export default ChatUserResource;
