import { RocketChatClient } from "./client";
import { RocketChatConfig } from "./types";
import { ChannelResource } from "./resources/channelResource";
import { ChatResource } from "./resources/chatResource";
import { DirectMessageResource } from "./resources/dmResource";
import { GroupResource } from "./resources/groupResource";
import { UserResource } from "./resources/userResource";

export class RocketChatSDK {
  private client: RocketChatClient;
  public channels: ChannelResource;
  public chat: ChatResource;
  public dm: DirectMessageResource;
  public groups: GroupResource;
  public users: UserResource;

  constructor(config: RocketChatConfig) {
    this.client = new RocketChatClient(config);
    this.channels = new ChannelResource(this.client);
    this.chat = new ChatResource(this.client);
    this.dm = new DirectMessageResource(this.client);
    this.groups = new GroupResource(this.client);
    this.users = new UserResource(this.client);
  }

  /**
   * Login to RocketChat
   */
  async login(username?: string, password?: string) {
    return this.client.login(username, password);
  }

  /**
   * Logout from RocketChat
   */
  async logout() {
    return this.client.logout();
  }

  /**
   * Get the underlying client for direct API access
   */
  getClient() {
    return this.client;
  }
}

// Export all types and classes
export * from "./types";
export { RocketChatClient } from "./client";
export { ChannelResource } from "./resources/channelResource";
export { ChatResource } from "./resources/chatResource";
export { DirectMessageResource } from "./resources/dmResource";
export { GroupResource } from "./resources/groupResource";
export { UserResource } from "./resources/userResource";
