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
    ): ResponsePromise {
        const path = `/api/v1/channels.close`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Gets counters and information for a channel
     * accepts query with roomId/roomName and optional userId
     */
    channelCounters(
        query: IChannelCountersQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.counters${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Creates a new public channel
     * accepts payload with name, members, readOnly, etc.
     */
    channelCreate(
        payload: IChannelCreatePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.create`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Deletes a channel
     * accepts payload with roomId or roomName
     */
    channelDelete(
        payload: IChannelDeletePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.delete`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Gets files uploaded to a channel
     * accepts query with roomId/roomName and pagination params
     */
    channelFiles(
        query: IChannelFilesQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.files${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets message history of a channel
     * accepts query with roomId/roomName and pagination/filtering params
     */
    channelHistory(
        query: IChannelHistoryQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.history${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets information about a channel
     * accepts query with roomId or roomName
     */
    channelInfo(
        query: IChannelInfoQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.info${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Invites users to a channel
     * accepts payload with roomId and userId(s)
     */
    channelInvite(
        payload: IChannelInvitePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.invite`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Joins a public channel
     * accepts payload with roomId and optional joinCode
     */
    channelJoin(
        payload: IChannelJoinPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.join`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Removes a user from a channel
     * accepts payload with roomId and userId
     */
    channelKick(
        payload: IChannelKickPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.kick`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Leaves a channel
     * accepts payload with roomId
     */
    channelLeave(
        payload: IChannelLeavePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.leave`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Lists all channels in the workspace
     * accepts query with pagination and filtering params
     */
    channelList(
        query?: IChannelListQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.list${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Lists channels the user has joined
     * accepts query with pagination params
     */
    channelListJoined(
        query?: IChannelListJoinedQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.list.joined${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets members of a channel
     * accepts query with roomId/roomName and pagination/filtering params
     */
    channelMembers(
        query: IChannelMembersQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.members${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets messages from a channel
     * accepts query with roomId and pagination/filtering params
     */
    channelMessages(
        query: IChannelMessagesQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.messages${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets moderators of a channel
     * accepts query with roomId or roomName
     */
    channelModerators(
        query: IChannelModeratorsQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.moderators${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets online users in a channel
     * accepts query with roomId or roomName
     */
    channelOnline(
        query: IChannelOnlineQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.online${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets user roles in a channel
     * accepts query with roomId or roomName
     */
    channelRoles(
        query: IChannelRolesQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.roles${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets all user mentions in a channel
     * accepts query with roomId and pagination params
     */
    channelGetAllUserMentionsByChannel(
        query: IChannelGetAllUserMentionsByChannelQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.getAllUserMentionsByChannel${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets integrations for a channel
     * accepts query with roomId and pagination params
     */
    channelGetIntegrations(
        query: IChannelGetIntegrationsQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.getIntegrations${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Adds a channel back to the user's sidebar
     * accepts payload with roomId
     */
    channelOpen(
        payload: IChannelOpenPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.open`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Archives a channel, removing it from the active channels list
     * accepts payload with roomId
     */
    channelArchive(
        payload: IChannelArchivePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.archive`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Adds all users to a channel
     * accepts payload with roomId and activeUsersOnly flag
     */
    channelAddAll(
        payload: IChannelAddAllPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.addAll`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Adds a leader to a channel
     * accepts payload with roomId and userId
     */
    channelAddLeader(
        payload: IChannelAddLeaderPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.addLeader`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Adds a moderator to a channel
     * accepts payload with roomId and userId
     */
    channelAddModerator(
        payload: IChannelAddModeratorPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.addModerator`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Adds an owner to a channel
     * accepts payload with roomId and userId
     */
    channelAddOwner(
        payload: IChannelAddOwnerPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.addOwner`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Removes a leader from a channel
     * accepts payload with roomId and userId
     */
    channelRemoveLeader(
        payload: IChannelRemoveLeaderPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.removeLeader`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Removes a moderator from a channel
     * accepts payload with roomId and userId
     */
    channelRemoveModerator(
        payload: IChannelRemoveModeratorPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.removeModerator`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Removes an owner from a channel
     * accepts payload with roomId and userId
     */
    channelRemoveOwner(
        payload: IChannelRemoveOwnerPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.removeOwner`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Renames a channel
     * accepts payload with roomId and name
     */
    channelRename(
        payload: IChannelRenamePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.rename`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Sets the announcement for a channel
     * accepts payload with roomId and announcement
     */
    channelSetAnnouncement(
        payload: IChannelSetAnnouncementPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.setAnnouncement`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Sets the description for a channel
     * accepts payload with roomId and description
     */
    channelSetDescription(
        payload: IChannelSetDescriptionPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.setDescription`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Sets the join code for a channel
     * accepts payload with roomId and joinCode
     */
    channelSetJoinCode(
        payload: IChannelSetJoinCodePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.setJoinCode`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Sets the purpose for a channel
     * accepts payload with roomId and purpose
     */
    channelSetPurpose(
        payload: IChannelSetPurposePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.setPurpose`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Sets a channel as read-only
     * accepts payload with roomId and readOnly flag
     */
    channelSetReadOnly(
        payload: IChannelSetReadOnlyPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.setReadOnly`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Sets the topic for a channel
     * accepts payload with roomId and topic
     */
    channelSetTopic(
        payload: IChannelSetTopicPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.setTopic`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Sets the type of a channel
     * accepts payload with roomId and type
     */
    channelSetType(
        payload: IChannelSetTypePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.setType`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Unarchives a channel
     * accepts payload with roomId
     */
    channelUnarchive(
        payload: IChannelUnarchivePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.unarchive`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Converts a channel to a team
     * accepts payload with channelId
     */
    channelConvertToTeam(
        payload: IChannelConvertToTeamPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/channels.convertToTeam`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }
}

export default ChannelResource;
