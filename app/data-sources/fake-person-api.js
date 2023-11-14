import { RESTDataSourceWithCookies } from "./rest-data-source-with-cookies.js";

export class FakePersonAPI extends RESTDataSourceWithCookies {
  constructor({ cache }) {
    super({ cookieName: "seed", cache });
    this.baseURL = "http://localhost:3000";
  }

  async getPerson() {
    return this.get("/fake-person");
  }
}
