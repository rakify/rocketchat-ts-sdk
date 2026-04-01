import { BaseResource } from "./baseResource";
import type {
  IChatMethodCallPayload,
  IHeaders,
  ILoadHistoryAPIResponse,
  IParsedLoadHistoryAPIResponse,
  ResponsePromise,
} from "../types";

// # Description:
// #   - **MethodCall**: Handles method calls to the Rocket.Chat server.

class MethodCallResource extends BaseResource {
  /**
   * @description Calls a method on the server,
   * accepts payload with message containing method details
   */
  async loadHistory(
    payload: IChatMethodCallPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IParsedLoadHistoryAPIResponse> {
    const path = `/method.call/loadHistory`;
    const response = await this.client.request<ILoadHistoryAPIResponse>(
      "POST",
      path,
      payload,
      {},
      customHeaders,
      false,
      signal,
    );

    if (response.success && response.data) {
      return {
        success: true,
        data: {
          ...response.data,
          message: JSON.parse(response.data.message),
        },
      };
    }

    return {
      success: response.success,
      error: response.error,
      errorType: response.errorType,
    };
  }
}

export default MethodCallResource;
