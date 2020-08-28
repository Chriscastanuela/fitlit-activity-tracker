const chai = require("chai");
const expect = chai.expect;

let UserSleep = require("../classes/UserSleep");
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
    it("should return the average hours a user slept per day", () => {
      const a = new UserSleep(userSleepData);

        expect(a.getAvgHoursSlept("2019/06/15")).to.equal(1)
    });
    it("should return the average sleep quality for all days logged", () => {
      const a = new UserSleep(userSleepData);

        expect(a.getAvgHoursSlept("2019/06/15")).to.equal(1)
    });
    it("should return how many hours slept on a given date", () => {
      const a = new UserSleep(userSleepData);

        expect(a.getAvgHoursSlept("2019/06/15")).to.equal(1)
    });
    it("should return sleep quality for a given date", () => {
      const a = new UserSleep(userSleepData);

        expect(a.getAvgHoursSlept("2019/06/15")).to.equal(1)
    });

    it("should return how many hours slept in the last seven days", () => {
      const a = new UserSleep(userSleepData);

        expect(a.getAvgHoursSlept("2019/06/15")).to.equal(1)
    });
});
