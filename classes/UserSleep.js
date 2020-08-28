class UserSleep {
    constructor(sleepData) {
        this.userSleepData = sleepData;
        this.userId = sleepData.id
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
    getHoursSlept(userId, date) {
        let userSleepDataList = this.userSleepData.filter(sleepObj => {
            return sleepObj.userID == userId;
        });
        let sleepData = userSleepDataList.find(sleepObj => {
            return sleepObj.date == date;
        });
        return sleepData.hoursSlept;
  }
    getSleepQuality(userId, date) {
      let userSleepDataList = this.userSleepData.filter(sleepObj => {
          return sleepObj.userID == userId;
      });
      let sleepData = userSleepDataList.find(sleepObj => {
        return sleepObj.date == date;
      });
      console.log(sleepData.id);
      return sleepData.sleepQuality;
    }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
