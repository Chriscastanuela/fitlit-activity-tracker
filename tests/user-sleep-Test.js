const chai = require("chai");
const expect = chai.expect;

let UserSleep = require("../classes/UserSleep");
let sleepData = [
    {
        "userID": 1,
        "date": "2019/06/09",
        "hoursSlept": 7.5,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/06/09",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/06/10",
        "hoursSlept": 7.5,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/06/10",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/06/11",
        "hoursSlept": 7.5,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/06/11",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/06/12",
        "hoursSlept": 7.5,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/06/12",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/06/13",
        "hoursSlept": 7.5,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/06/13",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/06/14",
        "hoursSlept": 7.5,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/06/14",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 7.5,
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
        "date": "2019/06/16",
        "hoursSlept": 6.0,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 2.2
    },
    {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 1.1,
        "sleepQuality": 2.2
    },
    {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 6.0,
        "sleepQuality": 2.3
    },
    {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 6.0,
        "sleepQuality": 2.2
    }
];

describe('UserSleep', () => {

    it('should be a function', function() {
        const a = new UserSleep(sleepData);

        expect(UserSleep).to.be.a('function');
    });
    it('should be an instance of UserSleep', function() {
        const a = new UserSleep(sleepData);

        expect(a).to.be.an.instanceof(UserSleep);
    });
    it.only("should return the average hours a user has slept per day", () => {
      const a = new UserSleep(sleepData);

        expect(a.findAvgDailySleep(1)).to.equal(7)
    });
    it("should return the average sleep quality for all days logged", () => {
      const a = new UserSleep(sleepData);

        expect(a.findUserAvgSleepQuality(1)).to.equal(2)
    });
    it("should return how many hours slept on a given date", () => {
      const a = new UserSleep(sleepData);

        expect(a.findHoursSlept(1, "2019/06/18")).to.equal(6.0)
        expect(a.findHoursSlept(2, "2019/06/15")).to.equal(1.1)
    });
    it("should return sleep quality for a given date", () => {
      const a = new UserSleep(sleepData);

        expect(a.findSleepQuality(1, "2019/06/17")).to.equal(2.3)
    });

    it("should return how many hours slept in the last seven days", () => {
      const a = new UserSleep(sleepData);

        expect(a.findLastWeekOfSleepData(2, "2019/06/17")).to.deep.equal([1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1])
    });
});
