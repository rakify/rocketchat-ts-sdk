import { RocketChatClient } from "../client";
import { RocketChatResponse, Message } from "../types";

export class ChatResource {
  constructor(private client: RocketChatClient) {}

  /**
   * Send a message
   */
  async postMessage(
    roomId: string,
    text: string,
    alias?: string,
    emoji?: string,
    avatar?: string,
  ): Promise<RocketChatResponse<{ message: Message }>> {
    return this.client.post("/chat.postMessage", {
      roomId,
      text,
      alias,
      emoji,
      avatar,
    });
  }

  /**
   * Update a message
   */
  async update(
    roomId: string,
    msgId: string,
    text: string,
  ): Promise<RocketChatResponse<{ message: Message }>> {
    return this.client.post("/chat.update", {
      roomId,
      msgId,
      text,
    });
  }

  /**
   * Delete a message
   */
  async delete(
    roomId: string,
    msgId: string,
    asUser?: boolean,
  ): Promise<RocketChatResponse> {
    return this.client.post("/chat.delete", {
      roomId,
      msgId,
      asUser,
    });
  }

  /**
   * Get message
   */
  async getMessage(
    msgId: string,
  ): Promise<RocketChatResponse<{ message: Message }>> {
    return this.client.get("/chat.getMessage", { msgId });
  }

  /**
   * Pin a message
   */
  async pinMessage(
    messageId: string,
  ): Promise<RocketChatResponse<{ message: Message }>> {
    return this.client.post("/chat.pinMessage", {
      messageId,
    });
  }

  /**
   * Unpin a message
   */
  async unPinMessage(messageId: string): Promise<RocketChatResponse> {
    return this.client.post("/chat.unPinMessage", {
      messageId,
    });
  }

  /**
   * Star a message
   */
  async starMessage(messageId: string): Promise<RocketChatResponse> {
    return this.client.post("/chat.starMessage", {
      messageId,
    });
  }

  /**
   * Unstar a message
   */
  async unStarMessage(messageId: string): Promise<RocketChatResponse> {
    return this.client.post("/chat.unStarMessage", {
      messageId,
    });
  }

  /**
   * React to a message
   */
  async react(
    messageId: string,
    emoji: string,
    shouldReact = true,
  ): Promise<RocketChatResponse> {
    return this.client.post("/chat.react", {
      messageId,
      emoji,
      shouldReact,
    });
  }

  /**
   * Get pinned messages
   */
  async getPinnedMessages(
    roomId: string,
    offset = 0,
    count = 50,
  ): Promise<RocketChatResponse<{ messages: Message[] }>> {
    return this.client.get("/chat.getPinnedMessages", {
      roomId,
      offset,
      count,
    });
  }

  /**
   * Get starred messages
   */
  async getStarredMessages(
    roomId: string,
    offset = 0,
    count = 50,
  ): Promise<RocketChatResponse<{ messages: Message[] }>> {
    return this.client.get("/chat.getStarredMessages", {
      roomId,
      offset,
      count,
    });
  }

  /**
   * Search messages
   */
  async search(
    roomId: string,
    searchText: string,
    count = 20,
  ): Promise<RocketChatResponse<{ messages: Message[] }>> {
    return this.client.get("/chat.search", {
      roomId,
      searchText,
      count,
    });
  }

  /**
   * Send typing notification
   */
  async sendTyping(
    roomId: string,
    username: string,
    typing = true,
  ): Promise<RocketChatResponse> {
    return this.client.post("/chat.sendTyping", {
      roomId,
      username,
      typing,
    });
  }

  /**
   * Ignore user
   */
  async ignoreUser(
    roomId: string,
    userId: string,
    ignore = true,
  ): Promise<RocketChatResponse> {
    return this.client.get("/chat.ignoreUser", {
      roomId,
      userId,
      ignore,
    });
  }
}
