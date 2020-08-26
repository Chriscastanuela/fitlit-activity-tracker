const chai = require("chai");
const expect = chai.expect;

let User = require("../classes/User");

let userData = 
{
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
    16,
    4,
    8
    ]
};

describe.only('User', () => {

    it('should be a function', function() {
        const a = new User(userData);
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', function() {
        const a = new User(userData);
        expect(a).to.be.an.instanceof(User);
    });
    
    /**/it("should have an id", () => {

        let a = new User(userData);

        expect(a.id).to.equal(userData.id);
    })

    /**/it("should have a name", () => {

        let a = new User(userData);

        expect(a.name).to.equal(userData.name);
    })

    /**/it("should have an address", () => {

        let a = new User(userData);

        expect(a.address).to.equal(userData.address);
    })

    /**/it("should have an email", () => {

        let a = new User(userData);

        expect(a.email).to.equal(userData.email);
    })

    /**/it("should have a strideLength", () => {

        let a = new User(userData);

        expect(a.strideLength).to.equal(userData.strideLength);
    })

    /**/it("should have a dailyStepGoal", () => {

        let a = new User(userData);

        expect(a.dailyStepGoal).to.equal(userData.dailyStepGoal);
    })

    /**/it("should have friends", () => {

        let a = new User(userData);

        expect(a.friends).to.equal(userData.friends);
    })

    // it.skip("should return the average of all of the users/' step goals", () => {

    //     let a = new UserRepository(userData);

    //     expect(a.avgStepGoalOfAllUsers()).to.equal(6666.666666666666667);
    // })
})