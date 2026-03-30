import { BaseResource } from "./baseResource";
import type { IDirectoryQuery, IHeaders, ResponsePromise } from "../types";

class DirectoryResource extends BaseResource {
  /**
   * @description Searches the workspace directory
   * accepts query with search and pagination params
   */
  directory(
    query?: IDirectoryQuery,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise {
    const path = `/directory${this.addQuery(query)}`;
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

export default DirectoryResource;
