import { MessageBlock } from "./blocks";
import { IUser } from "./messaging";

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

export interface IDmMessageSnippet {
  text: string;
  md: IMarkdownNode[];
  message_link: string;
  author_name: string;
  author_icon: string;
  attachments: (IDmMessageAttachment | IDmMessageSnippet)[];
  ts: IMongoDate;
}

export interface IDmMessage {
  _id: string;
  rid: string;
  msg: string;
  ts: IMongoDate | string; // Can be MongoDB date object or ISO string
  u: IUser;
  _updatedAt: IMongoDate | string; // Can be MongoDB date object or ISO string
  urls?: string[];
  mentions?: any[];
  channels?: any[];
  md?: IMarkdownNode[];
  editedAt?: IMongoDate | string;
  editedBy?: {
    _id: string;
    username: string;
  };
  blocks?: MessageBlock[];
  attachments?: (IDmMessageAttachment | IDmMessageSnippet)[];
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

//

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
