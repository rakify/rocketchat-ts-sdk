import { IRocketChatUser } from "./rooms";
import { RocketChatResponse } from "./sdk";

export interface IUserPresence {
  _id: string;
  username: string;
  status: string;
  name?: string;
  avatarETag?: string;
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

export interface IChatWhoAmIEmail {
  address: string;
  verified: boolean;
}

export interface IChatWhoAmIServices {
  email2fa?: {
    enabled: boolean;
  };
  password?: {
    exists: boolean;
  };
  [key: string]: unknown;
}

export interface IChatWhoAmIPreferences {
  enableAutoAway?: boolean;
  idleTimeLimit?: number;
  desktopNotificationRequireInteraction?: boolean;
  desktopNotifications?: string;
  desktopNotificationVoiceCalls?: boolean;
  pushNotifications?: string;
  unreadAlert?: boolean;
  useEmojis?: boolean;
  convertAsciiEmoji?: boolean;
  autoImageLoad?: boolean;
  saveMobileBandwidth?: boolean;
  collapseMediaByDefault?: boolean;
  hideUsernames?: boolean;
  hideRoles?: boolean;
  hideFlexTab?: boolean;
  displayAvatars?: boolean;
  sidebarGroupByType?: boolean;
  themeAppearence?: string;
  sidebarViewMode?: string;
  sidebarDisplayAvatar?: boolean;
  sidebarShowUnread?: boolean;
  sidebarSortby?: string;
  showThreadsInMainChannel?: boolean;
  alsoSendThreadToChannel?: string;
  sidebarShowFavorites?: boolean;
  sendOnEnter?: string;
  emailNotificationMode?: string;
  newRoomNotification?: string;
  newMessageNotification?: string;
  muteFocusedConversations?: boolean;
  masterVolume?: number;
  notificationsSoundVolume?: number;
  voipRingerVolume?: number;
  omnichannelTranscriptEmail?: boolean;
  notifyCalendarEvents?: boolean;
  enableMobileRinging?: boolean;
  sidebarSectionsOrder?: string[];
  featuresPreview?: string;
  omnichannelTranscriptPDF?: boolean;
  [key: string]: unknown;
}

export interface IChatWhoAmISettings {
  profile?: Record<string, unknown>;
  preferences?: IChatWhoAmIPreferences;
  calendar?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface IChatWhoAmIResponse {
  _id: string;
  services?: IChatWhoAmIServices;
  username: string;
  emails: IChatWhoAmIEmail[];
  roles: string[];
  status: string;
  active: boolean;
  name: string;
  _updatedAt: string;
  settings?: IChatWhoAmISettings;
  statusConnection: string;
  avatarETag?: string;
  avatarOrigin?: string;
  statusDefault?: string;
  avatarUrl?: string;
  isOAuthUser: boolean;
  success: boolean;
  [key: string]: unknown;
}

export type IChatWhoAmIResult = RocketChatResponse<IChatWhoAmIResponse>;

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
  lastLogin?: string;
  avatarETag?: string;
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
