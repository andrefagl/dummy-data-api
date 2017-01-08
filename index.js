module.exports = function() {
    const faker = require('faker');
    const _ = require('lodash');
    const nCards = 20;
    const nUsers = 10;
    const nPosts = 100;
    const nComments = 500;

    return {
        cards: _.times(nCards, function(n) {
            return {
                id: n+1,
                title: faker.commerce.productName(),
                disclaimer: faker.lorem.sentence(3),
                text: faker.lorem.sentence(40),
                author: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
                imageUrl: faker.image.imageUrl(300,150,"animals"),
            }
        }),
        users: _.times(nUsers, function(n) {
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
        posts: _.times(nPosts, function(n) {
            return {
                id: n+1,
                userId: _.random(1,nUsers),
                title: faker.lorem.sentence(20),
                text: faker.lorem.paragraph(6),
            }
        }),
        comments: _.times(nComments, function(n) {
            return {
                id: n+1,
                postId: _.random(1,nPosts),
                name: faker.name.findName(),
                email: faker.internet.email(),
                text: faker.lorem.sentence(40),
            }
        }),
    }
}
