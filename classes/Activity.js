const ActivityRepository = require("./Activity-Repository");

class Activity {
    constructor(data) {
        this.data = data;
    };
    averageMinutesActiveForTheLastWeek() {
        let justTheMinutes = this.data.map(oneData => oneData.minutesActive)
        let lastSeven = justTheMinutes.slice(-7);
        let average = lastSeven.reduce((acc, index) => {
            return acc += index;
        }, 0)/7;
        return average;
    }
    averageMinutesActiveForAGivenWeek(startDate, endDate) {
        let sevenDayData = this.data.filter(data => data.date >= startDate && data.date <= endDate);
        let sevenDayMinutes = sevenDayData.map(oneData => oneData.minutesActive);
        let average = sevenDayMinutes.reduce((acc, index) => {
            return acc += index;
        }, 0)/7;
        return average;
    }
};

module.exports = Activity;
if (typeof module !== "undefined") {
    module.exports = Activity;
};
/*
3. For a specific day (specified by a date), 
    return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)
For a user, 
    did they reach their step goal for a given day (specified by a date)?
For a user,
    find all the days where they exceeded their step goal
For a user,
    find their all-time stair climbing record
*/