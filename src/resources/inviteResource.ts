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
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/findOrCreateInvite`;
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
   * @description Lists all invites in the workspace
   * accepts query (may be empty)
   */
  listInvites(
    query: IListInvitesQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/listInvites${this.addQuery(query)}`;
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
   * @description Uses an invite token to join a room
   * accepts payload with token
   */
  useInvite(
    payload: IUseInvitePayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/useInvite`;
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
   * @description Validates an invite token
   * accepts payload with token
   */
  validateInviteToken(
    payload: IValidateInviteTokenPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/validateInviteToken`;
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

export default InviteResource;
