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
    it("should return a single user's data", () => {
      const a = new UserSleep(sleepData);

        expect(a.findUserData(1)).to.deep.equal([{
            "userID": 1,
            "date": "2019/06/09",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/10",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/11",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/12",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/13",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/14",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/15",
            "hoursSlept": 7.5,
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
        }])
    });
    it("should return a user's record for a single date", () => {
      const a = new UserSleep(sleepData);

        expect(a.findDay("2019/06/18", 1)).to.deep.equal({
            "userID": 1,
            "date": "2019/06/18",
            "hoursSlept": 6.0,
            "sleepQuality": 2.2
        })
        expect(a.findDay("2019/06/13", 2)).to.deep.equal({
            "userID": 2,
            "date": "2019/06/13",
            "hoursSlept": 1.1,
            "sleepQuality": 2.2
        })
    });
    it("should return how many hours a user slept for a given date", () => {
      const a = new UserSleep(sleepData);

        expect(a.findDailySleep("2019/06/18", 1)).to.equal(6.0)
        expect(a.findDailySleep("2019/06/13", 2)).to.equal(1.1)
    });
    it("should return the sleep quality a user had for a given date", () => {
      const a = new UserSleep(sleepData);

        expect(a.findDailySleepQuality("2019/06/18", 1)).to.equal(2.2)
        expect(a.findDailySleepQuality("2019/06/13", 2)).to.equal(2.2)
    });
    it("should return seven days of a user's record from a start date", () => {
      const a = new UserSleep(sleepData);

        expect(a.findUserWeeklyData("2019/06/09", "2019/06/15", 1)).to.deep.equal([{
            "userID": 1,
            "date": "2019/06/09",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/10",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/11",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/12",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/13",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/14",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        },
        {
            "userID": 1,
            "date": "2019/06/15",
            "hoursSlept": 7.5,
            "sleepQuality": 2.2
        }])
    });
    it("should return the average hours a user has slept per day", () => {
      const a = new UserSleep(sleepData);

        expect(a.findAvgDailySleep(1)).to.equal(7)
        expect(a.findAvgDailySleep(2)).to.equal(1)
    });
    it("should return the average sleep quality for all days logged", () => {
      const a = new UserSleep(sleepData);

        expect(a.findAvgDailySleepQuality(1)).to.equal(2)
    });
    it("should return the avg hours slept over 7 days", () => {
      const a = new UserSleep(sleepData);

        expect(a.findSevenDayAvgHoursSlept("2019/06/09", "2019/06/15", 1)).to.deep.equal(8)
    });
    it("should return the avg sleep quantity over 7 days", () => {
      const a = new UserSleep(sleepData);

        expect(a.findSevenDayAvgSleepQuality("2019/06/11", "2019/06/18", 1)).to.deep.equal(2)
    });
});
