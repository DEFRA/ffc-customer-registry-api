import { RESTDataSource } from "@apollo/datasource-rest";

export class RuralPaymentsPortalAPI extends RESTDataSource {
  constructor({ cache }) {
    super({ cache });

    // Cookie saved and read from top-level Apollo server cache to be shared across requests
    this.getCookie = async () => cache.get("RuralPaymentsPortalAPICookie");
    this.setCookie = async (value) =>
      cache.set("RuralPaymentsPortalAPICookie", value);

    this.baseURL = process.env.RURAL_PAYMENTS_API_URL;
  }

  async willSendRequest(_path, request) {
    const value = await this.getCookie();

    // If there's no cookie in the cache, get one from somewhere

    if (value) {
      request.headers["Cookie"] = value;
    }
  }

  async parseBody(response) {
    // If there's an auth error, get a new cookie

    if (response.headers.has("set-cookie")) {
      const cookie = new RegExp("seed=[^;]+;").exec(
        response.headers.get("set-cookie")
      )[0];

      await this.setCookie(cookie);
    }

    return super.parseBody(response);
  }
}
