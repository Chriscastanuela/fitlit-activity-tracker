const chai = require("chai");
const expect = chai.expect;

let HydrationRepository = require("../classes/Hydration-Repository");
let hydrationData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 1
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 1
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 1
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 1
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 1
    },
    {
      "userID": 3,
      "date": "2019/06/16",
      "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/17",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/06/17",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/06/17",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/06/18",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/06/18",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/19",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/06/19",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/06/19",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/20",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/06/20",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/06/20",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/21",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/06/21",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/06/21",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/22",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/06/22",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/06/22",
    "numOunces": 1
    },
];

describe.only('HydrationRepository', () => {

    it('should be a function', function() {
        const a = new HydrationRepository(hydrationData);
        expect(HydrationRepository).to.be.a('function');
    });

    it('should be an instance of HydrationRepository', function() {
        const a = new HydrationRepository(hydrationData);
        expect(a).to.be.an.instanceof(HydrationRepository);
    });

    it("should average a user/'s hydration based on their ID", () => {
        
        const a = new HydrationRepository(hydrationData);

        expect(a.averageFlOzAllTime(1)).to.equal(1)

    });
});