const ActivityRepository = require("./Activity-Repository");

class Activity {
    constructor(data) {
        this.data = data;
    };
    averageMinutesActiveForAGivenWeek() {
        let justTheMinutes = this.data.map(oneData => {
            return oneData.minutesActive;
        })
        let lastSeven = justTheMinutes.slice(-7);
        let average = lastSeven.reduce((acc, oneData) => {
            return acc += oneData;
        }, 0)/lastSeven.length;
        console.log(average);
        return average;
        /*
        4. For a user, 
        how many minutes active did they average for a given week (7 days)?
            ???? "Given" week === most recent week?
        */
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