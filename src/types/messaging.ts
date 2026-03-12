import { IDmMessage } from "./dm";
import { MessageBlock } from "./blocks";

export interface IChatDeletePayload {
  roomId: string;
  msgId: string;
  asUser?: boolean;
}

export interface IChatReactPayload {
  messageId: string;
  emoji?: string;
  reaction?: string;
  shouldReact: boolean;
}

export interface IChatUpdatePayload {
  roomId: string;
  msgId: string;
  text: string;
  previewUrls?: string[];
  customFields?: object;
}

export interface IChatReportMessagePayload {
  messageId: string;
  description: string;
}

export interface IChatFollowMessagePayload {
  mid: string;
}

export interface IChatGetMessageQuery {
  msgId: string;
}

export interface IChatGetThreadsListQuery {
  rid: string;
  offset?: number;
  count?: number;
  sort?: object;
  query?: object;
  fields?: object;
  type?: string;
  text?: string;
}

export interface IChatGetDeletedMessagesQuery {
  roomId: string;
  since: string;
  offset?: number;
  count?: number;
  sort?: object;
}

export interface IChatGetDiscussionsQuery {
  roomId: string;
  offset?: number;
  count?: number;
  sort?: object;
  text?: string;
}

export interface IChatGetMentionedMessagesQuery {
  roomId: string;
  offset?: number;
  count?: number;
  sort?: object;
}

export interface IChatGetMessageReadReceiptsQuery {
  messageId: string;
  offset?: number;
  count?: number;
}

export interface IChatGetPinnedMessagesQuery {
  roomId: string;
  offset?: number;
  count?: number;
  sort?: object;
}

export interface IChatGetStarredMessagesQuery {
  roomId: string;
  offset?: number;
  count?: number;
  sort?: object;
}

export interface IChatGetThreadMessagesQuery {
  tmid: string;
  offset?: number;
  count?: number;
  sort?: object;
  query?: object;
  fields?: object;
}

export interface IChatIgnoreUserQuery {
  rid: string;
  userId: string;
  ignore: boolean;
}

export interface IChatPinMessagePayload {
  messageId: string;
}

export interface IChatUnPinMessagePayload {
  messageId: string;
}

export interface IChatPostMessagePayload {
  roomId?: string;
  channel?: string;
  text?: string;
  alias?: string;
  avatar?: string;
  emoji?: string;
  attachments?: object[];
  tmid?: string;
  customFields?: object;
  parseUrls?: boolean;
}

export interface IChatSendMessagePayload {
  message: {
    rid: string;
    msg?: string;
    alias?: string;
    avatar?: string;
    emoji?: string;
    attachments?: object[];
    tmid?: string;
    tshow?: boolean;
    blocks?: object[];
    customFields?: object;
  };
  previewUrls?: string[];
}

export interface IChatStarMessagePayload {
  messageId: string;
}

export interface IChatUnStarMessagePayload {
  messageId: string;
}

export interface IChatSyncThreadsListQuery {
  rid: string;
  updatedSince: string;
  fields?: object;
  query?: object;
  sort?: object;
}

export interface IChatSyncThreadMessagesQuery {
  updatedSince: string;
  tmid: string;
  offset?: number;
  count?: number;
  sort?: object;
  query?: object;
  fields?: object;
}

export interface IChatSyncMessagesQuery {
  roomId: string;
  lastUpdate?: string;
  next?: number;
  previous?: number;
  type?: string;
  offset?: number;
  count?: number;
  sort?: object;
}

export interface IChatGetURLPreviewQuery {
  roomId: string;
  url: string;
}

export interface IChatMethodCallPayload {
  message: string;
}

export interface IUser {
  _id: string;
  username: string;
  name?: string;
}

export interface IRocketChatMethodCallResponse {
  msg: string;
  id: string;
  result: {
    messages: IDmMessage[];
    unreadNotLoaded: number;
  };
}

export interface ILoadHistoryAPIResponse {
  message: string;
  success: boolean;
}
