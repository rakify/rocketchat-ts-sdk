import { RocketChatClient } from "../client";

export class BaseResource {
  protected client: RocketChatClient;

  constructor(client: RocketChatClient) {
    this.client = client;
  }

  protected addQuery(query?: Record<string, any>) {
    if (!query || Object.keys(query).length === 0) {
      return "";
    }

    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(query)) {
      if (value === undefined || value === null) continue;

      if (Array.isArray(value)) {
        for (const item of value) {
          params.append(`${key}[]`, String(item));
        }
        continue;
      }

      if (typeof value === "object") {
        params.append(key, JSON.stringify(value));
        continue;
      }

      params.append(key, String(value));
    }

    const qs = params.toString();
    return qs ? `?${qs}` : "";
  }
}
