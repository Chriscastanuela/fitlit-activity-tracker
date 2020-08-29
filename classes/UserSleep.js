class UserSleep {
    constructor(sleepData) {
      this.userSleepData = sleepData;
    }

    findUserInfo(userId) {
      return this.userSleepData.filter(user => user.userID === id);
    }

    findDay(date,userId) {
      return this.findUserInfo(userId).find(date => user.date === date);
    }

    findUserAvgHoursSlept(userId) {
          let sum = userSleepDataList.reduce((avg, object) => {
              avg += object.hoursSlept;
              return avg;
          }, 0);
          let averageHours = sum / userSleepDataList.length;
          return Math.round(averageHours);
    }
    findfUserAvgSleepQuality(userId) {
      let userSleepDataList = this.userSleepData.filter(sleepObj => {
          return sleepObj.userID == userId;
      });
      let sum = userSleepDataList.reduce((avg, object) => {
          avg += object.sleepQuality;
          return avg;
      }, 0);
      let averageQuality = sum / userSleepDataList.length;
      return Math.round(averageQuality);
  }
    findHoursSlept(userId, date) {
        let userSleepDataList = this.userSleepData.filter(sleepObj => {
            return sleepObj.userID == userId;
        });
        let sleepData = userSleepDataList.find(sleepObj => {
            return sleepObj.date == date;
        });
        return sleepData.hoursSlept;
  }
    findSleepQuality(userId, date) {
      let userSleepDataList = this.userSleepData.filter(sleepObj => {
          return sleepObj.userID == userId;
      });
      let sleepData = userSleepDataList.find(sleepObj => {
        return sleepObj.date == date;
      });
      return sleepData.sleepQuality;
    }
    findlastWeekOfSleepData(userId, date) {
        let userSleepDataList = this.userSleepData.filter(sleepObj => {
          return sleepObj.userID == userId;
        });

        let sortedData = this.userSleepDataList.sort((a, b) =>a - b);

        let lastSeven = sortedData.slice(-7);/**/

         console.log("LastSeven", lastSeven);

         let noId = lastSeven.map(index => {
             let newIndex = {
                 date: index.date,
                 hoursSlept: index.hoursSlept,
             };
             return newIndex;
         });
         console.log(noId);
         return noId;
     };
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
