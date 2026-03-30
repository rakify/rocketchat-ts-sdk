import { BaseResource } from "./baseResource";
import type { IHeaders, ResponsePromise } from "../types";

class SubscriptionResource extends BaseResource {
  /**
   * @description Gets the room notification subscription details and the latest updates
   * accepts optional query with updatedSince
   */
  subscriptionsGet(
    query?: { updatedSince?: string },
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/subscriptions.get${this.addQuery(query)}`;
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
   * @description Marks a subscription as read, resetting the unread count
   * accepts payload with rid (room ID)
   */
  subscriptionsRead(
    payload: { rid: string },
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/subscriptions.read`;
    return this.client.request(
      "POST",
      path,
      payload,
      {},
      customHeaders,
      false,
      signal,
    );
  }
}

export default SubscriptionResource;
