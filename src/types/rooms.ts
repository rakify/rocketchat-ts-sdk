import { IDmMessage } from "./dm";

export interface IRoomIdQuery {
  roomId: string;
}

export interface IRoomNameQuery {
  roomName: string;
}

export interface IRoomIdOrNameQuery {
  roomId?: string;
  roomName?: string;
}

export interface IPaginationQuery {
  offset?: number;
  count?: number;
  sort?: string;
}

export interface IFieldsQuery {
  fields?: string;
}

export interface IQueryFilter {
  query?: string;
}

export interface IChannelArchivePayload {
  roomId: string;
}

export interface IChannelClosePayload {
  roomId: string;
}

export interface IChannelCountersQuery extends IRoomIdOrNameQuery {
  userId?: string;
}

export interface IChannelCreatePayload {
  name: string;
  members?: string[];
  readOnly?: boolean;
  excludeSelf?: boolean;
  customFields?: Record<string, any>;
  extraData?: Record<string, any>;
  broadcast?: boolean;
  encrypted?: boolean;
  teamId?: string;
}

export interface IChannelDeletePayload {
  roomId?: string;
  roomName?: string;
}

export interface IChannelFilesQuery
  extends IRoomIdOrNameQuery, IPaginationQuery {
  sort?: string;
}

export interface IChannelHistoryQuery
  extends IRoomIdOrNameQuery, IPaginationQuery {
  latest?: string;
  oldest?: string;
  inclusive?: boolean;
  unreads?: boolean;
  showThreadMessages?: boolean;
}

export interface IChannelInfoQuery extends IRoomIdOrNameQuery {}

export interface IChannelInvitePayload {
  roomId: string;
  userId?: string;
  userIds?: string[];
}

export interface IChannelJoinPayload {
  roomId: string;
  joinCode?: string;
}

export interface IChannelKickPayload {
  roomId: string;
  userId: string;
}

export interface IChannelLeavePayload {
  roomId: string;
}

export interface IChannelListQuery extends IPaginationQuery {
  sort?: string;
  query?: string;
  fields?: string;
}

export interface IChannelListJoinedQuery extends IPaginationQuery {
  sort?: string;
  query?: string;
}

export interface IChannelMembersQuery
  extends IRoomIdOrNameQuery, IPaginationQuery {
  status?: string[];
  filter?: string;
}

export interface IChannelMessagesQuery extends IRoomIdQuery, IPaginationQuery {
  sort?: string;
  query?: string;
  fields?: string;
  mentionIds?: string[];
  starredIds?: string[];
  pinned?: boolean;
}

export interface IChannelModeratorsQuery extends IRoomIdOrNameQuery {}

export interface IChannelOnlineQuery extends IRoomIdOrNameQuery {}

export interface IChannelOpenPayload {
  roomId: string;
}

export interface IChannelAddAllPayload {
  roomId: string;
  activeUsersOnly?: boolean;
}

export interface IChannelAddLeaderPayload {
  roomId: string;
  userId: string;
}

export interface IChannelAddModeratorPayload {
  roomId: string;
  userId: string;
}

export interface IChannelAddOwnerPayload {
  roomId: string;
  userId: string;
}

export interface IChannelRemoveLeaderPayload {
  roomId: string;
  userId: string;
}

export interface IChannelRemoveModeratorPayload {
  roomId: string;
  userId: string;
}

export interface IChannelRemoveOwnerPayload {
  roomId: string;
  userId: string;
}

export interface IChannelRenamePayload {
  roomId: string;
  name: string;
}

export interface IChannelRolesQuery extends IRoomIdOrNameQuery {}

export interface IChannelSetAnnouncementPayload {
  roomId: string;
  announcement: string;
}

export interface IChannelSetDescriptionPayload {
  roomId: string;
  description: string;
}

export interface IChannelSetJoinCodePayload {
  roomId: string;
  joinCode?: string;
}

export interface IChannelSetPurposePayload {
  roomId: string;
  purpose: string;
}

export interface IChannelSetReadOnlyPayload {
  roomId: string;
  readOnly: boolean;
}

export interface IChannelSetTopicPayload {
  roomId: string;
  topic: string;
}

export interface IChannelSetTypePayload {
  roomId: string;
  type: string;
}

export interface IChannelUnarchivePayload {
  roomId: string;
}

export interface IChannelGetAllUserMentionsByChannelQuery
  extends IRoomIdQuery, IPaginationQuery {
  sort?: string;
}

export interface IChannelGetIntegrationsQuery
  extends IRoomIdQuery, IPaginationQuery {
  sort?: string;
  fields?: string;
  query?: string;
}

export interface IChannelConvertToTeamPayload {
  channelId: string;
}

export interface IGroupArchivePayload extends IChannelArchivePayload {}
export interface IGroupClosePayload extends IChannelClosePayload {}
export interface IGroupCountersQuery extends IChannelCountersQuery {}

export interface IGroupCreatePayload {
  name: string;
  members?: string[];
  readOnly?: boolean;
  customFields?: Record<string, any>;
  extraData?: Record<string, any>;
  broadcast?: boolean;
  encrypted?: boolean;
}

export interface IGroupDeletePayload extends IChannelDeletePayload {}
export interface IGroupFilesQuery extends IChannelFilesQuery {}
export interface IGroupHistoryQuery extends IChannelHistoryQuery {}
export interface IGroupInfoQuery extends IChannelInfoQuery {}
export interface IGroupInvitePayload extends IChannelInvitePayload {}
export interface IGroupKickPayload extends IChannelKickPayload {}
export interface IGroupLeavePayload extends IChannelLeavePayload {}
export interface IGroupListQuery extends IChannelListQuery {}
export interface IGroupListAllQuery extends IChannelListQuery {}
export interface IGroupMembersQuery extends IChannelMembersQuery {}
export interface IGroupMessagesQuery extends IChannelMessagesQuery {}
export interface IGroupModeratorsQuery extends IChannelModeratorsQuery {}
export interface IGroupOpenPayload extends IChannelOpenPayload {}
export interface IGroupAddAllPayload extends IChannelAddAllPayload {}
export interface IGroupAddLeaderPayload extends IChannelAddLeaderPayload {}
export interface IGroupAddModeratorPayload extends IChannelAddModeratorPayload {}
export interface IGroupAddOwnerPayload extends IChannelAddOwnerPayload {}
export interface IGroupRemoveLeaderPayload extends IChannelRemoveLeaderPayload {}
export interface IGroupRemoveModeratorPayload extends IChannelRemoveModeratorPayload {}
export interface IGroupRemoveOwnerPayload extends IChannelRemoveOwnerPayload {}
export interface IGroupRenamePayload extends IChannelRenamePayload {}
export interface IGroupSetAnnouncementPayload extends IChannelSetAnnouncementPayload {}
export interface IGroupSetDescriptionPayload extends IChannelSetDescriptionPayload {}
export interface IGroupSetPurposePayload extends IChannelSetPurposePayload {}
export interface IGroupSetReadOnlyPayload extends IChannelSetReadOnlyPayload {}
export interface IGroupSetTopicPayload extends IChannelSetTopicPayload {}
export interface IGroupSetTypePayload extends IChannelSetTypePayload {}
export interface IGroupUnarchivePayload extends IChannelUnarchivePayload {}
export interface IGroupGetIntegrationsQuery extends IChannelGetIntegrationsQuery {}

export interface IGroupConvertToTeamPayload {
  roomId: string;
}

export interface IRoomAdminRoomsQuery {
  types?: string[];
}

export interface IRoomCleanHistoryPayload {
  roomId: string;
  latest?: string;
  oldest?: string;
  inclusive?: boolean;
  excludePinned?: boolean;
  filesOnly?: boolean;
  users?: string[];
}

export interface IRoomInfoQuery extends IRoomIdOrNameQuery, IFieldsQuery {}

export interface IRoomGetDiscussionsQuery
  extends IRoomIdOrNameQuery, IPaginationQuery, IFieldsQuery {
  sort?: string;
}

export interface IRoomGetQuery extends IPaginationQuery, IFieldsQuery {}

export interface IRoomLeavePayload {
  roomId: string;
}

export interface IRoomDeletePayload {
  roomId?: string;
  roomName?: string;
}

export interface IRoomFavoritePayload {
  favorite: boolean;
  roomId: string;
}

export interface IRoomAutocompleteChannelAndPrivateQuery {
  selector: string;
}

export interface IRoomAutocompleteAdminRoomsQuery {
  selector: string;
}

export interface IRoomAdminRoomsGetRoomQuery {
  rid: string;
}

export interface IRoomSaveRoomSettingsPayload {
  roomId: string;
  roomName?: string;
  roomTopic?: string;
  roomAnnouncement?: string;
  roomDescription?: string;
  roomType?: string;
  readOnly?: boolean;
  systemMessages?: string[];
  default?: boolean;
  joinCode?: string;
  streamingOptions?: Record<string, any>;
  roomAvatar?: string;
  featured?: boolean;
  roomCustomFields?: Record<string, any>;
}

export interface IRoomNameExistsQuery {
  roomName: string;
}

export interface IRoomChangeArchivationStatePayload {
  rid: string;
  action: "archive" | "unarchive";
}

export interface IRoomExportPayload {
  rid: string;
  type: "email" | "file";
  toUsers?: string[];
  toEmails?: string[];
  subject?: string;
  messages?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface IRoomMuteUserPayload {
  roomId: string;
  userId?: string;
  username?: string;
}

export interface IRoomUnmuteUserPayload extends IRoomMuteUserPayload {}

export interface IRoomImagesQuery extends IRoomIdOrNameQuery, IPaginationQuery {
  sort?: string;
  query?: string;
}

export interface IRoomAuditMembersQuery
  extends IRoomIdQuery, IPaginationQuery {}

export interface IRoomHidePayload {
  roomId: string;
}

export interface IRoomRolesQuery extends IRoomIdOrNameQuery {}

export interface IRoomAutocompleteChannelAndPrivateWithPaginationQuery {
  selector: string;
  count?: number;
  offset?: number;
}

export interface ITeamListAllQuery extends IPaginationQuery {}

export interface ITeamListQuery extends IPaginationQuery {
  sort?: string;
  count?: number;
  offset?: number;
  query?: string;
}

export interface ITeamInfoQuery {
  teamId?: string;
  teamName?: string;
}

export interface ITeamAddRoomPayload {
  teamId?: string;
  teamName?: string;
  rooms: string[];
}

export interface ITeamRemoveRoomPayload {
  teamId?: string;
  teamName?: string;
  roomId: string;
}

export interface ITeamUpdateRoomPayload {
  roomId: string;
  isDefault?: boolean;
}

export interface ITeamListRoomsQuery {
  teamId?: string;
  teamName?: string;
  count?: number;
  offset?: number;
}

export interface ITeamListRoomsOfUserQuery extends ITeamListRoomsQuery {
  userId: string;
}

export interface ITeamListChildrenQuery extends ITeamListRoomsQuery {
  sort?: string;
  filter?: string;
  type?: string;
}

export interface IDirectoryQuery extends IPaginationQuery {
  sort?: string;
  query?: string;
  fields?: string;
  text?: string;
  type?: string;
  workspace?: string;
}

export interface IFindOrCreateInvitePayload {
  rid: string;
  days?: number;
  maxUses?: number;
}

export interface IListInvitesQuery {}

export interface IUseInvitePayload {
  token: string;
}

export interface IValidateInviteTokenPayload {
  token: string;
}

export interface IRocketChatUser {
  _id: string;
  username: string;
  name?: string;
}

export interface ISubscription {
  _id: string;
  open: boolean;
  alert: boolean;
  unread: number;
  userMentions: number;
  groupMentions: number;
  ts: string;
  rid: string;
  name: string;
  fname: string | null;
  t: string;
  u: {
    _id: string;
    username: string;
    name: string;
  };
  _updatedAt: string;
  ls?: string;
  E2EKey?: string;
  usernames?: string[];
  lm?: string;
  lastMessage?: IDmMessage;
  uids?: string[];
}

export interface ISubscriptionsGetResponse {
  update: ISubscription[];
  remove: Array<string | ISubscription>;
  success: boolean;
}

export interface IRoomSummary {
  _id: string;
  t: string;
  usernames?: string[];
  usersCount?: number;
  msgs?: number;
  ts: string;
  uids?: string[];
  default?: boolean;
  ro?: boolean;
  sysMes?: boolean;
  _updatedAt: string;
  lastMessage?: IDmMessage;
  lm?: string;
  name?: string;
  u?: IRocketChatUser;
}

export interface IRoomsGetResponse {
  update: IRoomSummary[];
  remove: Array<string | IRoomSummary>;
  success: boolean;
}

export interface IRoomMediaUploadPayload {
  rid: string;
  file: File;
  msg?: string;
}

export interface IRoomMediaConfirmPayload {
  rid: string;
  fileId: string;
  msg?: string;
  tmid?: string;
}

export interface IRoomMediaUploadFileInfo {
  _id: string;
  url: string;
}

export interface IRoomMediaUploadResponse {
  file: IRoomMediaUploadFileInfo;
  success: boolean;
}

export interface IRoomMediaFile {
  _id: string;
  name: string;
  type: string;
  size: number;
  format?: string;
  typeGroup?: string;
}

export interface IRoomMediaImageDimensions {
  width: number;
  height: number;
}

export interface IRoomMediaAttachment {
  title: string;
  title_link: string;
  title_link_download: boolean;
  image_dimensions?: IRoomMediaImageDimensions;
  image_preview?: string;
  image_url?: string;
  image_type?: string;
  image_size?: number;
  type: string;
  fileId: string;
}

export interface IRoomMediaConfirmResponse {
  _id: string;
  rid: string;
  ts: string;
  msg: string;
  file: IRoomMediaFile;
  files: IRoomMediaFile[];
  attachments: IRoomMediaAttachment[];
  u: IRocketChatUser;
  _updatedAt: string;
  urls: string[];
}
