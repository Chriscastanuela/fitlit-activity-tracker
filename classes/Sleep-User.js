class SleepUser {
    constructor(sleepData) {
        this.sleepData = sleepData;
    }
    avgSleepHours(userID) {
        let userSleepObjects = sleepData.filter(sleepObject => {
            return sleepObject.userID == userID;
        });
        //
    }
}

module.exports = SleepUser;