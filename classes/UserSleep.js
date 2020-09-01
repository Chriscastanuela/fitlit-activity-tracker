class UserSleep {
    constructor(sleepData) {
      this.userSleepData = sleepData;
    }

    findUserData(userId) {
      return this.userSleepData.filter(user => user.userID === userId);
    }

    findDay(date, userId) {
      return this.findUserData(userId).find(user => user.date === date);
    }

    findDailySleep(date, userId) {
      return this.findDay(date, userId).hoursSlept;
    }

    findDailySleepQuality(date, userId) {
      return this.findDay(date, userId).sleepQuality
    }

    findUserWeeklyData(startDate, endDate, userId) {
      let lastWeekSleepData = this.findUserData(userId).filter(day =>
        day.date >= startDate && day.date <= endDate);
      let newWeeklySleepData = lastWeekSleepData.map(index => {
        let newIndex = {
          date: index.date,
          hoursSlept: index.hoursSlept,
          sleepQuality: index.sleepQuality
        };
        console.log(newIndex);
        return newIndex;
      })
      console.log(newWeeklySleepData);
      return newWeeklySleepData;
    }

    findAvgDailySleep(userId) {
      let sleepRecord = this.findUserData(userId)
      let userSleepRecord= sleepRecord.map(day => day.hoursSlept)
      .reduce((acc, num) => {
        return acc + num
      }, 0);
      let averageHours = userSleepRecord / sleepRecord.length;
      return Math.round(averageHours);
    }

    findAvgDailySleepQuality(userId) {
      let sleepRecord = this.findUserData(userId)
      let userSleepRecord= sleepRecord.map(day => day.sleepQuality)
      .reduce((acc, num) => {
        return acc + num
      }, 0);
      let averageQuality = userSleepRecord / sleepRecord.length;
      return Math.round(averageQuality);
    }

    findSevenDayAvgHoursSlept(startDate, endDate, userId) {
      let sevenDayData = this.findUserData(userId)
      .filter(day => day.date >= startDate && day.date <= endDate)
      let sevenDaysOfSleep = sevenDayData.map(day => day.hoursSlept);
      let averageSleep = sevenDaysOfSleep.reduce((acc, num) => {
        return acc + num;
      },0)
      let result = averageSleep / sevenDayData.length
      return Math.round(result);
  };
    findSevenDayAvgSleepQuality(startDate, endDate, userId) { 
      let sevenDayData = this.findUserData(userId)
      .filter(day => day.date >= startDate && day.date <= endDate)
      let sevenDaysOfSleep = sevenDayData.map(day => day.sleepQuality);
      let averageSleepQual = sevenDaysOfSleep.reduce((acc, num) => {
        return acc + num;
      },0)
      let result = averageSleepQual / sevenDayData.length
      return Math.round(result);
  };
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
