const chai = require("chai");
const expect = chai.expect;

let SleepUser = require("../classes/Sleep-User");
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

describe.only('SleepUser', () => {
    it('should be a function', function() {
        const a = new SleepUser(sleepData);
        expect(SleepUser).to.be.a('function');
    });
    it('should be an instance of Hydration', function() {
        const a = new SleepUser(sleepData);
        expect(a).to.be.an.instanceof(SleepUser);
    });
});