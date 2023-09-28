// This one is default faker
// import { faker } from "@faker-js/faker"
//
import { fakerFR as faker } from '@faker-js/faker'

export class User {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    /* NOTE: When bring the mouse's cursor hover on the `name`.
     * You will see warning...
     * -- 'name' is deprecated.ts(6385)
     * -- (property) Faker.name: PersonModule
     * - @deprecated — Use Faker#person instead
     */
    const oldName = faker.name.firstName()
    /* NOTE: When bring the mouse's cursor hover on the `address`.
     * You will see warning...
     * -- 'address' is deprecated.ts(6385)
     * -- (property) Faker.address: LocationModule
     * - @deprecated — Use Faker#location instead
     */
    const oldLatLong = faker.address.latitude()

    // So, we use `faker.person` instead of `faker.name`
    this.name = faker.person.firstName()

    // And we use `faker.location` instead of `faker.address`
    // Ref: https://fakerjs.dev/api
    //      There are some APIs, for example Person, Location, Color, Phone, Company
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }
}

// export const users: User[] = Array.from({ length: 20 }, () => {
//   return new User()
// })

const users = [new User(), new User(), new User()]

console.log('users', users)
