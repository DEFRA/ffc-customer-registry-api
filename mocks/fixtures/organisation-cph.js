import { faker } from '@faker-js/faker/locale/en_GB'

export const organisationCPH = {
  cphNumber: faker.string.alphanumeric(),
  parcelNumbers: [
      faker.string.alphanumeric(),
      faker.string.alphanumeric(),
      faker.string.alphanumeric(),
  ],
}

export const organisationCPHInfo = {
  cphNumber: faker.string.alphanumeric(),
  parish: faker.string.alphanumeric(),
  startDate: faker.date.anytime().getDate(),
  expiryDate: faker.date.anytime().getDate(),
  species: [
    faker.string.alphanumeric().toUpperCase(),
  ],
  xCoordinate: faker.number.int({ max: 121000, min: 216000}),
  yCoordinate: faker.number.int({ max: 621000, min: 236000})
}
