import { RocketChatClient } from "../client";
import { RocketChatResponse, DirectMessage } from "../types";

export class DirectMessageResource {
  constructor(private client: RocketChatClient) {}

  /**
   * Create a direct message session
   */
  async create(
    username: string,
  ): Promise<RocketChatResponse<{ room: DirectMessage }>> {
    return this.client.post("/dm.create", {
      username,
    });
  }

  /**
   * Get direct message information
   */
  async info(
    roomId?: string,
    username?: string,
  ): Promise<RocketChatResponse<{ room: DirectMessage }>> {
    const params: any = {};
    if (roomId) params.roomId = roomId;
    if (username) params.username = username;

    return this.client.get("/dm.info", params);
  }

  /**
   * List direct messages
   */
  async list(
    offset = 0,
    count = 50,
    sort?: Record<string, number>,
  ): Promise<RocketChatResponse<{ ims: DirectMessage[] }>> {
    return this.client.get("/dm.list", {
      offset,
      count,
      sort: sort ? JSON.stringify(sort) : undefined,
    });
  }

  /**
   * List everyone on the server
   */
  async listEveryone(
    offset = 0,
    count = 50,
    sort?: Record<string, number>,
  ): Promise<RocketChatResponse<{ ims: DirectMessage[] }>> {
    return this.client.get("/dm.list.everyone", {
      offset,
      count,
      sort: sort ? JSON.stringify(sort) : undefined,
    });
  }

  /**
   * Get direct message history
   */
  async history(
    roomId: string,
    latest?: Date,
    oldest?: Date,
    inclusive?: boolean,
    offset = 0,
    count = 20,
  ): Promise<RocketChatResponse<{ messages: any[] }>> {
    const params: any = {
      roomId,
      offset,
      count,
    };

    if (latest) params.latest = latest.toISOString();
    if (oldest) params.oldest = oldest.toISOString();
    if (inclusive !== undefined) params.inclusive = inclusive;

    return this.client.get("/dm.history", params);
  }

  /**
   * Get direct message counters
   */
  async counters(
    roomId?: string,
    username?: string,
  ): Promise<
    RocketChatResponse<{
      joined: boolean;
      members: number;
      unreads: number;
      unreadsFrom: Date;
      msgs: number;
      latest: Date;
      userMentions: number;
    }>
  > {
    const params: any = {};
    if (roomId) params.roomId = roomId;
    if (username) params.username = username;

    return this.client.get("/dm.counters", params);
  }

  /**
   * Get direct message members
   */
  async members(
    roomId?: string,
    username?: string,
    offset = 0,
    count = 50,
  ): Promise<RocketChatResponse<{ members: any[] }>> {
    const params: any = {
      offset,
      count,
    };
    if (roomId) params.roomId = roomId;
    if (username) params.username = username;

    return this.client.get("/dm.members", params);
  }

  /**
   * Get direct message messages
   */
  async messages(
    roomId?: string,
    username?: string,
    offset = 0,
    count = 20,
    sort?: Record<string, number>,
  ): Promise<RocketChatResponse<{ messages: any[] }>> {
    const params: any = {
      offset,
      count,
    };
    if (roomId) params.roomId = roomId;
    if (username) params.username = username;
    if (sort) params.sort = JSON.stringify(sort);

    return this.client.get("/dm.messages", params);
  }

  /**
   * Close a direct message
   */
  async close(roomId?: string, username?: string): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (username) data.username = username;

    return this.client.post("/dm.close", data);
  }

  /**
   * Hide a direct message
   */
  async hide(roomId?: string, username?: string): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (username) data.username = username;

    return this.client.post("/dm.hide", data);
  }

  /**
   * Open a direct message
   */
  async open(roomId?: string, username?: string): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (username) data.username = username;

    return this.client.post("/dm.open", data);
  }
}
