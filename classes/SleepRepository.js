class SleepRepository {
    constructor(sleepData) {
        this.sleepData = sleepData;
    }
    avgStepGoalOfAllUsers() {
        var sum = this.userObjects.reduce((avg, object) => {

            avg += object.dailyStepGoal;
            return avg;

        }, 0)

        let average = sum / this.userObjects.length;

        return average;
    }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
