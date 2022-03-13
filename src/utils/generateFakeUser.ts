import { faker } from '@faker-js/faker'

export const generateFakeUser = (): Omit<
  Dashboard.User,
  'id' | 'name' | 'email'
> => {
  return {
    username: faker.internet.userName(),
    phone: faker.phone.phoneNumber(),
    website: faker.internet.url(),
    company: {
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs()
    },
    address: {
      city: faker.address.city(),
      street: faker.address.streetName(),
      suite: faker.address.direction(),
      geo: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude()
      },
      zipcode: faker.address.zipCode()
    }
  }
}
