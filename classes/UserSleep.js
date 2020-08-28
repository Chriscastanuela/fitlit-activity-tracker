class UserSleep {
    constructor(sleepData) {
        this.userSleepData = sleepData;
    }
    getUserAvgHoursSlept(userId) {
          let userSleepDataList = this.userSleepData.filter(sleepObj => {
              return sleepObj.userID == userId;
          });
          let sum = userSleepDataList.reduce((avg, object) => {
              avg += object.hoursSlept;
              return avg;
          }, 0);
          let averageHours = sum / userSleepDataList.length;
          return averageHours;
    }
    getUserAvgSleepQuality(userId) {
      let userSleepDataList = this.userSleepData.filter(sleepObj => {
          return sleepObj.userID == userId;
      });
      let sum = userSleepDataList.reduce((avg, object) => {
          avg += object.sleepQuality;
          return avg;
      }, 0);
      let averageQuality = sum / userSleepDataList.length;
      return averageQuality;
  }
  getHoursSlept(date) {
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
