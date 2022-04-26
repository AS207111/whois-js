import fetch from "node-fetch";
import ResponseError from "./ResponseError";
import { APIResponse } from "./types";

class Client {
  private _apiKey: string;

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error("No API key provided");
    }

    this._apiKey = apiKey;
  }

  public async lookup(ip: string): Promise<APIResponse> {
    try {
      const response = await fetch(
        `https://whois.as207111.net/api/lookup?ip_address=${encodeURI(ip)}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this._apiKey}`,
          },
        }
      );

      if (response.status !== 200) {
        switch (response.status) {
          case 503:
            throw new ResponseError(503, "Database Error");

          case 409:
            throw new ResponseError(409, "Lookup Error");

          case 401:
            throw new ResponseError(401, "Unauthorized");

          default:
            throw new ResponseError(
              response.status,
              (await response.text()).toString()
            );
        }
      }

      const data: APIResponse = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default Client;
