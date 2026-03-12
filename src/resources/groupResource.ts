import { BaseResource } from "./baseResource";
import type {
  IGroupAddAllPayload,
  IGroupAddLeaderPayload,
  IGroupAddModeratorPayload,
  IGroupAddOwnerPayload,
  IGroupArchivePayload,
  IGroupClosePayload,
  IGroupConvertToTeamPayload,
  IGroupCountersQuery,
  IGroupCreatePayload,
  IGroupDeletePayload,
  IGroupFilesQuery,
  IGroupGetIntegrationsQuery,
  IGroupHistoryQuery,
  IGroupInfoQuery,
  IGroupInvitePayload,
  IGroupKickPayload,
  IGroupLeavePayload,
  IGroupListAllQuery,
  IGroupListQuery,
  IGroupMembersQuery,
  IGroupMessagesQuery,
  IGroupModeratorsQuery,
  IGroupOpenPayload,
  IGroupRemoveLeaderPayload,
  IGroupRemoveModeratorPayload,
  IGroupRemoveOwnerPayload,
  IGroupRenamePayload,
  IGroupSetAnnouncementPayload,
  IGroupSetDescriptionPayload,
  IGroupSetPurposePayload,
  IGroupSetReadOnlyPayload,
  IGroupSetTopicPayload,
  IGroupSetTypePayload,
  IGroupUnarchivePayload,
  IHeaders,
  ResponsePromise,
} from "../types";

class GroupResource extends BaseResource {
  /**
   * @description Archives a private group
   * accepts payload with roomId
   */
  groupArchive(
    payload: IGroupArchivePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.archive`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Closes a private group from the user's sidebar
   * accepts payload with roomId
   */
  groupClose(
    payload: IGroupClosePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.close`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Gets counters for a private group
   * accepts query with roomId/roomName and optional userId
   */
  groupCounters(
    query: IGroupCountersQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.counters${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Creates a new private group
   * accepts payload with name, members, readOnly, etc.
   */
  groupCreate(
    payload: IGroupCreatePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.create`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Deletes a private group
   * accepts payload with roomId or roomName
   */
  groupDelete(
    payload: IGroupDeletePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.delete`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Gets files from a private group
   * accepts query with roomId/roomName and pagination params
   */
  groupFiles(
    query: IGroupFilesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.files${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets message history of a private group
   * accepts query with roomId/roomName and pagination/filtering params
   */
  groupHistory(
    query: IGroupHistoryQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.history${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets information about a private group
   * accepts query with roomId or roomName
   */
  groupInfo(
    query: IGroupInfoQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.info${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Invites users to a private group
   * accepts payload with roomId and userId(s)
   */
  groupInvite(
    payload: IGroupInvitePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.invite`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Removes a user from a private group
   * accepts payload with roomId and userId
   */
  groupKick(
    payload: IGroupKickPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.kick`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Leaves a private group
   * accepts payload with roomId
   */
  groupLeave(
    payload: IGroupLeavePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.leave`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Lists private groups the user is a member of
   * accepts query with pagination params
   */
  groupList(
    query?: IGroupListQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.list${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Lists all private groups in the workspace (admin permission required)
   * accepts query with pagination params
   */
  groupListAll(
    query?: IGroupListAllQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.listAll${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets members of a private group
   * accepts query with roomId/roomName and pagination/filtering params
   */
  groupMembers(
    query: IGroupMembersQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.members${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets messages from a private group
   * accepts query with roomId and pagination/filtering params
   */
  groupMessages(
    query: IGroupMessagesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.messages${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets moderators of a private group
   * accepts query with roomId or roomName
   */
  groupModerators(
    query: IGroupModeratorsQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.moderators${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Adds a private group back to the user's sidebar
   * accepts payload with roomId
   */
  groupOpen(
    payload: IGroupOpenPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.open`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Adds all users to a private group
   * accepts payload with roomId and activeUsersOnly flag
   */
  groupAddAll(
    payload: IGroupAddAllPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.addAll`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Adds a leader to a private group
   * accepts payload with roomId and userId
   */
  groupAddLeader(
    payload: IGroupAddLeaderPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.addLeader`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Adds a moderator to a private group
   * accepts payload with roomId and userId
   */
  groupAddModerator(
    payload: IGroupAddModeratorPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.addModerator`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Adds an owner to a private group
   * accepts payload with roomId and userId
   */
  groupAddOwner(
    payload: IGroupAddOwnerPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.addOwner`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Removes a leader from a private group
   * accepts payload with roomId and userId
   */
  groupRemoveLeader(
    payload: IGroupRemoveLeaderPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.removeLeader`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Removes a moderator from a private group
   * accepts payload with roomId and userId
   */
  groupRemoveModerator(
    payload: IGroupRemoveModeratorPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.removeModerator`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Removes an owner from a private group
   * accepts payload with roomId and userId
   */
  groupRemoveOwner(
    payload: IGroupRemoveOwnerPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.removeOwner`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Renames a private group
   * accepts payload with roomId and name
   */
  groupRename(
    payload: IGroupRenamePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.rename`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Sets the announcement for a private group
   * accepts payload with roomId and announcement
   */
  groupSetAnnouncement(
    payload: IGroupSetAnnouncementPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.setAnnouncement`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Sets the description for a private group
   * accepts payload with roomId and description
   */
  groupSetDescription(
    payload: IGroupSetDescriptionPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.setDescription`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Sets the purpose for a private group
   * accepts payload with roomId and purpose
   */
  groupSetPurpose(
    payload: IGroupSetPurposePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.setPurpose`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Sets a private group as read-only
   * accepts payload with roomId and readOnly flag
   */
  groupSetReadOnly(
    payload: IGroupSetReadOnlyPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.setReadOnly`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Sets the topic for a private group
   * accepts payload with roomId and topic
   */
  groupSetTopic(
    payload: IGroupSetTopicPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.setTopic`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Sets the type of a private group
   * accepts payload with roomId and type
   */
  groupSetType(
    payload: IGroupSetTypePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.setType`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Unarchives a private group
   * accepts payload with roomId
   */
  groupUnarchive(
    payload: IGroupUnarchivePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.unarchive`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Gets integrations for a private group
   * accepts query with roomId and pagination params
   */
  groupGetIntegrations(
    query: IGroupGetIntegrationsQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.getIntegrations${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Converts a private group to a team
   * accepts payload with roomId
   */
  groupConvertToTeam(
    payload: IGroupConvertToTeamPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/groups.convertToTeam`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }
}

export default GroupResource;
