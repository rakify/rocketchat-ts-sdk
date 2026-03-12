import { BaseResource } from "./baseResource";
import type {
  IFindOrCreateInvitePayload,
  IHeaders,
  IListInvitesQuery,
  IUseInvitePayload,
  IValidateInviteTokenPayload,
  ResponsePromise,
} from "../types";

class InviteResource extends BaseResource {
  /**
   * @description Finds or creates an invite for a room
   * accepts payload with rid and invite options
   */
  findOrCreateInvite(
    payload: IFindOrCreateInvitePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/findOrCreateInvite`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Lists all invites in the workspace
   * accepts query (may be empty)
   */
  listInvites(
    query: IListInvitesQuery,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/listInvites${this.addQuery(query)}`;
    return this.client.request("GET", path, {}, {}, customHeaders);
  }

  /**
   * @description Uses an invite token to join a room
   * accepts payload with token
   */
  useInvite(
    payload: IUseInvitePayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/useInvite`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }

  /**
   * @description Validates an invite token
   * accepts payload with token
   */
  validateInviteToken(
    payload: IValidateInviteTokenPayload,
    customHeaders: IHeaders = {},
  ): ResponsePromise {
    const path = `/validateInviteToken`;
    return this.client.request("POST", path, payload, {}, customHeaders);
  }
}

export default InviteResource;
