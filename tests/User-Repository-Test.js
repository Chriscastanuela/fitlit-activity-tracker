const chai = require("chai");
const expect = chai.expect;

let UserRepository = require("../classes/user-repository");

let userData = [
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
    },
    {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    },
    {
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 5000,
      "friends": [
        19,
        11,
        42,
        33
      ]
    },
]

describe.only('user-repository', () => {
    it("should return the object that corresponds to the index we provide the returnData() method", () => {

        let a = new UserRepository(userData);

        expect(a.returnData(1)).to.equal(userData[0])
    })

    it("should return the average of all of the users/' step goals", () => {

        let a = new UserRepository(userData);

        expect(a.avgStepGoalOfAllUsers()).to.equal(6666.666666666666667);
    })
})