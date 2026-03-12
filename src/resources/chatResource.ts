import { BaseResource } from "./baseResource";
import type {
  IChatDeletePayload,
  IChatFollowMessagePayload,
  IChatGetDeletedMessagesQuery,
  IChatGetDiscussionsQuery,
  IChatGetMentionedMessagesQuery,
  IChatGetMessageQuery,
  IChatGetMessageReadReceiptsQuery,
  IChatGetPinnedMessagesQuery,
  IChatGetStarredMessagesQuery,
  IChatGetThreadMessagesQuery,
  IChatGetThreadsListQuery,
  IChatGetURLPreviewQuery,
  IChatIgnoreUserQuery,
  IChatPinMessagePayload,
  IChatPostMessagePayload,
  IChatReactPayload,
  IChatReportMessagePayload,
  IChatSendMessagePayload,
  IChatStarMessagePayload,
  IChatSyncMessagesQuery,
  IChatSyncThreadMessagesQuery,
  IChatSyncThreadsListQuery,
  IChatUnPinMessagePayload,
  IChatUnStarMessagePayload,
  IChatUpdatePayload,
  IHeaders,
  ResponsePromise,
} from "../types";

// # Description:
// #   - **Chat**: Create and manage chat messages, threads, reactions, and message operations.

class ChatResource extends BaseResource {
  /**
   * @description Deletes a chat message,
   * accepts payload with roomId, msgId, and optional asUser
   */
  delete(
    payload: IChatDeletePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.delete`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Reacts to or unreacts from a chat message,
   * accepts payload with messageId, emoji or reaction, and shouldReact
   */
  react(
    payload: IChatReactPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.react`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Updates a chat message,
   * accepts payload with roomId, msgId, text, and optional previewUrls and customFields
   */
  update(
    payload: IChatUpdatePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.update`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Reports a chat message,
   * accepts payload with messageId and description
   */
  reportMessage(
    payload: IChatReportMessagePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.reportMessage`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Follows a message to receive notifications,
   * accepts payload with mid (message ID)
   */
  followMessage(
    payload: IChatFollowMessagePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.followMessage`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Gets a specific message,
   * accepts query with msgId
   */
  getMessage(
    query: IChatGetMessageQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getMessage${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets threads list in a room,
   * accepts query with rid and optional pagination/filtering params
   */
  getThreadsList(
    query: IChatGetThreadsListQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getThreadsList${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets deleted messages in a room,
   * accepts query with roomId, since date, and optional pagination params
   */
  getDeletedMessages(
    query: IChatGetDeletedMessagesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getDeletedMessages${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets discussions in a room,
   * accepts query with roomId and optional pagination/filtering params
   */
  getDiscussions(
    query: IChatGetDiscussionsQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getDiscussions${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets messages where user is mentioned,
   * accepts query with roomId and optional pagination params
   */
  getMentionedMessages(
    query: IChatGetMentionedMessagesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getMentionedMessages${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets read receipts for a message,
   * accepts query with messageId and optional pagination params
   */
  getMessageReadReceipts(
    query: IChatGetMessageReadReceiptsQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getMessageReadReceipts${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets pinned messages in a room,
   * accepts query with roomId and optional pagination params
   */
  getPinnedMessages(
    query: IChatGetPinnedMessagesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getPinnedMessages${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets starred messages in a room,
   * accepts query with roomId and optional pagination params
   */
  getStarredMessages(
    query: IChatGetStarredMessagesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getStarredMessages${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets messages in a thread,
   * accepts query with tmid and optional pagination/filtering params
   */
  getThreadMessages(
    query: IChatGetThreadMessagesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getThreadMessages${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Ignores or unignores a user in chat,
   * accepts query with rid, userId, and ignore flag
   */
  ignoreUser(
    query: IChatIgnoreUserQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.ignoreUser${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Pins a message to the channel,
   * accepts payload with messageId
   */
  pinMessage(
    payload: IChatPinMessagePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.pinMessage`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Unpins a message from the channel,
   * accepts payload with messageId
   */
  unPinMessage(
    payload: IChatUnPinMessagePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.unPinMessage`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Posts a message to a channel or user,
   * accepts payload with roomId or channel, text, and optional attachments, alias, etc.
   */
  postMessage(
    payload: IChatPostMessagePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.postMessage`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Sends a message with custom ID support,
   * accepts payload with message object and optional previewUrls
   */
  sendMessage(
    payload: IChatSendMessagePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.sendMessage`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Stars a message,
   * accepts payload with messageId
   */
  starMessage(
    payload: IChatStarMessagePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.starMessage`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Unstars a message,
   * accepts payload with messageId
   */
  unStarMessage(
    payload: IChatUnStarMessagePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.unStarMessage`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Syncs threads list with updates from a date,
   * accepts query with rid, updatedSince, and optional filtering params
   */
  syncThreadsList(
    query: IChatSyncThreadsListQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.syncThreadsList${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Syncs thread messages with updates from a date,
   * accepts query with updatedSince, tmid, and optional pagination/filtering params
   */
  syncThreadMessages(
    query: IChatSyncThreadMessagesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.syncThreadMessages${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Syncs messages in a room with updates,
   * accepts query with roomId and optional sync/pagination params
   */
  syncMessages(
    query: IChatSyncMessagesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.syncMessages${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets URL preview for messages,
   * accepts query with roomId and url
   */
  getURLPreview(
    query: IChatGetURLPreviewQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/chat.getURLPreview${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }
}

export default ChatResource;
