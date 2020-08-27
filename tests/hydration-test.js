const chai = require("chai");
const expect = chai.expect;

let Hydration = require("../classes/Hydration");
let hydrationData = 
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 1
    };

describe.only('Hydration', () => {
    
    it('should be a function', function() {
        const a = new Hydration(hydrationData);
        expect(Hydration).to.be.a('function');
    });

    it('should be an instance of Hydration', function() {
        const a = new Hydration(hydrationData);
        expect(a).to.be.an.instanceof(Hydration);
    });

    it('should have a userID', function() {
        
        const a = new Hydration(hydrationData);
        
        expect(a.userID).to.equal(1);
    });

    it('should have a date', function() {
        
        const a = new Hydration(hydrationData);
        
        expect(a.date).to.equal("2019/06/15");
    });

    it('should have a number of ounces of water for that date', function() {
        
        const a = new Hydration(hydrationData);
        
        expect(a.numOunces).to.equal(1);
    });
});