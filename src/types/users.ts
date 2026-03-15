import { IRocketChatUser } from "./rooms";

export interface IUserPresence {
  _id: string;
  username: string;
  status: string;
  name?: string;
  utcOffset?: number;
  statusText?: string;
}

export interface IUserPresenceResponse {
  users: IUserPresence[];
  full: boolean;
  success: boolean;
}

export interface IUserListQuery {
  count?: number;
  offset?: number;
  sort?: Record<string, number>;
  fields?: Record<string, number>;
  query?: Record<string, any>;
  roles?: string[];
  searchTerm?: string;
}

export interface IUserListResponse {
  users: IRocketChatUser[];
  count: number;
  offset: number;
  total: number;
  success: boolean;
}

export interface IUserInfoData {
  _id: string;
  username: string;
  emails: Array<{
    address: string;
    verified: boolean;
  }>;
  roles: string[];
  status: string;
  active: boolean;
  name: string;
  _updatedAt: string;
  statusConnection: string;
  avatarETag: string;
  avatarUrl: string;
  isOAuthUser: boolean;
  success: boolean;
}

export interface IUserByStatus {
  _id: string;
  username: string;
  emails: Array<{
    address: string;
    verified: boolean;
  }>;
  type: string;
  roles: string[];
  status: string;
  active: boolean;
  name: string;
  lastLogin: string;
}

export interface IUserListByStatusResponse {
  users: IUserByStatus[];
  count: number;
  offset: number;
  total: number;
  success: boolean;
}

export interface IUserSetAvatarRequest {
  avatarUrl?: string;
  userId?: string;
  username?: string;
  image?: File;
}
