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

export interface IDmClosePayload {
  roomId: string;
}

export interface IDmCountersQuery {
  roomId: string;
  userId?: string;
}

export interface IDmCreatePayload {
  username?: string;
  usernames?: string;
  excludeSelf?: boolean;
}

export interface IDmCreateResponse {
  room: {
    t: string;
    rid: string;
    usernames: string[];
    _id: string;
  };
  success: boolean;
}

export interface IDmDeletePayload {
  roomId?: string;
  username?: string;
}

export interface IDmFilesQuery {
  roomId?: string;
  username?: string;
  offset?: number;
  count?: number;
  sort?: object;
  query?: object;
  fields?: object;
}

export interface IDmHistoryQuery {
  roomId?: string;
  username?: string;
  offset?: number;
  count?: number;
  inclusive?: boolean;
  unreads?: boolean;
  showThreadMessages?: boolean;
  oldest?: string;
  latest?: string;
}

export interface IDmListEveryoneQuery {
  offset?: number;
  count?: number;
  sort?: object;
  query?: object;
  fields?: object;
}

export interface IDmMembersQuery {
  roomId?: string;
  username?: string;
  offset?: number;
  count?: number;
}

export interface IDmMessagesQuery {
  roomId?: string;
  username?: string;
  offset?: number;
  count?: number;
  fields?: object;
  query?: object;
  mentionIds?: string;
  starredIds?: string;
  pinned?: string;
  sort?: object;
}

export interface IDmMessagesOthersQuery {
  roomId: string;
  offset?: number;
  count?: number;
  sort?: object;
  query?: object;
  fields?: object;
}

export interface IDmOpenPayload {
  roomId: string;
}

export interface IDmSetTopicPayload {
  roomId: string;
  topic: string;
}

export interface IUser {
  _id: string;
  username: string;
  name?: string;
}

export interface IMarkdownNode {
  type: string;
  value: IMarkdownNode[] | string;
}

export interface IMongoDate {
  $date: number;
}

export interface IDmMessageAttachment {
  _id: string;
  audio_url?: string;
  author_icon: string;
  author_name: string;
  image_url?: string;
  thumb_url?: string;
  title: string;
  title_link: string;
  title_link_download: boolean;
  ts: string;
  video_url?: string;
}

export interface IDmMessage {
  _id: string;
  rid: string;
  msg: string;
  ts: IMongoDate | string;
  u: IUser;
  _updatedAt: IMongoDate | string;
  urls?: string[];
  mentions?: any[];
  channels?: any[];
  md?: IMarkdownNode[];
  editedAt?: IMongoDate | string;
  editedBy?: {
    _id: string;
    username: string;
  };
  blocks?: object[];
  attachments?: IDmMessageAttachment[];
  file?: any;
  files?: any[];
}

export interface IDmMessagesResponse {
  messages: IDmMessage[];
  count: number;
  offset: number;
  total: number;
  success: boolean;
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
