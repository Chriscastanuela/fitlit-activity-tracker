const chai = require("chai");
const expect = chai.expect;

let Hydration = require("../classes/Hydration");
let hydrationData = [
    {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 1
    }
];

describe('Hydration', () => {

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
});
