class UserSleep {
    constructor(userSleepData) {
        this.userSleepData = userSleepData;
    }
    getAvgHoursSlept(userID) {
      let userHoursSlept = this.sleepData.filter(sleepHours => {
        return sleepHours.hoursSlept
      })
      console.log(userHoursSlept);
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
