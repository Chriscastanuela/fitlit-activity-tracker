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
      "date": "2019/07/15",
      "numOunces": 1
    },
    {
      "userID": 2,
      "date": "2019/07/15",
      "numOunces": 1
    },
    {
      "userID": 3,
      "date": "2019/07/15",
      "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/08/15",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/08/15",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/08/15",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/09/15",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/09/15",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/09/15",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/10/15",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/10/15",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/10/15",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/11/15",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/11/15",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/11/15",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/12/15",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/12/15",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/12/15",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/13/15",
    "numOunces": 1
    },
    {
    "userID": 2,
    "date": "2019/13/15",
    "numOunces": 1
    },
    {
    "userID": 3,
    "date": "2019/13/15",
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

    it("should be able to tell you how many ounces of water each day for the last week", () => {
        
      const a = new HydrationRepository(hydrationData);

      expect(a.lastWeekOfWaterData(userID)).to.equal(/* */)
      
  });
});