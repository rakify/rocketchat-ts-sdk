import { BaseResource } from "./baseResource";
import type {
  IHeaders,
  IRoomAdminRoomsGetRoomQuery,
  IRoomAdminRoomsQuery,
  IRoomAuditMembersQuery,
  IRoomAutocompleteAdminRoomsQuery,
  IRoomAutocompleteChannelAndPrivateQuery,
  IRoomAutocompleteChannelAndPrivateWithPaginationQuery,
  IRoomChangeArchivationStatePayload,
  IRoomCleanHistoryPayload,
  IRoomDeletePayload,
  IRoomExportPayload,
  IRoomFavoritePayload,
  IRoomGetDiscussionsQuery,
  IRoomGetQuery,
  IRoomsGetResponse,
  IRoomHidePayload,
  IRoomImagesQuery,
  IRoomInfoQuery,
  IRoomLeavePayload,
  IRoomMediaConfirmResponse,
  IRoomMediaConfirmPayload,
  IRoomMediaUploadPayload,
  IRoomMediaUploadResponse,
  IRoomMuteUserPayload,
  IRoomNameExistsQuery,
  IRoomRolesQuery,
  IRoomSaveRoomSettingsPayload,
  IRoomUnmuteUserPayload,
  ResponsePromise,
} from "../types";

class RoomResource extends BaseResource {
  /**
   * @description Gets all rooms for admin (admin permission required)
   * accepts query with optional types filter
   */
  roomAdminRooms(
    query: IRoomAdminRoomsQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.adminRooms${this.addQuery(query)}`;
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
   * @description Cleans message history from a room
   * accepts payload with roomId and history cleaning options
   */
  roomCleanHistory(
    payload: IRoomCleanHistoryPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.cleanHistory`;
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
   * @description Gets information about a room
   * accepts query with roomId/roomName and optional fields
   */
  roomInfo(
    query: IRoomInfoQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.info${this.addQuery(query)}`;
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
   * @description Gets discussions in a room
   * accepts query with roomId/roomName and pagination params
   */
  roomGetDiscussions(
    query: IRoomGetDiscussionsQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.getDiscussions${this.addQuery(query)}`;
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
   * @description Gets all rooms the user has access to
   * accepts query with pagination and fields params
   */
  roomGet(
    query?: IRoomGetQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IRoomsGetResponse> {
    const path = `/rooms.get${this.addQuery(query)}`;
    return this.client.request<IRoomsGetResponse>(
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
   * @description Leaves a room
   * accepts payload with roomId
   */
  roomLeave(
    payload: IRoomLeavePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.leave`;
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
   * @description Deletes a room
   * accepts payload with roomId or roomName
   */
  roomDelete(
    payload: IRoomDeletePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.delete`;
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
   * @description Favorites or unfavorites a room
   * accepts payload with favorite boolean and roomId
   */
  roomFavorite(
    payload: IRoomFavoritePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.favorite`;
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
   * @description Autocomplete room names for channels and private groups
   * accepts query with selector string
   */
  roomAutocompleteChannelAndPrivate(
    query: IRoomAutocompleteChannelAndPrivateQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.autocomplete.channelAndPrivate${this.addQuery(query)}`;
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
   * @description Admin autocomplete for room names (admin permission required)
   * accepts query with selector string
   */
  roomAutocompleteAdminRooms(
    query: IRoomAutocompleteAdminRoomsQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.autocomplete.adminRooms${this.addQuery(query)}`;
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
   * @description Gets admin information for a specific room
   * accepts query with rid
   */
  roomAdminRoomsGetRoom(
    query: IRoomAdminRoomsGetRoomQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.adminRooms.getRoom${this.addQuery(query)}`;
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
   * @description Saves room settings
   * accepts payload with roomId and various room settings
   */
  roomSaveRoomSettings(
    payload: IRoomSaveRoomSettingsPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.saveRoomSettings`;
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
   * @description Checks if a room name exists
   * accepts query with roomName
   */
  roomNameExists(
    query: IRoomNameExistsQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.nameExists${this.addQuery(query)}`;
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
   * @description Changes room archive state
   * accepts payload with rid and action
   */
  roomChangeArchivationState(
    payload: IRoomChangeArchivationStatePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.changeArchivationState`;
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
   * @description Exports room data
   * accepts payload with rid, type, and export options
   */
  roomExport(
    payload: IRoomExportPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.export`;
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
   * @description Mutes a user in a room
   * accepts payload with roomId and userId/username
   */
  roomMuteUser(
    payload: IRoomMuteUserPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.muteUser`;
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
   * @description Unmutes a user in a room
   * accepts payload with roomId and userId/username
   */
  roomUnmuteUser(
    payload: IRoomUnmuteUserPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.unmuteUser`;
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
   * @description Gets images from a room
   * accepts query with roomId/roomName and pagination params
   */
  roomImages(
    query: IRoomImagesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.images${this.addQuery(query)}`;
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
   * @description Audits room members (admin permission required)
   * accepts query with roomId and pagination params
   */
  roomAuditMembers(
    query: IRoomAuditMembersQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/audit/rooms.members${this.addQuery(query)}`;
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
   * @description Hides a room from the user's list
   * accepts payload with roomId
   */
  roomHide(
    payload: IRoomHidePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.hide`;
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
   * @description Uploads media file to a room
   * accepts payload with rid, file, and optional msg
   */
  roomMediaUpload(
    payload: IRoomMediaUploadPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IRoomMediaUploadResponse> {
    const { rid, file, msg } = payload;
    const path = `/rooms.media/${rid}`;

    const formData = new FormData();
    formData.append("file", file);
    if (msg) {
      formData.append("msg", msg);
    }
    return this.client.request<IRoomMediaUploadResponse>(
      "POST",
      path,
      formData,
      {},
      customHeaders,
      true,
      signal,
    ); // true for multipart
  }

  /**
   * @description Confirms media upload to a room
   * accepts payload with rid, fileId, and optional msg/tmid
   */
  roomMediaConfirm(
    payload: IRoomMediaConfirmPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IRoomMediaConfirmResponse> {
    const { rid, fileId } = payload;
    const path = `/rooms.mediaConfirm/${rid}/${fileId}`;
    return this.client.request<IRoomMediaConfirmResponse>(
      "POST",
      path,
      {},
      {},
      customHeaders,
      false,
      signal,
    );
  }

  /**
   * @description Gets user roles in a room
   * accepts query with roomId or roomName
   */
  roomRoles(
    query: IRoomRolesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.roles${this.addQuery(query)}`;
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
   * @description Autocomplete room names with pagination
   * accepts query with selector and pagination params
   */
  roomAutocompleteChannelAndPrivateWithPagination(
    query: IRoomAutocompleteChannelAndPrivateWithPaginationQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/rooms.autocomplete.channelAndPrivate.withPagination${this.addQuery(query)}`;
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
}

export default RoomResource;
