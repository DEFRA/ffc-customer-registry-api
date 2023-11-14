import { faker } from "@faker-js/faker/locale/en_GB";

export const fakePersonRoute = {
  method: "GET",
  path: "/fake-person",
  handler: (request, h) => {
    if (request.state.seed) {
      console.log(">>> /fake-person 🍪");
      faker.seed(Number(request.state.seed));
    } else {
      console.log(">>> /fake-person 🚫");
      h.state("seed", faker.seed().toString());
    }

    return {
      title: faker.person.prefix(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };
  },
};
