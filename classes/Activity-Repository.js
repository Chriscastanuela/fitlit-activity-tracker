class ActivityRepository {
    constructor(activityData) {
        this.activityData = activityData;
    }
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
};

module.exports = ActivityRepository;
if (typeof module !== "undefined") {
    module.exports = ActivityRepository;
};

/*

For all users, what is the average number of:
    steps taken for a specific date
    minutes active for a specific date

*/