class SleepRepository {
    constructor(sleepData) {
        this.sleepData = sleepData;
    }
    getAvgHoursSlept(userID) {
      let userHoursSlept = this.sleepData.filter(sleepHours => {
        return sleepHours.hoursSlept
      })
    }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
