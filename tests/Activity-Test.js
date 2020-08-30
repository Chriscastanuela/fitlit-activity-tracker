const chai = require("chai");
const expect = chai.expect;

let Activity = require("../classes/Activity");

let activityData = [
    {
    "userID": 1,
    "date": "2019/09/22",
    "numSteps": 2,
    "minutesActive": 2,
    "flightsOfStairs": 19
    },
    {
    "userID": 1,
    "date": "2019/09/23",
    "numSteps": 2040,
    "minutesActive": 289,
    "flightsOfStairs": 46
    },
    {
    "userID": 1,
    "date": "2019/09/24",
    "numSteps": 11105,
    "minutesActive": 118,
    "flightsOfStairs": 25
    }
];

describe('Activity', () => {

    it('1. should be a function', function() {
        const a = new Activity(activityData);
        expect(Activity).to.be.a('function');
    });

    it('2. should be an instance of Activity', function() {
        const a = new Activity(activityData);
        expect(a).to.be.an.instanceof(Activity);
    });

    // it("3. should average all user/'s amount of stairs climbed on a given date", () => {
        
    //     const a = new Activity(activityData);

    //     console.loga.data

    //     expect(a.stairsClimbedOnAGivenDate("2019/09/22")).to.equal(20);
    // });

    it("3. should average all user/'s amount of stairs climbed on a given date", () => {
        
        const a = new Activity(activityData);

        console.loga.data

        expect(a.stairsClimbedOnAGivenDate("2019/09/22")).to.equal(20);
    });
});