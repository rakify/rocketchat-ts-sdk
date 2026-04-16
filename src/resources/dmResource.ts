import { BaseResource } from "./baseResource";
import type {
  IDmClosePayload,
  IDmCountersQuery,
  IDmCreateCachedQuery,
  IDmCreatePayload,
  IDmCreateResponse,
  IDmDeletePayload,
  IDmFilesQuery,
  IDmHistoryQuery,
  IDmListEveryoneQuery,
  IDmMembersQuery,
  IDmMessagesOthersQuery,
  IDmMessagesQuery,
  IDmOpenPayload,
  IDmSetTopicPayload,
  IHeaders,
  ResponsePromise,
} from "../types";

// # Description:
// #   - **DM**: Create and manage direct messages. The DM (dm.*) and IM (im.*) endpoint groups provide identical functionality.
// #     For example, im.close and dm.close execute the same operation.

class DmResource extends BaseResource {
  /**
   * @description Closes a direct message,
   * accepts payload with roomId
   */
  close(
    payload: IDmClosePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.close`;
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

  /**
   * @description Gets counters and information for a DM,
   * accepts query with roomId and optional userId
   */
  counters(
    query: IDmCountersQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.counters${this.addQuery(query)}`;
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
   * @description Creates a direct message session,
   * accepts payload with username, usernames, or excludeSelf
   */
  create(
    payload: IDmCreatePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.create`;
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

  /**
   * @description Creates a cached direct message session,
   * accepts query with username
   */
  createCached(
    query: IDmCreateCachedQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IDmCreateResponse> {
    const path = `/dm.create.cached${this.addQuery(query)}`;
    return this.client.request<IDmCreateResponse>(
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
   * @description Deletes a direct message,
   * accepts payload with roomId or username
   */
  delete(
    payload: IDmDeletePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.delete`;
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

  /**
   * @description Gets files in a DM,
   * accepts query with roomId or username and optional pagination/filtering params
   */
  files(
    query: IDmFilesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.files${this.addQuery(query)}`;
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
   * @description Gets message history from a DM,
   * accepts query with roomId or username and optional pagination/filtering params
   */
  history(
    query: IDmHistoryQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.history${this.addQuery(query)}`;
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
   * @description Lists all DMs in the workspace (admin permission required),
   * accepts query with optional pagination/filtering params
   */
  listEveryone(
    query: IDmListEveryoneQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.list.everyone${this.addQuery(query)}`;
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
   * @description Gets members of a DM,
   * accepts query with roomId or username and optional pagination params
   */
  members(
    query: IDmMembersQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.members${this.addQuery(query)}`;
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
   * @description Gets messages in a DM,
   * accepts query with roomId or username and optional filtering/pagination params
   */
  messages(
    query: IDmMessagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.messages${this.addQuery(query)}`;
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
   * @description Gets messages in a DM from others' perspective (admin permission required),
   * accepts query with roomId and optional pagination/filtering params
   */
  messagesOthers(
    query: IDmMessagesOthersQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.messages.others${this.addQuery(query)}`;
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
   * @description Opens a direct message,
   * accepts payload with roomId
   */
  open(
    payload: IDmOpenPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.open`;
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

  /**
   * @description Sets the topic of a DM,
   * accepts payload with roomId and topic
   */
  setTopic(
    payload: IDmSetTopicPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/dm.setTopic`;
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

export default DmResource;
