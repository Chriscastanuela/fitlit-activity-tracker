const chai = require("chai");
const expect = chai.expect;

let SleepRepository = require("../classes/SleepRepository");
let sleepData = [
    {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/07/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/07/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/07/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/07/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/08/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/08/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/09/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/09/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/10/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/10/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/11/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/11/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/12/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/12/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/13/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/13/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/14/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/14/15",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
];

describe('SleepRepository', () => {
    it('should be a function', function() {
        const a = new SleepRepository(sleepData);
        expect(SleepRepository).to.be.a('function');
    });
    it('should take in a parameter for the sleep data', function() {
        const a = new SleepRepository(sleepData);
        expect(a).to.be.an.instanceof(SleepRepository);
    });
    it('should have a method to', function() {
        const a = new SleepRepository(sleepData);
        expect(a).to.be.an.instanceof(SleepRepository);
    });
});
