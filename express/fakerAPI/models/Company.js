const faker = require('faker');

class Company {
    constructor() {
        const state = faker.address.state(true);
        const zip = faker.address.zipCodeByState(state);
        this.name = faker.company.companyName();
        this._id = faker.datatype.uuid();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: state,
            zipCode: zip
        }

    }
}

module.exports = Company;