import { BaseResource } from "./baseResource";
import type {
  IChannelAddAllPayload,
  IChannelAddLeaderPayload,
  IChannelAddModeratorPayload,
  IChannelAddOwnerPayload,
  IChannelArchivePayload,
  IChannelClosePayload,
  IChannelConvertToTeamPayload,
  IChannelCountersQuery,
  IChannelCreatePayload,
  IChannelDeletePayload,
  IChannelFilesQuery,
  IChannelGetAllUserMentionsByChannelQuery,
  IChannelGetIntegrationsQuery,
  IChannelHistoryQuery,
  IChannelInfoQuery,
  IChannelInvitePayload,
  IChannelJoinPayload,
  IChannelKickPayload,
  IChannelLeavePayload,
  IChannelListJoinedQuery,
  IChannelListQuery,
  IChannelMembersQuery,
  IChannelMessagesQuery,
  IChannelModeratorsQuery,
  IChannelOnlineQuery,
  IChannelOpenPayload,
  IChannelRemoveLeaderPayload,
  IChannelRemoveModeratorPayload,
  IChannelRemoveOwnerPayload,
  IChannelRenamePayload,
  IChannelRolesQuery,
  IChannelSetAnnouncementPayload,
  IChannelSetDescriptionPayload,
  IChannelSetJoinCodePayload,
  IChannelSetPurposePayload,
  IChannelSetReadOnlyPayload,
  IChannelSetTopicPayload,
  IChannelSetTypePayload,
  IChannelUnarchivePayload,
  IHeaders,
  ResponsePromise,
} from "../types";

class ChannelResource extends BaseResource {
  /**
   * @description Closes a channel from the user's sidebar
   * accepts payload with roomId
   */
  channelClose(
    payload: IChannelClosePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.close`;
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
   * @description Gets counters and information for a channel
   * accepts query with roomId/roomName and optional userId
   */
  channelCounters(
    query: IChannelCountersQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.counters${this.addQuery(query)}`;
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
   * @description Creates a new public channel
   * accepts payload with name, members, readOnly, etc.
   */
  channelCreate(
    payload: IChannelCreatePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.create`;
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
   * @description Deletes a channel
   * accepts payload with roomId or roomName
   */
  channelDelete(
    payload: IChannelDeletePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.delete`;
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
   * @description Gets files uploaded to a channel
   * accepts query with roomId/roomName and pagination params
   */
  channelFiles(
    query: IChannelFilesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.files${this.addQuery(query)}`;
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
   * @description Gets message history of a channel
   * accepts query with roomId/roomName and pagination/filtering params
   */
  channelHistory(
    query: IChannelHistoryQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.history${this.addQuery(query)}`;
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
   * @description Gets information about a channel
   * accepts query with roomId or roomName
   */
  channelInfo(
    query: IChannelInfoQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.info${this.addQuery(query)}`;
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
   * @description Invites users to a channel
   * accepts payload with roomId and userId(s)
   */
  channelInvite(
    payload: IChannelInvitePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.invite`;
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
   * @description Joins a public channel
   * accepts payload with roomId and optional joinCode
   */
  channelJoin(
    payload: IChannelJoinPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.join`;
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
   * @description Removes a user from a channel
   * accepts payload with roomId and userId
   */
  channelKick(
    payload: IChannelKickPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.kick`;
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
   * @description Leaves a channel
   * accepts payload with roomId
   */
  channelLeave(
    payload: IChannelLeavePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.leave`;
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
   * @description Lists all channels in the workspace
   * accepts query with pagination and filtering params
   */
  channelList(
    query?: IChannelListQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.list${this.addQuery(query)}`;
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
   * @description Lists channels the user has joined
   * accepts query with pagination params
   */
  channelListJoined(
    query?: IChannelListJoinedQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.list.joined${this.addQuery(query)}`;
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
   * @description Gets members of a channel
   * accepts query with roomId/roomName and pagination/filtering params
   */
  channelMembers(
    query: IChannelMembersQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.members${this.addQuery(query)}`;
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
   * @description Gets messages from a channel
   * accepts query with roomId and pagination/filtering params
   */
  channelMessages(
    query: IChannelMessagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.messages${this.addQuery(query)}`;
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
   * @description Gets moderators of a channel
   * accepts query with roomId or roomName
   */
  channelModerators(
    query: IChannelModeratorsQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.moderators${this.addQuery(query)}`;
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
   * @description Gets online users in a channel
   * accepts query with roomId or roomName
   */
  channelOnline(
    query: IChannelOnlineQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.online${this.addQuery(query)}`;
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
   * @description Gets user roles in a channel
   * accepts query with roomId or roomName
   */
  channelRoles(
    query: IChannelRolesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.roles${this.addQuery(query)}`;
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
   * @description Gets all user mentions in a channel
   * accepts query with roomId and pagination params
   */
  channelGetAllUserMentionsByChannel(
    query: IChannelGetAllUserMentionsByChannelQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.getAllUserMentionsByChannel${this.addQuery(query)}`;
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
   * @description Gets integrations for a channel
   * accepts query with roomId and pagination params
   */
  channelGetIntegrations(
    query: IChannelGetIntegrationsQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.getIntegrations${this.addQuery(query)}`;
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
   * @description Adds a channel back to the user's sidebar
   * accepts payload with roomId
   */
  channelOpen(
    payload: IChannelOpenPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.open`;
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
   * @description Archives a channel, removing it from the active channels list
   * accepts payload with roomId
   */
  channelArchive(
    payload: IChannelArchivePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.archive`;
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
   * @description Adds all users to a channel
   * accepts payload with roomId and activeUsersOnly flag
   */
  channelAddAll(
    payload: IChannelAddAllPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.addAll`;
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
   * @description Adds a leader to a channel
   * accepts payload with roomId and userId
   */
  channelAddLeader(
    payload: IChannelAddLeaderPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.addLeader`;
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
   * @description Adds a moderator to a channel
   * accepts payload with roomId and userId
   */
  channelAddModerator(
    payload: IChannelAddModeratorPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.addModerator`;
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
   * @description Adds an owner to a channel
   * accepts payload with roomId and userId
   */
  channelAddOwner(
    payload: IChannelAddOwnerPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.addOwner`;
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
   * @description Removes a leader from a channel
   * accepts payload with roomId and userId
   */
  channelRemoveLeader(
    payload: IChannelRemoveLeaderPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.removeLeader`;
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
   * @description Removes a moderator from a channel
   * accepts payload with roomId and userId
   */
  channelRemoveModerator(
    payload: IChannelRemoveModeratorPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.removeModerator`;
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
   * @description Removes an owner from a channel
   * accepts payload with roomId and userId
   */
  channelRemoveOwner(
    payload: IChannelRemoveOwnerPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.removeOwner`;
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
   * @description Renames a channel
   * accepts payload with roomId and name
   */
  channelRename(
    payload: IChannelRenamePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.rename`;
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
   * @description Sets the announcement for a channel
   * accepts payload with roomId and announcement
   */
  channelSetAnnouncement(
    payload: IChannelSetAnnouncementPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.setAnnouncement`;
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
   * @description Sets the description for a channel
   * accepts payload with roomId and description
   */
  channelSetDescription(
    payload: IChannelSetDescriptionPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.setDescription`;
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
   * @description Sets the join code for a channel
   * accepts payload with roomId and joinCode
   */
  channelSetJoinCode(
    payload: IChannelSetJoinCodePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.setJoinCode`;
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
   * @description Sets the purpose for a channel
   * accepts payload with roomId and purpose
   */
  channelSetPurpose(
    payload: IChannelSetPurposePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.setPurpose`;
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
   * @description Sets a channel as read-only
   * accepts payload with roomId and readOnly flag
   */
  channelSetReadOnly(
    payload: IChannelSetReadOnlyPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.setReadOnly`;
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
   * @description Sets the topic for a channel
   * accepts payload with roomId and topic
   */
  channelSetTopic(
    payload: IChannelSetTopicPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.setTopic`;
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
   * @description Sets the type of a channel
   * accepts payload with roomId and type
   */
  channelSetType(
    payload: IChannelSetTypePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.setType`;
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
   * @description Unarchives a channel
   * accepts payload with roomId
   */
  channelUnarchive(
    payload: IChannelUnarchivePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.unarchive`;
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
   * @description Converts a channel to a team
   * accepts payload with channelId
   */
  channelConvertToTeam(
    payload: IChannelConvertToTeamPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/channels.convertToTeam`;
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

export default ChannelResource;
