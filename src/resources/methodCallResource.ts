import { BaseResource } from "./baseResource";
import type { IChatMethodCallPayload, IHeaders, ResponsePromise } from "../types";

// # Description:
// #   - **MethodCall**: Handles method calls to the Rocket.Chat server.

class MethodCallResource extends BaseResource {
    /**
     * @description Calls a method on the server,
     * accepts payload with message containing method details
     */
    loadHistory(
        payload: IChatMethodCallPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/method.call/loadHistory`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }
}

export default MethodCallResource;
