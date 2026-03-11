export interface RocketChatConfig {
  baseUrl: string;
  userId?: string;
  authToken?: string;
  username?: string;
  password?: string;
}

export interface RocketChatResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  errorType?: string;
}

export interface User {
  _id: string;
  username: string;
  name?: string;
  emails?: Array<{
    address: string;
    verified: boolean;
  }>;
  status?: string;
  statusConnection?: string;
  utcOffset?: number;
  active: boolean;
  roles: string[];
  settings?: Record<string, any>;
}

export interface Room {
  _id: string;
  name?: string;
  fname?: string;
  t: "c" | "p" | "d" | "l";
  msgs: number;
  usersCount?: number;
  u: {
    _id: string;
    username: string;
  };
  ts: Date;
  ro: boolean;
  sysMes?: boolean;
  _updatedAt: Date;
}

export interface Channel extends Room {
  t: "c";
  default?: boolean;
  featured?: boolean;
}

export interface Group extends Room {
  t: "p";
}

export interface DirectMessage extends Room {
  t: "d";
  usernames?: string[];
}

export interface Message {
  _id: string;
  rid: string;
  msg: string;
  ts: Date;
  u: {
    _id: string;
    username: string;
    name?: string;
  };
  _updatedAt: Date;
  mentions?: Array<{
    _id: string;
    username: string;
    name?: string;
  }>;
  channels?: Array<{
    _id: string;
    name: string;
  }>;
  reactions?: Record<
    string,
    {
      usernames: string[];
    }
  >;
  attachments?: Array<{
    title?: string;
    description?: string;
    text?: string;
    color?: string;
    image_url?: string;
    thumb_url?: string;
  }>;
}

export interface Subscription {
  _id: string;
  open: boolean;
  alert: boolean;
  unread: number;
  userMentions: number;
  groupMentions: number;
  ts: Date;
  rid: string;
  name: string;
  fname?: string;
  t: "c" | "p" | "d" | "l";
  u: {
    _id: string;
    username: string;
  };
  ls: Date;
  lr?: Date;
  _updatedAt: Date;
}

export interface Team {
  _id: string;
  name: string;
  type: number;
  createdAt: Date;
  createdBy: {
    _id: string;
    username: string;
  };
  _updatedAt: Date;
  roomId: string;
  rooms?: string[];
}
