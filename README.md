# RocketChat SDK

A comprehensive TypeScript SDK for the RocketChat API, providing easy-to-use methods for interacting with RocketChat servers.

## Features

- 🚀 **Full TypeScript support** with comprehensive type definitions
- 📦 **Modular architecture** with organized resource classes
- 🔐 **Authentication handling** with automatic token management
- 🌐 **HTTP client abstraction** built on Axios
- 📚 **Complete API coverage** for channels, groups, direct messages, users, and chat
- 🛠️ **Built-in error handling** with structured response types
- 📖 **Extensive documentation** with code examples

## Installation

```bash
npm install rocketchat-ts-sdk
# or
yarn add rocketchat-ts-sdk
# or
pnpm add rocketchat-ts-sdk
```

## Quick Start

### Basic Setup

```typescript
import { RocketChatSDK } from "rocketchat-ts-sdk";

const rocketChat = new RocketChatSDK({
  baseUrl: "https://your-rocketchat-server.com",
  username: "your-username",
  password: "your-password",
});

// Login
const loginResult = await rocketChat.login();
if (loginResult.success) {
  console.log("Logged in successfully!");
}
```

### Using Auth Token

```typescript
const rocketChat = new RocketChatSDK({
  baseUrl: "https://your-rocketchat-server.com",
  userId: "your-user-id",
  authToken: "your-auth-token",
});
```

## API Reference

### Chat Operations

#### Send a Message

```typescript
const result = await rocketChat.chat.postMessage(
  "roomId",
  "Hello, World!",
  "BotAlias", // optional alias
  "🚀", // optional emoji
  "avatar-url", // optional avatar
);

if (result.success) {
  console.log("Message sent:", result.data.message);
}
```

#### Update a Message

```typescript
await rocketChat.chat.update("roomId", "messageId", "Updated message text");
```

#### Delete a Message

```typescript
await rocketChat.chat.delete("roomId", "messageId");
```

#### React to a Message

```typescript
await rocketChat.chat.react("messageId", "👍", true); // add reaction
await rocketChat.chat.react("messageId", "👍", false); // remove reaction
```

### Channel Operations

#### Create a Channel

```typescript
const result = await rocketChat.channels.create(
  "general-discussion",
  ["user1", "user2"], // optional members
  false, // readOnly flag
);
```

#### Get Channel Info

```typescript
const info = await rocketChat.channels.info("channelId");
// or by name
const info = await rocketChat.channels.info(undefined, "general");
```

#### Join a Channel

```typescript
await rocketChat.channels.join("channelId");
// or by name
await rocketChat.channels.join(undefined, "general");
```

#### List All Channels

```typescript
const channels = await rocketChat.channels.list(0, 50); // offset, count
```

#### Invite User to Channel

```typescript
await rocketChat.channels.invite("channelId", "userId");
```

### Group Operations

#### Create a Private Group

```typescript
const result = await rocketChat.groups.create(
  "private-team",
  ["user1", "user2"],
  false, // readOnly
);
```

#### Get Group Members

```typescript
const members = await rocketChat.groups.members("groupId");
```

### Direct Message Operations

#### Create Direct Message

```typescript
const dm = await rocketChat.dm.create("username");
```

#### Get DM History

```typescript
const history = await rocketChat.dm.history(
  "roomId",
  new Date(), // latest
  undefined, // oldest
  true, // inclusive
  0, // offset
  20, // count
);
```

### User Operations

#### Get User Info

```typescript
const user = await rocketChat.users.info("userId");
// or by username
const user = await rocketChat.users.info(undefined, "john.doe");
```

#### Create User

```typescript
const newUser = await rocketChat.users.create(
  "john.doe", // username
  "john@example.com", // email
  "securePassword123", // password
  "John Doe", // name
  true, // active
  ["user"], // roles
  true, // joinDefaultChannels
  false, // requirePasswordChange
);
```

#### Set User Status

```typescript
await rocketChat.users.setStatus("Working on awesome features!", "busy");
```

#### List All Users

```typescript
const users = await rocketChat.users.list(0, 50);
```

## Configuration Options

```typescript
interface RocketChatConfig {
  baseUrl: string; // RocketChat server URL
  userId?: string; // User ID (for token auth)
  authToken?: string; // Auth token (for token auth)
  username?: string; // Username (for password auth)
  password?: string; // Password (for password auth)
}
```

## Response Format

All API methods return a standardized response format:

```typescript
interface RocketChatResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  errorType?: string;
}
```

### Handling Responses

```typescript
const result = await rocketChat.chat.postMessage("roomId", "Hello!");

if (result.success) {
  // Success case
  console.log("Message:", result.data.message);
} else {
  // Error case
  console.error("Error:", result.error);
}
```

## Error Handling

The SDK provides comprehensive error handling:

```typescript
try {
  const result = await rocketChat.channels.create("test-channel");
  if (!result.success) {
    console.error("Failed to create channel:", result.error);
  }
} catch (error) {
  console.error("Network or unexpected error:", error);
}
```

## Advanced Usage

### Direct Client Access

For advanced use cases, you can access the underlying HTTP client:

```typescript
const client = rocketChat.getClient();
const customResult = await client.get("/custom-endpoint");
```

### Custom Headers and Configuration

The SDK uses Axios internally. You can extend functionality by accessing the client:

```typescript
const client = rocketChat.getClient();
// Add custom interceptors, headers, etc.
```

### Request Cancellation with AbortSignal

You can cancel requests using the optional `signal` parameter with AbortController:

```typescript
// Create an AbortController
const controller = new AbortController();
const { signal } = controller;

// Use the signal with any API method
const messagePromise = rocketChat.chat.getMessage(
  { msgId: "message-id" },
  {}, // custom headers
  signal, // optional AbortSignal
);

// Cancel the request if needed
controller.abort();

// The promise will reject with an AbortError
try {
  const result = await messagePromise;
} catch (error) {
  if (error.name === "AbortError") {
    console.log("Request was cancelled");
  }
}
```

## TypeScript Support

The SDK is built with TypeScript and provides comprehensive type definitions:

```typescript
import {
  RocketChatSDK,
  RocketChatConfig,
  Channel,
  Message,
  User,
} from "rocketchat-sdk";

// All types are fully typed
const config: RocketChatConfig = {
  baseUrl: "https://chat.example.com",
  username: "admin",
  password: "password",
};

const sdk = new RocketChatSDK(config);
```

## Building from Source

1. Clone the repository
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Test: `npm test`
5. Lint: `npm run lint`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Run the linter and tests
6. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- 📖 [API Documentation](https://developer.rocket.chat/reference/api)
- 🐛 [Report Issues](https://github.com/rakify/rocketchat-ts-sdk/issues)
- 💬 [Discussions](https://github.com/rakify/rocketchat-ts-sdk/discussions)

## Changelog

### v1.0.0

- Initial release
- Full TypeScript support
- Complete API coverage for core features
- Authentication handling
- Comprehensive error handling
