import { RESTDataSource } from "@apollo/datasource-rest";

export class RESTDataSourceWithCookies extends RESTDataSource {
  constructor({ cache, cookieName }) {
    super({ cache });
    this.cache = cache;

    this.cacheKey = `${this.constructor.name}Cookie`;
    this.cookieName = cookieName;
  }

  async willSendRequest(_path, request) {
    const value = await this.cache.get(this.cacheKey);
    if (value) {
      request.headers["Cookie"] = value;
    }
  }

  async parseBody(response) {
    if (response.headers.has("set-cookie")) {
      this.cache.set(
        this.cacheKey,
        new RegExp(`${this.cookieName}=[^;]+;`).exec(
          response.headers.get("set-cookie")
        )[0]
      );
    }

    return super.parseBody(response);
  }
}
