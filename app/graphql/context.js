import { RuralPaymentsAgencyLandAPI } from "../data-sources/rural-payments-agency-land-api.js";

export function createContext({ cache }) {
  return async function context() {
    return {
      dataSources: {
        ruralPaymentsAgencyLandAPI: new RuralPaymentsAgencyLandAPI(),
      },
    };
  };
}
