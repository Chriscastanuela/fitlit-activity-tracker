const chai = require("chai");
const expect = chai.expect;

let ActivityRepository = require("../classes/Activity-Repository");

let activityData = [
    {
    "userID": 1,
    "date": "2019/09/22",
    "numSteps": 10268,
    "minutesActive": 41,
    "flightsOfStairs": 19
    },
    {
    "userID": 2,
    "date": "2019/09/22",
    "numSteps": 14908,
    "minutesActive": 134,
    "flightsOfStairs": 13
    },
    {
    "userID": 3,
    "date": "2019/09/22",
    "numSteps": 10581,
    "minutesActive": 165,
    "flightsOfStairs": 28
    },
    {
    "userID": 1,
    "date": "2019/09/23",
    "numSteps": 2040,
    "minutesActive": 289,
    "flightsOfStairs": 46
    },
    {
    "userID": 2,
    "date": "2019/09/23",
    "numSteps": 12046,
    "minutesActive": 253,
    "flightsOfStairs": 47
    },
    {
    "userID": 3,
    "date": "2019/09/23",
    "numSteps": 10894,
    "minutesActive": 119,
    "flightsOfStairs": 27
    },
    {
    "userID": 1,
    "date": "2019/09/24",
    "numSteps": 11105,
    "minutesActive": 118,
    "flightsOfStairs": 25
    },
    {
    "userID": 2,
    "date": "2019/09/24",
    "numSteps": 6815,
    "minutesActive": 244,
    "flightsOfStairs": 4
    },
    {
    "userID": 3,
    "date": "2019/09/24",
    "numSteps": 2121,
    "minutesActive": 237,
    "flightsOfStairs": 14
    }
];

describe.only('ActivityRepository', () => {

    it('should be a function', function() {
        const a = new ActivityRepository(activityData);
        expect(ActivityRepository).to.be.a('function');
    });

    it('should be an instance of ActivityRepository', function() {
        const a = new ActivityRepository(activityData);
        expect(a).to.be.an.instanceof(ActivityRepository);
    });

    // it("should average a user/'s hydration based on their ID", () => {
        
    //     const a = new HydrationRepository(hydrationData);

    //     expect(a.averageFlOzAllTime(1)).to.equal(1)

    // });
});