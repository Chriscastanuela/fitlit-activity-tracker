class UserSleep {
    constructor(sleepData) {
      this.userSleepData = sleepData;
    }

    findUserData(userId) { //find the user's info
      return this.userSleepData.filter(user => user.userID === userId);
    }

    findDay(date, userId) { //find a date within that user's data
      return this.findUserData(userId).find(user => user.date === date);
    }

    findDailySleep(date, userId) { //find the sleep qty for a user on a day
      return this.findDay(date, userId).hoursSlept;
    }

    findDailySleepQuality(date, userId) {// find daily sleep quality
      return this.findDay(date, userId).sleepQuality
    }

    findUserWeeklyData(startDate, endDate, userId) { // pull weekly sleep data for a user from a date
      return this.findUserData(userId).filter(day =>
        day.date >= startDate && day.date <= endDate);
    }

    findAvgDailySleep(startDate, endDate, userId) { //return a user's avg sleep a night
      let sleepRecord = this.findUserData(userId)
      .reduce((avg, object) => {
          avg += object.hoursSlept;
          console.log(avg);
            return avg;

      }, 0);

      let averageHours = avg / sleepRecord.length;
      return Math.round(averageHours);
    }

    findAvgDailySleepQuality(userId) { //return a user's avg sleep quality
      let sleepRecord = this.findUserData(userId).reduce((avg, object) => {
          avg += object.sleepQuality;
          return avg;
      }, 0);
      let averageQuality = avg / sleepRecord.length;
      return Math.round(averageQuality);
  }

    findSevenDayAvgHoursSlept(startDate, endDate, userId) { //last 7 days you've slept an average of 5 hours a night
      let sevenDayData = this.findUserData(userId).findUserWeeklyData(startId, startDate, endDate);
      let sevenDaysOfSleep = sevenDayData.map(day => day.hoursSlept);
      let averageSleep = sevenDaysOfSleep.reduce((acc, num) => {
        return acc + num;
      },0)
      let result = averageSleep / sevenDayData.length
      return Math.round(result);
  };
    findSevenDayAvgSleepQuality(startDate, endDate, userId) { //last 7 days you've slept well.
      let sevenDayData = this.findUserData(userId).findUserWeeklyData(startId, startDate, endDate);
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
