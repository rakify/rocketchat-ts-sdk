import { RocketChatClient } from "../client";
import { RocketChatResponse, Channel } from "../types";

export class ChannelResource {
  constructor(private client: RocketChatClient) {}

  /**
   * Create a new public channel
   */
  async create(
    name: string,
    members?: string[],
    readOnly = false,
  ): Promise<RocketChatResponse<{ channel: Channel }>> {
    return this.client.post("/channels.create", {
      name,
      members,
      readOnly,
    });
  }

  /**
   * Get channel information
   */
  async info(
    roomId?: string,
    roomName?: string,
  ): Promise<RocketChatResponse<{ channel: Channel }>> {
    const params: any = {};
    if (roomId) params.roomId = roomId;
    if (roomName) params.roomName = roomName;

    return this.client.get("/channels.info", params);
  }

  /**
   * List all channels
   */
  async list(
    offset = 0,
    count = 50,
    sort?: Record<string, number>,
  ): Promise<RocketChatResponse<{ channels: Channel[] }>> {
    return this.client.get("/channels.list", {
      offset,
      count,
      sort: sort ? JSON.stringify(sort) : undefined,
    });
  }

  /**
   * Join a channel
   */
  async join(
    roomId?: string,
    roomName?: string,
    joinCode?: string,
  ): Promise<RocketChatResponse<{ channel: Channel }>> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;
    if (joinCode) data.joinCode = joinCode;

    return this.client.post("/channels.join", data);
  }

  /**
   * Leave a channel
   */
  async leave(roomId?: string, roomName?: string): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/channels.leave", data);
  }

  /**
   * Invite user to channel
   */
  async invite(
    roomId: string,
    userId: string,
  ): Promise<RocketChatResponse<{ channel: Channel }>> {
    return this.client.post("/channels.invite", {
      roomId,
      userId,
    });
  }

  /**
   * Kick user from channel
   */
  async kick(
    roomId: string,
    userId: string,
  ): Promise<RocketChatResponse<{ channel: Channel }>> {
    return this.client.post("/channels.kick", {
      roomId,
      userId,
    });
  }

  /**
   * Archive a channel
   */
  async archive(
    roomId?: string,
    roomName?: string,
  ): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/channels.archive", data);
  }

  /**
   * Unarchive a channel
   */
  async unarchive(
    roomId?: string,
    roomName?: string,
  ): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/channels.unarchive", data);
  }

  /**
   * Delete a channel
   */
  async delete(
    roomId?: string,
    roomName?: string,
  ): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/channels.delete", data);
  }

  /**
   * Set channel topic
   */
  async setTopic(
    roomId: string,
    topic: string,
  ): Promise<RocketChatResponse<{ topic: string }>> {
    return this.client.post("/channels.setTopic", {
      roomId,
      topic,
    });
  }

  /**
   * Set channel description
   */
  async setDescription(
    roomId: string,
    description: string,
  ): Promise<RocketChatResponse<{ description: string }>> {
    return this.client.post("/channels.setDescription", {
      roomId,
      description,
    });
  }

  /**
   * Rename channel
   */
  async rename(
    roomId: string,
    name: string,
  ): Promise<RocketChatResponse<{ channel: Channel }>> {
    return this.client.post("/channels.rename", {
      roomId,
      name,
    });
  }
}
