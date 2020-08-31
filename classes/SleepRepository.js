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
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
