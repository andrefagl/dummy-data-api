module.exports = function() {
    const faker = require('faker');
    const _ = require('lodash');

    return {
        cards: _.times(20, function(n) {
            return {
                id: n+1,
                title: faker.commerce.productName(),
                text: faker.lorem.sentence(40),
                author: faker.name.findName(),
                avatar_url: faker.image.avatar(),
                image_url: faker.image.imageUrl(300,150,"animals"),
            }
        }),
        users: _.times(10, function(n) {
            return {
                id: n+1,
                name: faker.name.findName(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                address: {
                    street: faker.address.streetName(),
                    suite: faker.address.secondaryAddress(),
                    city: faker.address.city(),
                    zipcode: faker.address.zipCode(),
                    geo: {
                        lat: faker.address.latitude(),
                        lng: faker.address.longitude()
                    }
                },
                phone: faker.phone.phoneNumber(),
                website: faker.internet.url(),
                company: {
                    name: faker.company.companyName(),
                    catchPhrase: faker.company.catchPhrase(),
                    bs: faker.company.bs()
                }
            }
        }),
    }
}
