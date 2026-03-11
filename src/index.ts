import { RocketChatClient } from "./client";
import { RocketChatConfig } from "./types";
import ChannelResource from "./resources/channelResource";
import ChatResource from "./resources/chatResource";
import DirectoryResource from "./resources/directoryResource";
import DmResource from "./resources/dmResource";
import GroupResource from "./resources/groupResource";
import InviteResource from "./resources/inviteResource";
import MessagingResource from "./resources/messagingResource";
import MethodCallResource from "./resources/methodCallResource";
import RoomResource from "./resources/roomResource";
import SubscriptionResource from "./resources/subscriptionResource";
import TeamResource from "./resources/teamResource";
import ChatUserResource from "./resources/userResource";

export class RocketChatSDK {
  private client: RocketChatClient;
  public channels: ChannelResource;
  public chat: ChatResource;
  public directory: DirectoryResource;
  public dm: DmResource;
  public groups: GroupResource;
  public invites: InviteResource;
  public messaging: MessagingResource;
  public methods: MethodCallResource;
  public rooms: RoomResource;
  public subscriptions: SubscriptionResource;
  public teams: TeamResource;
  public users: ChatUserResource;

  constructor(config: RocketChatConfig) {
    this.client = new RocketChatClient(config);
    this.channels = new ChannelResource(this.client);
    this.chat = new ChatResource(this.client);
    this.directory = new DirectoryResource(this.client);
    this.dm = new DmResource(this.client);
    this.groups = new GroupResource(this.client);
    this.invites = new InviteResource(this.client);
    this.messaging = new MessagingResource(this.client);
    this.methods = new MethodCallResource(this.client);
    this.rooms = new RoomResource(this.client);
    this.subscriptions = new SubscriptionResource(this.client);
    this.teams = new TeamResource(this.client);
    this.users = new ChatUserResource(this.client);
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
export { default as ChannelResource } from "./resources/channelResource";
export { default as ChatResource } from "./resources/chatResource";
export { default as DirectoryResource } from "./resources/directoryResource";
export { default as DmResource } from "./resources/dmResource";
export { default as GroupResource } from "./resources/groupResource";
export { default as InviteResource } from "./resources/inviteResource";
export { default as MessagingResource } from "./resources/messagingResource";
export { default as MethodCallResource } from "./resources/methodCallResource";
export { default as RoomResource } from "./resources/roomResource";
export { default as SubscriptionResource } from "./resources/subscriptionResource";
export { default as TeamResource } from "./resources/teamResource";
export { default as ChatUserResource } from "./resources/userResource";
