class UserSleep {
    constructor(sleepData) {
        this.userSleepData = sleepData;
    }
    getUserAvgHoursSlept() {
        var sum = this.userSleepData.reduce((avg, object) => {

            avg += object.hoursSlept;
            return avg;

        }, 0)

        let average = sum / this.userSleepData.length;

        return average;
    }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
