import hapiApollo from "@as-integrations/hapi";

import { server } from "./server.js";
import { apolloServer } from "./graphql/server.js";

// DataSources
import { PersonAPI } from "./data-sources/person-api.js";

const init = async () => {
  await apolloServer.start();

  await server.register({
    plugin: hapiApollo.default,
    options: {
      async context() {
        const { cache } = apolloServer;

        return {
          dataSources: {
            personAPI: new PersonAPI({ cache }),
          },
        };
      },
      apolloServer,
      path: "/graphql",
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
