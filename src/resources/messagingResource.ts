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
  IDmClosePayload,
  IDmCountersQuery,
  IDmCreatePayload,
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
// #   - **Chat**: Create and manage chat [messages](https://docs.rocket.chat/use-rocket.chat/user-guides/messages/message-actions).
// #   - **DM**: Create and manage direct messages. The DM (dm.*) and IM (im.*) endpoint groups provide identical functionality.
// #     For example, im.close and dm.close execute the same operation.

class MessagingResource extends BaseResource {
  // Chat endpoints
  /**
   * @description Deletes a chat message,
   * accepts payload with roomId, msgId, and optional asUser
   */
  delete(
    payload: IChatDeletePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.delete`;
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
   * @description Reacts to or unreacts from a chat message,
   * accepts payload with messageId, emoji or reaction, and shouldReact
   */
  react(
    payload: IChatReactPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.react`;
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
   * @description Updates a chat message,
   * accepts payload with roomId, msgId, text, and optional previewUrls and customFields
   */
  update(
    payload: IChatUpdatePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.update`;
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
   * @description Reports a chat message,
   * accepts payload with messageId and description
   */
  reportMessage(
    payload: IChatReportMessagePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.reportMessage`;
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
   * @description Follows a message to receive notifications,
   * accepts payload with mid (message ID)
   */
  followMessage(
    payload: IChatFollowMessagePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.followMessage`;
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
   * @description Gets a specific message,
   * accepts query with msgId
   */
  getMessage(
    query: IChatGetMessageQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getMessage${this.addQuery(query)}`;
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
   * @description Gets threads list in a room,
   * accepts query with rid and optional pagination/filtering params
   */
  getThreadsList(
    query: IChatGetThreadsListQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getThreadsList${this.addQuery(query)}`;
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
   * @description Gets deleted messages in a room,
   * accepts query with roomId, since date, and optional pagination params
   */
  getDeletedMessages(
    query: IChatGetDeletedMessagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getDeletedMessages${this.addQuery(query)}`;
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
   * @description Gets discussions in a room,
   * accepts query with roomId and optional pagination/filtering params
   */
  getDiscussions(
    query: IChatGetDiscussionsQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getDiscussions${this.addQuery(query)}`;
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
   * @description Gets messages where user is mentioned,
   * accepts query with roomId and optional pagination params
   */
  getMentionedMessages(
    query: IChatGetMentionedMessagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getMentionedMessages${this.addQuery(query)}`;
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
   * @description Gets read receipts for a message,
   * accepts query with messageId and optional pagination params
   */
  getMessageReadReceipts(
    query: IChatGetMessageReadReceiptsQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getMessageReadReceipts${this.addQuery(query)}`;
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
   * @description Gets pinned messages in a room,
   * accepts query with roomId and optional pagination params
   */
  getPinnedMessages(
    query: IChatGetPinnedMessagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getPinnedMessages${this.addQuery(query)}`;
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
   * @description Gets starred messages in a room,
   * accepts query with roomId and optional pagination params
   */
  getStarredMessages(
    query: IChatGetStarredMessagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getStarredMessages${this.addQuery(query)}`;
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
   * @description Gets messages in a thread,
   * accepts query with tmid and optional pagination/filtering params
   */
  getThreadMessages(
    query: IChatGetThreadMessagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getThreadMessages${this.addQuery(query)}`;
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
   * @description Ignores or unignores a user in chat,
   * accepts query with rid, userId, and ignore flag
   */
  ignoreUser(
    query: IChatIgnoreUserQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.ignoreUser${this.addQuery(query)}`;
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
   * @description Pins a message to the channel,
   * accepts payload with messageId
   */
  pinMessage(
    payload: IChatPinMessagePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.pinMessage`;
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
   * @description Unpins a message from the channel,
   * accepts payload with messageId
   */
  unPinMessage(
    payload: IChatUnPinMessagePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.unPinMessage`;
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
   * @description Posts a message to a channel or user,
   * accepts payload with roomId or channel, text, and optional attachments, alias, etc.
   */
  postMessage(
    payload: IChatPostMessagePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.postMessage`;
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
   * @description Sends a message with custom ID support,
   * accepts payload with message object and optional previewUrls
   */
  sendMessage(
    payload: IChatSendMessagePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.sendMessage`;
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
   * @description Stars a message,
   * accepts payload with messageId
   */
  starMessage(
    payload: IChatStarMessagePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.starMessage`;
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
   * @description Unstars a message,
   * accepts payload with messageId
   */
  unStarMessage(
    payload: IChatUnStarMessagePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.unStarMessage`;
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
   * @description Syncs threads list with updates from a date,
   * accepts query with rid, updatedSince, and optional filtering params
   */
  syncThreadsList(
    query: IChatSyncThreadsListQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.syncThreadsList${this.addQuery(query)}`;
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
   * @description Syncs thread messages with updates from a date,
   * accepts query with updatedSince, tmid, and optional pagination/filtering params
   */
  syncThreadMessages(
    query: IChatSyncThreadMessagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.syncThreadMessages${this.addQuery(query)}`;
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
   * @description Syncs messages in a room with updates,
   * accepts query with roomId and optional sync/pagination params
   */
  syncMessages(
    query: IChatSyncMessagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.syncMessages${this.addQuery(query)}`;
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
   * @description Gets URL preview for messages,
   * accepts query with roomId and url
   */
  getURLPreview(
    query: IChatGetURLPreviewQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/chat.getURLPreview${this.addQuery(query)}`;
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

  // DM endpoints
  /**
   * @description Closes a direct message,
   * accepts payload with roomId
   */
  dmClose(
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
  dmCounters(
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
  dmCreate(
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
   * @description Deletes a direct message,
   * accepts payload with roomId or username
   */
  dmDelete(
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
  dmFiles(
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
  dmHistory(
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
  dmListEveryone(
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
  dmMembers(
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
  dmMessages(
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
  dmMessagesOthers(
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
  dmOpen(
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
  dmSetTopic(
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

export default MessagingResource;
