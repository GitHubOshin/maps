"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This one is default faker
// import { faker } from "@faker-js/faker"
//
var faker_1 = require("@faker-js/faker");
var User = /** @class */ (function () {
    function User() {
        /* NOTE: When bring the mouse's cursor hover on the `name`.
         * You will see warning...
         * -- 'name' is deprecated.ts(6385)
         * -- (property) Faker.name: PersonModule
         * - @deprecated — Use Faker#person instead
         */
        var oldName = faker_1.fakerFR.name.firstName();
        /* NOTE: When bring the mouse's cursor hover on the `address`.
         * You will see warning...
         * -- 'address' is deprecated.ts(6385)
         * -- (property) Faker.address: LocationModule
         * - @deprecated — Use Faker#location instead
         */
        var oldLatLong = faker_1.fakerFR.address.latitude();
        // So, we use `faker.person` instead of `faker.name`
        this.name = faker_1.fakerFR.person.firstName();
        // And we use `faker.location` instead of `faker.address`
        // Ref: https://fakerjs.dev/api
        //      There are some APIs, for example Person, Location, Color, Phone, Company
        this.location = {
            lat: faker_1.fakerFR.location.latitude(),
            lng: faker_1.fakerFR.location.longitude()
        };
    }
    return User;
}());
// export const users: User[] = Array.from({ length: 20 }, () => {
//   return new User()
// })
var users = [new User(), new User(), new User()];
console.log('users', users);
