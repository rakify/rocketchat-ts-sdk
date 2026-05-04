import { BaseResource } from "./baseResource";
import type {
  IChatMethodCallPayload,
  IGetRoomByTypeAndNameAPIResponse,
  IHeaders,
  ILoadHistoryAPIResponse,
  IParsedGetRoomByTypeAndNameAPIResponse,
  IParsedLoadHistoryAPIResponse,
  MethodName,
  ResponsePromise,
} from "../types";

// # Description:
// #   - **MethodCall**: Handles method calls to the Rocket.Chat server.

class MethodCallResource extends BaseResource {
  /**
   * @description Calls a load method on the server (loadHistory, loadSurroundingMessages, loadNextMessages),
   * accepts payload with message containing method details
   */
  async callMethod(
    methodName: MethodName,
    payload: IChatMethodCallPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IParsedLoadHistoryAPIResponse> {
    const path = `/method.call/${methodName}`;
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

  /**
   * @description Calls the getRoomByTypeAndName method on the server,
   * accepts payload with message containing method details
   */
  async getRoomByTypeAndName(
    payload: IChatMethodCallPayload,
    customHeaders: IHeaders = {},
    signal?: AbortSignal,
  ): ResponsePromise<IParsedGetRoomByTypeAndNameAPIResponse> {
    const path = `/method.call/getRoomByTypeAndName`;
    const response =
      await this.client.request<IGetRoomByTypeAndNameAPIResponse>(
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
