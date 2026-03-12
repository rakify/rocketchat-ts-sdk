// WebSocket-specific types for real-time message handling
// These are custom implementations for handling WebSocket events and are not part of the SDK

import { IMongoDate } from "./dm";

// Use SDK types where possible but extend for WebSocket-specific properties
export interface IWebsocketRocketChatMessage {
  _id: string;
  rid: string;
  msg: string;
  ts: IMongoDate;
  u: {
    _id: string;
    username: string;
    name?: string;
  };
  _updatedAt: IMongoDate;
  urls?: any[];
  mentions?: any[];
  channels?: any[];
  md?: Array<{
    type: string;
    value: Array<{
      type: string;
      value: string;
    }>;
  }>;
  file?: {
    _id: string;
    name: string;
    type: string;
    size: number;
    format: string;
  };
}

export interface IWebsocketRocketChatRoom {
  _id: string;
  t: string;
  usernames: string[];
  usersCount: number;
  msgs: number;
  ts: IMongoDate;
  uids: string[];
  default: boolean;
  ro: boolean;
  sysMes: boolean;
  _USERNAMES?: string[];
  _updatedAt: IMongoDate;
  lastMessage?: IWebsocketRocketChatMessage;
  lm?: IMongoDate;
}

export interface IWebsocketRocketChatSubscription {
  _id: string;
  u: {
    _id: string;
    username: string;
  };
  rid: string;
  _updatedAt: IMongoDate;
  alert: boolean;
  fname: string;
  groupMentions: number;
  name: string;
  open: boolean;
  t: string;
  ts: IMongoDate;
  unread: number;
  userMentions: number;
  ls: IMongoDate;
}

// WebSocket message event types - These are specific to WebSocket implementation
export interface RoomChangedEvent {
  msg: "changed";
  collection: "stream-notify-user";
  id: string;
  fields: {
    eventName: string; // Format: "userId/rooms-changed"
    args: ["updated" | "inserted" | "removed", IWebsocketRocketChatRoom];
  };
}

export interface SubscriptionChangedEvent {
  msg: "changed";
  collection: "stream-notify-user";
  id: string;
  fields: {
    eventName: string; // Format: "userId/subscriptions-changed"
    args: [
      "updated" | "inserted" | "removed",
      IWebsocketRocketChatSubscription,
    ];
  };
}

export interface RoomMessageEvent {
  msg: "changed";
  collection: "stream-room-messages";
  id: string;
  fields: {
    eventName: string; // Room ID
    args: [IWebsocketRocketChatMessage];
  };
}

// Presence update types
export type PresenceUpdateArgs = [
  string, // userId
  string, // username
  number, // status (0=offline, 1=online, 2=away, 3=busy)
  string, // empty string?
  null, // null
  string[], // ["user"]
];

export interface PresenceUpdateEvent {
  msg: "changed";
  collection: "stream-notify-logged";
  id: string;
  fields: {
    eventName: "user-status";
    args: [PresenceUpdateArgs];
  };
}

export interface PresenceData {
  _id: string;
  status: string;
}

// Union type for all WebSocket event types
export type WebSocketEvent =
  | RoomChangedEvent
  | SubscriptionChangedEvent
  | RoomMessageEvent
  | PresenceUpdateEvent;

export interface IWebSocketMessageData {
  msg?: string;
  collection?: string;
  fields?: {
    eventName?: string;
    args?:
      | IWebsocketRocketChatMessage[]
      | [string, IWebsocketRocketChatRoom]
      | [string, IWebsocketRocketChatSubscription]
      | [IWebsocketRocketChatMessage]
      | [PresenceUpdateArgs];
  };
  id?: string;
  error?: any;
  subs?: string[];
}
