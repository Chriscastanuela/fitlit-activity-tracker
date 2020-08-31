class SleepRepository {
    constructor(sleepData, userId) {
        this.sleepData = sleepData;
        this.userId = id;
        this.userSleepRecord = this.findUserSleepData()
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
