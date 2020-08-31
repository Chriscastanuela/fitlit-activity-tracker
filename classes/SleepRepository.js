class SleepRepository {
    constructor(sleepData, userId) {
        this.data = sleepData;
        this.userId = userId;
        this.userSleepRecord = this.findUserSleepData()
    }
    findUserSleepData() {
      return this.data.filter(user => user.userID === this.userId)
    }
    findSleepAvg() {
      return Math.floor(this.userSleepRecord.reduce((acc, user) => {
        return acc + user.hoursSlept}, 1) / this.userSleepRecord.length);
    }
    findSleepQualityAvg(){
      return Math.floor(this.userSleepRecord.reduce((acc,user) => {
        return acc + user.sleepQuality}, 1) / this.userSleepRecord.length)
    }
    findTotalSleepQuality() {
        return Math.floor(this.data.reduce((acc, user) => {
          return acc + user.sleepQuality} , 1) / this.data.length)
    }
    findTotalSleepQuantity() {
        return Math.floor(this.data.reduce((acc, user) => {
          return acc + user.hoursSlept} , 1) / this.data.length)
    }
    findMostHoursSlept(date) {
      let datesRecorded = this.data.filter(user => user.date === date)
      let mostSleep = datesRecorded.reduce((acc, user) => {
        if (user.hoursSlept > acc) {
          acc = user.hoursSlept
        }
        return acc
      }, 0)
      return datesRecorded.filter(user =>user.hoursSlept === mostSleep)
      }
    findUsersOverWeek(startDate, endDate) {
      var sevenDays = this.data.filter(day => day.date >= startDate && day.Date <= endDate);

      var sleepQuality = sevenDays.reduce((obj, user) => {
        if(!obj[user.userID]) {
          obj[user.userID] = []
        }
        obj[user.userId].push(user.sleepQuality)
        return obj
      }, {})

      return Object.keys(sleepQuality).map(key => {
        var qualityTotal = sleepQuality[key].reduce((acc, qual) => {
          acc += qual
          return acc
        }, 0)

        var qualAverage = Math.round(acc / qualityTotal.length);


        if (qualAverage > 3) {
          return parseInt(key)
        }
      }).filter(el => el !== undefined)
    }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
