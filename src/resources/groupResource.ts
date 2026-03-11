import { RocketChatClient } from "../client";
import { RocketChatResponse, Group } from "../types";

export class GroupResource {
  constructor(private client: RocketChatClient) {}

  /**
   * Create a new private group
   */
  async create(
    name: string,
    members?: string[],
    readOnly = false,
  ): Promise<RocketChatResponse<{ group: Group }>> {
    return this.client.post("/groups.create", {
      name,
      members,
      readOnly,
    });
  }

  /**
   * Get group information
   */
  async info(
    roomId?: string,
    roomName?: string,
  ): Promise<RocketChatResponse<{ group: Group }>> {
    const params: any = {};
    if (roomId) params.roomId = roomId;
    if (roomName) params.roomName = roomName;

    return this.client.get("/groups.info", params);
  }

  /**
   * List groups
   */
  async list(
    offset = 0,
    count = 50,
    sort?: Record<string, number>,
  ): Promise<RocketChatResponse<{ groups: Group[] }>> {
    return this.client.get("/groups.list", {
      offset,
      count,
      sort: sort ? JSON.stringify(sort) : undefined,
    });
  }

  /**
   * List all groups
   */
  async listAll(
    offset = 0,
    count = 50,
    sort?: Record<string, number>,
    fields?: Record<string, number>,
  ): Promise<RocketChatResponse<{ groups: Group[] }>> {
    const params: any = {
      offset,
      count,
    };
    if (sort) params.sort = JSON.stringify(sort);
    if (fields) params.fields = JSON.stringify(fields);

    return this.client.get("/groups.listAll", params);
  }

  /**
   * Invite user to group
   */
  async invite(
    roomId: string,
    userId: string,
  ): Promise<RocketChatResponse<{ group: Group }>> {
    return this.client.post("/groups.invite", {
      roomId,
      userId,
    });
  }

  /**
   * Kick user from group
   */
  async kick(
    roomId: string,
    userId: string,
  ): Promise<RocketChatResponse<{ group: Group }>> {
    return this.client.post("/groups.kick", {
      roomId,
      userId,
    });
  }

  /**
   * Leave a group
   */
  async leave(roomId?: string, roomName?: string): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/groups.leave", data);
  }

  /**
   * Archive a group
   */
  async archive(
    roomId?: string,
    roomName?: string,
  ): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/groups.archive", data);
  }

  /**
   * Unarchive a group
   */
  async unarchive(
    roomId?: string,
    roomName?: string,
  ): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/groups.unarchive", data);
  }

  /**
   * Delete a group
   */
  async delete(
    roomId?: string,
    roomName?: string,
  ): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/groups.delete", data);
  }

  /**
   * Close a group
   */
  async close(roomId?: string, roomName?: string): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/groups.close", data);
  }

  /**
   * Open a group
   */
  async open(roomId?: string, roomName?: string): Promise<RocketChatResponse> {
    const data: any = {};
    if (roomId) data.roomId = roomId;
    if (roomName) data.roomName = roomName;

    return this.client.post("/groups.open", data);
  }

  /**
   * Set group topic
   */
  async setTopic(
    roomId: string,
    topic: string,
  ): Promise<RocketChatResponse<{ topic: string }>> {
    return this.client.post("/groups.setTopic", {
      roomId,
      topic,
    });
  }

  /**
   * Set group description
   */
  async setDescription(
    roomId: string,
    description: string,
  ): Promise<RocketChatResponse<{ description: string }>> {
    return this.client.post("/groups.setDescription", {
      roomId,
      description,
    });
  }

  /**
   * Rename group
   */
  async rename(
    roomId: string,
    name: string,
  ): Promise<RocketChatResponse<{ group: Group }>> {
    return this.client.post("/groups.rename", {
      roomId,
      name,
    });
  }

  /**
   * Get group history
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

    return this.client.get("/groups.history", params);
  }

  /**
   * Get group members
   */
  async members(
    roomId?: string,
    roomName?: string,
    offset = 0,
    count = 50,
  ): Promise<RocketChatResponse<{ members: any[] }>> {
    const params: any = {
      offset,
      count,
    };
    if (roomId) params.roomId = roomId;
    if (roomName) params.roomName = roomName;

    return this.client.get("/groups.members", params);
  }
}
