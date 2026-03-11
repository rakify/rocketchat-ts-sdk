import { BaseResource } from "./baseResource";
import type {
  IDmClosePayload,
  IDmCountersQuery,
  IDmCreatePayload,
  IDmDeletePayload,
  IDmFilesQuery,
  IDmHistoryQuery,
  IDmListEveryoneQuery,
  IDmMembersQuery,
  IDmMessagesOthersQuery,
  IDmMessagesQuery,
  IDmOpenPayload,
  IDmSetTopicPayload,
  IHeaders,
  ResponsePromise,
} from "../types";


// # Description:
// #   - **DM**: Create and manage direct messages. The DM (dm.*) and IM (im.*) endpoint groups provide identical functionality.
// #     For example, im.close and dm.close execute the same operation.

class DmResource extends BaseResource {
    /**
     * @description Closes a direct message,
     * accepts payload with roomId
     */
    close(
        payload: IDmClosePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.close`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Gets counters and information for a DM,
     * accepts query with roomId and optional userId
     */
    counters(
        query: IDmCountersQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.counters${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Creates a direct message session,
     * accepts payload with username, usernames, or excludeSelf
     */
    create(
        payload: IDmCreatePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.create`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Deletes a direct message,
     * accepts payload with roomId or username
     */
    delete(
        payload: IDmDeletePayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.delete`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Gets files in a DM,
     * accepts query with roomId or username and optional pagination/filtering params
     */
    files(query: IDmFilesQuery, customHeaders: IHeaders = {}): ResponsePromise {
        const path = `/api/v1/dm.files${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets message history from a DM,
     * accepts query with roomId or username and optional pagination/filtering params
     */
    history(
        query: IDmHistoryQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.history${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Lists all DMs in the workspace (admin permission required),
     * accepts query with optional pagination/filtering params
     */
    listEveryone(
        query: IDmListEveryoneQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.list.everyone${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets members of a DM,
     * accepts query with roomId or username and optional pagination params
     */
    members(
        query: IDmMembersQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.members${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets messages in a DM,
     * accepts query with roomId or username and optional filtering/pagination params
     */
    messages(
        query: IDmMessagesQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.messages${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Gets messages in a DM from others' perspective (admin permission required),
     * accepts query with roomId and optional pagination/filtering params
     */
    messagesOthers(
        query: IDmMessagesOthersQuery,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.messages.others${this.addQuery(query)}`;
        return this.client.request("GET", path, {}, {}, customHeaders);
    }

    /**
     * @description Opens a direct message,
     * accepts payload with roomId
     */
    open(
        payload: IDmOpenPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.open`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }

    /**
     * @description Sets the topic of a DM,
     * accepts payload with roomId and topic
     */
    setTopic(
        payload: IDmSetTopicPayload,
        customHeaders: IHeaders = {},
    ): ResponsePromise {
        const path = `/api/v1/dm.setTopic`;
        return this.client.request("POST", path, payload, {}, customHeaders);
    }
}

export default DmResource;
