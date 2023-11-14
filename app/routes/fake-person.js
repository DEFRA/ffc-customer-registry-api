import { faker } from '@faker-js/faker/locale/en_GB'

export const fakePersonRoute = {
  method: 'GET',
  path: '/fake-person',
  handler: (request, h) => {
    if (request.state.seed) {
      console.log('>>> /fake-person 🍪')
      faker.seed(Number(request.state.seed))
    } else {
      console.log('>>> /fake-person 🚫')
      h.state('seed', faker.seed().toString())
    }

    return {
      _data: {
        title: faker.person.prefix(),
        otherTitle: null,
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        dateOfBirth: faker.date.birthdate(),
        landline: null,
        mobile: faker.string.numeric(10),
        email: faker.internet.email(),
        doNotContact: false,
        emailValidated: false
      }
    }
  }
}
