const chai = require("chai");
const expect = chai.expect;

let Hydration = require("../classes/Hydration");
// let hydrationData = [
//     {
//         "userID": 1,
//         "date": "2019/06/15",
//         "numOunces": 1
//     }
// ];
let hydrationData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 1
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 3
    },
    {
    "userID": 1,
    "date": "2019/06/17",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/19",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/20",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/21",
    "numOunces": 1
    },
    {
    "userID": 1,
    "date": "2019/06/22",
    "numOunces": 2
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

    it("should be able to tell you how many ounces of water a user had on a given date", () => {
        
        const a = new Hydration(hydrationData);

        expect(a.flOzOnAGivenDay("2019/06/15")).to.equal(1)
        
    });
    
    it("should be able to tell you how many ounces of water each day for the last week", () => {
        
        const a = new Hydration(hydrationData);
  
        expect(a.lastWeekOfWaterData()).to.deep.equal([3, 1, 1, 1, 1, 1, 2]); 
    });
});