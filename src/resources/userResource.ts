import { BaseResource } from "./baseResource";
import type {
  IHeaders,
  IUserListQuery,
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
  ): ResponsePromise {
    const path = `/users.list${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets a list of users by their status with optional filtering and bulk retrieval
   * accepts query with optional filters, sorting, and field selection
   */
  userListByStatus(
    query?: IUserListQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/users.listByStatus${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets presence information for specified users
   * @param userIds Array of user IDs to get presence for
   */
  userPresence(
    userIds: string[],
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const idsArray = Array.isArray(userIds) ? userIds : [];
    const query = { ids: idsArray };
    const path = `/users.presence${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  chatWhoAmI(customHeaders: IHeaders = {}): ResponsePromise {
    const path = `/me`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Sets the avatar for a user. Can upload an image file or set via URL.
   * @param options Object containing avatarUrl or image file, and optionally userId or username
   * @param customHeaders Custom headers for the request
   */
  setAvatar(
    options: IUserSetAvatarRequest,
    customHeaders: IHeaders = {},
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
      );
    } else if (options.avatarUrl) {
      // Use JSON body for URL
      const data = {
        avatarUrl: options.avatarUrl,
        ...(options.userId && { userId: options.userId }),
        ...(options.username && { username: options.username }),
      };
      return this.client.request("POST", path, data, {}, customHeaders);
    } else {
      throw new Error("Either avatarUrl or image must be provided");
    }
  }
}

export default ChatUserResource;
