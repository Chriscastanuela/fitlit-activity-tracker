const chai = require("chai");
const expect = chai.expect;

let Hydration = require("../classes/Hydration");
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
];

describe.only('Hydration', () => {

    it('should be a function', function() {
        const a = new Hydration(hydrationData);
        expect(Hydration).to.be.a('function');
    });

    it('should be an instance of Hydration', function() {
        const a = new Hydration(hydrationData);
        expect(a).to.be.an.instanceof(Hydration);
    });

    it("should average a user/'s hydration based on their ID", () => {
        
        const a = new Hydration(hydrationData);

        expect(a.averageFlOzAllTime(1)).to.equal(1)
        
    });
});