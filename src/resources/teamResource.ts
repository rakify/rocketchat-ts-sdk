import { BaseResource } from "./baseResource";
import type {
  IHeaders,
  ITeamAddRoomPayload,
  ITeamInfoQuery,
  ITeamListAllQuery,
  ITeamListChildrenQuery,
  ITeamListQuery,
  ITeamListRoomsOfUserQuery,
  ITeamListRoomsQuery,
  ITeamRemoveRoomPayload,
  ITeamUpdateRoomPayload,
  ResponsePromise,
} from "../types";

class TeamResource extends BaseResource {
  /**
   * @description Lists all teams (admin permission required)
   * accepts query with pagination params
   */
  teamListAll(
    query?: ITeamListAllQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/teams.listAll${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Lists teams the user is a member of
   * accepts query with pagination and filtering params
   */
  teamList(
    query?: ITeamListQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/teams.list${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Gets information about a team
   * accepts query with teamId or teamName
   */
  teamInfo(
    query: ITeamInfoQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/teams.info${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Adds rooms to a team
   * accepts payload with teamId/teamName and rooms array
   */
  teamAddRoom(
    payload: ITeamAddRoomPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/teams.addRoom`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Removes a room from a team
   * accepts payload with teamId/teamName and roomId
   */
  teamRemoveRoom(
    payload: ITeamRemoveRoomPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/teams.removeRoom`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Updates a room in a team
   * accepts payload with roomId and isDefault flag
   */
  teamUpdateRoom(
    payload: ITeamUpdateRoomPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/teams.updateRoom`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Lists rooms in a team
   * accepts query with teamId/teamName and pagination params
   */
  teamListRooms(
    query: ITeamListRoomsQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/teams.listRooms${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Lists rooms of a specific user in a team
   * accepts query with teamId/teamName, userId, and pagination params
   */
  teamListRoomsOfUser(
    query: ITeamListRoomsOfUserQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/teams.listRoomsOfUser${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Lists rooms and discussions in a team
   * accepts query with teamId/teamName and pagination/filtering params
   */
  teamListChildren(
    query: ITeamListChildrenQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/teams.listChildren${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }
}

export default TeamResource;
