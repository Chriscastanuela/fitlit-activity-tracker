class SleepRepository {
    constructor(sleepData, userId) {
        this.data = sleepData;
        this.userId = userId;
        this.userSleepRecord = this.findUserSleepData()
    }
    findUserSleepData(){
      return this.data.filter(user => user.userID === this.userId)
    }
    getTotalSleepQuality() {
        var sum = this.sleepData.reduce((avg, object) => {

            avg += object.sleepQuality;
            return avg;

        }, 0)

        let average = sum / this.sleepData.length;

        return Math.round(average);
    }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
