class ActivityRepository {
    constructor(activityData) {
        this.activityData = activityData;
    }
    allDataOfOneUser(userID) {
        let userData = this.activityData.filter(oneDataObject => {
            return oneDataObject.userID == userID;
        })
        return userData;
    };
    stairsClimbedOnAGivenDate(date) {
        let stairsClimbed = [];
        this.activityData.forEach(oneData => {
            if (oneData.date == date) {
                stairsClimbed.push(oneData.flightsOfStairs);
            }
        })
        let avgStairsClimbed = stairsClimbed.reduce((acc, oneData) => {
            acc += oneData;
            return acc;
        }, 0)/stairsClimbed.length;
        return avgStairsClimbed;
    };
    allUsersMinutesActiveOnAGivenDate(date) {
        let minutesActive = [];
        this.activityData.forEach(oneData => {
            if (oneData.date == date) {
                minutesActive.push(oneData.minutesActive);
            }
        })
        let avgMinutesActive = minutesActive.reduce((acc, oneData) => {
            acc += oneData;
            return acc;
        }, 0)/minutesActive.length;
        return avgMinutesActive;
    };
};

if (typeof module !== "undefined") {
    module.exports = ActivityRepository;
};