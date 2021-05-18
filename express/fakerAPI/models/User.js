const faker = require("faker")
class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email(this.firstName, this.lastName);
        this.password = faker.internet.password(5, true);
        this._id = faker.datatype.uuid();
    }
}

module.exports = User;