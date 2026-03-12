import { BaseResource } from "./baseResource";
import type { IHeaders, IUserListQuery, ResponsePromise } from "../types";

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
}

export default ChatUserResource;
